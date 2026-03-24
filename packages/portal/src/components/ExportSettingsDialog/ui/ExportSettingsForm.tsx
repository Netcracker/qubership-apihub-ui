import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  RadioGroup,
  Tooltip,
  Typography,
} from '@mui/material'
import { intersectionBy } from 'lodash-es'
import { type FC, memo, useCallback, useMemo } from 'react'
import { type Control, Controller, useForm, type UseFormSetValue, useWatch } from 'react-hook-form'

import {
  SHAREABILITY_STATUS_SHAREABLE,
  SHAREABILITY_STATUSES,
  type ShareabilityStatus,
} from '@netcracker/qubership-apihub-api-processor'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'
import type { Key, PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { InfoContextIcon } from '@netcracker/qubership-apihub-ui-shared/icons/InfoContextIcon'
import { RadioCustom } from '@netcracker/qubership-apihub-ui-shared/components/RadioCustom'
import { isGraphQlSpecType, type SpecType } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import type { ExportConfig } from '../../../routes/root/PortalPage/useExportConfig'
import { useDocuments } from '../../../routes/root/PortalPage/VersionPage/useDocuments'
import {
  ExportedEntityKind,
  type ExportedEntityTransformation,
  type ExportedFileFormat,
  type IRequestDataExport,
  RequestDataExportRestDocument,
  RequestDataExportRestOperationsGroup,
  RequestDataExportVersion,
} from '../api/useExport'
import { EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE, type ExportSettingsFormData } from '../entities/export-settings-form'
import {
  type ExportSettingsFormField,
  ExportSettingsFormFieldKind,
  ExportSettingsFormFieldOptionOasExtensions,
  ExportSettingsFormFieldOptionScope,
  SPEC_TYPE_ACCESS_VIEW_EXPORT_FIELD,
} from '../entities/export-settings-form-field'
import { type ShareabilityAlerts, useShareabilityAlerts } from '../hooks/useShareabilityAlerts'
import { useShareabilitySummary } from '../hooks/useShareabilitySummary'
import { useLocalExportSettings } from '../storage/useLocalExportSettings'
import { ShareabilityAlert, ShareabilityExportVersionAlert, ShareabilitySingleDocAlert } from './ShareabilityAlert'

interface ExportSettingsFormFieldsProps {
  disabled: boolean
  fields: ExportSettingsFormField[]
  exportConfig: ExportConfig
  control: Control<ExportSettingsFormData>
  setValue: UseFormSetValue<ExportSettingsFormData>
  setCachedFormField: (field: ExportSettingsFormFieldKind, value: string) => void
  shareabilityExportVersionAlert: ShareabilityAlerts['versionExportAlert']
}

const ExportSettingsFormFields: FC<ExportSettingsFormFieldsProps> = memo(props => {
  const {
    disabled,
    fields,
    exportConfig,
    control,
    setValue,
    setCachedFormField,
    shareabilityExportVersionAlert,
  } = props
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {fields.map(field => {
        if (!field.options?.length) {
          return null
        }
        return (
          <Box key={field.kind} display="flex" flexDirection="column" gap={2}>
            <Typography variant="subtitle4">{field.label}</Typography>
            <Controller
              name={field.kind}
              control={control}
              render={({ field: { value } }) => (
                <RadioGroup
                  value={value}
                  onChange={(_, value) => {
                    setCachedFormField(field.kind, value)
                    setValue(field.kind, value)
                  }}
                >
                  {field.options.map(option => (
                    <Box key={option.value} display="flex" alignItems="center" gap={1}>
                      <FormControlLabel
                        value={option.value}
                        label={option.label}
                        checked={!value && option.value === field.defaultValue || value === option.value}
                        control={<RadioCustom disabled={disabled} />}
                      />
                      {option.tooltip && (
                        <Tooltip
                          disableHoverListener={false}
                          title={typeof option.tooltip === 'function' ? option.tooltip(exportConfig) : option.tooltip}
                          placement="right"
                        >
                          <InfoContextIcon fontSize="extra-small" />
                        </Tooltip>
                      )}
                    </Box>
                  ))}
                </RadioGroup>
              )}
            />
            {field.kind === ExportSettingsFormFieldKind.SCOPE && shareabilityExportVersionAlert && (
              <ShareabilityExportVersionAlert
                severity={shareabilityExportVersionAlert.severity}
                title={shareabilityExportVersionAlert.title}
                message={shareabilityExportVersionAlert.message}
              />
            )}
          </Box>
        )
      })}
    </Box>
  )
})

interface ExportSettingsFormProps {
  // Control props
  open: boolean
  onClose: () => void
  // Data props
  exportConfig: ExportConfig
  exportedEntity: ExportedEntityKind
  packageId: PackageKey
  version: VersionKey
  documentId?: Key
  groupName?: Key
  shareabilityStatus?: ShareabilityStatus
  // State props
  exporting: boolean
  isLoadingExportConfig: boolean
  isStartingExport: boolean
  // Action props
  setRequestDataExport: (requestData: IRequestDataExport) => void
  specType?: SpecType
  onDownloadPublishedDocument?: () => void
}

