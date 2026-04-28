import type { AiChatMessage } from '../../api/types'
import type { FC } from 'react'
import { memo } from 'react'
import { AssistantMessage } from './AssistantMessage'
import { UserMessage } from './UserMessage'

export type MessageBubbleProps = {
  message: AiChatMessage
}

export const MessageBubble: FC<MessageBubbleProps> = memo(({ message }) => {
  if (message.role === 'user') {
    return <UserMessage content={message.content} />
  }
  return <AssistantMessage content={message.content} />
})
