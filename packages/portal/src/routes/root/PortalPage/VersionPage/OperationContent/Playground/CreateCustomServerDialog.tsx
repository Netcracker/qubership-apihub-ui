import { type FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import {
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
} from '@mui/material'
import { ServerUrlDisplay } from './AgentServerUrlBox'
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
import { SHOW_CREATE_CUSTOM_SERVER_DIALOG, useEventBus } from '@apihub/routes/EventBusProvider'
import type { Namespace } from '@netcracker/qubership-apihub-ui-shared/entities/namespaces'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'
import { isServiceNameExistInNamespace } from '@netcracker/qubership-apihub-ui-shared/entities/service-names'
import { useShowSuccessNotification } from '@apihub/routes/root/BasePage/Notification'
import { ErrorIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ErrorIcon'
import { InfoContextIcon } from '@netcracker/qubership-apihub-ui-shared/icons/InfoContextIcon'
import { useFirstSpecPath } from './hooks/useFirstSpecPath'
import { SpecPathWarningAlert } from './components/SpecPathWarningAlert'
import { PACKAGE_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { DEFAULT_API_TYPE } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { useOperation } from '@apihub/routes/root/PortalPage/VersionPage/useOperation'
import { useSpecUrls, useCustomUrls, isAbsoluteUrl } from './hooks/useUrls'

const MODE_MANUAL = 'manual' as const
const MODE_AGENT = 'agent' as const

const KEY_CUSTOM_SERVER_URL = 'customServerUrlKey'
const KEY_CLOUD = 'cloudKey'
const KEY_NAMESPACE = 'namespaceKey'
const KEY_SERVICE = 'serviceKey'
const KEY_ADDITIONAL_PATH = 'additionalPathKey'
const KEY_DESCRIPTION = 'descriptionKey'

const LABEL_SERVER_URL = 'Server URL'
const LABEL_CLOUD = 'Cloud'
const LABEL_NAMESPACE = 'Namespace'
const LABEL_SERVICE = 'Service'
const LABEL_ADDITIONAL_PATH = 'Additional path'
const LABEL_DESCRIPTION = 'Description'

const PLACEHOLDER_ADDITIONAL_PATH = 'e.g. api/v1'

const TOOLTIP_CUSTOM_SERVER_ONLY = (packageKind: string): string =>
  `Only adding a custom server is available. To use the Agent proxy, specify the service name for the current ${packageKind}`

const ERROR_ABSOLUTE_URL_REQUIRED = 'The value must be an absolute URL'
const ERROR_REQUIRED_FIELD = 'The field must be filled'
const ERROR_SERVER_URL_EXISTS = 'Server URL already exists'
const ERROR_SERVICE_NOT_FOUND = (serviceName: string): string =>
  `Service ${serviceName} not found in selected namespace`

const SUCCESS_SERVER_ADDED = 'Server has been added'
const SUCCESS_TITLE = 'Success'

type ModeType = typeof MODE_MANUAL | typeof MODE_AGENT

type CreateCustomServerForm = {
  [KEY_CUSTOM_SERVER_URL]?: Key
  [KEY_DESCRIPTION]?: Key
  [KEY_CLOUD]?: Key
  [KEY_NAMESPACE]?: Key
  [KEY_SERVICE]?: Key
  [KEY_ADDITIONAL_PATH]?: Key
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

const AGENT_PROXY_URL_TEMPLATE =
  ':baseUrl/apihub-nc/agents/:cloud/namespaces/:namespace/services/:service/proxy/:additionalPath'

const buildAgentProxyUrl = (
  baseUrl: string,
  cloud: string,
  namespace: string,
  service: string,
  additionalPath: string,
): string => {
  return generatePath(AGENT_PROXY_URL_TEMPLATE, {
    baseUrl,
    cloud,
    namespace,
    service,
    additionalPath,
  })
}

const isUrlAlreadyExist = (urls: string[], url: string | undefined): boolean => {
  if (!url) return true
  return urls.includes(url.toLowerCase())
}

const CreateCustomServerPopup: FC<PopupProps> = memo<PopupProps>(({ open, setOpen }) => {
  const eventBus = useEventBus()
  const { packageId = '', versionId, apiType = DEFAULT_API_TYPE, operationId: operationKey } = useParams()
  const [packageObj] = usePackage()
  const serviceName = packageObj?.serviceName
  const packageKind = packageObj?.kind || PACKAGE_KIND
  const isServiceNameExist = !!serviceName

  // Get operation
  const { data: operationData } = useOperation({
    packageKey: packageId,
    versionKey: versionId,
    operationKey: operationKey,
    apiType: apiType as ApiType,
  })

  // Development-only debug logging
  const isDevelopment = process.env.NODE_ENV === 'development'

  // States for selections
  const [agentProxyUrl, setAgentProxyUrl] = useState<string>('')
  const [agentProxyUrlError, setAgentProxyUrlError] = useState<string>('')
  const [selectedCloud, setSelectedCloud] = useState<string>('')
  const [selectedNamespace, setSelectedNamespace] = useState<Namespace | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<string>('')
  const [additionalPath, setAdditionalPath] = useState<string>('')

  // State for deferred server selection event dispatch
  const [pendingServerSelection, setPendingServerSelection] = useState<string | null>(null)

  // Storing data in local storage
  const [customServersPackageMap, setCustomServersPackageMap] = useCustomServersPackageMap()

  // Process URLs for duplicate checking
  const specUrls = useSpecUrls(operationData?.data)
  const customUrls = useCustomUrls(customServersPackageMap?.[packageId])
  const availableUrls = useMemo(() => {
    return [...specUrls, ...customUrls]
  }, [specUrls, customUrls])

  const firstSpecPath = useFirstSpecPath(specUrls)

  const [mode, setMode] = useState<ModeType>(MODE_MANUAL)
  const isAgentMode = mode === MODE_AGENT
  const isManualMode = mode === MODE_MANUAL

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
    [KEY_CUSTOM_SERVER_URL]: '',
    [KEY_DESCRIPTION]: '',
    [KEY_CLOUD]: '',
    [KEY_NAMESPACE]: '',
    [KEY_SERVICE]: serviceName ?? '',
  }), [serviceName])

  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
  } = useForm<CreateCustomServerForm>({
    defaultValues: defaultFormData,
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const baseUrl = window.location.origin

  useEffect(
    () => {
      isServiceNameExist && setAgentProxyUrl(
        buildAgentProxyUrl(
          baseUrl,
          selectedAgent || '<cloud>',
          selectedNamespace?.namespaceKey || '<namespace>',
          serviceName,
          additionalPath,
        ),
      )
      setAgentProxyUrlError('')
    },
    [additionalPath, baseUrl, isServiceNameExist, selectedAgent, selectedNamespace?.namespaceKey, serviceName],
  )

  const isServiceNameValid = useMemo(
    () => isServiceNameExistInNamespace(serviceNames, serviceName, selectedCloud, selectedNamespace?.namespaceKey),
    [selectedCloud, selectedNamespace?.namespaceKey, serviceName, serviceNames],
  )

  // Add server - memoize callback to prevent unnecessary re-renders
  const showSuccessNotification = useShowSuccessNotification()

  const addCustomServer = useCallback((formData: CreateCustomServerForm) => {
    if (isDevelopment) {
      console.log('🚀 addCustomServer called with:', {
        formData,
        isServiceNameValid,
        isAgentMode,
        isManualMode,
      })
    }

    if (!isServiceNameValid) {
      if (isDevelopment) console.log('❌ Early return: isServiceNameValid is false')
      return
    }

    if (isAgentMode && isUrlAlreadyExist(availableUrls, agentProxyUrl)) {
      if (isDevelopment) console.log('❌ Early return: URL already exists')
      setAgentProxyUrlError(ERROR_SERVER_URL_EXISTS)
      return
    }

    const newServer: PlaygroundServer = {
      url: isManualMode ? formData[KEY_CUSTOM_SERVER_URL]! : agentProxyUrl,
      description: formData[KEY_DESCRIPTION] ?? '',
      shouldUseProxyEndpoint: !formData[KEY_CLOUD],
    }

    if (isDevelopment) {
      console.log('✅ Creating new server:', newServer)
    }

    // Update server list
    setCustomServersPackageMap(packageId, [...customServersPackageMap?.[packageId] ?? [], newServer])

    // Schedule event dispatch for next render cycle (after React state update completes)
    if (isDevelopment) {
      console.log('📅 Setting pendingServerSelection:', newServer.url)
    }
    setPendingServerSelection(newServer.url)

    showSuccessNotification?.({
      title: SUCCESS_TITLE,
      message: SUCCESS_SERVER_ADDED,
    })
    // Note: setOpen(false) is now called after event dispatch in useEffect
  }, [
    isDevelopment,
    isServiceNameValid,
    isAgentMode,
    availableUrls,
    agentProxyUrl,
    isManualMode,
    setCustomServersPackageMap,
    packageId,
    customServersPackageMap,
    showSuccessNotification,
  ])

  // Ultra-targeted development logging - only during actual server creation
  useEffect(() => {
    if (isDevelopment && pendingServerSelection) {
      // Only log during actual server creation, not on every render
      console.log('SPEC_URLS:', specUrls)
      console.log('AVAILABLE_URLS:', availableUrls)
      console.log('📈 Component state:', {
        isServiceNameValid,
        isAgentMode,
        isManualMode,
        pendingServerSelection,
        packageId,
        serviceName,
      })
    }
  }, [
    isDevelopment,
    pendingServerSelection,
    specUrls,
    availableUrls,
    isServiceNameValid,
    isAgentMode,
    isManualMode,
    packageId,
    serviceName,
  ]) // Include all logged variables

  // Optimized deferred event dispatch - runs after React completes state update
  useEffect(() => {
    if (isDevelopment) {
      console.log('🔄 useEffect pendingServerSelection changed:', pendingServerSelection)
    }

    if (pendingServerSelection) {
      if (isDevelopment) {
        console.log('📡 Dispatching selectCustomServer event for:', pendingServerSelection)
      }

      // Dispatch event first using eventBus
      eventBus.selectCreatedCustomServer({ url: pendingServerSelection })

      // Clear pending state immediately to prevent re-renders
      setPendingServerSelection(null)

      // Defer dialog closing to next tick to ensure event propagation
      setTimeout(() => {
        if (isDevelopment) {
          console.log('🚪 Closing dialog after event dispatch')
        }
        setOpen(false)
      }, 0)
    }
  }, [pendingServerSelection, setOpen, isDevelopment, eventBus])

  // Rendering functions
  const renderSelectUrl = useCallback((
    { field, fieldState }: ControllerRenderFunctionProps<typeof KEY_CUSTOM_SERVER_URL>,
  ) => (
    <TextField
      {...field}
      required
      inputProps={{ required: false }} // disables the browser native "please fill out this field" prompt
      label={LABEL_SERVER_URL}
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
    ({ field }: ControllerRenderFunctionProps<typeof KEY_DESCRIPTION>) => (
      <TextField
        {...field}
        label={LABEL_DESCRIPTION}
        data-testid="DescriptionTextField"
      />
    ),
    [],
  )

  const renderSelectCloud = useCallback(({ field }: ControllerRenderFunctionProps<typeof KEY_CLOUD>) => (
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
      renderInput={(params) => <TextField {...field} {...params} required label={LABEL_CLOUD} />}
      onChange={(_, value) => {
        setValue(KEY_CLOUD, value ?? '')
        setSelectedCloud(value ?? '')
        setSelectedNamespace(null)
      }}
      data-testid="CloudAutocomplete"
    />
  ), [clouds, selectedCloud, setValue, setSelectedCloud, setSelectedNamespace])

  const renderSelectNamespace = useCallback((
    { field }: ControllerRenderFunctionProps<typeof KEY_NAMESPACE>,
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
          label={LABEL_NAMESPACE}
          error={!isServiceNameValid}
          helperText={!isServiceNameValid && ERROR_SERVICE_NOT_FOUND(serviceName!)}
        />
      )}
      onChange={(_, value) => {
        setValue(KEY_NAMESPACE, value?.namespaceKey ?? '')
        setSelectedNamespace(value)
      }}
      data-testid="NamespaceAutocomplete"
    />
  ), [isServiceNameValid, namespaces, selectedCloud, selectedNamespace, serviceName, setValue])

  const renderSelectService = useCallback((
    { field }: ControllerRenderFunctionProps<typeof KEY_SERVICE>,
  ) => (
    <TextField
      {...field}
      disabled
      required
      label={LABEL_SERVICE}
      data-testid="ServerUrlTextField"
    />
  ), [])

  const renderAdditionalPathInput = useCallback((
    { field }: ControllerRenderFunctionProps<typeof KEY_ADDITIONAL_PATH>,
  ) => (
    <TextField
      {...field}
      label={LABEL_ADDITIONAL_PATH}
      placeholder={PLACEHOLDER_ADDITIONAL_PATH}
      onChange={(event) => {
        field.onChange(event)
        setAdditionalPath(event.target.value)
      }}
      data-testid="AdditionalPathTextField"
    />
  ), [])

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
              title={TOOLTIP_CUSTOM_SERVER_ONLY(packageKind)}
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

        {isAgentMode && (
          <>
            <ServerUrlDisplay serverUrl={agentProxyUrl} errorMessage={agentProxyUrlError} />
            <Controller
              name={KEY_CLOUD}
              control={control}
              render={renderSelectCloud}
            />
            <Controller
              name={KEY_NAMESPACE}
              control={control}
              render={renderSelectNamespace}
            />
            <Controller
              name={KEY_SERVICE}
              control={control}
              render={renderSelectService}
            />
            <Controller
              name={KEY_ADDITIONAL_PATH}
              control={control}
              render={renderAdditionalPathInput}
            />
          </>
        )}

        {isManualMode && (
          <Controller
            name={KEY_CUSTOM_SERVER_URL}
            rules={{
              required: ERROR_REQUIRED_FIELD,
              validate: customServerUrl => {
                if (!isAbsoluteUrl(customServerUrl)) {
                  return ERROR_ABSOLUTE_URL_REQUIRED
                }
                if (isUrlAlreadyExist(availableUrls, customServerUrl)) {
                  return ERROR_SERVER_URL_EXISTS
                }
                return true
              },
            }}
            control={control}
            render={renderSelectUrl}
          />
        )}

        <Controller
          name={KEY_DESCRIPTION}
          control={control}
          render={renderDescriptionInput}
        />

        {!!firstSpecPath && <SpecPathWarningAlert path={firstSpecPath} />}
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          type="submit"
          disabled={isAgentMode ? !selectedNamespace : false}
          data-testid="AddButton"
        >
          Add
        </Button>
        <Button variant="outlined" onClick={() => setOpen(false)} data-testid="CancelButton">
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})
