import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { PopupProps } from "@netcracker/qubership-apihub-ui-shared/components/PopupDelegate"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE, ExportSettingsFormData } from "../entities/export-settings-form"
import { ExportSettingsPlace } from "../entities/export-settings-place"
import { ExportSettingsForm } from "./ExportSettingsForm"

type ExportSettingsPopupProps = PopupProps & {
  place: ExportSettingsPlace
}

export const ExportSettingsPopup: FC<ExportSettingsPopupProps> = ({ open, setOpen, place }) => {
  const fields = EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE[place]

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
