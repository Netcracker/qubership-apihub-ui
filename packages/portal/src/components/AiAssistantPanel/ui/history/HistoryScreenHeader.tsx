import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { type FC, memo } from 'react'

import { BackArrowIcon } from '@netcracker/qubership-apihub-ui-shared/icons/BackArrowIcon'
import { AiAssistantHeaderActions } from '../header/AiAssistantHeaderActions'
import { AiAssistantPanelHeader } from '../header/AiAssistantPanelHeader'

export type HistoryScreenHeaderProps = {
  newChatDisabled: boolean
  onBack: () => void
  onNewChat: () => void
  onClose: () => void
  onHistory: () => void
}

export const HistoryScreenHeader: FC<HistoryScreenHeaderProps> = memo(({
  newChatDisabled,
  onBack,
  onNewChat,
  onClose,
  onHistory,
}) => {
  return (
    <AiAssistantPanelHeader>
      <IconButton
        aria-label="Back to chat"
        data-testid="AiAssistantHistoryBackButton"
        onClick={onBack}
        color="inherit"
      >
        <BackArrowIcon fontSize="small" />
      </IconButton>
      <HeaderTitle variant="h5" noWrap>
        History
      </HeaderTitle>
      <AiAssistantHeaderActions
        newChatDisabled={newChatDisabled}
        onNewChat={onNewChat}
        onHistory={onHistory}
        onClose={onClose}
        newChatTestId="AiAssistantHistoryNewChatButton"
        historyTestId="AiAssistantHistoryButton"
      />
    </AiAssistantPanelHeader>
  )
})

const HeaderTitle = styled(Typography)({
  flex: 1,
  minWidth: 0,
})
