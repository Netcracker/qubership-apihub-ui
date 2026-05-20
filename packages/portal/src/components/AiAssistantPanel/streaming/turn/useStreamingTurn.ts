import { type InfiniteData, useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { FETCH_ERROR_EVENT, type FetchErrorDetails } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { HttpError } from '@netcracker/qubership-apihub-ui-shared/utils/responses'

import { aiChatJson } from '../../api/client'
import { invalidateAiChatListQueries } from '../../api/invalidateAiChatListQueries'
import { aiChatItemKey, aiChatMessagesKey } from '../../api/queryKeys'
import type {
  AiChat,
  AiChatMessage,
  AiChatMessagesListResponse,
  AiChatStreamEvent,
  ChatId,
  ClientMessageId,
  MessageId,
} from '../../api/types'
import { AI_CHAT_STREAM_EVENT, isAssistantStreamProgressEvent } from '../transport/aiChatStream'
import { streamAiChatTurn } from '../transport/sse'
import {
  buildOptimisticUserMessage,
  buildPartialAssistantMessage,
  prependMessageToInfiniteMessages,
} from './aiChatMessagesCache'
import {
  ABORT_ERROR_NAME,
  AI_ASSISTANT_NETWORK_STREAM_ERROR_MESSAGE,
  AI_ASSISTANT_STREAM_ERROR_DEFAULT_MESSAGE,
  AI_ASSISTANT_STREAM_ERROR_TITLE,
  ASSISTANT_MESSAGE_IDLE_FOR_THINKING_MS,
  OPTIMISTIC_MESSAGE_ID_PREFIX,
  STREAM_THINKING_POLL_MS,
  STREAMING_TURN_ACTION,
  STREAMING_TURN_STATUS,
} from './streamingTurnConstants'
import {
  getActiveTurnChatId,
  isStreamingBusy,
  isStreamingTurnStatus,
  peekPartialBeforeErrorInBatch,
  STREAMING_TURN_IDLE_STATE,
  streamingTurnReducer,
  type StreamingTurnState,
} from './streamingTurnReducer'

export type StreamingTurnDeps = {
  openChatScreen: (chatId: ChatId | null) => void
  resetActiveChat: () => void
  activeChatId: ChatId | null
}

export type UseStreamingTurnResult = {
  state: StreamingTurnState
  isBusy: boolean
  activeTurnChatId: ChatId | null
  thinkingDuringAssistantPause: boolean
  submit: (activeChatId: ChatId | null, content: string) => Promise<void>
  abort: () => void
  reset: () => void
}

function isAbortError(e: unknown): boolean {
  if (e instanceof DOMException && e.name === ABORT_ERROR_NAME) {
    return true
  }
  if (e instanceof Error && e.name === ABORT_ERROR_NAME) {
    return true
  }
  return false
}

function dispatchSseFetchError(code: string, message: string): void {
  const title = AI_ASSISTANT_STREAM_ERROR_TITLE
  const status = null
  dispatchEvent(
    new CustomEvent<FetchErrorDetails>(FETCH_ERROR_EVENT, {
      detail: { title, message, code, status },
      bubbles: true,
      composed: true,
      cancelable: false,
    }),
  )
}

function dispatchNetworkFetchError(message: string): void {
  const title = AI_ASSISTANT_STREAM_ERROR_TITLE
  const code = ''
  const status = null
  dispatchEvent(
    new CustomEvent<FetchErrorDetails>(FETCH_ERROR_EVENT, {
      detail: { title, message, code, status },
      bubbles: true,
      composed: true,
      cancelable: false,
    }),
  )
}

export function useStreamingTurn({
  openChatScreen,
  resetActiveChat,
  activeChatId: routeActiveChatId,
}: StreamingTurnDeps): UseStreamingTurnResult {
  const queryClient = useQueryClient()
  const [state, dispatch] = useReducer(streamingTurnReducer, STREAMING_TURN_IDLE_STATE)
  const stateRef = useRef(state)
  stateRef.current = state

  const abortControllerRef = useRef<AbortController | null>(null)
  const turnLockRef = useRef(false)
  const turnBootstrapRef = useRef<StreamingTurnState | null>(null)
  const lastAssistantMessageActivityAtRef = useRef<number | null>(null)
  const [thinkingDuringAssistantPause, setThinkingDuringAssistantPause] = useState(false)

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  useEffect(() => {
    if (isStreamingTurnStatus(state, STREAMING_TURN_STATUS.idle)) {
      lastAssistantMessageActivityAtRef.current = null
      setThinkingDuringAssistantPause((prev) => (prev ? false : prev))
    }
  }, [state])

  const streamPollKey = isStreamingTurnStatus(state, STREAMING_TURN_STATUS.started) ? state.chatId : null

  /**
   * Thinking while `started` but the chat buffer is idle (MCP tools, compaction, provider latency).
   *
   * Only `message.assistant.start` / `message.assistant.delta` refresh `lastAssistantMessageActivityAt`.
   * Other SSE frames (`tool.started`, `tool.completed`, `context.compacted`, …) keep the turn in `started`
   * without new tokens, so the thread looks frozen. A one-shot timeout after each delta does not help:
   * gaps with no progress events never schedule a timer, and long tool-only phases never re-arm it.
   *
   * Poll while `started` and compare wall clock to the last message token so Thinking still appears
   * until the next delta or the turn ends. Revisit if we wire tool/compaction events into this signal.
   */
  useEffect(() => {
    if (!isStreamingTurnStatus(state, STREAMING_TURN_STATUS.started)) {
      return
    }
    const evaluate = (): void => {
      const lastAt = lastAssistantMessageActivityAtRef.current
      if (lastAt === null) {
        setThinkingDuringAssistantPause((prev) => (prev ? false : prev))
        return
      }
      const next = Date.now() - lastAt >= ASSISTANT_MESSAGE_IDLE_FOR_THINKING_MS
      setThinkingDuringAssistantPause((prev) => (prev === next ? prev : next))
    }
    evaluate()
    const id = window.setInterval(evaluate, STREAM_THINKING_POLL_MS)
    return () => window.clearInterval(id)
  }, [state, streamPollKey])

  const flushPartialAssistantToCache = useCallback((chatId: ChatId): void => {
    const s = stateRef.current
    if (!isStreamingTurnStatus(s, STREAMING_TURN_STATUS.started) || s.chatId !== chatId) {
      return
    }
    if (!s.buffer) {
      return
    }
    queryClient.setQueryData(
      aiChatMessagesKey(chatId),
      (previous: InfiniteData<AiChatMessagesListResponse> | undefined) =>
        prependMessageToInfiniteMessages(
          previous,
          buildPartialAssistantMessage({
            messageId: s.assistantMessageId,
            content: s.buffer,
            createdAt: new Date().toISOString(),
          }),
        ),
    )
  }, [queryClient])

  const removeChatCaches = useCallback(
    (chatId: ChatId): void => {
      queryClient.removeQueries({ queryKey: aiChatItemKey(chatId), exact: true })
      queryClient.removeQueries({ queryKey: aiChatMessagesKey(chatId), exact: true })
    },
    [queryClient],
  )

  const prependPartialAssistant = useCallback(
    (chatId: ChatId, messageId: MessageId, buffer: string): void => {
      if (!buffer) {
        return
      }
      queryClient.setQueryData(
        aiChatMessagesKey(chatId),
        (previous: InfiniteData<AiChatMessagesListResponse> | undefined) =>
          prependMessageToInfiniteMessages(
            previous,
            buildPartialAssistantMessage({
              messageId: messageId,
              content: buffer,
              createdAt: new Date().toISOString(),
            }),
          ),
      )
    },
    [queryClient],
  )

  const processBatch = useCallback(
    (chatId: ChatId, batch: readonly AiChatStreamEvent[]): void => {
      const running = !isStreamingTurnStatus(stateRef.current, STREAMING_TURN_STATUS.idle)
        ? stateRef.current
        : (turnBootstrapRef.current ?? stateRef.current)

      const partialBeforeError = peekPartialBeforeErrorInBatch(running, batch)
      if (partialBeforeError !== null) {
        prependPartialAssistant(
          chatId,
          partialBeforeError.assistantMessageId,
          partialBeforeError.buffer,
        )
      }

      for (const event of batch) {
        if (isAssistantStreamProgressEvent(event)) {
          lastAssistantMessageActivityAtRef.current = Date.now()
          setThinkingDuringAssistantPause((prev) => (prev ? false : prev))
        }
        if (event.type === AI_CHAT_STREAM_EVENT.assistantCompleted) {
          const assistantMessage = (event as { message: AiChatMessage }).message
          queryClient.setQueryData(
            aiChatMessagesKey(chatId),
            (previous: InfiniteData<AiChatMessagesListResponse> | undefined) =>
              prependMessageToInfiniteMessages(previous, assistantMessage),
          )
        }
        if (event.type === AI_CHAT_STREAM_EVENT.error) {
          const code = 'code' in event && typeof event.code === 'string' ? event.code : ''
          const message = 'message' in event && typeof event.message === 'string'
            ? event.message
            : AI_ASSISTANT_STREAM_ERROR_DEFAULT_MESSAGE
          dispatchSseFetchError(code, message)
        }
        if (event.type === AI_CHAT_STREAM_EVENT.done) {
          void invalidateAiChatListQueries(queryClient)
          void queryClient.invalidateQueries({ queryKey: aiChatMessagesKey(chatId) })
        }
      }

      dispatch({ type: STREAMING_TURN_ACTION.sseBatch, events: batch })
      turnBootstrapRef.current = null
    },
    [prependPartialAssistant, queryClient],
  )

  const runTurn = useCallback(
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
      } catch (e) {
        if (isAbortError(e)) {
          flushPartialAssistantToCache(chatId)
          dispatch({ type: STREAMING_TURN_ACTION.aborted })
          return
        }
        if (e instanceof HttpError) {
          flushPartialAssistantToCache(chatId)
          dispatch({ type: STREAMING_TURN_ACTION.reset })
          if (e.status === 404) {
            removeChatCaches(chatId)
            if (routeActiveChatId === chatId) {
              resetActiveChat()
            }
          }
          return
        }
        flushPartialAssistantToCache(chatId)
        dispatchNetworkFetchError(
          e instanceof Error ? e.message : AI_ASSISTANT_NETWORK_STREAM_ERROR_MESSAGE,
        )
        dispatch({ type: STREAMING_TURN_ACTION.reset })
      } finally {
        if (abortControllerRef.current === ac) {
          abortControllerRef.current = null
        }
      }
    },
    [
      flushPartialAssistantToCache,
      processBatch,
      removeChatCaches,
      resetActiveChat,
      routeActiveChatId,
    ],
  )

  const submit = useCallback(
    async (activeChatId: ChatId | null, content: string): Promise<void> => {
      const trimmed = content.trim()
      if (!trimmed) {
        return
      }
      if (turnLockRef.current) {
        return
      }
      turnLockRef.current = true
      try {
        let chatId = activeChatId
        const fromWelcome = activeChatId === null
        if (!chatId) {
          const newChat = await aiChatJson<AiChat>('/ai-chat/chats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}),
          })
          const { chatId: createdChatId } = newChat
          chatId = createdChatId
          queryClient.setQueryData(aiChatItemKey(chatId), newChat)
          void invalidateAiChatListQueries(queryClient)
          if (fromWelcome) {
            openChatScreen(chatId)
          }
        }

        const clientMessageId = uuidv4() as ClientMessageId
        const optimisticUserMessageId = `${OPTIMISTIC_MESSAGE_ID_PREFIX}${uuidv4()}` as MessageId
        const nowIso = new Date().toISOString()

        const optimistic = buildOptimisticUserMessage({
          optimisticMessageId: optimisticUserMessageId,
          clientMessageId: clientMessageId,
          content: trimmed,
          createdAt: nowIso,
        })

        queryClient.setQueryData(
          aiChatMessagesKey(chatId),
          (previous: InfiniteData<AiChatMessagesListResponse> | undefined) =>
            prependMessageToInfiniteMessages(previous, optimistic),
        )

        const pendingSnapshot: StreamingTurnState = {
          status: STREAMING_TURN_STATUS.pending,
          chatId: chatId,
          clientMessageId: clientMessageId,
          optimisticUserMessageId: optimisticUserMessageId,
          submittedContent: trimmed,
        }
        turnBootstrapRef.current = pendingSnapshot

        dispatch({
          type: STREAMING_TURN_ACTION.turnRequested,
          chatId: chatId,
          clientMessageId: clientMessageId,
          optimisticUserMessageId: optimisticUserMessageId,
          submittedContent: trimmed,
        })

        await runTurn(chatId, trimmed, clientMessageId)
      } finally {
        turnLockRef.current = false
      }
    },
    [openChatScreen, queryClient, runTurn],
  )

  const abort = useCallback((): void => {
    abortControllerRef.current?.abort()
  }, [])

  const reset = useCallback((): void => {
    dispatch({ type: STREAMING_TURN_ACTION.reset })
  }, [])

  return useMemo(() => {
    const busy = isStreamingBusy(state)
    const turnChat = getActiveTurnChatId(state)
    return {
      state: state,
      isBusy: busy,
      activeTurnChatId: turnChat,
      thinkingDuringAssistantPause: thinkingDuringAssistantPause,
      submit: submit,
      abort: abort,
      reset: reset,
    }
  }, [state, submit, abort, reset, thinkingDuringAssistantPause])
}
