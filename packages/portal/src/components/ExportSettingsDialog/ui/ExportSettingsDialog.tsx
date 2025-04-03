import { PopupDelegate } from "@netcracker/qubership-apihub-ui-shared/components/PopupDelegate"
import { FC } from "react"
import { ExportSettingsPopup } from "./ExportSettingsPopup"
import { ExportSettingsPlace } from "../entities/export-settings-place"

const POPUP_TYPE_EXPORT_SETTINGS_DIALOG = "popup-export-settings-dialog"

type ExportSettingsDialogProps = {
  place: ExportSettingsPlace
}

export const ExportSettingsDialog: FC<ExportSettingsDialogProps> = ({ place }) => {
  return (
    <PopupDelegate
      type={POPUP_TYPE_EXPORT_SETTINGS_DIALOG}
      render={({ open, setOpen }) => (
        <ExportSettingsPopup open={open} setOpen={setOpen} place={place} />
      )}
    />
  )
}
