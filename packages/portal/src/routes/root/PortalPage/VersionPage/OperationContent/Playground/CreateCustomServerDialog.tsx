/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ChangeEvent, FC } from 'react'
import * as React from 'react'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  ListItem,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import type { ControllerFieldState, ControllerRenderProps } from 'react-hook-form/dist/types/controller'
import type { UseFormStateReturn } from 'react-hook-form/dist/types'
import { usePackage } from '../../../../usePackage'
import { useAgents } from './useAgents'
import { useNamespaces } from './useNamespaces'
import { useCustomServersPackageMap } from './useCustomServersPackageMap'
import { useParams } from 'react-router-dom'
import { useServiceNames } from './useServiceNames'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { SHOW_CREATE_CUSTOM_SERVER_DIALOG } from '@apihub/routes/EventBusProvider'
import type { Namespace } from '@netcracker/qubership-apihub-ui-shared/entities/namespaces'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'
import { isServiceNameExistInNamespace } from '@netcracker/qubership-apihub-ui-shared/entities/service-names'
import CloseIcon from '@mui/icons-material/Close'
import { useShowSuccessNotification } from '@apihub/routes/root/BasePage/Notification'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { debounce } from 'lodash'
import type { PackageKind } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { PACKAGE_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'


const CLOUD_KEY = 'cloudKey'
const NAMESPACE_KEY = 'namespaceKey'
const SERVICE_KEY = 'serviceKey'
const CUSTOM_SERVER_URL_KEY = 'customServerUrl'
const DESCRIPTION_KEY = 'description'

const MODE_CUSTOM = 'custom' as const
const MODE_PROXY = 'proxy' as const

type ModeType = typeof MODE_CUSTOM | typeof MODE_PROXY

type CreateCustomServerForm = {
  [CLOUD_KEY]?: Key
  [NAMESPACE_KEY]?: Key
  [SERVICE_KEY]?: Key
  [CUSTOM_SERVER_URL_KEY]?: Key
  [DESCRIPTION_KEY]?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useUrlPathWarning(url: string, delay = 700): boolean {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (!url) return setShowWarning(false)

    // const timeout = setTimeout(() => {
    const checkPath = debounce(() => {
      try {
        const parsed = new URL(url)
        const isRootPath = parsed.pathname === '/' || parsed.pathname === ''
        setShowWarning(isRootPath)
      } catch {
        setShowWarning(false)
      }
    }, delay)

  //   return () => clearTimeout(checkPath)
  // }, 
  checkPath()
  return () => {
      checkPath.cancel()
    }
  },
  [delay, url])

  return showWarning
}

export const CreateCustomServerDialog: FC = memo(() => {
  return (
    <PopupDelegate
      type={SHOW_CREATE_CUSTOM_SERVER_DIALOG}
      render={props => <CreateCustomServerPopup {...props} />}
    />
  )
})

type ControllerRenderFunctionProps<FieldName extends keyof CreateCustomServerForm> = {
  field: ControllerRenderProps<CreateCustomServerForm, FieldName>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<CreateCustomServerForm>
}

