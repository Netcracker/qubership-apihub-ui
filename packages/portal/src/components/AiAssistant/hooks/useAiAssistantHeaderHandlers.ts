import { useCallback, useMemo } from 'react'

import { useAiAssistantPanel, useAiAssistantStreamingActions } from '../state/AiAssistantContext'

type AiAssistantHeaderHandlers = {
  newChatDisabled: boolean
  onNewChat: () => void
  onHistory: () => void
  onClose: () => void
}

export function useAiAssistantHeaderHandlers(): AiAssistantHeaderHandlers {
  const { closePanel, openHistory, resetActiveChat } = useAiAssistantPanel()
  const { abort, reset } = useAiAssistantStreamingActions()

  const onNewChat = useCallback((): void => {
    abort()
    reset()
    resetActiveChat()
  }, [abort, reset, resetActiveChat])

  return useMemo(() => ({
    newChatDisabled: false,
    onNewChat: onNewChat,
    onHistory: openHistory,
    onClose: closePanel,
  }), [onNewChat, openHistory, closePanel])
}
