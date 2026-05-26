import { createContext, useContext } from 'react'

import type { ChatId } from '../api/types'
import type { StreamingTurnState } from '../streaming/turn/streamingTurnReducer'

export const AI_ASSISTANT_CHAT_SCREEN = 'chat'
export const AI_ASSISTANT_HISTORY_SCREEN = 'history'

export type AiAssistantScreen =
  | typeof AI_ASSISTANT_CHAT_SCREEN
  | typeof AI_ASSISTANT_HISTORY_SCREEN

export type AiAssistantPanelContextValue = {
  open: boolean
  screen: AiAssistantScreen
  activeChatId: ChatId | null
  openPanel: () => void
  closePanel: () => void
  openHistory: () => void
  openChatScreen: (chatId: ChatId | null) => void
  resetActiveChat: () => void
  clearActiveChat: () => void
}

export type AiAssistantStreamingActions = {
  submit: (activeChatId: ChatId | null, content: string) => Promise<void>
  abort: () => void
  reset: () => void
}

export type AiAssistantStreamingTurnMeta = {
  isBusy: boolean
  activeTurnChatId: ChatId | null
}

export type AiAssistantStreamingLive = {
  state: StreamingTurnState
  /** True while assistant is streaming text but no start/delta arrived for a few seconds (tools / network gaps). */
  thinkingDuringAssistantPause: boolean
}

export const AiAssistantPanelContext = createContext<AiAssistantPanelContextValue>()
export const AiAssistantStreamingActionsContext = createContext<AiAssistantStreamingActions>()
export const AiAssistantStreamingTurnMetaContext = createContext<AiAssistantStreamingTurnMeta>()
export const AiAssistantStreamingLiveContext = createContext<AiAssistantStreamingLive>()

export function useAiAssistantPanel(): AiAssistantPanelContextValue {
  return useContext(AiAssistantPanelContext)
}

export function useAiAssistantStreamingActions(): AiAssistantStreamingActions {
  return useContext(AiAssistantStreamingActionsContext)
}

export function useAiAssistantStreamingTurnMeta(): AiAssistantStreamingTurnMeta {
  return useContext(AiAssistantStreamingTurnMetaContext)
}

export function useAiAssistantStreamingLive(): AiAssistantStreamingLive {
  return useContext(AiAssistantStreamingLiveContext)
}
