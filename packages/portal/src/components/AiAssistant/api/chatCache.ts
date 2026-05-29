import type { QueryClient } from '@tanstack/react-query'

import { AI_CHAT_ROOT, aiChatItemKey, aiChatMessagesKey } from './queryKeys'
import type { AiChat, ChatId } from './types'

export async function cancelAiChatMutationQueries(
  queryClient: QueryClient,
  chatId: ChatId,
  options?: { includeMessages?: boolean },
): Promise<void> {
  await queryClient.cancelQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
  await queryClient.cancelQueries({ queryKey: aiChatItemKey(chatId), exact: true })
  if (options?.includeMessages) {
    await queryClient.cancelQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })
  }
}

export function removeAiChatQueries(queryClient: QueryClient, chatId: ChatId): void {
  queryClient.removeQueries({ queryKey: aiChatItemKey(chatId), exact: true })
  queryClient.removeQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })
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
