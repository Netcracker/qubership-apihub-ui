import { IconButton } from '@mui/material'
import { type FC, memo, useCallback } from 'react'

import { RobotIcon } from '@netcracker/qubership-apihub-ui-shared/icons/RobotIcon'
import { useAiAssistantContext } from './state/AiAssistantContext'

export const AiAssistantHeaderButton: FC = memo(() => {
  const { open, openPanel, closePanel } = useAiAssistantContext()

  const handleClick = useCallback((): void => {
    if (open) {
      closePanel()
    } else {
      openPanel()
    }
  }, [closePanel, open, openPanel])

  return (
    <IconButton
      data-testid="AiAssistantButton"
      size="large"
      color="inherit"
      aria-label="AI Assistant"
      aria-pressed={open}
      onClick={handleClick}
    >
      <RobotIcon />
    </IconButton>
  )
})
