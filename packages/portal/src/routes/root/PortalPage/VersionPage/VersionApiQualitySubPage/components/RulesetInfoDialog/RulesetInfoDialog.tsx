import { Box, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { useCallback, type FC } from 'react'
import type { Ruleset } from '../../types'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { RulesetActivationHistoryTable } from './RulesetActivationHistoryTable'
import { RulesetControls } from './RulesetControls'

export const SHOW_RULESET_INFO_DIALOG = 'show-ruleset-info-dialog'

const RulesetInfoPopup: FC<PopupProps> = (props) => {
  const { open, setOpen } = props
  const detail = props.detail as Ruleset

  const onClose = useCallback(() => { setOpen(false) }, [setOpen])

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          {detail.name} Ruleset ({detail.status})
          <IconButton
            sx={{ color: '#353C4E', p: 0 }}
            onClick={onClose}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ pb: 2 }}>
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
