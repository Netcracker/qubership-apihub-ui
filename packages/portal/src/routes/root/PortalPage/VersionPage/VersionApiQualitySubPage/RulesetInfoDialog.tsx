import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import type { FC } from 'react'
import type { Ruleset } from './types'

import { RulesetControls } from './RulesetControls'
import { RulesetActivationHistoryTable } from './RulesetActivationHistoryTable'

export const SHOW_RULESET_INFO_DIALOG = 'show-ruleset-info-dialog'

const RulesetInfoPopup: FC<PopupProps> = (props) => {
  const { open, setOpen } = props
  const detail = props.detail as Ruleset
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        {detail.name} Ruleset ({detail.status})
      </DialogTitle>
      <DialogContent>
        <Box display='flex' flexDirection='column' gap={1}>
          <RulesetControls ruleset={detail} />
          <RulesetActivationHistoryTable data={detail.activationHistory} />
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export const RulesetInfoDialog: FC = () => {
  return (
    <PopupDelegate
      type={SHOW_RULESET_INFO_DIALOG}
      render={props => <RulesetInfoPopup {...props} />}
    />
  )
}
