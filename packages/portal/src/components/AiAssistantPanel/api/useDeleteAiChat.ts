import { type InfiniteData, useMutation, type UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { AI_ASSISTANT_HISTORY_SCREEN, type AiAssistantScreen, useAiAssistantContext } from '../state/AiAssistantContext'
import { aiChatVoid } from './client'
import { invalidateAiChatListQueries } from './invalidateAiChatListQueries'
import { AI_CHAT_ROOT, aiChatItemKey, aiChatMessagesKey } from './queryKeys'
import type { AiChat, AiChatMessagesListResponse, ChatId } from './types'

type DeleteAiChatMutationContext = {
  chatId: ChatId
  wasActiveChat: boolean
  previousScreen: AiAssistantScreen
  itemSnapshot: AiChat | undefined
  messagesSnapshot: InfiniteData<AiChatMessagesListResponse> | undefined
}

export function useDeleteAiChat(): UseMutationResult<
  void,
  Error,
  ChatId,
  DeleteAiChatMutationContext
> {
  const queryClient = useQueryClient()
  const { activeChatId, screen, openChatScreen, openHistory, resetActiveChat, clearActiveChat } =
    useAiAssistantContext()

  return useMutation({
    mutationFn: async (chatId: ChatId) => {
      await aiChatVoid(`/ai-chat/chats/${encodeURIComponent(chatId)}`, { method: 'DELETE' })
    },
    onMutate: async (chatId) => {
      await queryClient.cancelQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
      await queryClient.cancelQueries({ queryKey: aiChatItemKey(chatId), exact: true })
      await queryClient.cancelQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })

      const itemSnapshot = queryClient.getQueryData<AiChat>(aiChatItemKey(chatId))
      const messagesSnapshot = queryClient.getQueryData<InfiniteData<AiChatMessagesListResponse>>(
        aiChatMessagesKey(chatId),
      )
      const wasActiveChat = activeChatId === chatId
      const previousScreen = screen

      if (wasActiveChat) {
        clearActiveChat()
      }

      return {
        chatId,
        wasActiveChat,
        previousScreen,
        itemSnapshot,
        messagesSnapshot,
      }
    },
    onError: (_error, chatId, context) => {
      if (!context) {
        return
      }

      if (context.itemSnapshot) {
        queryClient.setQueryData(aiChatItemKey(chatId), context.itemSnapshot)
      }
      if (context.messagesSnapshot) {
        queryClient.setQueryData(aiChatMessagesKey(chatId), context.messagesSnapshot)
      }

      if (context.wasActiveChat) {
        if (context.previousScreen === AI_ASSISTANT_HISTORY_SCREEN) {
          openHistory()
        } else {
          resetActiveChat()
          openChatScreen(chatId)
        }
      }
    },
    onSuccess: (_data, chatId) => {
      queryClient.removeQueries({ queryKey: aiChatItemKey(chatId), exact: true })
      queryClient.removeQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })
    },
    onSettled: () => {
      void invalidateAiChatListQueries(queryClient)
    },
  })
}
