import { PopupDelegate } from "@netcracker/qubership-apihub-ui-shared/components/PopupDelegate"
import { FC } from "react"
import { ExportedEntityKind } from "../api/useExport"
import { ExportSettingsPopup } from "./ExportSettingsPopup"

const POPUP_TYPE_EXPORT_SETTINGS_DIALOG = "popup-export-settings-dialog"

type ExportSettingsDialogProps = {
  exportedEntity: ExportedEntityKind
}

export const ExportSettingsDialog: FC<ExportSettingsDialogProps> = ({ exportedEntity }) => {
  return (
    <PopupDelegate
      type={POPUP_TYPE_EXPORT_SETTINGS_DIALOG}
      render={({ open, setOpen }) => (
        <ExportSettingsPopup open={open} setOpen={setOpen} exportedEntity={exportedEntity} />
      )}
    />
  )
}
