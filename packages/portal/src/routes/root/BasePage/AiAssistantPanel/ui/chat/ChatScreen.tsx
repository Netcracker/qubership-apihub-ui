import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { BackArrowIcon } from '@netcracker/qubership-apihub-ui-shared/icons/BackArrowIcon'
import { CloseIcon } from '@netcracker/qubership-apihub-ui-shared/icons/CloseIcon'
import type { FC } from 'react'
import { memo, useMemo } from 'react'
import { useAiChatMessages } from '../../api/useAiChatMessages'
import { AI_ASSISTANT_HISTORY_SCREEN, useAiAssistantContext } from '../../state/AiAssistantContext'
import { ChatScreenHeader } from './ChatScreenHeader'
import { Composer } from './Composer'
import { MessageList } from './MessageList'
import { WelcomePlaceholder } from './WelcomePlaceholder'

export const ChatScreen: FC = memo(() => {
  const { open, screen, activeChatId, openChatScreen, closePanel } = useAiAssistantContext()
  const messagesQuery = useAiChatMessages(activeChatId)

  const messagesOldestFirst = useMemo(() => {
    if (!messagesQuery.data?.pages?.length) {
      return []
    }
    const newestFirst = messagesQuery.data.pages.flatMap((page) => page.messages)
    return [...newestFirst].reverse()
  }, [messagesQuery.data?.pages])

  const showWelcome = activeChatId === null ||
    (messagesQuery.isSuccess && messagesOldestFirst.length === 0)

  const showThread = activeChatId !== null && messagesOldestFirst.length > 0

  const showThreadLoading = activeChatId !== null &&
    messagesQuery.isLoading &&
    messagesOldestFirst.length === 0

  if (screen === AI_ASSISTANT_HISTORY_SCREEN) {
    return (
      <ChatLayout>
        <HistoryHeader>
          <HistoryHeaderToolbar>
            <IconButton
              aria-label="Back to chat"
              onClick={() => openChatScreen(activeChatId)}
            >
              <BackArrowIcon />
            </IconButton>
            <HistoryTitle variant="h3" noWrap>
              Chat history
            </HistoryTitle>
            <HistoryHeaderActions>
              <IconButton aria-label="Close AI Assistant" onClick={closePanel}>
                <CloseIcon />
              </IconButton>
            </HistoryHeaderActions>
          </HistoryHeaderToolbar>
          <Divider orientation="horizontal" variant="fullWidth" flexItem />
        </HistoryHeader>
        <HistoryBody>
          <Typography variant="body2" color="text.secondary">
            Chat history is coming in a later release.
          </Typography>
        </HistoryBody>
      </ChatLayout>
    )
  }

  return (
    <ChatLayout>
      <ChatScreenHeader />
      <Body>
        {messagesQuery.isError
          ? (
            <Centered>
              <Typography color="error" variant="body2">
                Could not load messages.
              </Typography>
            </Centered>
          )
          : showThreadLoading
          ? (
            <Centered>
              <CircularProgress size={28} />
            </Centered>
          )
          : showWelcome
          ? <WelcomePlaceholder />
          : showThread && activeChatId
          ? (
            <>
              <MessageList
                chatId={activeChatId}
                messages={messagesOldestFirst}
                hasNextPage={Boolean(messagesQuery.hasNextPage)}
                isFetchingNextPage={messagesQuery.isFetchingNextPage}
                fetchNextPage={messagesQuery.fetchNextPage}
                jumpButtonStreamPhase="idle"
              />
              <ThinkingSlot />
            </>
          )
          : null}
      </Body>
      <Composer panelOpen={open} chatKey={activeChatId ?? 'none'} />
    </ChatLayout>
  )
})

const ChatLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
})

const Body = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
})

const Centered = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  minHeight: 0,
  padding: theme.spacing(2),
}))

const ThinkingSlot = styled(Box)({
  flexShrink: 0,
  minHeight: 0,
})

const HistoryHeader = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
})

const HistoryHeaderToolbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  minHeight: 0,
  padding: theme.spacing(3),
}))

const HistoryTitle = styled(Typography)({
  flex: 1,
  minWidth: 0,
})

const HistoryHeaderActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
})

const HistoryBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  flex: 1,
  minHeight: 0,
  padding: theme.spacing(2),
}))
