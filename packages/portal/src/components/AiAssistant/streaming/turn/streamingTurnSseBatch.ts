import { type InfiniteData, type QueryClient, useQueryClient } from '@tanstack/react-query'
import { type MutableRefObject, useCallback } from 'react'

import { invalidateAiChatListQueries, invalidateAiChatMessagesQuery } from '../../api/aiChatQueryInvalidation'
import { dispatchAiChatFetchError } from '../../api/errors'
import { aiChatMessagesKey } from '../../api/queryKeys'
import {
  type AiChatStreamErrorEvent,
  isAiChatAssistantCompletedStreamEvent,
  isAiChatStreamDoneEvent,
  isAiChatStreamErrorEvent,
  isAssistantStreamProgressEvent,
} from '../../api/streamEvents'
import type { AiChatMessage, AiChatMessagesListResponse, AiChatStreamEvent, ChatId, MessageId } from '../../api/types'
import { prependMessageToInfiniteMessages } from './aiChatMessagesCache'
import {
  AI_ASSISTANT_STREAM_ERROR_DEFAULT_MESSAGE,
  STREAMING_TURN_ACTION,
  STREAMING_TURN_STATUS,
} from './streamingTurnConstants'
import {
  isStreamingTurnStatus,
  peekAssistantBufferBeforeErrorInBatch,
  type StreamingTurnAction,
  type StreamingTurnState,
} from './streamingTurnReducer'
import { toStreamFetchErrorDetail } from './streamingTurnStreamErrors'

type StreamingTurnSseBatchProcessorDeps = {
  stateRef: MutableRefObject<StreamingTurnState>
  turnBootstrapRef: MutableRefObject<StreamingTurnState | null>
  createdChatThisTurnRef: MutableRefObject<boolean>
  lastAssistantMessageActivityAtRef: MutableRefObject<number | null>
  clearThinkingDuringAssistantPause: () => void
  prependCachedAssistantMessage: (chatId: ChatId, messageId: MessageId, buffer: string) => void
  dispatchTurn: (action: StreamingTurnAction) => void
}

type ProcessStreamingTurnSseBatchParams = StreamingTurnSseBatchProcessorDeps & {
  queryClient: QueryClient
  chatId: ChatId
  batch: readonly AiChatStreamEvent[]
}

/**
 * Applies one SSE batch: React Query side effects, then reducer (`sseBatch`).
 * Used on every TCP chunk from `streamAiChatTurn` (see README Layer 2).
 */
export function useStreamingTurnSseBatchProcessor(
  deps: StreamingTurnSseBatchProcessorDeps,
): (chatId: ChatId, batch: readonly AiChatStreamEvent[]) => void {
  const queryClient = useQueryClient()
  const {
    stateRef,
    turnBootstrapRef,
    createdChatThisTurnRef,
    lastAssistantMessageActivityAtRef,
    clearThinkingDuringAssistantPause,
    prependCachedAssistantMessage,
    dispatchTurn,
  } = deps

  return useCallback(
    (chatId: ChatId, batch: readonly AiChatStreamEvent[]): void => {
      processStreamingTurnSseBatch({
        queryClient,
        chatId,
        batch,
        stateRef,
        turnBootstrapRef,
        createdChatThisTurnRef,
        lastAssistantMessageActivityAtRef,
        clearThinkingDuringAssistantPause,
        prependCachedAssistantMessage,
        dispatchTurn,
      })
    },
    [
      queryClient,
      stateRef,
      turnBootstrapRef,
      createdChatThisTurnRef,
      lastAssistantMessageActivityAtRef,
      clearThinkingDuringAssistantPause,
      prependCachedAssistantMessage,
      dispatchTurn,
    ],
  )
}

function processStreamingTurnSseBatch(params: ProcessStreamingTurnSseBatchParams): void {
  const {
    queryClient,
    chatId,
    batch,
    stateRef,
    turnBootstrapRef,
    createdChatThisTurnRef,
    lastAssistantMessageActivityAtRef,
    clearThinkingDuringAssistantPause,
    prependCachedAssistantMessage,
    dispatchTurn,
  } = params

  const running = resolveRunningStateForSseBatch(stateRef, turnBootstrapRef)

  const bufferBeforeError = peekAssistantBufferBeforeErrorInBatch(running, batch)
  if (bufferBeforeError !== null) {
    prependCachedAssistantMessage(
      chatId,
      bufferBeforeError.assistantMessageId,
      bufferBeforeError.buffer,
    )
  }

  for (const event of batch) {
    if (isAssistantStreamProgressEvent(event)) {
      recordAssistantStreamProgress(lastAssistantMessageActivityAtRef, clearThinkingDuringAssistantPause)
    }
    if (isAiChatAssistantCompletedStreamEvent(event)) {
      prependAssistantCompletedMessageToCache(queryClient, chatId, event.message)
    }
    if (isAiChatStreamErrorEvent(event)) {
      applyStreamErrorEvent(event)
    }
    if (isAiChatStreamDoneEvent(event)) {
      applyStreamDoneSideEffects(queryClient, chatId, createdChatThisTurnRef)
    }
  }

  dispatchTurn({ type: STREAMING_TURN_ACTION.sseBatch, events: batch })
  turnBootstrapRef.current = null
}

function resolveRunningStateForSseBatch(
  stateRef: MutableRefObject<StreamingTurnState>,
  turnBootstrapRef: MutableRefObject<StreamingTurnState | null>,
): StreamingTurnState {
  const { current } = stateRef
  return !isStreamingTurnStatus(current, STREAMING_TURN_STATUS.idle)
    ? current
    : (turnBootstrapRef.current ?? current)
}

function recordAssistantStreamProgress(
  lastAssistantMessageActivityAtRef: MutableRefObject<number | null>,
  clearThinkingDuringAssistantPause: () => void,
): void {
  lastAssistantMessageActivityAtRef.current = Date.now()
  clearThinkingDuringAssistantPause()
}

function applyStreamErrorEvent(event: AiChatStreamErrorEvent): void {
  dispatchAiChatFetchError(toStreamFetchErrorDetail(
    event.message || AI_ASSISTANT_STREAM_ERROR_DEFAULT_MESSAGE,
    event.code,
  ))
}

function applyStreamDoneSideEffects(
  queryClient: QueryClient,
  chatId: ChatId,
  createdChatThisTurnRef: MutableRefObject<boolean>,
): void {
  void invalidateAiChatMessagesQuery(queryClient, chatId, { refetchType: 'none' })
  if (!createdChatThisTurnRef.current) {
    return
  }
  createdChatThisTurnRef.current = false
  void invalidateAiChatListQueries(queryClient, { refetchType: 'none' })
}

function prependAssistantCompletedMessageToCache(
  queryClient: QueryClient,
  chatId: ChatId,
  message: AiChatMessage,
): void {
  queryClient.setQueryData(
    aiChatMessagesKey(chatId),
    (previous: InfiniteData<AiChatMessagesListResponse> | undefined) =>
      prependMessageToInfiniteMessages(previous, message),
  )
}
