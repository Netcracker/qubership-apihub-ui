import CheckIcon from '@mui/icons-material/Check'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import type { FC } from 'react'
import { memo } from 'react'

export type CopyIconButtonProps = {
  ariaLabel: string
  copied: boolean
  onCopy: () => void | Promise<void>
}

export const CopyIconButton: FC<CopyIconButtonProps> = memo(({ ariaLabel, copied, onCopy }) => {
  return (
    <Tooltip
      title={copied ? 'Copied!' : ''}
      open={copied}
      placement="top"
      disableFocusListener
      disableHoverListener
      disableTouchListener
    >
      <span>
        <IconButton
          aria-label={ariaLabel}
          size="small"
          onClick={() => void onCopy()}
          color={copied ? 'success' : 'default'}
        >
          {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
        </IconButton>
      </span>
    </Tooltip>
  )
})
