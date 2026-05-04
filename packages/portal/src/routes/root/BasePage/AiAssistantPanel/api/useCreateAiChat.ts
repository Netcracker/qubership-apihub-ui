import { type InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query'
import type { UseMutationResult } from '@tanstack/react-query'
import { useAiAssistantContext } from '../state/AiAssistantContext'
import { aiChatJson } from './client'
import { AI_CHAT_ROOT, aiChatItemKey, aiChatListKey } from './queryKeys'
import type { AiChat, AiChatCreateRequest, AiChatsListResponse } from './types'

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
      queryClient.setQueryData<InfiniteData<AiChatsListResponse> | undefined>(
        aiChatListKey(),
        (previous) => {
          if (!previous || previous.pages.length === 0) {
            return previous
          }
          if (previous.pages.some((page) => page.chats.some((chatItem) => chatItem.chatId === chat.chatId))) {
            return previous
          }
          const [firstPage] = previous.pages
          return {
            ...previous,
            pages: [
              {
                ...firstPage,
                chats: [chat, ...firstPage.chats],
              },
              ...previous.pages.slice(1),
            ],
          }
        },
      )
      void queryClient.invalidateQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
      openChatScreen(chat.chatId)
    },
  })
}
