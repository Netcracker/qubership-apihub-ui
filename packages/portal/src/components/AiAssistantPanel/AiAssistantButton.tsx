import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { type FC, memo, type MouseEvent, useCallback } from 'react'

import { ButtonWithHint } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ButtonWithHint'
import { RobotIcon } from '@netcracker/qubership-apihub-ui-shared/icons/RobotIcon'

import { useAiAssistantContext } from './state/AiAssistantContext'

export const AiAssistantButton: FC = memo(() => {
  const { open, openPanel, closePanel } = useAiAssistantContext()

  // A mouse down event handler to prevent immediate reopening of the panel when clicking on the header while it is open
  const handleMouseDown = useCallback((event: MouseEvent): void => {
    if (open) {
      event.stopPropagation()
    }
  }, [open])

  const handleClick = useCallback((): void => {
    const togglePanel = open ? closePanel : openPanel
    togglePanel()
  }, [closePanel, open, openPanel])

  return (
    <ToggleWrap onMouseDown={handleMouseDown}>
      <ButtonWithHint
        hint="AI Assistant"
        startIcon={<RobotIcon />}
        aria-label="AI Assistant"
        size="large"
        color="inherit"
        data-testid="AiAssistantButton"
        onClick={handleClick}
      />
    </ToggleWrap>
  )
})

const ToggleWrap = styled(Box)({
  display: 'inline-flex',
})
