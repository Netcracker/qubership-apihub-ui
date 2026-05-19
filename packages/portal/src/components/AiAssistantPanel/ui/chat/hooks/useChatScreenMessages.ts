import { useMemo } from 'react'

import type { AiChatMessage, ChatId, MessageId } from '../../../api/types'
import type { AiAssistantStreamingApi } from '../../../state/AiAssistantContext'

type MessagePage = {
  messages: AiChatMessage[]
}

type UseChatScreenMessagesParams = {
  activeChatId: ChatId | null
  messagePages: MessagePage[] | undefined
  messagesLoaded: boolean
  streaming: AiAssistantStreamingApi
}

type ChatScreenMessagesView = {
  displayMessages: AiChatMessage[]
  showWelcome: boolean
  showThread: boolean
  thinkingVisible: boolean
  jumpPhase: 'idle' | 'active'
  streamingAssistantMessageId: MessageId | null
}

export function useChatScreenMessages({
  activeChatId,
  messagePages,
  messagesLoaded,
  streaming,
}: UseChatScreenMessagesParams): ChatScreenMessagesView {
  const messagesOldestFirst = useMemo((): AiChatMessage[] => {
    if (!messagePages?.length) {
      return []
    }
    const newestFirst = messagePages.flatMap((page) => page.messages)
    return [...newestFirst].reverse()
  }, [messagePages])

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
    (messagesLoaded && displayMessages.length === 0)

  const showThread = activeChatId !== null && displayMessages.length > 0

  const thinkingVisible = streaming.activeTurnChatId !== null &&
    streaming.activeTurnChatId === activeChatId &&
    (streaming.state.status === 'pending' ||
      (streaming.state.status === 'started' && streaming.thinkingDuringAssistantPause))

  const jumpPhase = streaming.isBusy ? 'active' : 'idle'
  const streamingAssistantMessageId = streamingAssistantLive?.messageId ?? null

  return {
    displayMessages,
    showWelcome,
    showThread,
    thinkingVisible,
    jumpPhase,
    streamingAssistantMessageId,
  }
}
