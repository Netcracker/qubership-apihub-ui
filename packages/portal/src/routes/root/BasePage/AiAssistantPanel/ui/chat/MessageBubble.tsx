import type { AiChatMessage } from '../../api/types'
import type { FC } from 'react'
import { memo } from 'react'
import { AssistantMessage } from './AssistantMessage'
import { UserMessage } from './UserMessage'

export type MessageBubbleProps = {
  message: AiChatMessage
  isStreamingAssistant?: boolean
}

export const MessageBubble: FC<MessageBubbleProps> = memo(({ message, isStreamingAssistant = false }) => {
  if (message.role === 'user') {
    return <UserMessage content={message.content} />
  }
  return <AssistantMessage content={message.content} isStreaming={isStreamingAssistant} />
})
