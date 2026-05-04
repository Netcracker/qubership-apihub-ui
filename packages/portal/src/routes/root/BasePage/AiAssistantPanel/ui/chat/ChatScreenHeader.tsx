import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { type FC, memo } from 'react'

import { RobotFilledIcon } from '@netcracker/qubership-apihub-ui-shared/icons/RobotFilledIcon'
import { AiAssistantHeaderActions } from '../common/AiAssistantHeaderActions'
import { AiAssistantPanelHeader } from '../common/AiAssistantPanelHeader'

export type ChatScreenHeaderProps = {
  newChatDisabled: boolean
  onNewChat: () => void
  onHistory: () => void
  onClose: () => void
}

export const ChatScreenHeader: FC<ChatScreenHeaderProps> = memo(({
  newChatDisabled,
  onNewChat,
  onHistory,
  onClose,
}) => {
  return (
    <AiAssistantPanelHeader>
      <HeaderTitleRow>
        <HeaderAvatar>
          <RobotFilledIcon color="inherit" />
        </HeaderAvatar>
        <Typography variant="h5" noWrap component="span">
          AI Assistant
        </Typography>
      </HeaderTitleRow>
      <AiAssistantHeaderActions
        newChatDisabled={newChatDisabled}
        onNewChat={onNewChat}
        onHistory={onHistory}
        onClose={onClose}
      />
    </AiAssistantPanelHeader>
  )
})

const HeaderTitleRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  minWidth: 0,
  flex: 1,
})

const HeaderAvatar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  borderRadius: '12px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  flexShrink: 0,
}))
