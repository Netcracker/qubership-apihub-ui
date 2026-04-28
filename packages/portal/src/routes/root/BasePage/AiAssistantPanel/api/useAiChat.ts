import { useQuery } from '@tanstack/react-query'
import type { UseQueryResult } from '@tanstack/react-query'
import type { ChatId } from './types'
import { aiChatItemKey } from './queryKeys'
import { aiChatJson } from './client'
import type { AiChat } from './types'

export function useAiChat(chatId: ChatId | null): UseQueryResult<AiChat, Error> {
  return useQuery({
    queryKey: chatId ? aiChatItemKey(chatId) : ['ai-chat', 'chat', 'disabled'],
    queryFn: ({ signal }) =>
      aiChatJson<AiChat>(`/ai-chat/chats/${encodeURIComponent(chatId!)}`, undefined, signal),
    enabled: chatId !== null,
  })
}
