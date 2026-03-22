import type { Key } from '@apihub/entities/keys'
import {
  SHAREABILITY_STATUS_NON_SHAREABLE,
  SHAREABILITY_STATUS_SHAREABLE,
  SHAREABILITY_STATUS_UNKNOWN,
  SHAREABILITY_STATUSES,
  type ShareabilityStatus,
} from '@netcracker/qubership-apihub-api-processor'
import { useDocuments } from '../../../routes/root/PortalPage/VersionPage/useDocuments'
import type { ShareabilitySummary } from '../hooks/useShareabilitySummary'
import { useShareabilitySummary } from '../hooks/useShareabilitySummary'
import { ShareabilityAlert } from './ShareabilityAlert'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from '@mui/material'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'
import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { InfoContextIcon } from '@netcracker/qubership-apihub-ui-shared/icons/InfoContextIcon'
import type { FC } from 'react'
import { memo, useCallback, useMemo } from 'react'
import type { Control, UseFormSetValue } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import type { ExportConfig } from '../../../routes/root/PortalPage/useExportConfig'
import type { ExportedEntityTransformation, ExportedFileFormat, IRequestDataExport } from '../api/useExport'
import {
  ExportedEntityKind,
  RequestDataExportRestDocument,
  RequestDataExportRestOperationsGroup,
  RequestDataExportVersion,
} from '../api/useExport'
import type { ExportSettingsFormData } from '../entities/export-settings-form'
import { EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE } from '../entities/export-settings-form'
import type { ExportSettingsFormField } from '../entities/export-settings-form-field'
import {
  ExportSettingsFormFieldKind,
  ExportSettingsFormFieldOptionScope,
  ExportSettingsFormFieldOptionOasExtensions,
  SPEC_TYPE_ACCESS_VIEW_EXPORT_FIELD,
} from '../entities/export-settings-form-field'
import { useLocalExportSettings } from '../storage/useLocalExportSettings'
import type { SpecType } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { intersectionBy } from 'lodash-es'

interface ExportSettingsFormFieldsProps {
  disabled: boolean
  fields: ExportSettingsFormField[]
  exportConfig: ExportConfig
  control: Control<ExportSettingsFormData>
  setValue: UseFormSetValue<ExportSettingsFormData>
  setCachedFormField: (field: ExportSettingsFormFieldKind, value: string) => void
}

const ExportSettingsFormFields: FC<ExportSettingsFormFieldsProps> = memo(props => {
  const { disabled, fields, exportConfig, control, setValue, setCachedFormField } = props
  return (
    <Box component="form" display="flex" flexDirection="column" gap={2}>
      {fields.map(field => <>
        {field.options?.length > 0 &&
          <>
            <Typography key={`${field.kind}-label`} variant="h3">{field.label}</Typography>
            <Controller
              key={field.kind}
              name={field.kind}
              control={control}
              render={({ field: { value } }) => (
                <RadioGroup
                  key={field.kind}
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
                        control={<Radio disabled={disabled}/>}
                      />
                      {option.tooltip && (
                        <Tooltip
                          disableHoverListener={false}
                          title={typeof option.tooltip === 'function' ? option.tooltip(exportConfig) : option.tooltip}
                          placement="right"
                        >
                          <InfoContextIcon/>
                        </Tooltip>
                      )}
                    </Box>
                  ))}
                </RadioGroup>
              )}
            />
          </>
        }
      </>)}
    </Box>
  )
})

function getSingleDocumentAlert(status?: ShareabilityStatus): { severity: 'success' | 'warning' | 'error'; title: string; message: string } | null {
  switch (status) {
    case SHAREABILITY_STATUS_SHAREABLE:
      return { severity: 'success', title: 'Shareable document', message: 'This document is marked as shareable by the package owner.' }
    case SHAREABILITY_STATUS_UNKNOWN:
      return { severity: 'warning', title: 'Unknown shareability', message: 'The shareability status of this document is unknown. Contact the package owner to clarify.' }
    case SHAREABILITY_STATUS_NON_SHAREABLE:
      return { severity: 'error', title: 'Non-shareable document', message: 'This document is marked as non-shareable by the package owner.' }
    default:
      return null
  }
}

type VersionExportAlertResult = {
  severity: 'success' | 'warning' | 'error'
  title: string
  message: string
  exportDisabled: boolean
}

