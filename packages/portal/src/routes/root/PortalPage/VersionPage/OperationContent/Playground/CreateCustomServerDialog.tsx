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
import { LoadingButton } from '@mui/lab'
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
import { DeleteIcon } from '@netcracker/qubership-apihub-ui-shared/icons/DeleteIcon'
import axios from 'axios'

const CLOUD_KEY = 'cloudKey'
const NAMESPACE_KEY = 'namespaceKey'
const SERVICE_KEY = 'serviceKey'
const CUSTOM_SERVER_URL_KEY = 'customServerUrl'
const DESCRIPTION_KEY = 'description'

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
      render={props => <CreateCustomServerPopup {...props}/>}
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
  const [mode, setMode] = useState<'custom' | 'proxy'>('custom')
  const [serverUrlError, setServerUrlError] = useState<string | null>(null)
  const [serverUrlWarning, setServerUrlWarning] = useState<string | null>(null)
  const [apiSpec, setApiSpec] = useState<any>(null)
  const [showWarning, setShowWarning] = useState(false)
  const [urlInput, setUrlInput] = useState('')
  const [cloud, setCloud] = useState<string[]>([])

  //  Load data for connected fields
  const [agents] = useAgents()
  const clouds = useMemo(() => agents?.map(({ agentDeploymentCloud }) => agentDeploymentCloud), [agents])
  const cloudAgentIdMap = useMemo(
    () => new Map(agents.map(({ agentId, agentDeploymentCloud }) => [agentDeploymentCloud, agentId])),
    [agents],
  )
  useEffect(
    () => {selectedCloud && cloudAgentIdMap.has(selectedCloud) && setSelectedAgent(cloudAgentIdMap.get(selectedCloud) ?? '')},
    [cloudAgentIdMap, selectedCloud],
  )
  const [namespaces] = useNamespaces(selectedAgent!)
  const [serviceNames] = useServiceNames(selectedAgent!, selectedNamespace?.namespaceKey)

  useEffect(() => {
    fetch(`/api/packages/${packageId}/spec`)
      .then(res => res.json())
      .then(setApiSpec)
      .catch(console.error)
  }, [packageId])

  const baseUrl = window.location.origin
  
