import { ExportSettingsPopupDetail } from "@apihub/routes/EventBusProvider"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { PopupProps } from "@netcracker/qubership-apihub-ui-shared/components/PopupDelegate"
import { FC, useState } from "react"
import { useForm } from "react-hook-form"
import { ExportedEntityKind, ExportedEntityTransformation, ExportedFileFormat, IRequestDataExport, RequestDataExportRestDocument, RequestDataExportRestOperationsGroup, RequestDataExportVersion, useExport } from "../api/useExport"
import { EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE, ExportSettingsFormData } from "../entities/export-settings-form"
import { ExportSettingsFormFieldKind, ExportSettingsFormFieldOptionOasExtensions } from "../entities/export-settings-form-field"
import { ExportSettingsForm } from "./ExportSettingsForm"

export const ExportSettingsPopup: FC<PopupProps> = ({ open, setOpen, detail }) => {
  const {
    exportedEntity,
    packageId,
    version,
    documentId,
    groupName,
  } = detail as ExportSettingsPopupDetail

  const fields = EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[exportedEntity]

  const [requestDataExport, setRequestDataExport] = useState<IRequestDataExport | undefined>(undefined)
  const [exportTask, isLoading, error] = useExport(requestDataExport)

  const { control, handleSubmit } = useForm<ExportSettingsFormData>({
    defaultValues: fields.reduce((acc, field) => {
      acc[field.kind] = field.defaultValue
      return acc
    }, {} as ExportSettingsFormData),
  })

  const onSubmit = (data: ExportSettingsFormData) => {
    let requestData: IRequestDataExport | undefined
    const removeOasExtensions = data[ExportSettingsFormFieldKind.OAS_EXTENSIONS] === ExportSettingsFormFieldOptionOasExtensions.REMOVE
    const fileFormat: ExportedFileFormat = data[ExportSettingsFormFieldKind.FILE_FORMAT] as ExportedFileFormat
    switch (exportedEntity) {
      case ExportedEntityKind.VERSION:
        requestData = new RequestDataExportVersion(
          packageId,
          version,
          removeOasExtensions
        )
        break
      case ExportedEntityKind.REST_DOCUMENT:
        requestData = new RequestDataExportRestDocument(
          documentId!,
          packageId,
          version,
          fileFormat,
          removeOasExtensions
        )
        break
      case ExportedEntityKind.REST_OPERATIONS_GROUP:
        requestData = new RequestDataExportRestOperationsGroup(
          groupName!,
          data[ExportSettingsFormFieldKind.SPECIFICATION_TYPE] as ExportedEntityTransformation,
          packageId,
          version,
          fileFormat,
          removeOasExtensions
        )
        break
    }
    setRequestDataExport(requestData)
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        Export Settings
      </DialogTitle>
      <DialogContent>
        <ExportSettingsForm fields={fields} control={control} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Export
        </Button>
        <Button
          variant="contained"
          color="secondary"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}