const CreateCustomServerPopup: FC<PopupProps> = memo<PopupProps>(({ open, setOpen }) => {
  const { packageId = '' } = useParams()
  const [packageObj] = usePackage()
  const serviceName = packageObj?.serviceName
  const isServiceNameExist = !!serviceName

  // States for selections
  const [selectedCloud, setSelectedCloud] = useState<string>('')
  const [selectedNamespace, setSelectedNamespace] = useState<Namespace | null>(null)
  const [selectedService] = useState<string | null>(serviceName ?? '')
  const [selectedAgent, setSelectedAgent] = useState<string | undefined>()
  const [selectedCustomUrl, setSelectedCustomUrl] = useState<string>('')
  const [mode, setMode] = useState<ModeType>(MODE_CUSTOM)
  const [serverUrlError, setServerUrlError] = useState<string | null>(null)
  const [serverUrlWarning, setServerUrlWarning] = useState<string | null>(null)
  const [urlInput, setUrlInput] = useState('')


  // Load data for connected fields
  const [agents] = useAgents()
  const cloudAgentIdMap = useMemo(
    () => new Map(agents.map(({ agentId, agentDeploymentCloud }) => [agentDeploymentCloud, agentId])),
    [agents],
  )
  useEffect(
    () => { selectedCloud && cloudAgentIdMap.has(selectedCloud) && setSelectedAgent(cloudAgentIdMap.get(selectedCloud) ?? '') },
    [cloudAgentIdMap, selectedCloud],
  )
  const [namespaces] = useNamespaces(selectedAgent!)
  const [serviceNames] = useServiceNames(selectedAgent!, selectedNamespace?.namespaceKey)

  // Derive cloud options from useAgents hook directly
  const cloud = useMemo(() => {
    const uniqueClouds = Array.from(new Set(agents.map(agent => agent.agentDeploymentCloud).filter(Boolean)))
    return uniqueClouds as string[]
  }, [agents])

  const baseUrl = window.location.origin

  // Corrected generatedUrl to access namespaceKey safely
  const generatedUrl = `${baseUrl}/apihub-nc/agents/${selectedCloud}/namespaces/${selectedNamespace?.namespaceKey}/services/${selectedService}/proxy`

  // Form initializing
  const defaultFormData = useMemo<CreateCustomServerForm>(() => ({
    cloudKey: '',
    namespaceKey: '',
    serviceKey: serviceName ?? '',
    customServerUrl: '',
  }), [serviceName])
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
  } = useForm<CreateCustomServerForm>({ defaultValues: defaultFormData })
  const { cloudKey, namespaceKey } = getValues()

  const isUrlGenerationAvailable = isServiceNameExist && selectedAgent && selectedNamespace

  useEffect(
    () => { isUrlGenerationAvailable && setSelectedCustomUrl(`/apihub-nc/agents/${selectedAgent}/namespaces/${namespaceKey}/services/${selectedService}/proxy/`) },
    [isUrlGenerationAvailable, namespaceKey, selectedAgent, selectedNamespace, selectedService],
  )

  const isServiceNameValid = useMemo(
    () => isServiceNameExistInNamespace(serviceNames, serviceName, selectedCloud, selectedNamespace?.namespaceKey),
    [selectedCloud, selectedNamespace?.namespaceKey, serviceName, serviceNames],
  )


  const showPathWarning = useUrlPathWarning(urlInput)

  const updateSelectedCustomUrl = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setUrlInput(value)
    setSelectedCustomUrl(value)
    setServerUrlError(null)
    setServerUrlWarning(null)

    if (!isAbsoluteUrl(value)) {
      setServerUrlError('The value must be an absolute URL')
      return
    }

    setSelectedNamespace(null)
    setSelectedCloud('')
  }, [])

  // Storing data in local storage
  const [customServersPackageMap, setCustomServersPackageMap] = useCustomServersPackageMap()

  const server = useMemo(() => ({
    url: selectedCustomUrl ?? '',
    description: cloudKey ? `Proxy via agent ${selectedAgent} to ${selectedNamespace?.namespaceKey}` : '',
  }), [cloudKey, selectedAgent, selectedCustomUrl, selectedNamespace?.namespaceKey])

  const showSuccessNotification = useShowSuccessNotification()

  const onAddCustomServer = useCallback(() => {

    const url = server?.url
    if (serverUrlError || !isServiceNameValid || !url) return

    const caption = server?.description?.trim() || '-'
    const newServer = {
      url: url,
      description: caption,
      custom: true,
      shouldUseProxyEndpoint: mode === 'proxy', // Set based on the selected mode
    }

    const servers = [...(customServersPackageMap?.[packageId] ?? []), newServer]
    setCustomServersPackageMap(packageId, servers)

    setSelectedCustomUrl(server.url)

    // Store in localStorage for Playground to pick up
    const currentLocalServers = JSON.parse(localStorage.getItem('apihub_custom_servers') || '[]') as typeof servers
    const updatedLocalServers = [...currentLocalServers, newServer]
    localStorage.setItem('apihub_custom_servers', JSON.stringify(updatedLocalServers))


    showSuccessNotification?.({
      title: 'Success',
      message: 'Server has been added',
    })
    setTimeout(() => setOpen(false), 50)

  }, [isServiceNameValid, showSuccessNotification, serverUrlError, setCustomServersPackageMap, packageId, customServersPackageMap, server, setOpen, setSelectedCustomUrl, mode])


  // Rendering functions
  const renderSelectCloud = useCallback(({ field }: ControllerRenderFunctionProps<typeof CLOUD_KEY>) => (
    <Autocomplete
      key="cloudAutocomplete"
      options={cloud}
      value={selectedCloud}
      renderOption={(props, cloud) => (
        <ListItem {...props}
          key={typeof cloud === 'string' ? cloud : crypto.randomUUID()}>
          {cloud}
        </ListItem>
      )}
      isOptionEqualToValue={(option, value) => option === value}
      renderInput={(params) => (
        <TextField {...field} {...params}
          label="Cloud"
          required

        />
      )}
      onChange={(_, value) => {
        setValue(CLOUD_KEY, value ?? '', { shouldValidate: true })
        setSelectedCloud(value ?? '')
        setSelectedNamespace(null)
        setSelectedCustomUrl('')
      }}
      data-testid="CloudAutocomplete"
    />
  ), [cloud, selectedCloud, setValue])

  const renderSelectNamespace = useCallback((
    { field }: ControllerRenderFunctionProps<typeof NAMESPACE_KEY>) => (
    <Autocomplete
      key="namespaceAutocomplete"
      options={namespaces}
      getOptionLabel={({ namespaceKey }: Namespace) => namespaceKey}
      value={selectedNamespace}
      renderOption={(props, { namespaceKey }) => (
        <ListItem {...props} key={crypto.randomUUID()}>
          {namespaceKey}
        </ListItem>
      )}
      renderInput={(params) => (
        <TextField
          {...field}
          {...params}

          label={
            <span>
              Namespace<span style={{ color: 'red' }}>&nbsp;*</span>
            </span>
          }
          error={!isServiceNameValid}
          helperText={!isServiceNameValid && `Service with ${serviceName} not found in selected namespace`}
        />
      )}
      onChange={(_, value) => {
        setValue(NAMESPACE_KEY, value?.namespaceKey ?? '')
        setSelectedNamespace(value)
        setSelectedCustomUrl('')
      }}
      data-testid="NamespaceAutocomplete"
    />
  ), [isServiceNameValid, namespaces, selectedNamespace, serviceName, setValue])

  const renderSelectService = useCallback((
    { field }: ControllerRenderFunctionProps<typeof SERVICE_KEY>) => (
    <Autocomplete
      disabled={true}
      key="serviceAutocomplete"
      options={[serviceName]}
      value={selectedService}
      renderOption={(props, serviceName) => (
        <ListItem {...props} key={crypto.randomUUID()}>
          {serviceName}
        </ListItem>
      )}
      renderInput={(params) => (
        <TextField {...field} {...params} label="Service*" />
      )}
      data-testid="ServiceAutocomplete"
    />
  ),
    [selectedService, serviceName],
  )

  const renderSelectUrl = useCallback((
    { field, fieldState }: ControllerRenderFunctionProps<typeof CUSTOM_SERVER_URL_KEY>) => (
    <TextField
      {...field}
      value={selectedCustomUrl ?? ''}
      onChange={updateSelectedCustomUrl}
      required
      label="Server URL"

      error={!!fieldState.error || !!serverUrlError}
      helperText={serverUrlError || serverUrlWarning || fieldState.error?.message}
      fullWidth
      data-testid="ServerUrlTextInput"
    />
  ),
    [selectedCustomUrl, updateSelectedCustomUrl, serverUrlError, serverUrlWarning],
  )

  const renderDescriptionInput = useCallback((
    { field }: ControllerRenderFunctionProps<typeof DESCRIPTION_KEY>) => (
    <TextField
      {...field}
      label="Description"
      value={field.value ?? ''}
      onChange={field.onChange}
      fullWidth
      data-testid="ServerDescriptionInput"
    />
  ), [])

  const isAbsoluteUrl = (url: string): boolean => {
    try {
      const parsed = new URL(url)
      return parsed.protocol === 'http:' || parsed.protocol === 'https:'
    } catch {
      return false
    }
  }

  const hasPath = (url: string): boolean => {
    try {
      const { pathname } = new URL(url)
      return pathname !== '' && pathname !== '/' 
    } catch {
      return false
    }
  }