const generatedUrl = `${baseUrl}/apihub-nc/agents/${selectedCloud}/namespaces/${selectedNamespace}/services/${selectedService}/proxy`
  
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
    () => {isUrlGenerationAvailable && setSelectedCustomUrl(`/apihub-nc/agents/${selectedAgent}/namespaces/${namespaceKey}/services/${selectedService}/proxy/`)},
    [isUrlGenerationAvailable, namespaceKey, selectedAgent, selectedNamespace, selectedService],
  )

  const isServiceNameValid = useMemo(
    () => isServiceNameExistInNamespace(serviceNames, serviceName, selectedCloud, selectedNamespace?.namespaceKey),
    [selectedCloud, selectedNamespace?.namespaceKey, serviceName, serviceNames],
  )

  const apiSpecServerUrls = useMemo(() => {
    const servers = apiSpec?.servers ?? []
    return servers.map((s: { url: string }) => s.url).filter(Boolean)
  }, [apiSpec])

  const firstSubPath = useMemo(() => {  
  const match = apiSpecServerUrls.find((url:string) => {
    try {
      const { pathname } = new URL(url)
      return pathname !== '/' && pathname !== ''
    } catch {
      return url.startsWith('/') 
    }
  })

  if (!match) return ''

  try {
    const { pathname } = new URL(match)
    return pathname
  } catch {
    return match 
  }
}, [apiSpecServerUrls])

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useUrlPathWarning(url: string, delay = 700) {  

  useEffect(() => {
    if (!url) return setShowWarning(false)

    const timeout = setTimeout(() => {
      try {
        const parsed = new URL(url)
        const isRootPath = parsed.pathname === '/' || parsed.pathname === ''
        setShowWarning(isRootPath)
      } catch {
        setShowWarning(false) // Invalid URL
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [url, delay])

  return showWarning
}

const showPathWarning = useUrlPathWarning(urlInput)

  const updateSelectedCustomUrl = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setUrlInput(value)
    setSelectedCustomUrl(value)
    setServerUrlError(null)
    setServerUrlWarning(null)

    if (!isAbsoluteUrl(value)) {
      setServerUrlError('The value must be an absolute URL')
      return
    }
    const pathMatch = apiSpecServerUrls
    ?.map((url: string | URL) => {
      try {
        const parsed = new URL(url, 'http://dummy-base') // for relative paths
        return parsed.pathname
      } catch {
        return ''
      }
    })
    .find((path: string) => path && path !== '/')
  
    if (!hasPath(value) && firstSubPath) {
      setServerUrlWarning(`Servers specified directly in the OpenAPI specification contain a path to a specific resource. Make sure the URL you enter is correct and does not contain an additional path (e.g. ${firstSubPath})`)
    }
    setSelectedNamespace(null)
    setSelectedCloud('')
  }, [apiSpecServerUrls, firstSubPath])

  // Storing data in local storage
  const [customServersPackageMap, setCustomServersPackageMap] = useCustomServersPackageMap()
  


  const server = useMemo(() => ({
    url: selectedCustomUrl ?? '',
    description: cloudKey ? `Proxy via agent ${selectedAgent} to ${selectedNamespace?.namespaceKey}` : '',
  }), [cloudKey, selectedAgent, selectedCustomUrl, selectedNamespace?.namespaceKey])

  const hasServers = customServersPackageMap[packageId] && customServersPackageMap[packageId].length > 0

  const handleDeleteServer = useCallback((serverToDelete: { url: string }) => {
    const updatedServers = customServersPackageMap[packageId].filter(server => server.url !== serverToDelete.url)
    setCustomServersPackageMap(packageId, updatedServers)
    localStorage.setItem('customServers', JSON.stringify(updatedServers))
  }, [customServersPackageMap, packageId, setCustomServersPackageMap])
  const showSuccessNotification = useShowSuccessNotification()

  const onAddCustomServer = useCallback(() => {
    
    const url = server?.url
    if (serverUrlError || !isServiceNameValid || !url) return
      
      const caption = server?.description?.trim() || '-'
      const newServer = {
        url: url,
        caption: caption,
        origin: 'custom',
      }
      const servers = [...customServersPackageMap?.[packageId] ?? [], newServer]
      setCustomServersPackageMap(packageId, servers)
      
      setSelectedCustomUrl(server.url)
      
      localStorage.setItem('customServers', JSON.stringify(servers))

      showSuccessNotification?.({
        title: 'Success',
        message: 'Server has been added',
      })
      setTimeout(() => setOpen(false), 50)
    
  }, [isServiceNameValid, showSuccessNotification, serverUrlError, setCustomServersPackageMap, packageId, customServersPackageMap, server, setOpen, setSelectedCustomUrl])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchClouds = async () => {
      try {
        const res = await axios.get('/api/v2/agents')
        const uniqueClouds = Array.from(
          new Set(
            res.data
              .map((agent: { agentDeploymentCloud: any }) => agent.agentDeploymentCloud)
              .filter((cloud: any): cloud is string => typeof cloud === 'string'),
          ),
        )
        
      } catch (error) {
        console.error('Failed to fetch cloud list:', error)
      }
    }

    fetchClouds()
  }, [])
  
  // Rendering functions
  const renderSelectCloud = useCallback(({ field }: ControllerRenderFunctionProps<typeof CLOUD_KEY>) => (
    <Autocomplete
      key="cloudAutocomplete"
      
      options={cloud}
      value={selectedCloud}
      renderOption={(props, cloud) => (
        <ListItem {...props} 
        key={crypto.randomUUID()}>
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
          <TextField {...field} {...params} label="Service*"/>
        )}
        data-testid="ServiceAutocomplete"
      />
    ),
    [selectedService, serviceName],
  )

  const renderSelectUrl = useCallback((
      { field,fieldState }: ControllerRenderFunctionProps<typeof CUSTOM_SERVER_URL_KEY>) => (
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
      return pathname!=='' && pathname !== '/' // indicates subdirectory
    } catch {
      return false
    }
  } 

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const renderCustomServerOption = (props: any, server: { url: string; caption: string; origin: string }) => (
  <ListItem
    {...props}
    key={server.url}
    secondaryAction={
      server.origin === 'custom' && (
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={e => {
            e.stopPropagation() // prevent selecting this option on icon click
            handleDeleteServer(server)
          }}
          size="small"
          data-testid={`delete-server-${server.url}`}
        >
          <DeleteIcon  />
        </IconButton>
      )
    }
  >
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="body2" noWrap>
        {server.url}
      </Typography>
      <Typography variant="caption" color="text.secondary" noWrap>
        {server.caption || '-'}
      </Typography>
    </Box>
  </ListItem>
)

  return (
    <DialogForm
      open={open}
      onClose={() => setOpen(false)}
      onSubmit={handleSubmit(onAddCustomServer)}
      >
      
    <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 1 }}>
       Add Custom Server
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
      <FormControl component="fieldset">
      <RadioGroup
        value={mode}
        onChange={(e) => setMode(e.target.value as 'custom' | 'proxy')}
      >
        <FormControlLabel value="custom" control={<Radio />} label="Add Custom Server URL" />
        <FormControlLabel value="proxy" control={<Radio />} label="Use Agent Proxy" />
      </RadioGroup>
    </FormControl>

        {mode === 'proxy' && (
          <>
          <Typography>Server URL:</Typography>
          
        {generatedUrl ? (
          <Typography variant="body2" >{generatedUrl}</Typography>) : (
              <Typography variant="body2"  sx={{ mt: 0.5 }}>
                   {`https://apihub.example.com/apihub-nc/agents/${selectedCloud}/namespaces/${selectedNamespace}/services/${selectedService}/proxy`}
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
        )}       
       {mode === 'custom' &&(       
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
        
      {showPathWarning && <Alert severity="warning" sx={{ mt: 2 }}>
    Servers specified directly in the OpenAPI specification contain a path to a specific resource.
    Make sure the URL you enter is correct and does not contain an additional path (e.g. <code>/api/v1</code>).
      </Alert>
      }
      </DialogContent>
      
      <DialogActions>
        <LoadingButton variant="contained" type="submit" loading={false} data-testid="AddButton" >
          Add
        </LoadingButton>
        <Button variant="outlined" onClick={() => setOpen(false)} data-testid="CancelButton">
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})
