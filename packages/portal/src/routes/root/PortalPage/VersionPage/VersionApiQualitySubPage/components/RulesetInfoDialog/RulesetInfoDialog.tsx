import { Box, Dialog, DialogContent, DialogTitle, IconButton, Skeleton } from '@mui/material'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { useCallback, type FC } from 'react'
import type { RulesetLite } from '@apihub/routes/root/api-quality-ruleset'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { NAVIGATION_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { useRulesetMetadata } from '../../api/useRulesetMetadata'
import { RulesetActivationHistoryTable } from './RulesetActivationHistoryTable'
import { RulesetFilePanel } from '../../RulesetFilePanel'

export const SHOW_RULESET_INFO_DIALOG = 'show-ruleset-info-dialog'

const RulesetInfoPopup: FC<PopupProps> = (props) => {
  const { open, setOpen } = props
  const detail = props.detail as RulesetLite

  const [ruleset, loadingRuleset] = useRulesetMetadata(detail.id)

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
        {loadingRuleset && (
          <Skeleton variant='text' height={20} />
        )}
        {!loadingRuleset && (
          <Placeholder
            invisible={!!ruleset}
            area={NAVIGATION_PLACEHOLDER_AREA}
            message='No ruleset found'
          >
            <Box display='flex' flexDirection='column' gap={1}>
              <RulesetFilePanel ruleset={detail} />
              <RulesetActivationHistoryTable data={ruleset!.activationHistory} />
            </Box>
          </Placeholder>
        )}
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
