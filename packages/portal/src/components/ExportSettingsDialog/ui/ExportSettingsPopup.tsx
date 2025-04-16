import type { ExportSettingsPopupDetail } from '@apihub/routes/EventBusProvider'
import { useShowErrorNotification } from '@apihub/routes/root/BasePage/Notification'
import { LoadingButton } from '@mui/lab'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import type { FC } from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { ExportedEntityTransformation, ExportedFileFormat, IRequestDataExport } from '../api/useExport'
import { ExportedEntityKind, RequestDataExportRestDocument, RequestDataExportRestOperationsGroup, RequestDataExportVersion, useExport, useRemoveExport } from '../api/useExport'
import { useExportConfig } from '../api/useExportConfig'
import { useExportStatus } from '../api/useExportStatus'
import type { ExportSettingsFormData } from '../entities/export-settings-form'
import { EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE } from '../entities/export-settings-form'
import { ExportSettingsFormFieldKind, ExportSettingsFormFieldOptionOasExtensions } from '../entities/export-settings-form-field'
import { useLocalExportSettings } from '../storage/useLocalExportSettings'
import { ExportSettingsForm } from './ExportSettingsForm'

export const ExportSettingsPopup: FC<PopupProps> = ({ open, setOpen, detail }) => {
  const {
    exportedEntity,
    packageId,
    version,
    documentId,
    groupName,
  } = detail as ExportSettingsPopupDetail

  // Calculate fields and default values
  const fields = EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[exportedEntity]
  const fieldsDefaultValues = useMemo(
    () => fields.reduce((acc, field) => ({ ...acc, [field.kind]: field.defaultValue }), {}),
    [fields],
  )

  const [exportConfig = {}, isLoadingExportConfig] = useExportConfig(packageId)

  const showErrorNotification = useShowErrorNotification()

  // Initialize state used for request data export
  const [requestDataExport, setRequestDataExport] = useState<IRequestDataExport | undefined>(undefined)
  const [exportTask, isStartingExport, exportStartingError] = useExport(requestDataExport)
  const removeExport = useRemoveExport(requestDataExport?.exportedEntity, requestDataExport?.packageId, requestDataExport?.version)

  const [exporting, setExporting] = useState(false)
  const [needToGetExportStatus, setNeedToGetExportStatus] = useState(false)

  useEffect(() => {
    if (exportTask) {
      setExporting(true)
      setNeedToGetExportStatus(true)
    }
  }, [exportTask])

  useEffect(() => {
    if (exportStartingError) {
      showErrorNotification({
        title: 'Starting export failed',
        message: exportStartingError.message,
      })
    }
  }, [exportStartingError, showErrorNotification])

  const completeExport = useCallback(() => {
    removeExport()
    setExporting(false)
    setOpen(false)
    setNeedToGetExportStatus(false)
  }, [removeExport, setOpen])

  const [exportStatus, isLoadingExportStatus] = useExportStatus(
    exportTask?.exportId,
    needToGetExportStatus,
    completeExport,
    completeExport,
  )

  // Extract cached form data from local storage
  const { cachedFormData, setCachedFormField } = useLocalExportSettings(exportedEntity)

  // Initialize form with cached data or default values
  const { control, handleSubmit, setValue } = useForm<ExportSettingsFormData>({
    defaultValues: cachedFormData ?? fieldsDefaultValues,
  })

  // Handle form submission 
  const onSubmit = (data: ExportSettingsFormData): void => {
    let requestData: IRequestDataExport | undefined
    const removeOasExtensions = data[ExportSettingsFormFieldKind.OAS_EXTENSIONS] === ExportSettingsFormFieldOptionOasExtensions.REMOVE
    const fileFormat: ExportedFileFormat = data[ExportSettingsFormFieldKind.FILE_FORMAT] as ExportedFileFormat
    switch (exportedEntity) {
      case ExportedEntityKind.VERSION:
        requestData = new RequestDataExportVersion(
          packageId,
          version,
          fileFormat,
          removeOasExtensions,
        )
        break
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

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        Export Settings
      </DialogTitle>
      <DialogContent>
        <ExportSettingsForm
          disabled={initializing || exporting}
          fields={fields}
          exportConfig={exportConfig}
          control={control}
          setValue={setValue}
          setCachedFormField={setCachedFormField}
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton
          disabled={initializing || exporting}
          loading={isStartingExport || exporting}
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Export
        </LoadingButton>
        <Button
          disabled={initializing}
          variant="outlined"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
