import type { ChatId } from './types'

export const AI_CHAT_ROOT = 'ai-chat' as const

export const aiChatListKey = (search?: string) => [AI_CHAT_ROOT, 'chats', { search: search ?? '' }] as const
export const aiChatItemKey = (chatId: ChatId) => [AI_CHAT_ROOT, 'chats', chatId] as const
export const aiChatMessagesKey = (chatId: ChatId) => [AI_CHAT_ROOT, 'messages', chatId] as const