function getVersionExportAlert(
  scopeValue: string | undefined,
  summary: ShareabilitySummary,
): VersionExportAlertResult | null {
  if (summary.total === 0) {
    return null
  }

  const isOnlyShareable = !scopeValue || scopeValue === ExportSettingsFormFieldOptionScope.ONLY_SHAREABLE

  if (isOnlyShareable) {
    if (summary.shareable > 0) {
      return {
        severity: 'success',
        title: 'Shareable documents only',
        message: `${summary.shareable} shareable documents out of ${summary.total} will be exported.`,
        exportDisabled: false,
      }
    }
    if (summary.unknown > 0) {
      return {
        severity: 'warning',
        title: 'No shareable documents found',
        message: 'No documents are confirmed as shareable in this version. Some documents have unknown shareability status. Contact the package owner to clarify.',
        exportDisabled: true,
      }
    }
    return {
      severity: 'warning',
      title: 'No shareable documents found',
      message: 'All documents in this version are marked as non-shareable by the package owner.',
      exportDisabled: true,
    }
  }

  // "All Documents" scope
  if (summary.nonShareable === 0 && summary.unknown === 0) {
    return {
      severity: 'success',
      title: 'All shareable',
      message: `All ${summary.total} documents will be exported. All are marked as shareable by the package owner.`,
      exportDisabled: false,
    }
  }

  if (summary.nonShareable > 0) {
    const parts: string[] = []
    parts.push(`${summary.nonShareable} marked as non-shareable`)
    if (summary.unknown > 0) {
      parts.push(`${summary.unknown} with unknown shareability status`)
    }
    return {
      severity: 'error',
      title: 'Includes restricted documents',
      message: `All ${summary.total} documents will be exported, including ${parts.join(' and ')}.`,
      exportDisabled: false,
    }
  }

  return {
    severity: 'warning',
    title: 'Unknown shareability',
    message: `${summary.unknown} documents have unknown shareability status. Contact the package owner to clarify.`,
    exportDisabled: false,
  }
}

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
  } = props

  const isVersionExport = exportedEntity === ExportedEntityKind.VERSION
  const isSingleDocExport = exportedEntity === ExportedEntityKind.REST_DOCUMENT

  // Fetch documents for version export shareability summary
  const { documents } = useDocuments({
    packageKey: packageId,
    versionKey: version,
    enabled: isVersionExport && open,
  })
  const summary = useShareabilitySummary(documents)

  const getFilteredFields = useCallback((specType: SpecType): ExportSettingsFormField[] => {
    return EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[exportedEntity]
      .map(field => {
        const allowedOptions = SPEC_TYPE_ACCESS_VIEW_EXPORT_FIELD[specType]!
        return {
          ...field,
          options: [...intersectionBy(
            field.options,
            allowedOptions,
            'value')],
        }
      })
  }, [exportedEntity])

  // Calculate fields and default values
  const allFields = useMemo(() => {
    if (specType && SPEC_TYPE_ACCESS_VIEW_EXPORT_FIELD[specType]) {
      return getFilteredFields(specType)
    } else {
      return EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[exportedEntity]
    }

  }, [exportedEntity, getFilteredFields, specType])
  const scopeFields = useMemo(() => allFields.filter(f => f.kind === ExportSettingsFormFieldKind.SCOPE), [allFields])
  const otherFields = useMemo(() => allFields.filter(f => f.kind !== ExportSettingsFormFieldKind.SCOPE), [allFields])

  const fieldsDefaultValues = useMemo(
    () => allFields.reduce((acc, field) => ({ ...acc, [field.kind]: field.defaultValue }), {}),
    [allFields],
  )

  // Extract cached form data from local storage
  const { cachedFormData, setCachedFormField } = useLocalExportSettings(exportedEntity)

  // Initialize form with cached data or default values
  const { control, handleSubmit, setValue, watch } = useForm<ExportSettingsFormData>({
    defaultValues: cachedFormData
      ? { ...fieldsDefaultValues, ...cachedFormData }
      : fieldsDefaultValues,
  })

  // Single document alert
  const currentScopeValue = watch(ExportSettingsFormFieldKind.SCOPE)

  // Version export alert
  const singleDocAlert = isSingleDocExport ? getSingleDocumentAlert(shareabilityStatus) : null
  const versionAlert = isVersionExport ? getVersionExportAlert(currentScopeValue, summary) : null

  // Handle form submission
  const onSubmit = (data: ExportSettingsFormData): void => {
    let requestData: IRequestDataExport | undefined
    const removeOasExtensions = data[ExportSettingsFormFieldKind.OAS_EXTENSIONS] === ExportSettingsFormFieldOptionOasExtensions.REMOVE
    const fileFormat: ExportedFileFormat = data[ExportSettingsFormFieldKind.FILE_FORMAT] as ExportedFileFormat
    switch (exportedEntity) {
      case ExportedEntityKind.VERSION: {
        const allowedShareabilityStatuses: readonly ShareabilityStatus[] = data[ExportSettingsFormFieldKind.SCOPE] === ExportSettingsFormFieldOptionScope.ONLY_SHAREABLE
          ? [SHAREABILITY_STATUS_SHAREABLE] : SHAREABILITY_STATUSES
        requestData = new RequestDataExportVersion(packageId, version, fileFormat, removeOasExtensions, allowedShareabilityStatuses)
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
  const exportButtonDisabled = initializing || exporting || (versionAlert?.exportDisabled ?? false)

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
        {singleDocAlert && (
          <ShareabilityAlert severity={singleDocAlert.severity} title={singleDocAlert.title} message={singleDocAlert.message} />
        )}

        {scopeFields.length > 0 && (
          <ExportSettingsFormFields
            disabled={initializing || exporting}
            fields={scopeFields}
            exportConfig={exportConfig}
            control={control}
            setValue={setValue}
            setCachedFormField={setCachedFormField}
          />
        )}

        {versionAlert && (
          <Box mt={1} mb={2}>
            <ShareabilityAlert severity={versionAlert.severity} title={versionAlert.title} message={versionAlert.message} />
          </Box>
        )}

        <ExportSettingsFormFields
          disabled={initializing || exporting}
          fields={otherFields}
          exportConfig={exportConfig}
          control={control}
          setValue={setValue}
          setCachedFormField={setCachedFormField}
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
