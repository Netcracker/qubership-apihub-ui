import { createContext, useContext } from 'react'
import type { ChatId } from '../api/types'
import type { StreamingTurnState } from './streamingTurnReducer'

export const AI_ASSISTANT_CHAT_SCREEN = 'chat'
export const AI_ASSISTANT_HISTORY_SCREEN = 'history'

export type AiAssistantScreen =
  | typeof AI_ASSISTANT_CHAT_SCREEN
  | typeof AI_ASSISTANT_HISTORY_SCREEN

export type AiAssistantContextValue = {
  open: boolean
  screen: AiAssistantScreen
  activeChatId: ChatId | null
  panelWidth: number
  openPanel: () => void
  closePanel: () => void
  openHistory: () => void
  openChatScreen: (chatId: ChatId | null) => void
  startNewChat: () => void
  resetActiveChat: () => void
  setPanelWidth: (width: number) => void
  streaming: AiAssistantStreamingApi
}

export type AiAssistantStreamingApi = {
  state: StreamingTurnState
  isBusy: boolean
  activeTurnChatId: ChatId | null
  submit: (activeChatId: ChatId | null, content: string) => Promise<void>
  abort: () => void
  reset: () => void
}

export const AiAssistantContext = createContext<AiAssistantContextValue>()

export function useAiAssistantContext(): AiAssistantContextValue {
  return useContext(AiAssistantContext)
}
