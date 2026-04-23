// TypeScript mirror of the AI Chat API contract used by the mock server.
//
// These types are intentionally duplicated here (instead of imported from the
// frontend feature module) so that the mock server stays buildable in isolation
// and the frontend can evolve its own branded-type wrappers on top.

export type AiChatRole = 'user' | 'assistant'

export type AiChatClientConfig = {
  maxPinnedPerUser: number
  maxUserMessageLength: number
}

export type AiChat = {
  chatId: string
  title: string
  pinned: boolean
  pinnedAt: string | null
  createdAt: string
  lastMessageAt: string
  messagesCount: number
}

export type AiChatAttachment = {
  fileId: string
  fileName: string
  mimeType?: string
  sizeBytes?: number
  url: string
  expiresAt: string
}

export type AiChatMessage = {
  messageId: string
  clientMessageId: string | null
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
  clientMessageId?: string
}

export type AiChatUsage = {
  promptTokens?: number
  completionTokens?: number
  totalTokens?: number
}

// SSE events emitted by POST /chats/:id/messages/stream.
// The UI cares about a subset of events, while the mock keeps the full event shape.
// The mock preserves the full shape so that the UI parser's forward-compat path
// is exercised end-to-end.
export type AiChatStreamEvent =
  | { type: 'context.compacted'; messagesCompactedCount: number }
  | { type: 'message.assistant.start'; messageId: string }
  | { type: 'tool.started'; toolCallId: string; name: string }
  | {
    type: 'tool.completed'
    toolCallId: string
    name: string
    status: 'ok' | 'error'
    durationMs?: number
  }
  | { type: 'message.assistant.delta'; delta: string }
  | {
    type: 'message.assistant.completed'
    message: AiChatMessage
    usage?: AiChatUsage
  }
  | { type: 'error'; code: string; message: string }
  | { type: 'done' }

export type AiChatErrorCode =
  | 'APIHUB-AI-3001' // chat not found
  | 'APIHUB-AI-3002' // file not found
  | 'APIHUB-AI-4001' // message validation
  | 'APIHUB-AI-4003' // pin limit exceeded
  | 'APIHUB-AI-4004' // message too long
  | 'APIHUB-AI-4101' // file token expired
  | 'APIHUB-AI-5000'
  | 'APIHUB-AI-5001'
  | 'APIHUB-AI-5002'

export type AiChatErrorResponse = {
  status: number
  code: AiChatErrorCode
  message: string
}
