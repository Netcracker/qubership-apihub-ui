import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { UseMutationResult } from '@tanstack/react-query'
import { aiChatJson } from './client'
import { AI_CHAT_ROOT, aiChatItemKey } from './queryKeys'
import type { AiChat, AiChatUpdateRequest, ChatId } from './types'

export type UpdateAiChatVariables = {
  chatId: ChatId
  patch: AiChatUpdateRequest
}

type UpdateAiChatMutationContext = {
  chatId: ChatId
  chatSnapshot: AiChat | undefined
}

export function useUpdateAiChat(): UseMutationResult<
  AiChat,
  Error,
  UpdateAiChatVariables,
  UpdateAiChatMutationContext
> {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ chatId, patch }) => {
      if (patch.title === undefined && patch.pinned === undefined) {
        throw new Error('AiChat update patch must contain at least one field.')
      }
      return aiChatJson<AiChat>(`/ai-chat/chats/${encodeURIComponent(chatId)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch),
      })
    },
    onMutate: async ({ chatId, patch }) => {
      await queryClient.cancelQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
      await queryClient.cancelQueries({ queryKey: aiChatItemKey(chatId), exact: true })

      const chatSnapshot = queryClient.getQueryData<AiChat>(aiChatItemKey(chatId))

      if (chatSnapshot) {
        queryClient.setQueryData(aiChatItemKey(chatId), applyLocalPatch(chatSnapshot, patch))
      }

      return {
        chatId,
        chatSnapshot,
      }
    },
    onError: (_error, variables, context) => {
      if (!context) {
        return
      }

      if (context.chatSnapshot) {
        queryClient.setQueryData(aiChatItemKey(context.chatId), context.chatSnapshot)
      } else {
        queryClient.removeQueries({ queryKey: aiChatItemKey(variables.chatId), exact: true })
      }
    },
    onSuccess: (chat) => {
      queryClient.setQueryData(aiChatItemKey(chat.chatId), chat)
    },
    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
    },
  })
}

function applyLocalPatch(chat: AiChat, patch: AiChatUpdateRequest): AiChat {
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
