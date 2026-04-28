import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { UseMutationResult } from '@tanstack/react-query'
import { useAiAssistantContext } from '../state/AiAssistantContext'
import { aiChatJson } from './client'
import { aiChatItemKey, aiChatListKey } from './queryKeys'
import type { AiChat, AiChatCreateRequest } from './types'

export function useCreateAiChat(): UseMutationResult<AiChat, Error, AiChatCreateRequest | undefined> {
  const queryClient = useQueryClient()
  const { openChatScreen } = useAiAssistantContext()

  return useMutation({
    mutationFn: (body: AiChatCreateRequest | undefined) =>
      aiChatJson<AiChat>('/ai-chat/chats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body ?? {}),
      }),
    onSuccess: (chat) => {
      queryClient.setQueryData(aiChatItemKey(chat.chatId), chat)
      void queryClient.invalidateQueries({ queryKey: aiChatListKey() })
      openChatScreen(chat.chatId)
    },
  })
}
