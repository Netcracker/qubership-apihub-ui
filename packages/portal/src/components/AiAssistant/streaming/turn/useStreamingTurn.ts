import { useCallback, useMemo, useRef } from 'react'

import type { ChatId } from '../../api/types'
import type {
  AiAssistantStreamingActions,
  AiAssistantStreamingLive,
  AiAssistantStreamingTurnMeta,
} from '../../state/AiAssistantContext'
import { STREAMING_TURN_ACTION } from './streamingTurnConstants'
import { getActiveTurnChatId, isStreamingBusy, type StreamingTurnState } from './streamingTurnReducer'
import { useStreamingTurnSseBatchProcessor } from './streamingTurnSseBatch'
import { useAssistantThinkingDuringPause } from './useAssistantThinkingDuringPause'
import { useStreamingTurnMessageCache } from './useStreamingTurnMessageCache'
import { useStreamingTurnReducerSync } from './useStreamingTurnReducerSync'
import { useStreamingTurnStreamRun } from './useStreamingTurnStreamRun'
import { useStreamingTurnSubmit } from './useStreamingTurnSubmit'

export type StreamingTurnDeps = {
  openChatScreen: (chatId: ChatId | null) => void
  resetActiveChat: () => void
  activeChatId: ChatId | null
}

export type UseStreamingTurnResult = {
  actions: AiAssistantStreamingActions
  turnMeta: AiAssistantStreamingTurnMeta
  live: AiAssistantStreamingLive
}

/**
 * Live turn orchestration for `AiAssistantProvider`: submit/abort, reducer, SSE batches, cache.
 * Splits return value into actions / turnMeta / live contexts (see streaming README).
 */
export function useStreamingTurn({
  openChatScreen,
  resetActiveChat,
  activeChatId: routeActiveChatId,
}: StreamingTurnDeps): UseStreamingTurnResult {
  const { state, stateRef, dispatchTurn, abortControllerRef } = useStreamingTurnReducerSync()

  const turnBootstrapRef = useRef<StreamingTurnState | null>(null)
  const createdChatThisTurnRef = useRef(false)

  const {
    thinkingDuringAssistantPause,
    lastAssistantMessageActivityAtRef,
    clearThinkingDuringAssistantPause,
  } = useAssistantThinkingDuringPause(state)

  const { prependCachedAssistantMessage, flushAssistantBufferToCache } = useStreamingTurnMessageCache(stateRef)

  const processBatch = useStreamingTurnSseBatchProcessor({
    stateRef,
    turnBootstrapRef,
    createdChatThisTurnRef,
    lastAssistantMessageActivityAtRef,
    clearThinkingDuringAssistantPause,
    prependCachedAssistantMessage,
    dispatchTurn,
  })

  const runTurn = useStreamingTurnStreamRun({
    stateRef,
    abortControllerRef,
    dispatchTurn,
    flushAssistantBufferToCache,
    processBatch,
    routeActiveChatId,
    resetActiveChat,
  })

  const submit = useStreamingTurnSubmit({
    openChatScreen,
    dispatchTurn,
    turnBootstrapRef,
    createdChatThisTurnRef,
    runTurn,
  })

  const abort = useCallback((): void => {
    abortControllerRef.current?.abort()
  }, [abortControllerRef])

  const reset = useCallback((): void => {
    dispatchTurn({ type: STREAMING_TURN_ACTION.reset })
  }, [dispatchTurn])

  const actions = useMemo<AiAssistantStreamingActions>(() => ({
    submit: submit,
    abort: abort,
    reset: reset,
  }), [submit, abort, reset])

  const isBusy = isStreamingBusy(state)
  const activeTurnChatId = getActiveTurnChatId(state)

  const turnMeta = useMemo<AiAssistantStreamingTurnMeta>(() => ({
    isBusy: isBusy,
    activeTurnChatId: activeTurnChatId,
  }), [isBusy, activeTurnChatId])

  const live = useMemo<AiAssistantStreamingLive>(() => ({
    state: state,
    thinkingDuringAssistantPause: thinkingDuringAssistantPause,
  }), [state, thinkingDuringAssistantPause])

  return {
    actions: actions,
    turnMeta: turnMeta,
    live: live,
  }
}
