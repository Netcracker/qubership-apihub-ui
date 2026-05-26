import { useCallback } from 'react'

import { useAiAssistantPanel, useAiAssistantStreaming } from '../state/AiAssistantContext'

export type AiAssistantHeaderHandlers = {
  newChatDisabled: boolean
  onNewChat: () => void
  onHistory: () => void
  onClose: () => void
}

export function useAiAssistantHeaderHandlers(): AiAssistantHeaderHandlers {
  const { closePanel, openHistory, resetActiveChat } = useAiAssistantPanel()
  const { abort, reset } = useAiAssistantStreaming()

  const onNewChat = useCallback((): void => {
    abort()
    reset()
    resetActiveChat()
  }, [abort, reset, resetActiveChat])

  return {
    newChatDisabled: false,
    onNewChat: onNewChat,
    onHistory: openHistory,
    onClose: closePanel,
  }
}
