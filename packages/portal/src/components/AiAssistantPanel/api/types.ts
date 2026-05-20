import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'

import type { AI_CHAT_STREAM_EVENT } from './aiChatStream'

// Contract mirror: keep in sync with `server/mocks/ai-chat/types.ts` (string ids here use Key).
export type ChatId = Key
export type MessageId = Key
export type ClientMessageId = Key

export const AI_CHAT_ROLE = {
  user: 'user',
  assistant: 'assistant',
} as const

export type AiChatRole = (typeof AI_CHAT_ROLE)[keyof typeof AI_CHAT_ROLE]

export type AiChat = {
  chatId: ChatId
  title: string
  pinned?: boolean
  createdAt: string
  lastMessageAt: string
  messagesCount: number
}

export type AiChatToolInvocation = {
  name: string
  status: 'ok' | 'error'
  durationMs?: number
}

export type AiChatMessage = {
  messageId: MessageId
  clientMessageId: ClientMessageId | null
  role: AiChatRole
  content: string
  createdAt: string
  toolInvocations?: AiChatToolInvocation[]
}

export type AiChatsListResponse = {
  chats: AiChat[]
  hasMore: boolean
}

export type AiChatMessagesListResponse = {
  messages: AiChatMessage[]
  hasMore: boolean
}

export type AiChatCreateRequest = {
  title?: string
}

export type AiChatUpdateRequest = {
  title?: string
  pinned?: boolean
}

export type AiChatSendRequest = {
  content: string
  clientMessageId?: ClientMessageId
}

export type AiChatSendMessageResponse = {
  userMessage: AiChatMessage
  assistantMessage: AiChatMessage
}

export type AiChatStreamEvent =
  | { type: typeof AI_CHAT_STREAM_EVENT.contextCompacted; messagesCompactedCount: number }
  | { type: typeof AI_CHAT_STREAM_EVENT.assistantStart; messageId: MessageId }
  | { type: typeof AI_CHAT_STREAM_EVENT.toolStarted; toolCallId: string; name: string }
  | {
    type: typeof AI_CHAT_STREAM_EVENT.toolCompleted
    toolCallId: string
    name: string
    status: 'ok' | 'error'
    durationMs?: number
  }
  | { type: typeof AI_CHAT_STREAM_EVENT.assistantDelta; delta: string }
  | { type: typeof AI_CHAT_STREAM_EVENT.assistantCompleted; message: AiChatMessage }
  | { type: typeof AI_CHAT_STREAM_EVENT.error; code: AiChatErrorCode; message: string }
  | { type: typeof AI_CHAT_STREAM_EVENT.done }
  | { type: string; [k: string]: unknown }

export type AiChatErrorCode =
  | 'APIHUB-AI-3001'
  | 'APIHUB-AI-3002'
  | 'APIHUB-AI-4001'
  | 'APIHUB-AI-4003'
  | 'APIHUB-AI-4004'
  | 'APIHUB-AI-4101'
  | 'APIHUB-AI-5000'
  | 'APIHUB-AI-5001'
  | 'APIHUB-AI-5002'

export type AiChatErrorResponse = {
  status: number
  code: AiChatErrorCode
  message: string
}

export const MAX_PINNED_PER_USER = 3 as const
export const MAX_USER_MESSAGE_LENGTH = 32_000 as const
