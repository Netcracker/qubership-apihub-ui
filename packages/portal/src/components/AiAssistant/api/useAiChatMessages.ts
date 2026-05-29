import { useInfiniteQuery, type UseInfiniteQueryResult } from '@tanstack/react-query'

import { aiChatJson } from './client'
import { AI_CHAT_PAGE_LIMIT } from './constants'
import { aiChatMessagesPath } from './paths'
import { aiChatMessagesKey } from './queryKeys'
import type { AiChatMessagesListResponse, ChatId } from './types'

export function useAiChatMessages(chatId: ChatId | null): UseInfiniteQueryResult<AiChatMessagesListResponse, Error> {
  return useInfiniteQuery<AiChatMessagesListResponse, Error>({
    queryKey: aiChatMessagesKey(chatId),
    enabled: chatId !== null,
    staleTime: Number.POSITIVE_INFINITY,
    queryFn: async ({ pageParam, signal }) => {
      const params = new URLSearchParams({ limit: String(AI_CHAT_PAGE_LIMIT) })
      if (typeof pageParam === 'string' && pageParam.length > 0) {
        params.set('before', pageParam)
      }
      return aiChatJson<AiChatMessagesListResponse>(
        `${aiChatMessagesPath(chatId!)}?${params.toString()}`,
        undefined,
        signal,
      )
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasMore || lastPage.messages.length === 0) {
        return undefined
      }
      const oldestInPage = lastPage.messages[lastPage.messages.length - 1]
      return oldestInPage?.createdAt
    },
  })
}
