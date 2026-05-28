import type { AiAssistantScreen } from '../state/AiAssistantContext'
import type { ChatId } from './types'

export type DeleteAiChatContext = {
  wasActiveChat: boolean
  previousScreen: AiAssistantScreen
}

export type DeleteAiChatPanelActions = {
  getDeleteContext: (chatId: ChatId) => DeleteAiChatContext
  onBeforeDelete: (chatId: ChatId, context: DeleteAiChatContext) => void
  onDeleteFailed: (chatId: ChatId, context: DeleteAiChatContext) => void
}
