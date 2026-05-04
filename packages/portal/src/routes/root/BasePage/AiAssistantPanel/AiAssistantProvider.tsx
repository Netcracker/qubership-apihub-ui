import { HIDE_AI_ASSISTANT_PANEL, SHOW_AI_ASSISTANT_PANEL } from '@apihub/routes/EventBusProvider'
import type { FC, PropsWithChildren } from 'react'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useEvent } from 'react-use'
import type { ChatId } from './api/types'
import {
  AI_ASSISTANT_CHAT_SCREEN,
  AiAssistantContext,
  type AiAssistantContextValue,
  type AiAssistantScreen,
} from './state/AiAssistantContext'
import { useStreamingTurn } from './state/useStreamingTurn'
import {
  AI_ASSISTANT_PANEL_MIN_WIDTH,
  getAiAssistantPanelMaxWidth,
  subscribeViewportForAiPanel,
} from './utils/aiPanelViewport'

export const AI_ASSISTANT_PANEL_DEFAULT_WIDTH = 480
export const AI_ASSISTANT_PANEL_WIDTH_STORAGE_KEY = 'apihub.aiAssistant.panelWidth'

export {
  AI_ASSISTANT_PANEL_MAX_WIDTH,
  AI_ASSISTANT_PANEL_MIN_WIDTH,
  getAiAssistantPanelMaxWidth,
} from './utils/aiPanelViewport'

export const AiAssistantProvider: FC<PropsWithChildren> = memo<PropsWithChildren>(({ children }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [screen, setScreen] = useState<AiAssistantScreen>(AI_ASSISTANT_CHAT_SCREEN)
  const [activeChatId, setActiveChatId] = useState<ChatId | null>(null)
  const [panelWidth, setPanelWidthState] = useState<number>(getInitialPanelWidth)

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

  const setPanelWidth = useCallback((width: number): void => {
    setPanelWidthState(clampAiAssistantPanelWidth(width))
  }, [])

  const streaming = useStreamingTurn({
    openChatScreen,
    resetActiveChat,
    activeChatId,
  })

  useEvent(SHOW_AI_ASSISTANT_PANEL, openPanel)
  useEvent(HIDE_AI_ASSISTANT_PANEL, closePanel)

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(AI_ASSISTANT_PANEL_WIDTH_STORAGE_KEY, `${panelWidth}`)
  }, [panelWidth])

  useEffect(() => {
    return subscribeViewportForAiPanel(() => {
      setPanelWidthState((current) => clampAiAssistantPanelWidth(current))
    })
  }, [])

  const contextValue = useMemo<AiAssistantContextValue>(() => ({
    open,
    screen,
    activeChatId,
    panelWidth,
    openPanel,
    closePanel,
    openHistory,
    openChatScreen,
    resetActiveChat,
    clearActiveChat,
    setPanelWidth,
    streaming,
  }), [
    open,
    screen,
    activeChatId,
    panelWidth,
    openPanel,
    closePanel,
    openHistory,
    openChatScreen,
    resetActiveChat,
    clearActiveChat,
    setPanelWidth,
    streaming,
  ])

  return (
    <AiAssistantContext.Provider value={contextValue}>
      {children}
    </AiAssistantContext.Provider>
  )
})

function clampAiAssistantPanelWidth(width: number): number {
  if (!Number.isFinite(width)) {
    return AI_ASSISTANT_PANEL_DEFAULT_WIDTH
  }

  const normalizedWidth = Math.round(width)
  return Math.min(
    Math.max(normalizedWidth, AI_ASSISTANT_PANEL_MIN_WIDTH),
    getAiAssistantPanelMaxWidth(),
  )
}

function getInitialPanelWidth(): number {
  if (typeof window === 'undefined') {
    return AI_ASSISTANT_PANEL_DEFAULT_WIDTH
  }

  const rawPanelWidth = localStorage.getItem(AI_ASSISTANT_PANEL_WIDTH_STORAGE_KEY)
  if (!rawPanelWidth) {
    return AI_ASSISTANT_PANEL_DEFAULT_WIDTH
  }

  const parsedPanelWidth = Number.parseInt(rawPanelWidth, 10)
  return clampAiAssistantPanelWidth(parsedPanelWidth)
}
