import type { AiChatStreamEvent } from './types'

/** SSE `event` / `data.type` values from the AI chat stream contract. */
export const AI_CHAT_STREAM_EVENT = {
  contextCompacted: 'context.compacted',
  assistantStart: 'message.assistant.start',
  assistantDelta: 'message.assistant.delta',
  assistantCompleted: 'message.assistant.completed',
  toolStarted: 'tool.started',
  toolCompleted: 'tool.completed',
  error: 'error',
  done: 'done',
} as const

export type AiChatAssistantCompletedStreamEvent = Extract<
  AiChatStreamEvent,
  { type: typeof AI_CHAT_STREAM_EVENT.assistantCompleted }
>

export type AiChatStreamErrorEvent = Extract<
  AiChatStreamEvent,
  { type: typeof AI_CHAT_STREAM_EVENT.error }
>

export type AiChatAssistantStreamProgressEvent =
  | Extract<AiChatStreamEvent, { type: typeof AI_CHAT_STREAM_EVENT.assistantStart }>
  | Extract<AiChatStreamEvent, { type: typeof AI_CHAT_STREAM_EVENT.assistantDelta }>

export function isAssistantStreamProgressEvent(
  event: AiChatStreamEvent,
): event is AiChatAssistantStreamProgressEvent {
  return event.type === AI_CHAT_STREAM_EVENT.assistantStart ||
    event.type === AI_CHAT_STREAM_EVENT.assistantDelta
}

export function isAiChatAssistantCompletedStreamEvent(
  event: AiChatStreamEvent,
): event is AiChatAssistantCompletedStreamEvent {
  return event.type === AI_CHAT_STREAM_EVENT.assistantCompleted
}

export function isAiChatStreamErrorEvent(event: AiChatStreamEvent): event is AiChatStreamErrorEvent {
  return event.type === AI_CHAT_STREAM_EVENT.error
}

export function isAiChatStreamDoneEvent(
  event: AiChatStreamEvent,
): event is Extract<AiChatStreamEvent, { type: typeof AI_CHAT_STREAM_EVENT.done }> {
  return event.type === AI_CHAT_STREAM_EVENT.done
}
