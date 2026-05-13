import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import { type FC, memo } from 'react'

import { ClockBackwardIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ClockBackwardIcon'
import { CloseIcon } from '@netcracker/qubership-apihub-ui-shared/icons/CloseIcon'
import { NewChatIcon } from '@netcracker/qubership-apihub-ui-shared/icons/NewChatIcon'

export type AiAssistantHeaderActionsProps = {
  newChatDisabled: boolean
  onNewChat: () => void
  onHistory: () => void
  onClose: () => void
  newChatTestId?: string
  historyTestId?: string
  closeTestId?: string
}

const DEFAULT_HISTORY_BUTTON_TEST_ID = 'AiAssistantHistoryButton'
const DEFAULT_NEW_CHAT_BUTTON_TEST_ID = 'AiAssistantNewChatButton'
const DEFAULT_CLOSE_BUTTON_TEST_ID = 'AiAssistantPanelCloseButton'

export const AiAssistantHeaderActions: FC<AiAssistantHeaderActionsProps> = memo(({
  newChatDisabled,
  onNewChat,
  onHistory,
  onClose,
  newChatTestId = DEFAULT_NEW_CHAT_BUTTON_TEST_ID,
  historyTestId = DEFAULT_HISTORY_BUTTON_TEST_ID,
  closeTestId = DEFAULT_CLOSE_BUTTON_TEST_ID,
}) => {
  return (
    <HeaderActions>
      <IconButton
        aria-label="New chat"
        data-testid={newChatTestId}
        disabled={newChatDisabled}
        onClick={onNewChat}
        color="inherit"
      >
        <NewChatIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="Chat history"
        data-testid={historyTestId}
        onClick={onHistory}
        color="inherit"
      >
        <ClockBackwardIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="Close AI Assistant"
        data-testid={closeTestId}
        onClick={onClose}
        color="inherit"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </HeaderActions>
  )
})

const HeaderActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  flexShrink: 0,
}))