const kind = packageObj?.kind as PackageKind | undefined
const kindLabel = kind ?? PACKAGE_KIND
  return (
    <DialogForm
      open={open}
      onClose={() => setOpen(false)}
      onSubmit={handleSubmit(onAddCustomServer)}
    >

      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          Add Custom Server
          {!isServiceNameExist && (
            <Tooltip
              title={`Only adding a custom server is available. To use the Agent proxy, specify the service name for the current ${kindLabel}.`}
              placement="right"
            >
              <IconButton size="small" aria-label="info" sx={{ p: '0 4px' }}>
                <InfoOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        <IconButton
          onClick={() => setOpen(false)}
          size="small"
          data-testid="CloseButton"
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {isServiceNameExist && (
          <FormControl component="fieldset">
            <RadioGroup
              value={mode}
              onChange={(e) => setMode(e.target.value as 'custom' | 'proxy')}
            >
              <FormControlLabel value="custom" control={<Radio />} label="Add Custom Server URL" />
              <FormControlLabel value="proxy" control={<Radio />} label="Use Agent Proxy" />
            </RadioGroup>
          </FormControl>
        )}

        {(!isServiceNameExist || mode === 'proxy' && (
          <>
            <Typography>Server URL:</Typography>

            {generatedUrl ? (
              <Typography variant="body2" >{generatedUrl}</Typography>) : (
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {`https://${baseUrl}/apihub-nc/agents/${selectedCloud}/namespaces/${selectedNamespace?.namespaceKey}/services/${selectedService}/proxy`}
              </Typography>
            )}
            <Controller
              name={CLOUD_KEY}
              control={control}
              render={renderSelectCloud}
            />
            <Controller
              name={NAMESPACE_KEY}
              control={control}
              render={renderSelectNamespace}
            />
            <Controller
              name={SERVICE_KEY}
              control={control}
              render={renderSelectService}
            />
          </>
        ))}
        {(!isServiceNameExist || mode === 'custom') && (
          <Controller
            name={CUSTOM_SERVER_URL_KEY}
            control={control}
            render={renderSelectUrl}

          />
        )}
        <Controller
          name={DESCRIPTION_KEY}
          control={control}
          render={renderDescriptionInput}
        />

        {showPathWarning && <Alert severity="warning"
         sx={{ 
          mt: 2,
            backgroundColor: '#ffffff', // White background
            alignItems: 'flex-start',
            '& .MuiAlert-icon': {
              mt: '2px',
            },
            '& .MuiAlert-message': {
              fontSize: '14px',
              lineHeight: '20px',
            },

         }}
        >
          Servers specified directly in the OpenAPI specification contain a path to a specific resource.
          Make sure the URL you enter is correct and does not contain an additional path (e.g. <code>/api/v1</code>).
        </Alert>
        }
      </DialogContent>

      <DialogActions>
        <Button variant="contained" type="submit" data-testid="AddButton" >
          Add
        </Button>
        <Button variant="outlined" onClick={() => setOpen(false)} data-testid="CancelButton">
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})
