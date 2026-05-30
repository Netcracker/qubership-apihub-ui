import { type FC, memo } from 'react'

import type { FetchNextPageOptions } from '@tanstack/react-query'

import type { AiChatMessage, ChatId } from '../../api/types'
import { useAiAssistantStreamingLive } from '../../state/AiAssistantContext'
import { ChatMessageList } from './ChatMessageList'
import { useChatScreenMessages } from './hooks/useChatScreenMessages'

type MessagePage = {
  messages: AiChatMessage[]
}

type ChatStreamingBodyProps = {
  activeChatId: ChatId
  messagePages: MessagePage[] | undefined
  messagesLoaded: boolean
  hasNextPage: boolean
  isFetchingNextPage: boolean
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<unknown>
}

export const ChatStreamingBody: FC<ChatStreamingBodyProps> = memo(({
  activeChatId,
  messagePages,
  messagesLoaded,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}) => {
  const streamingLive = useAiAssistantStreamingLive()

  const {
    displayMessages,
    showThread,
    thinkingVisible,
    jumpPhase,
    streamingAssistantMessageId,
  } = useChatScreenMessages({
    activeChatId,
    messagePages,
    messagesLoaded,
    streamingLive,
  })

  if (!showThread) {
    return null
  }

  return (
    <ChatMessageList
      chatId={activeChatId}
      messages={displayMessages}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
      jumpButtonStreamPhase={jumpPhase}
      streamingAssistantMessageId={streamingAssistantMessageId}
      thinkingVisible={thinkingVisible}
    />
  )
})

ChatStreamingBody.displayName = 'ChatStreamingBody'
