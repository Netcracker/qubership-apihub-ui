import { useInfiniteQuery, type QueryFunction, type UseInfiniteQueryResult } from '@tanstack/react-query'

import { aiChatJson } from './client'
import { AI_CHAT_PAGE_LIMIT } from './constants'
import { AI_CHAT_CHATS_PATH } from './paths'
import { aiChatListKey } from './queryKeys'
import type { AiChatsListResponse } from './types'

export function useAiChats(search: string): UseInfiniteQueryResult<AiChatsListResponse, Error> {
  const normalizedSearch = search.trim()

  return useInfiniteQuery<
    AiChatsListResponse,
    Error,
    AiChatsListResponse,
    ReturnType<typeof aiChatListKey>
  >({
    queryKey: aiChatListKey(normalizedSearch),
    queryFn: (async ({ pageParam, signal }) => {
      const params = new URLSearchParams({ limit: String(AI_CHAT_PAGE_LIMIT) })
      if (normalizedSearch) {
        params.set('search', normalizedSearch)
      }
      if (pageParam !== undefined) {
        params.set('before', pageParam)
      }

      return aiChatJson<AiChatsListResponse>(
        `${AI_CHAT_CHATS_PATH}?${params.toString()}`,
        undefined,
        signal,
      )
    }) satisfies QueryFunction<
      AiChatsListResponse,
      ReturnType<typeof aiChatListKey>,
      string | undefined
    >,
    getNextPageParam: (lastPage): string | undefined => {
      if (!lastPage.hasMore || lastPage.chats.length === 0) {
        return undefined
      }
      return lastPage.chats[lastPage.chats.length - 1]?.lastMessageAt
    },
  })
}
