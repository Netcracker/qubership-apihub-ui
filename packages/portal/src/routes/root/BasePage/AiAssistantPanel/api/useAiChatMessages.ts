import { useInfiniteQuery } from '@tanstack/react-query'
import type { UseInfiniteQueryResult } from '@tanstack/react-query'
import { aiChatJson } from './client'
import { aiChatMessagesKey } from './queryKeys'
import type { AiChatMessagesListResponse, ChatId } from './types'

const MESSAGES_PAGE_LIMIT = 100

export type UseAiChatMessagesOptions = {
  /** While true, treat cached messages as fresh so streaming optimistic rows are not overwritten by a background refetch. */
  streamFreeze?: boolean
}

export function useAiChatMessages(
  chatId: ChatId | null,
  options?: UseAiChatMessagesOptions,
): UseInfiniteQueryResult<AiChatMessagesListResponse, Error> {
  const streamFreeze = Boolean(options?.streamFreeze)
  return useInfiniteQuery<AiChatMessagesListResponse, Error>({
    queryKey: chatId ? aiChatMessagesKey(chatId) : ['ai-chat', 'messages', 'disabled'],
    enabled: chatId !== null,
    staleTime: streamFreeze ? Number.POSITIVE_INFINITY : 0,
    queryFn: async ({ pageParam, signal }) => {
      const params = new URLSearchParams({ limit: String(MESSAGES_PAGE_LIMIT) })
      if (typeof pageParam === 'string' && pageParam.length > 0) {
        params.set('before', pageParam)
      }
      return aiChatJson<AiChatMessagesListResponse>(
        `/ai-chat/chats/${encodeURIComponent(chatId!)}/messages?${params.toString()}`,
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
