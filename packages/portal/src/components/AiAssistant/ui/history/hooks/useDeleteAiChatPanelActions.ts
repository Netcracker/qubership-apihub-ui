import { useMemo } from 'react'

import type { DeleteAiChatPanelActions } from '../../../api/deleteAiChatPanelActions'
import type { ChatId } from '../../../api/types'
import { AI_ASSISTANT_HISTORY_SCREEN, useAiAssistantPanel } from '../../../state/AiAssistantContext'

export function useDeleteAiChatPanelActions(): DeleteAiChatPanelActions {
  const { activeChatId, screen, openChatScreen, openHistory, resetActiveChat, clearActiveChat } = useAiAssistantPanel()

  return useMemo<DeleteAiChatPanelActions>(() => ({
    getDeleteContext: (chatId: ChatId) => ({
      wasActiveChat: activeChatId === chatId,
      previousScreen: screen,
    }),
    onBeforeDelete: (_chatId, context) => {
      if (context.wasActiveChat) {
        clearActiveChat()
      }
    },
    onDeleteFailed: (chatId, context) => {
      if (!context.wasActiveChat) {
        return
      }
      if (context.previousScreen === AI_ASSISTANT_HISTORY_SCREEN) {
        openHistory()
      } else {
        resetActiveChat()
        openChatScreen(chatId)
      }
    },
  }), [
    activeChatId,
    clearActiveChat,
    openChatScreen,
    openHistory,
    resetActiveChat,
    screen,
  ])
}
