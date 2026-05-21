import { useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

import {
  type DeleteAiChatCacheSnapshot,
  removeAiChatQueries,
  restoreDeleteAiChatCaches,
  snapshotDeleteAiChatCaches,
} from './chatCache'
import { aiChatVoid } from './client'
import { invalidateAiChatListQueries } from './invalidateAiChatListQueries'
import { aiChatItemPath } from './paths'
import { AI_CHAT_ROOT, aiChatItemKey, aiChatMessagesKey } from './queryKeys'
import type { ChatId } from './types'

type DeleteAiChatMutationContext = DeleteAiChatCacheSnapshot

export function useDeleteAiChat(): UseMutationResult<
  void,
  Error,
  ChatId,
  DeleteAiChatMutationContext
> {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (chatId: ChatId) => {
      await aiChatVoid(aiChatItemPath(chatId), { method: 'DELETE' })
    },
    onMutate: async (chatId) => {
      await queryClient.cancelQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
      await queryClient.cancelQueries({ queryKey: aiChatItemKey(chatId), exact: true })
      await queryClient.cancelQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })
      return snapshotDeleteAiChatCaches(queryClient, chatId)
    },
    onError: (_error, chatId, context) => {
      if (context) {
        restoreDeleteAiChatCaches(queryClient, chatId, context)
      }
    },
    onSuccess: (_data, chatId) => {
      removeAiChatQueries(queryClient, chatId)
    },
    onSettled: () => {
      void invalidateAiChatListQueries(queryClient)
    },
  })
}
