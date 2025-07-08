import type { Key } from '@apihub/entities/keys'
import { ButtonWithHint } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ButtonWithHint'
import { DownloadIcon } from '@netcracker/qubership-apihub-ui-shared/icons/DownloadIcon'
import { LinkIcon } from '@netcracker/qubership-apihub-ui-shared/icons/LinkIcon'
import type { FC } from 'react'
import { useCopyToClipboard, useLocation } from 'react-use'
import { useShowSuccessNotification } from '../routes/root/BasePage/Notification'
import { getPublicLink, useDownloadRuleset } from '../routes/root/useDownloadRuleset'

const ICON_COLOR = '#626D82'
const ICON_SIZE = '20px'

type RulesetFileControlsProps = {
  rulesetId: Key
}

export const RulesetFileControls: FC<RulesetFileControlsProps> = (props) => {
  const { rulesetId } = props

  const downloadRuleset = useDownloadRuleset()

  const { host, protocol } = useLocation()
  const [, copyToClipboard] = useCopyToClipboard()
  const showNotification = useShowSuccessNotification()

  return <>
    <ButtonWithHint
      size="small"
      area-label="Download Ruleset"
      hint='Download'
      className="hoverable"
      startIcon={<DownloadIcon color={ICON_COLOR} />}
      sx={{ height: ICON_SIZE }}
      onClick={() => downloadRuleset({ rulesetId })}
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
          const publicLink = getPublicLink(host, protocol, rulesetId)
          copyToClipboard(publicLink)
          showNotification({ message: 'Public URL copied' })
        }
      }}
    />
  </>
}
