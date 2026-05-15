import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import { aiChatJson } from './client'
import { aiChatItemKey } from './queryKeys'
import type { AiChat, ChatId } from './types'

export function useAiChat(chatId: ChatId | null): UseQueryResult<AiChat, Error> {
  return useQuery({
    queryKey: chatId ? aiChatItemKey(chatId) : ['ai-chat', 'chat', 'disabled'],
    queryFn: ({ signal }) => aiChatJson<AiChat>(`/ai-chat/chats/${encodeURIComponent(chatId!)}`, undefined, signal),
    enabled: chatId !== null,
  })
}