export const ExportSettingsForm: FC<ExportSettingsFormProps> = memo(props => {
  const {
    open,
    onClose,
    exportConfig,
    exportedEntity,
    packageId,
    version,
    documentId,
    groupName,
    shareabilityStatus,
    exporting,
    isLoadingExportConfig,
    isStartingExport,
    setRequestDataExport,
    specType,
    onDownloadPublishedDocument,
  } = props

  const isVersionExport = exportedEntity === ExportedEntityKind.VERSION

  // Fetch documents for version export shareability summary
  const { documents } = useDocuments({
    packageKey: packageId,
    versionKey: version,
    enabled: isVersionExport,
  })

  const summary = useShareabilitySummary(documents)

  const getFilteredFields = useCallback((specType: SpecType): ExportSettingsFormField[] => {
    if (isGraphQlSpecType(specType)) {
      return []
    }

    const allowedOptions = SPEC_TYPE_ACCESS_VIEW_EXPORT_FIELD[specType] ?? []
    if (allowedOptions.length === 0) {
      return EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[exportedEntity]
    }

    return EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[exportedEntity]
      .map(field => {
        return {
          ...field,
          options: [...intersectionBy(
            field.options,
            allowedOptions,
            'value',
          )],
        }
      })
  }, [exportedEntity])

  // Calculate fields and default values
  const fields = useMemo(() => {
    if (specType) {
      return getFilteredFields(specType)
    }

    return EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[exportedEntity]
  }, [exportedEntity, getFilteredFields, specType])

  const fieldsDefaultValues = useMemo(
    () => fields.reduce((acc, field) => ({ ...acc, [field.kind]: field.defaultValue }), {}),
    [fields],
  )

  // Extract cached form data from local storage
  const { cachedFormData, setCachedFormField } = useLocalExportSettings(exportedEntity)

  // Initialize form with cached data or default values
  const { control, handleSubmit, setValue } = useForm<ExportSettingsFormData>({
    defaultValues: cachedFormData
      ? { ...fieldsDefaultValues, ...cachedFormData }
      : fieldsDefaultValues,
  })

  // Version export alert
  const currentScopeValue = useWatch({ control, name: ExportSettingsFormFieldKind.SCOPE }) as
    | ExportSettingsFormFieldOptionScope
    | undefined
  const { versionExportAlert, singleDocExportAlert, versionExportDisabled } = useShareabilityAlerts({
    exportedEntity,
    scopeValue: currentScopeValue,
    shareabilityStatus,
    summary,
  })

  // Handle form submission
  const onSubmit = (data: ExportSettingsFormData): void => {
    const isGraphQlExport = exportedEntity === ExportedEntityKind.REST_DOCUMENT
      && specType
      && isGraphQlSpecType(specType)

    if (isGraphQlExport) {
      onDownloadPublishedDocument?.()
      return
    }

    let requestData: IRequestDataExport | undefined
    const removeOasExtensions =
      data[ExportSettingsFormFieldKind.OAS_EXTENSIONS] === ExportSettingsFormFieldOptionOasExtensions.REMOVE
    const fileFormat: ExportedFileFormat = data[ExportSettingsFormFieldKind.FILE_FORMAT] as ExportedFileFormat
    switch (exportedEntity) {
      case ExportedEntityKind.VERSION: {
        const allowedShareabilityStatuses: readonly ShareabilityStatus[] =
          data[ExportSettingsFormFieldKind.SCOPE] === ExportSettingsFormFieldOptionScope.ONLY_SHAREABLE
            ? [SHAREABILITY_STATUS_SHAREABLE]
            : SHAREABILITY_STATUSES
        requestData = new RequestDataExportVersion(
          packageId,
          version,
          fileFormat,
          removeOasExtensions,
          allowedShareabilityStatuses,
        )
        break
      }
      case ExportedEntityKind.REST_DOCUMENT:
        requestData = new RequestDataExportRestDocument(
          documentId!,
          packageId,
          version,
          fileFormat,
          removeOasExtensions,
        )
        break
      case ExportedEntityKind.REST_OPERATIONS_GROUP:
        requestData = new RequestDataExportRestOperationsGroup(
          groupName!,
          data[ExportSettingsFormFieldKind.SPECIFICATION_TYPE] as ExportedEntityTransformation,
          packageId,
          version,
          fileFormat,
          removeOasExtensions,
        )
        break
    }
    setRequestDataExport(requestData)
  }

  const initializing = isLoadingExportConfig || isStartingExport
  const exportButtonDisabled = initializing || exporting || versionExportDisabled

  return (
    <DialogForm
      open={open}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <DialogTitle>
        Export Settings
      </DialogTitle>
      <DialogContent>
        {singleDocExportAlert && (isGraphQlSpecType(specType)
          ? (
            <ShareabilityAlert
              severity={singleDocExportAlert.severity}
              title={singleDocExportAlert.title}
              message={singleDocExportAlert.message}
            />
          )
          : (
            <ShareabilitySingleDocAlert
              severity={singleDocExportAlert.severity}
              title={singleDocExportAlert.title}
              message={singleDocExportAlert.message}
            />
          ))}
        <ExportSettingsFormFields
          disabled={initializing || exporting}
          fields={fields}
          exportConfig={exportConfig}
          control={control}
          setValue={setValue}
          setCachedFormField={setCachedFormField}
          shareabilityExportVersionAlert={versionExportAlert}
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton
          type="submit"
          disabled={exportButtonDisabled}
          loading={isStartingExport || exporting}
          variant="contained"
          data-testid="ExportButton"
        >
          Export
        </LoadingButton>
        <Button
          disabled={initializing}
          variant="outlined"
          onClick={onClose}
          data-testid="CloseButton"
        >
          Close
        </Button>
      </DialogActions>
    </DialogForm>
  )
})
