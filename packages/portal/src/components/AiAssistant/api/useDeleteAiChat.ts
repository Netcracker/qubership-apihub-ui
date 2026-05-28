import {
  type QueryClient,
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query'
import { useCallback } from 'react'

import { invalidateAiChatListQueries } from './aiChatQueryInvalidation'
import { removeAiChatQueries } from './chatCache'
import { aiChatVoid } from './client'
import type { DeleteAiChatPanelActions } from './deleteAiChatPanelActions'
import { aiChatItemPath } from './paths'
import { AI_CHAT_ROOT, aiChatItemKey, aiChatMessagesKey } from './queryKeys'
import type { ChatId } from './types'

type DeleteAiChatMutation = UseMutationResult<void, Error, ChatId, unknown>

export type UseDeleteAiChatResult = Omit<DeleteAiChatMutation, 'mutate' | 'mutateAsync'> & {
  deleteChat: (chatId: ChatId) => void
}

function deleteAiChatMutationOptions(
  queryClient: QueryClient,
): UseMutationOptions<void, Error, ChatId, unknown> {
  return {
    mutationFn: async (chatId: ChatId) => {
      await aiChatVoid(aiChatItemPath(chatId), { method: 'DELETE' })
    },
    onMutate: async (chatId) => {
      await queryClient.cancelQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
      await queryClient.cancelQueries({ queryKey: aiChatItemKey(chatId), exact: true })
      await queryClient.cancelQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })
    },
    onError: (_error, chatId) => {
      void queryClient.invalidateQueries({ queryKey: aiChatItemKey(chatId), exact: true })
      void queryClient.invalidateQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })
      void invalidateAiChatListQueries(queryClient)
    },
    onSuccess: (_data, chatId) => {
      removeAiChatQueries(queryClient, chatId)
    },
    onSettled: () => {
      void invalidateAiChatListQueries(queryClient)
    },
  }
}

export function useDeleteAiChat(panelActions: DeleteAiChatPanelActions): UseDeleteAiChatResult {
  const queryClient = useQueryClient()

  const mutation = useMutation(deleteAiChatMutationOptions(queryClient))
  const { mutate, mutateAsync, ...mutationState } = mutation
  void mutateAsync

  const deleteChat = useCallback((chatId: ChatId) => {
    const context = panelActions.getDeleteContext(chatId)
    panelActions.onBeforeDelete(chatId, context)
    mutate(chatId, {
      onError: () => {
        panelActions.onDeleteFailed(chatId, context)
      },
    })
  }, [mutate, panelActions])

  return {
    ...mutationState,
    deleteChat,
  }
}
