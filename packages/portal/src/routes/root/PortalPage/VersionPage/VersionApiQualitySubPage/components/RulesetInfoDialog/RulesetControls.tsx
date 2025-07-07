import { useShowSuccessNotification } from '@apihub/routes/root/BasePage/Notification'
import { Box, Typography } from '@mui/material'
import { ButtonWithHint } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ButtonWithHint'
import { DownloadIcon } from '@netcracker/qubership-apihub-ui-shared/icons/DownloadIcon'
import { FileIcon } from '@netcracker/qubership-apihub-ui-shared/icons/FileIcon'
import { LinkIcon } from '@netcracker/qubership-apihub-ui-shared/icons/LinkIcon'
import type { FC } from 'react'
import { useCopyToClipboard, useLocation } from 'react-use'
import { getPublicLink, useDownloadRuleset } from '../../../useDownloadRuleset'
import type { RulesetLite } from '../../types'

type RulesetControlsProps = {
  ruleset: RulesetLite
}

const ICON_COLOR = '#626D82'
const ICON_SIZE = '20px'

export const RulesetControls: FC<RulesetControlsProps> = (props) => {
  const { ruleset } = props

  const downloadRuleset = useDownloadRuleset()

  const { host, protocol } = useLocation()
  const [, copyToClipboard] = useCopyToClipboard()
  const showNotification = useShowSuccessNotification()

  return (
    <Box display='flex' flexDirection='column' gap={1}>
      <Typography variant='h6' color='black' fontWeight='bold'>
        Spectral Ruleset
      </Typography>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center' gap={1}>
          <FileIcon color='black' />
          <Typography variant='body2'>
            {ruleset.name}
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' gap={1}>
          <ButtonWithHint
            size="small"
            area-label="Download Ruleset"
            hint='Download'
            className="hoverable"
            startIcon={<DownloadIcon color={ICON_COLOR} />}
            sx={{ height: ICON_SIZE }}
            onClick={() => downloadRuleset({ rulesetId: ruleset.id })}
          />
          <ButtonWithHint
            size="small"
            area-label="Copy public link to ruleset"
            hint='Copy public URL'
            className="hoverable"
            startIcon={<LinkIcon color={ICON_COLOR} />}
            sx={{ height: ICON_SIZE }}
            onClick={() => {
              if (host && protocol) {
                const publicLink = getPublicLink(host, protocol, ruleset.id)
                copyToClipboard(publicLink)
                showNotification({ message: 'Public URL copied' })
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
