import type { AiChatStreamEvent, ChatId, ClientMessageId, MessageId } from '../api/types'

export type StreamingTurnState =
  | { status: 'idle' }
  | {
    status: 'pending'
    chatId: ChatId
    optimisticUserMessageId: MessageId
    clientMessageId: ClientMessageId
    submittedContent: string
  }
  | {
    status: 'started'
    chatId: ChatId
    assistantMessageId: MessageId
    buffer: string
    clientMessageId: ClientMessageId
  }

export type StreamingTurnAction =
  | {
    type: 'turn.requested'
    chatId: ChatId
    clientMessageId: ClientMessageId
    optimisticUserMessageId: MessageId
    submittedContent: string
  }
  | { type: 'sse'; event: AiChatStreamEvent }
  | { type: 'sseBatch'; events: readonly AiChatStreamEvent[] }
  | { type: 'aborted' }
  | { type: 'reset' }

export function streamingTurnReducer(
  state: StreamingTurnState,
  action: StreamingTurnAction,
): StreamingTurnState {
  switch (action.type) {
    case 'reset':
    case 'aborted':
      return { status: 'idle' }
    case 'turn.requested':
      return {
        status: 'pending',
        chatId: action.chatId,
        clientMessageId: action.clientMessageId,
        optimisticUserMessageId: action.optimisticUserMessageId,
        submittedContent: action.submittedContent,
      }
    case 'sse':
      return applyStreamingSseEvent(state, action.event)
    case 'sseBatch':
      return action.events.reduce<StreamingTurnState>((s, ev) => applyStreamingSseEvent(s, ev), state)
    default:
      return state
  }
}

export function applyStreamingSseEvent(
  state: StreamingTurnState,
  event: AiChatStreamEvent,
): StreamingTurnState {
  switch (event.type) {
    case 'message.assistant.start':
      if (state.status !== 'pending') {
        return state
      }
      if (!('messageId' in event) || typeof event.messageId !== 'string') {
        return state
      }
      return {
        status: 'started',
        chatId: state.chatId,
        assistantMessageId: event.messageId as MessageId,
        buffer: '',
        clientMessageId: state.clientMessageId,
      }
    case 'message.assistant.delta':
      if (state.status !== 'started') {
        return state
      }
      return {
        ...state,
        buffer: state.buffer + (typeof event.delta === 'string' ? event.delta : ''),
      }
    case 'message.assistant.completed':
    case 'done':
    case 'error':
      if (state.status === 'idle') {
        return state
      }
      return { status: 'idle' }
    default:
      return state
  }
}

/** When a batch contains `error`, returns partial buffer to persist before reducer clears state. */
export function peekPartialBeforeErrorInBatch(
  state: StreamingTurnState,
  events: readonly AiChatStreamEvent[],
): { chatId: ChatId; assistantMessageId: MessageId; buffer: string } | null {
  let s = state
  for (const ev of events) {
    if (ev.type === 'error') {
      if (s.status === 'started' && s.buffer.length > 0) {
        return { chatId: s.chatId, assistantMessageId: s.assistantMessageId, buffer: s.buffer }
      }
      return null
    }
    s = applyStreamingSseEvent(s, ev)
  }
  return null
}

export function isStreamingBusy(state: StreamingTurnState): boolean {
  return state.status === 'pending' || state.status === 'started'
}

export function getActiveTurnChatId(state: StreamingTurnState): ChatId | null {
  if (state.status === 'idle') {
    return null
  }
  return state.chatId
}
