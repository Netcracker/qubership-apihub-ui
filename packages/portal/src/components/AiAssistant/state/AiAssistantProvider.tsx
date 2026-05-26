import { type FC, memo, type PropsWithChildren, useCallback, useMemo, useState } from 'react'
import { useEvent } from 'react-use'

import {
  HIDE_AI_ASSISTANT_PANEL,
  SHOW_AI_ASSISTANT_PANEL,
} from '@netcracker/qubership-apihub-ui-portal/src/routes/EventBusProvider'
import type { ChatId } from '../api/types'
import { useStreamingTurn } from '../streaming/turn/useStreamingTurn'
import {
  AI_ASSISTANT_CHAT_SCREEN,
  AiAssistantPanelContext,
  type AiAssistantPanelContextValue,
  type AiAssistantScreen,
  AiAssistantStreamingActionsContext,
  AiAssistantStreamingLiveContext,
  AiAssistantStreamingTurnMetaContext,
} from './AiAssistantContext'

export const AiAssistantProvider: FC<PropsWithChildren> = memo<PropsWithChildren>(({ children }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [screen, setScreen] = useState<AiAssistantScreen>(AI_ASSISTANT_CHAT_SCREEN)
  const [activeChatId, setActiveChatId] = useState<ChatId | null>(null)

  const openPanel = useCallback((): void => {
    setOpen(true)
  }, [])

  const closePanel = useCallback((): void => {
    setOpen(false)
  }, [])

  const openHistory = useCallback((): void => {
    setScreen('history')
    setOpen(true)
  }, [])

  const openChatScreen = useCallback((chatId: ChatId | null): void => {
    setActiveChatId(chatId)
    setScreen('chat')
    setOpen(true)
  }, [])

  const resetActiveChat = useCallback((): void => {
    setActiveChatId(null)
    setScreen('chat')
  }, [])

  const clearActiveChat = useCallback((): void => {
    setActiveChatId(null)
  }, [])

  const { actions, turnMeta, live } = useStreamingTurn({
    openChatScreen,
    resetActiveChat,
    activeChatId,
  })

  useEvent(SHOW_AI_ASSISTANT_PANEL, openPanel)
  useEvent(HIDE_AI_ASSISTANT_PANEL, closePanel)

  const panelContextValue = useMemo<AiAssistantPanelContextValue>(() => ({
    open,
    screen,
    activeChatId,
    openPanel,
    closePanel,
    openHistory,
    openChatScreen,
    resetActiveChat,
    clearActiveChat,
  }), [
    open,
    screen,
    activeChatId,
    openPanel,
    closePanel,
    openHistory,
    openChatScreen,
    resetActiveChat,
    clearActiveChat,
  ])

  return (
    <AiAssistantPanelContext.Provider value={panelContextValue}>
      <AiAssistantStreamingActionsContext.Provider value={actions}>
        <AiAssistantStreamingTurnMetaContext.Provider value={turnMeta}>
          <AiAssistantStreamingLiveContext.Provider value={live}>
            {children}
          </AiAssistantStreamingLiveContext.Provider>
        </AiAssistantStreamingTurnMetaContext.Provider>
      </AiAssistantStreamingActionsContext.Provider>
    </AiAssistantPanelContext.Provider>
  )
})

AiAssistantProvider.displayName = 'AiAssistantProvider'
