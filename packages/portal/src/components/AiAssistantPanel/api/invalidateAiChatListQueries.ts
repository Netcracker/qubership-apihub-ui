import type { QueryClient } from '@tanstack/react-query'

import { isAiChatsInfiniteListQueryKey } from './queryKeys'

const listQueryPredicate = (query: { queryKey: readonly unknown[]; getObserversCount: () => number }): boolean => {
  return isAiChatsInfiniteListQueryKey(query.queryKey)
}

/**
 * Drops cached chat lists that nothing is subscribed to (old search strings), then invalidates
 * remaining list queries so active screens refetch with correct order/titles from the server.
 */
export function invalidateAiChatListQueries(queryClient: QueryClient): Promise<void> {
  queryClient.removeQueries({
    predicate: (query) => listQueryPredicate(query) && query.getObserversCount() === 0,
  })
  return queryClient.invalidateQueries({
    predicate: (query) => listQueryPredicate(query),
    refetchType: 'all',
  })
}
