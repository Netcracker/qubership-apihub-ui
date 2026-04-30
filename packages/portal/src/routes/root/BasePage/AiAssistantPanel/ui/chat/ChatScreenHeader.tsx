import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { CloseIcon } from '@netcracker/qubership-apihub-ui-shared/icons/CloseIcon'
import { NewChatIcon } from '@netcracker/qubership-apihub-ui-shared/icons/NewChatIcon'
import { RobotIcon } from '@netcracker/qubership-apihub-ui-shared/icons/RobotIcon'
import type { FC } from 'react'
import { memo } from 'react'
import { useCreateAiChat } from '../../api/useCreateAiChat'
import { useAiAssistantContext } from '../../state/AiAssistantContext'

export const ChatScreenHeader: FC = memo(() => {
  const { closePanel } = useAiAssistantContext()
  const createChat = useCreateAiChat()

  return (
    <HeaderRoot>
      <HeaderToolbar>
        <HeaderTitleRow>
          <HeaderAvatar>
            <RobotIcon color="inherit" />
          </HeaderAvatar>
          <Typography variant="h5" noWrap component="span">
            AI Assistant
          </Typography>
        </HeaderTitleRow>
        <HeaderActions>
          <IconButton
            aria-label="New chat"
            data-testid="AiAssistantNewChatButton"
            disabled={createChat.isPending}
            onClick={() => createChat.mutate(undefined)}
            size="small"
            color="inherit"
          >
            <NewChatIcon />
          </IconButton>
          <IconButton
            aria-label="Close AI Assistant"
            data-testid="AiAssistantPanelCloseButton"
            onClick={closePanel}
            size="small"
            color="inherit"
          >
            <CloseIcon />
          </IconButton>
        </HeaderActions>
      </HeaderToolbar>
      <Divider orientation="horizontal" variant="fullWidth" flexItem />
    </HeaderRoot>
  )
})

const HeaderRoot = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
})

const HeaderToolbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  padding: theme.spacing(3),
  minWidth: 0,
}))

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

const HeaderActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  flexShrink: 0,
}))
