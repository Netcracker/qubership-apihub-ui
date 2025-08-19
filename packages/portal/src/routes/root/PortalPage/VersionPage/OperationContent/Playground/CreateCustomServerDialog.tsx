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

import type { FC } from 'react'
import * as React from 'react'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import {
  Alert,
  Autocomplete,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputAdornment,
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
import { type PlaygroundServer, useCustomServersPackageMap } from './useCustomServersPackageMap'
import { generatePath, useParams } from 'react-router-dom'
import { useServiceNames } from './useServiceNames'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { SHOW_CREATE_CUSTOM_SERVER_DIALOG } from '@apihub/routes/EventBusProvider'
import type { Namespace } from '@netcracker/qubership-apihub-ui-shared/entities/namespaces'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'
import { isServiceNameExistInNamespace } from '@netcracker/qubership-apihub-ui-shared/entities/service-names'
import { useShowSuccessNotification } from '@apihub/routes/root/BasePage/Notification'
import { ErrorIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ErrorIcon'
import { InfoContextIcon } from '@netcracker/qubership-apihub-ui-shared/icons/InfoContextIcon'
import { PACKAGE_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { usePathWarning } from '@apihub/routes/root/PortalPage/VersionPage/OperationContent/Playground/usePathWarning'
import { DEFAULT_API_TYPE } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { useOperation } from '@apihub/routes/root/PortalPage/VersionPage/useOperation'
import { useOperationInfo } from './hooks/useSpecServers'
import {
  isAbsoluteUrl,
  useCombinedServers,
  useProcessedCustomServers,
  useProcessedSpecServers,
} from './hooks/useServerProcessing'
import type { ServerObject } from 'openapi3-ts'

const CLOUD_KEY = 'cloudKey'
const NAMESPACE_KEY = 'namespaceKey'
const SERVICE_KEY = 'serviceKey'
const CUSTOM_SERVER_URL_KEY = 'customServerUrl'
const DESCRIPTION_KEY = 'description'

const MODE_MANUAL = 'manual' as const
const MODE_AGENT = 'agent' as const

type ModeType = typeof MODE_MANUAL | typeof MODE_AGENT

type CreateCustomServerForm = {
  [CLOUD_KEY]?: Key
  [NAMESPACE_KEY]?: Key
  [SERVICE_KEY]?: Key
  [CUSTOM_SERVER_URL_KEY]?: Key
  [DESCRIPTION_KEY]?: string
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

const AGENT_PROXY_URL_TEMPLATE = ':baseUrl/apihub-nc/agents/:cloud/namespaces/:namespace/services/:service/proxy'
const buildAgentProxyUrl = (baseUrl: string, cloud: string, namespace: string, service: string): string => {
  return generatePath(AGENT_PROXY_URL_TEMPLATE, {
    baseUrl,
    cloud,
    namespace,
    service,
  })
}

const isUrlAlreadyExist = (servers: ServerObject[], url: string | undefined): boolean => {
  if (!url) return true
  return servers.some(server => server.url === url.toLowerCase())
}

const CreateCustomServerPopup: FC<PopupProps> = memo<PopupProps>(({ open, setOpen }) => {
  const { packageId = '', versionId, apiType = DEFAULT_API_TYPE, operationId: operationKey } = useParams()
  const [packageObj] = usePackage()
  const serviceName = packageObj?.serviceName
  const isServiceNameExist = !!serviceName

  // Get operation
  const { data: operationData } = useOperation({
    packageKey: packageId,
    versionKey: versionId,
    operationKey: operationKey,
    apiType: apiType as ApiType,
  })

  const operationInfo = useOperationInfo(operationData?.data)
  console.log('OPERATION_INFO:', operationInfo)
  // console.log('data:', operationData)

  // States for selections
  const [mode, setMode] = useState<ModeType>(MODE_MANUAL)
  const [agentProxyUrl, setAgentProxyUrl] = useState<string>('')
  const [selectedCloud, setSelectedCloud] = useState<string>('')
  const [selectedNamespace, setSelectedNamespace] = useState<Namespace | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<string>('')

  //  Load data for connected fields
  const [agents] = useAgents()
  const clouds = useMemo(() => agents?.map(({ agentDeploymentCloud }) => agentDeploymentCloud), [agents])
  const cloudAgentIdMap = useMemo(
    () => new Map(agents.map(({ agentId, agentDeploymentCloud }) => [agentDeploymentCloud, agentId])),
    [agents],
  )
  useEffect(
    () => {
      selectedCloud && cloudAgentIdMap.has(selectedCloud) && setSelectedAgent(cloudAgentIdMap.get(selectedCloud) ?? '')
      !selectedCloud && setSelectedAgent('')
    },
    [cloudAgentIdMap, selectedCloud],
  )
  const [namespaces] = useNamespaces(selectedAgent!)
  const [serviceNames] = useServiceNames(selectedAgent!, selectedNamespace?.namespaceKey)

  // Form initializing
  const defaultFormData = useMemo<CreateCustomServerForm>(() => ({
    customServerUrl: '',
    description: '',
    cloudKey: '',
    namespaceKey: '',
    serviceKey: serviceName ?? '',
  }), [serviceName])
  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
    watch,
  } = useForm<CreateCustomServerForm>({
    defaultValues: defaultFormData,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const customServerUrl = watch(CUSTOM_SERVER_URL_KEY)

  const baseUrl = window.location.origin

  useEffect(
    () => {
      isServiceNameExist && setAgentProxyUrl(
        buildAgentProxyUrl(
          baseUrl,
          selectedAgent || '<cloud>',
          selectedNamespace?.namespaceKey ?? '<namespace>',
          serviceName,
        ),
      )
    },
    [baseUrl, isServiceNameExist, selectedAgent, selectedNamespace?.namespaceKey, serviceName],
  )

  const isServiceNameValid = useMemo(
    () => isServiceNameExistInNamespace(serviceNames, serviceName, selectedCloud, selectedNamespace?.namespaceKey),
    [selectedCloud, selectedNamespace?.namespaceKey, serviceName, serviceNames],
  )

  // Storing data in local storage
  const [customServersPackageMap, setCustomServersPackageMap] = useCustomServersPackageMap()

  // Servers
  const processedSpecServers = useProcessedSpecServers(operationInfo?.servers)
  const processedCustomServers = useProcessedCustomServers(customServersPackageMap?.[packageId])
  const servers = useCombinedServers(processedSpecServers, processedCustomServers)

  // Add server
  const showSuccessNotification = useShowSuccessNotification()

  const addCustomServer = useCallback((formData: CreateCustomServerForm) => {
    if (!isServiceNameValid) {
      return
    }

    if (mode === MODE_AGENT && isUrlAlreadyExist(servers, agentProxyUrl)) {
      console.log('Server URL with the same cloud, namespace, and service already exists')
      return
    }

    const newServer: PlaygroundServer = {
      url: mode === MODE_MANUAL ? formData[CUSTOM_SERVER_URL_KEY]! : agentProxyUrl,
      description: formData[DESCRIPTION_KEY] ?? '',
      shouldUseProxyEndpoint: !formData[CLOUD_KEY],
    }

    setCustomServersPackageMap(packageId, [...customServersPackageMap?.[packageId] ?? [], newServer])
    showSuccessNotification?.({
      title: 'Success',
      message: 'Server has been added',
    })
    setOpen(false)
  }, [
    isServiceNameValid,
    mode,
    servers,
    agentProxyUrl,
    setCustomServersPackageMap,
    packageId,
    customServersPackageMap,
    showSuccessNotification,
    setOpen,
  ])

  console.log('SERVERS:', servers)

  // Rendering functions
  const renderSelectUrl = useCallback((
    { field, fieldState }: ControllerRenderFunctionProps<typeof CUSTOM_SERVER_URL_KEY>,
  ) => (
    <TextField
      {...field}
      required
      inputProps={{ required: false }} // disables the browser native "please fill out this field" prompt
      label="Server URL"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      onChange={(event) => {
        field.onChange(event)
        clearErrors(field.name)
      }}
      InputProps={{
        endAdornment: !!fieldState.error && (
          <InputAdornment position="end">
            <ErrorIcon fontSize="small" color="error" />
          </InputAdornment>
        ),
      }}
      data-testid="ServerUrlTextField"
    />
  ), [clearErrors])

  const renderDescriptionInput = useCallback(
    ({ field }: ControllerRenderFunctionProps<typeof DESCRIPTION_KEY>) => (
      <TextField
        {...field}
        label="Description"
        data-testid="DescriptionTextField"
      />
    ),
    [],
  )

  const renderSelectCloud = useCallback(({ field }: ControllerRenderFunctionProps<typeof CLOUD_KEY>) => (
    <Autocomplete
      key="cloudAutocomplete"
      options={clouds}
      value={selectedCloud}
      renderOption={(props, cloud) => (
        <ListItem {...props} key={cloud}>
          {cloud}
        </ListItem>
      )}
      isOptionEqualToValue={(option, value) => option === value}
      renderInput={(params) => <TextField {...field} {...params} required label="Cloud" />}
      onChange={(_, value) => {
        setValue(CLOUD_KEY, value ?? '')
        setSelectedCloud(value ?? '')
        setSelectedNamespace(null)
      }}
      data-testid="CloudAutocomplete"
    />
  ), [clouds, selectedCloud, setValue, setSelectedCloud, setSelectedNamespace])

  const renderSelectNamespace = useCallback((
    { field }: ControllerRenderFunctionProps<typeof NAMESPACE_KEY>,
  ) => (
    <Autocomplete
      key="namespaceAutocomplete"
      disabled={!selectedCloud}
      options={namespaces}
      getOptionLabel={({ namespaceKey }: Namespace) => namespaceKey}
      value={selectedNamespace}
      renderOption={(props, { namespaceKey }) => (
        <ListItem {...props} key={namespaceKey}>
          {namespaceKey}
        </ListItem>
      )}
      renderInput={(params) => (
        <TextField
          {...field}
          {...params}
          required
          label="Namespace"
          error={!isServiceNameValid}
          helperText={!isServiceNameValid && `Service ${serviceName} not found in selected namespace`}
        />
      )}
      onChange={(_, value) => {
        setValue(NAMESPACE_KEY, value?.namespaceKey ?? '')
        setSelectedNamespace(value)
      }}
      data-testid="NamespaceAutocomplete"
    />
  ), [isServiceNameValid, namespaces, selectedCloud, selectedNamespace, serviceName, setValue])

  const renderSelectService = useCallback((
    { field }: ControllerRenderFunctionProps<typeof SERVICE_KEY>,
  ) => (
    <TextField
      {...field}
      disabled
      // inputProps={{readOnly: true}}
      required
      label="Service"
      data-testid="ServerUrlTextField"
    />
  ), [])

  const packageKind = packageObj?.kind || PACKAGE_KIND

  const showPathWarning = usePathWarning(customServerUrl)

  return (
    <DialogForm
      open={open}
      onClose={() => setOpen(false)}
      onSubmit={handleSubmit(addCustomServer)}
    >
      <DialogTitle display="flex" gap={1} alignItems="center">
        <>
          Add Custom Server
          {!isServiceNameExist && (
            <Tooltip
              title={`Only adding a custom server is available. To use the Agent proxy, specify the service name for the current ${packageKind}`}
              placement="right"
            >
              <InfoContextIcon fontSize="extra-small" color="action" />
            </Tooltip>
          )}
        </>
      </DialogTitle>

      <DialogContent>
        {isServiceNameExist && (
          <FormControl component="fieldset">
            <RadioGroup
              value={mode}
              onChange={(event) => setMode(event.target.value as ModeType)}
            >
              <FormControlLabel value={MODE_MANUAL} control={<Radio size="small" />} label="Add Custom Server URL" />
              <FormControlLabel value={MODE_AGENT} control={<Radio />} label="Use Agent Proxy" />
            </RadioGroup>
          </FormControl>
        )}

        {mode === MODE_AGENT && (
          <>
            <Typography variant="subtitle2">Server URL:</Typography>
            <Typography variant="body2">{agentProxyUrl}</Typography>
            {/*<TextField*/}
            {/*  multiline*/}
            {/*  label="Server URL"*/}
            {/*  value={agentProxyUrl}*/}
            {/*  inputProps={{ readOnly: true }}*/}
            {/*/>*/}
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
        )}

        {mode === MODE_MANUAL && (
          <Controller
            name={CUSTOM_SERVER_URL_KEY}
            rules={{
              required: 'The field must be filled',
              validate: url => {
                if (!isAbsoluteUrl(url)) {
                  return 'The value must be an absolute URL'
                }
                if (mode === MODE_MANUAL && isUrlAlreadyExist(servers, url)) {
                  return 'Server URL already exists'
                }
                return true
              },
            }}
            control={control}
            render={renderSelectUrl}
          />
        )}

        <Controller
          name={DESCRIPTION_KEY}
          control={control}
          render={renderDescriptionInput}
        />

        {mode === MODE_MANUAL && showPathWarning && (
          <Alert
            severity="warning"
            sx={{
              p: 0,
              color: 'black',
              backgroundColor: '#ffffff', // White background
              alignItems: 'flex-start',
              '& .MuiAlert-icon': {
                mt: '2px',
              },
              '& .MuiAlert-message': {
                fontSize: '12px',
                lineHeight: '16px',
              },
            }}
          >
            Servers specified directly in the OpenAPI specification contain a path to a specific resource. Make sure the
            URL you enter is correct and does not contain an additional path (e.g. /api/v1).
          </Alert>
        )}
      </DialogContent>

      <DialogActions>
        <Button variant="contained" type="submit" data-testid="AddButton">
          Add
        </Button>
        <Button variant="outlined" onClick={() => setOpen(false)} data-testid="CancelButton">
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})
