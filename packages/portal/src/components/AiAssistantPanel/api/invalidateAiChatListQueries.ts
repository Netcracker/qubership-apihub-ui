import type { QueryClient } from '@tanstack/react-query'

import { isAiChatsInfiniteListQueryKey } from './queryKeys'

export type InvalidateAiChatListQueriesOptions = {
  /**
   * `active` refetches only queries with mounted observers (avoids replaying every cached
   * search string after a mutation). Use `all` only when inactive list caches must refresh.
   */
  refetchType?: 'active' | 'inactive' | 'all' | 'none'
}

/**
 * Marks chat **list** (infinite) queries stale and refetches them.
 * Does not touch per-chat item keys (`aiChatItemKey`), which are not list queries and may
 * exist in cache without a `queryFn` (avoids "Missing queryFn" on invalidate).
 */
export function invalidateAiChatListQueries(
  queryClient: QueryClient,
  options?: InvalidateAiChatListQueriesOptions,
): Promise<void> {
  return queryClient.invalidateQueries({
    predicate: (query) => isAiChatsInfiniteListQueryKey(query.queryKey),
    refetchType: options?.refetchType ?? 'active',
  })
}
