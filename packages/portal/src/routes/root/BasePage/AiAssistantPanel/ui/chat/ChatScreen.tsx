import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { type FC, memo, useCallback, useMemo, useRef } from 'react'

import Box from '@mui/material/Box'
import type { AiChatMessage, MessageId } from '../../api/types'
import { useAiChatMessages } from '../../api/useAiChatMessages'
import { showAiAssistantDevTriggers } from '../../dev/aiAssistantDevEnv'
import { AiAssistantMockTriggerBar } from '../../dev/AiAssistantMockTriggerBar'
import { AI_ASSISTANT_HISTORY_SCREEN, useAiAssistantContext } from '../../state/AiAssistantContext'
import { HistoryScreen } from '../history/HistoryScreen'
import { ChatScreenHeader } from './ChatScreenHeader'
import { Composer } from './Composer'
import { MessageList } from './MessageList'
import { ThinkingIndicator } from './ThinkingIndicator'
import { WelcomePlaceholder } from './WelcomePlaceholder'

export const ChatScreen: FC = memo(() => {
  const { closePanel, open, openHistory, screen, activeChatId, resetActiveChat, streaming } =
    useAiAssistantContext()
  const insertDraftSnippetRef = useRef<((text: string) => void) | null>(null)
  const messagesQuery = useAiChatMessages(activeChatId)

  const handleNewChat = useCallback((): void => {
    streaming.abort()
    streaming.reset()
    resetActiveChat()
  }, [resetActiveChat, streaming])

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

  const thinkingVisible =
    streaming.activeTurnChatId !== null &&
    streaming.activeTurnChatId === activeChatId &&
    (streaming.state.status === 'pending' ||
      (streaming.state.status === 'started' && streaming.thinkingDuringAssistantPause))

  const jumpPhase = streaming.isBusy ? 'active' : 'idle'

  if (screen === AI_ASSISTANT_HISTORY_SCREEN) {
    return <HistoryScreen />
  }

  return (
    <ChatLayout>
      <ChatScreenHeader
        newChatDisabled={false}
        onNewChat={handleNewChat}
        onHistory={openHistory}
        onClose={closePanel}
      />
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
