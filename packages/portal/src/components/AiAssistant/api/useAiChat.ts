import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import { aiChatJson } from './client'
import { aiChatItemPath } from './paths'
import { aiChatItemKey } from './queryKeys'
import type { AiChat, ChatId } from './types'

export function useAiChat(chatId: ChatId | null): UseQueryResult<AiChat, Error> {
  return useQuery({
    queryKey: aiChatItemKey(chatId),
    queryFn: ({ signal }) => aiChatJson<AiChat>(aiChatItemPath(chatId!), undefined, signal),
    enabled: chatId !== null,
  })
}
