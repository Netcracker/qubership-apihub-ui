import { type InfiniteData, useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { FETCH_ERROR_EVENT, type FetchErrorDetails } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { HttpError } from '@netcracker/qubership-apihub-ui-shared/utils/responses'

import { aiChatJson } from '../api/client'
import { AI_CHAT_ROOT, aiChatItemKey, aiChatListKey, aiChatMessagesKey } from '../api/queryKeys'
import { streamAiChatTurn } from '../api/sse'
import type {
  AiChat,
  AiChatMessage,
  AiChatMessagesListResponse,
  AiChatsListResponse,
  AiChatStreamEvent,
  ChatId,
  ClientMessageId,
  MessageId,
} from '../api/types'
import {
  buildOptimisticUserMessage,
  buildPartialAssistantMessage,
  prependMessageToInfiniteMessages,
} from './aiChatMessagesCache'
import {
  applyStreamingSseEvent,
  getActiveTurnChatId,
  isStreamingBusy,
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
  submit: (activeChatId: ChatId | null, content: string) => Promise<void>
  abort: () => void
  reset: () => void
}

function isAbortError(e: unknown): boolean {
  if (e instanceof DOMException && e.name === 'AbortError') {
    return true
  }
  if (e instanceof Error && e.name === 'AbortError') {
    return true
  }
  return false
}

function dispatchSseFetchError(code: string, message: string): void {
  const title = 'AI Assistant'
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
  const title = 'AI Assistant'
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
  const [state, dispatch] = useReducer(streamingTurnReducer, { status: 'idle' } satisfies StreamingTurnState)
  const stateRef = useRef(state)
  stateRef.current = state

  const abortControllerRef = useRef<AbortController | null>(null)
  const turnLockRef = useRef(false)
  const turnBootstrapRef = useRef<StreamingTurnState | null>(null)

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort()
    }
  }, [])

  const flushPartialAssistantToCache = useCallback((chatId: ChatId): void => {
    const s = stateRef.current
    if (s.status !== 'started' || s.chatId !== chatId) {
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

  const processBatch = useCallback(
    (chatId: ChatId, batch: readonly AiChatStreamEvent[]): void => {
      let running = stateRef.current.status !== 'idle'
        ? stateRef.current
        : (turnBootstrapRef.current ?? stateRef.current)
      for (const event of batch) {
        if (event.type === 'message.assistant.completed') {
          const assistantMessage = (event as { message: AiChatMessage }).message
          queryClient.setQueryData(
            aiChatMessagesKey(chatId),
            (previous: InfiniteData<AiChatMessagesListResponse> | undefined) =>
              prependMessageToInfiniteMessages(previous, assistantMessage),
          )
        }
        if (event.type === 'error') {
          if (running.status === 'started') {
            const rs = running
            if (rs.buffer.length > 0) {
              queryClient.setQueryData(
                aiChatMessagesKey(chatId),
                (previous: InfiniteData<AiChatMessagesListResponse> | undefined) =>
                  prependMessageToInfiniteMessages(
                    previous,
                    buildPartialAssistantMessage({
                      messageId: rs.assistantMessageId,
                      content: rs.buffer,
                      createdAt: new Date().toISOString(),
                    }),
                  ),
              )
            }
          }
          const code = 'code' in event && typeof event.code === 'string' ? event.code : ''
          const message = 'message' in event && typeof event.message === 'string'
            ? event.message
            : 'Assistant stream reported an error.'
          dispatchSseFetchError(code, message)
        }
        if (event.type === 'done') {
          void queryClient.invalidateQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
          void queryClient.invalidateQueries({ queryKey: aiChatMessagesKey(chatId) })
        }
        running = applyStreamingSseEvent(running, event)
      }
      dispatch({ type: 'sseBatch', events: batch })
      turnBootstrapRef.current = null
    },
    [queryClient],
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
          dispatch({ type: 'aborted' })
          return
        }
        if (e instanceof HttpError) {
          flushPartialAssistantToCache(chatId)
          dispatch({ type: 'reset' })
          if (e.status === 404) {
            removeChatCaches(chatId)
            if (routeActiveChatId === chatId) {
              resetActiveChat()
            }
          }
          return
        }
        flushPartialAssistantToCache(chatId)
        dispatchNetworkFetchError(e instanceof Error ? e.message : 'Network error while streaming.')
        dispatch({ type: 'reset' })
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
      let isNewChat = false
      try {
        let chatId = activeChatId
        const fromWelcome = activeChatId === null
        if (!chatId) {
          const created = await aiChatJson<AiChat>('/ai-chat/chats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}),
          })
          const { chatId: newChatId } = created
          chatId = newChatId
          queryClient.setQueryData(aiChatItemKey(chatId), created)
          queryClient.setQueryData<InfiniteData<AiChatsListResponse> | undefined>(
            aiChatListKey(),
            (previous) => {
              if (!previous || previous.pages.length === 0) {
                return previous
              }
              if (previous.pages.some((page) => page.chats.some((chat) => chat.chatId === chatId))) {
                return previous
              }
              const [firstPage, ...restPages] = previous.pages
              const nextFirstPage = {
                ...firstPage,
                chats: [created, ...firstPage.chats],
              }
              return {
                ...previous,
                pages: [nextFirstPage, ...restPages],
              }
            },
          )
          isNewChat = true
          if (fromWelcome) {
            openChatScreen(chatId)
          }
        }

        const clientMessageId = uuidv4() as ClientMessageId
        const optimisticUserMessageId = `optimistic-${uuidv4()}` as MessageId
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
        if (isNewChat) {
          void queryClient.invalidateQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
        }

        const pendingSnapshot: StreamingTurnState = {
          status: 'pending',
          chatId: chatId,
          clientMessageId: clientMessageId,
          optimisticUserMessageId: optimisticUserMessageId,
          submittedContent: trimmed,
        }
        turnBootstrapRef.current = pendingSnapshot

        dispatch({
          type: 'turn.requested',
          chatId: chatId,
          clientMessageId: clientMessageId,
          optimisticUserMessageId: optimisticUserMessageId,
          submittedContent: trimmed,
        })

        await runTurn(chatId, trimmed, clientMessageId)
      } finally {
        turnLockRef.current = false
        if (isNewChat) {
          void queryClient.invalidateQueries({ queryKey: [AI_CHAT_ROOT, 'chats'] })
        }
      }
    },
    [openChatScreen, queryClient, runTurn],
  )

  const abort = useCallback((): void => {
    abortControllerRef.current?.abort()
  }, [])

  const reset = useCallback((): void => {
    dispatch({ type: 'reset' })
  }, [])

  return useMemo(() => {
    const busy = isStreamingBusy(state)
    const turnChat = getActiveTurnChatId(state)
    return {
      state: state,
      isBusy: busy,
      activeTurnChatId: turnChat,
      submit: submit,
      abort: abort,
      reset: reset,
    }
  }, [state, submit, abort, reset])
}
