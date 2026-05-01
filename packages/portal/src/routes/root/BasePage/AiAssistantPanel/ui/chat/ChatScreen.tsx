import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { BackArrowIcon } from '@netcracker/qubership-apihub-ui-shared/icons/BackArrowIcon'
import { CloseIcon } from '@netcracker/qubership-apihub-ui-shared/icons/CloseIcon'
import type { FC } from 'react'
import { memo, useMemo, useRef } from 'react'
import type { AiChatMessage, MessageId } from '../../api/types'
import { useAiChatMessages } from '../../api/useAiChatMessages'
import { showAiAssistantDevTriggers } from '../../dev/aiAssistantDevEnv'
import { AiAssistantMockTriggerBar } from '../../dev/AiAssistantMockTriggerBar'
import { AI_ASSISTANT_HISTORY_SCREEN, useAiAssistantContext } from '../../state/AiAssistantContext'
import { ChatScreenHeader } from './ChatScreenHeader'
import { Composer } from './Composer'
import { MessageList } from './MessageList'
import { ThinkingIndicator } from './ThinkingIndicator'
import { WelcomePlaceholder } from './WelcomePlaceholder'

export const ChatScreen: FC = memo(() => {
  const { open, screen, activeChatId, openChatScreen, closePanel, streaming } = useAiAssistantContext()
  const insertDraftSnippetRef = useRef<((text: string) => void) | null>(null)
  const streamFreeze = Boolean(
    streaming.isBusy &&
      streaming.activeTurnChatId !== null &&
      streaming.activeTurnChatId === activeChatId,
  )
  const messagesQuery = useAiChatMessages(activeChatId, { streamFreeze })

  const messagesOldestFirst = useMemo(() => {
    if (!messagesQuery.data?.pages?.length) {
      return []
    }
    const newestFirst = messagesQuery.data.pages.flatMap((page) => page.messages)
    return [...newestFirst].reverse()
  }, [messagesQuery.data?.pages])

  const streamingAssistantLive = useMemo((): { messageId: MessageId; content: string } | null => {
    if (streaming.state.status !== 'started') {
      return null
    }
    const turnChatId = streaming.activeTurnChatId
    if (turnChatId === null || turnChatId !== activeChatId) {
      return null
    }
    return {
      messageId: streaming.state.assistantMessageId,
      content: streaming.state.buffer,
    }
  }, [activeChatId, streaming.activeTurnChatId, streaming.state])

  const displayMessages = useMemo((): AiChatMessage[] => {
    const base = messagesOldestFirst
    if (!streamingAssistantLive) {
      return base
    }
    const hasFinalAssistant = base.some(
      (m) => m.messageId === streamingAssistantLive.messageId && m.role === 'assistant',
    )
    if (hasFinalAssistant) {
      return base
    }
    const synthetic: AiChatMessage = {
      messageId: streamingAssistantLive.messageId,
      clientMessageId: null,
      role: 'assistant',
      content: streamingAssistantLive.content,
      createdAt: new Date().toISOString(),
    }
    return [...base, synthetic]
  }, [messagesOldestFirst, streamingAssistantLive])

  const showWelcome = activeChatId === null ||
    (messagesQuery.isSuccess && displayMessages.length === 0)

  const showThread = activeChatId !== null && displayMessages.length > 0

  const showThreadLoading = activeChatId !== null &&
    messagesQuery.isLoading &&
    displayMessages.length === 0

  const thinkingVisible = streaming.state.status === 'pending' &&
    streaming.activeTurnChatId !== null &&
    streaming.activeTurnChatId === activeChatId

  const jumpPhase = streaming.isBusy ? 'active' : 'idle'

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
                messages={displayMessages}
                hasNextPage={Boolean(messagesQuery.hasNextPage)}
                isFetchingNextPage={messagesQuery.isFetchingNextPage}
                fetchNextPage={messagesQuery.fetchNextPage}
                jumpButtonStreamPhase={jumpPhase}
                streamingAssistantMessageId={streamingAssistantLive?.messageId ?? null}
              />
              <ThinkingSlot>
                <ThinkingIndicator visible={thinkingVisible} />
              </ThinkingSlot>
            </>
          )
          : null}
      </Body>
      <Composer
        panelOpen={open}
        chatKey={activeChatId ?? 'none'}
        insertDraftSnippetRef={insertDraftSnippetRef}
      />
      {showAiAssistantDevTriggers
        ? (
          <AiAssistantMockTriggerBar
            onInsertSnippet={(text) => {
              insertDraftSnippetRef.current?.(text)
            }}
          />
        )
        : null}
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
