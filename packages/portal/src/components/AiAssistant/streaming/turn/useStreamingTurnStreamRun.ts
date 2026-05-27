import { useQueryClient } from '@tanstack/react-query'
import { type MutableRefObject, useCallback } from 'react'

import { HttpError } from '@netcracker/qubership-apihub-ui-shared/utils/responses'

import { removeAiChatQueries } from '../../api/chatCache'
import { dispatchAiChatFetchError, dispatchAiChatWarning } from '../../api/errors'
import type { AiChatStreamEvent, ChatId, ClientMessageId } from '../../api/types'
import { streamAiChatTurn } from '../transport/sse'
import {
  AI_ASSISTANT_INCOMPLETE_STREAM_MESSAGE,
  AI_ASSISTANT_STREAM_REQUEST_FAILED_MESSAGE,
  STREAMING_TURN_ACTION,
} from './streamingTurnConstants'
import { isStreamingBusy, type StreamingTurnAction, type StreamingTurnState } from './streamingTurnReducer'
import { isStreamAbortError, toStreamFetchErrorDetail } from './streamingTurnStreamErrors'

type StreamingTurnStreamRunDeps = {
  stateRef: MutableRefObject<StreamingTurnState>
  abortControllerRef: MutableRefObject<AbortController | null>
  dispatchTurn: (action: StreamingTurnAction) => void
  flushAssistantBufferToCache: (chatId: ChatId) => void
  processBatch: (chatId: ChatId, batch: readonly AiChatStreamEvent[]) => void
  routeActiveChatId: ChatId | null
  resetActiveChat: () => void
}

/**
 * Consumes `streamAiChatTurn` for one send: batches, post-stream incomplete guard, abort/404/errors.
 */
export function useStreamingTurnStreamRun(
  deps: StreamingTurnStreamRunDeps,
): (chatId: ChatId, trimmed: string, clientMessageId: ClientMessageId) => Promise<void> {
  const queryClient = useQueryClient()
  const {
    stateRef,
    abortControllerRef,
    dispatchTurn,
    flushAssistantBufferToCache,
    processBatch,
    routeActiveChatId,
    resetActiveChat,
  } = deps

  const handleStreamHttp404 = useCallback((chatId: ChatId): void => {
    removeAiChatQueries(queryClient, chatId)
    if (routeActiveChatId === chatId) {
      resetActiveChat()
    }
  }, [queryClient, resetActiveChat, routeActiveChatId])

  const warnIfStreamEndedWhileTurnStillBusy = useCallback((chatId: ChatId): void => {
    if (!isStreamingBusy(stateRef.current)) {
      return
    }
    flushAssistantBufferToCache(chatId)
    dispatchAiChatWarning({ message: AI_ASSISTANT_INCOMPLETE_STREAM_MESSAGE })
    dispatchTurn({ type: STREAMING_TURN_ACTION.reset })
  }, [dispatchTurn, flushAssistantBufferToCache, stateRef])

  const handleStreamTurnError = useCallback((e: unknown, chatId: ChatId): void => {
    if (isStreamAbortError(e)) {
      flushAssistantBufferToCache(chatId)
      dispatchTurn({ type: STREAMING_TURN_ACTION.aborted })
      return
    }
    flushAssistantBufferToCache(chatId)
    dispatchTurn({ type: STREAMING_TURN_ACTION.reset })
    if (e instanceof HttpError && e.status === 404) {
      handleStreamHttp404(chatId)
      return
    }
    if (!(e instanceof HttpError)) {
      dispatchAiChatFetchError(toStreamFetchErrorDetail(
        e instanceof Error ? e.message : AI_ASSISTANT_STREAM_REQUEST_FAILED_MESSAGE,
      ))
    }
  }, [dispatchTurn, flushAssistantBufferToCache, handleStreamHttp404])

  return useCallback(
    async (chatId: ChatId, trimmed: string, clientMessageId: ClientMessageId): Promise<void> => {
      const ac = new AbortController()
      abortControllerRef.current = ac
      try {
        for await (
          const batch of streamAiChatTurn(
            chatId,
            { content: trimmed, clientMessageId: clientMessageId },
            ac.signal,
          )
        ) {
          processBatch(chatId, batch)
        }
        warnIfStreamEndedWhileTurnStillBusy(chatId)
      } catch (e) {
        handleStreamTurnError(e, chatId)
      } finally {
        releaseAbortControllerIfCurrent(abortControllerRef, ac)
      }
    },
    [
      abortControllerRef,
      handleStreamTurnError,
      processBatch,
      warnIfStreamEndedWhileTurnStillBusy,
    ],
  )
}

function releaseAbortControllerIfCurrent(
  abortControllerRef: MutableRefObject<AbortController | null>,
  controller: AbortController,
): void {
  if (abortControllerRef.current === controller) {
    abortControllerRef.current = null
  }
}
