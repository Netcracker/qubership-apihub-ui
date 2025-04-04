import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { PopupProps } from "@netcracker/qubership-apihub-ui-shared/components/PopupDelegate"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { ExportedEntityKind } from "../api/useExport"
import { EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE, ExportSettingsFormData } from "../entities/export-settings-form"
import { ExportSettingsForm } from "./ExportSettingsForm"

type ExportSettingsPopupProps = PopupProps & {
  exportedEntity: ExportedEntityKind
}

export const ExportSettingsPopup: FC<ExportSettingsPopupProps> = ({ open, setOpen, exportedEntity }) => {
  const fields = EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[exportedEntity]

  const { control, handleSubmit } = useForm<ExportSettingsFormData>({
    defaultValues: fields.reduce((acc, field) => {
      acc[field.kind] = field.defaultValue
      return acc
    }, {} as ExportSettingsFormData),
  })

  const onSubmit = (data: ExportSettingsFormData) => {
    console.log(data)
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
