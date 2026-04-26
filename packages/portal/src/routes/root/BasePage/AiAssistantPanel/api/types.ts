import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'

export type ChatId = Key
export type MessageId = Key
export type ClientMessageId = Key
export type FileId = Key

export type AiChatRole = 'user' | 'assistant'

export type AiChat = {
  chatId: ChatId
  title: string
  pinned: boolean
  pinnedAt: string | null
  createdAt: string
  lastMessageAt: string
  messagesCount: number
}

export type AiChatAttachment = {
  fileId: FileId
  fileName: string
  mimeType?: string
  sizeBytes?: number
  url: string
  expiresAt: string
}

export type AiChatMessage = {
  messageId: MessageId
  clientMessageId: ClientMessageId | null
  role: AiChatRole
  content: string
  createdAt: string
  attachments?: AiChatAttachment[]
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

export type AiChatUsage = {
  promptTokens?: number
  completionTokens?: number
  totalTokens?: number
}

export type AiChatStreamEvent =
  | { type: 'context.compacted'; messagesCompactedCount: number }
  | { type: 'message.assistant.start'; messageId: MessageId }
  | { type: 'tool.started'; toolCallId: string; name: string }
  | {
    type: 'tool.completed'
    toolCallId: string
    name: string
    status: 'ok' | 'error'
    durationMs?: number
  }
  | { type: 'message.assistant.delta'; delta: string }
  | { type: 'message.assistant.completed'; message: AiChatMessage; usage?: AiChatUsage }
  | { type: 'error'; code: AiChatErrorCode; message: string }
  | { type: 'done' }
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
