import type { QueryClient } from '@tanstack/react-query'

import { AI_CHAT_ROOT } from './queryKeys'

/**
 * Marks all chat-list queries stale and refetches every matching query in the cache,
 * including queries with no mounted observers.
 *
 * The portal `QueryClient` sets `refetchOnMount: false`, so a plain `invalidateQueries`
 * that only refetches *active* observers leaves stale list rows (e.g. auto-title after
 * the first message) until a full reload or another mutation refetches while history is open.
 */
export function invalidateAiChatListQueries(queryClient: QueryClient): Promise<void> {
  return queryClient.invalidateQueries({
    queryKey: [AI_CHAT_ROOT, 'chats'],
    refetchType: 'all',
  })
}
