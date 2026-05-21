import type { InfiniteData, QueryClient } from '@tanstack/react-query'

import { aiChatItemKey, aiChatMessagesKey } from './queryKeys'
import type { AiChat, AiChatMessagesListResponse, ChatId } from './types'

export function removeAiChatQueries(queryClient: QueryClient, chatId: ChatId): void {
  queryClient.removeQueries({ queryKey: aiChatItemKey(chatId), exact: true })
  queryClient.removeQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })
}

export type DeleteAiChatCacheSnapshot = {
  itemSnapshot: AiChat | undefined
  messagesSnapshot: InfiniteData<AiChatMessagesListResponse> | undefined
}

export function snapshotDeleteAiChatCaches(
  queryClient: QueryClient,
  chatId: ChatId,
): DeleteAiChatCacheSnapshot {
  return {
    itemSnapshot: queryClient.getQueryData<AiChat>(aiChatItemKey(chatId)),
    messagesSnapshot: queryClient.getQueryData<InfiniteData<AiChatMessagesListResponse>>(
      aiChatMessagesKey(chatId),
    ),
  }
}

export function restoreDeleteAiChatCaches(
  queryClient: QueryClient,
  chatId: ChatId,
  snapshot: DeleteAiChatCacheSnapshot,
): void {
  if (snapshot.itemSnapshot) {
    queryClient.setQueryData(aiChatItemKey(chatId), snapshot.itemSnapshot)
  }
  if (snapshot.messagesSnapshot) {
    queryClient.setQueryData(aiChatMessagesKey(chatId), snapshot.messagesSnapshot)
  }
}

export function applyLocalChatPatch(chat: AiChat, patch: { title?: string; pinned?: boolean }): AiChat {
  const next: AiChat = patch.title !== undefined
    ? { ...chat, title: patch.title }
    : { ...chat }

  if (patch.pinned === true) {
    next.pinned = true
    return next
  }
  if (patch.pinned === false) {
    delete next.pinned
    return next
  }
  return next
}
