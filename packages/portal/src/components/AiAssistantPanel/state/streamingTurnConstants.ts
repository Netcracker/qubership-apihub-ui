/** Client-side streaming turn reducer status. */
export const STREAMING_TURN_STATUS = {
  idle: 'idle',
  pending: 'pending',
  started: 'started',
} as const

export type StreamingTurnStatus = (typeof STREAMING_TURN_STATUS)[keyof typeof STREAMING_TURN_STATUS]

/** Client-side streaming turn reducer / hook actions. */
export const STREAMING_TURN_ACTION = {
  turnRequested: 'turn.requested',
  sse: 'sse',
  sseBatch: 'sseBatch',
  aborted: 'aborted',
  reset: 'reset',
} as const

export type StreamingTurnActionType = (typeof STREAMING_TURN_ACTION)[keyof typeof STREAMING_TURN_ACTION]

/** Jump-to-latest FAB while a turn is in flight. */
export const CHAT_MESSAGE_LIST_JUMP_PHASE = {
  idle: 'idle',
  active: 'active',
} as const

export type ChatMessageListJumpPhase = (typeof CHAT_MESSAGE_LIST_JUMP_PHASE)[keyof typeof CHAT_MESSAGE_LIST_JUMP_PHASE]

export const AI_ASSISTANT_STREAM_ERROR_TITLE = 'AI Assistant'

export const AI_ASSISTANT_STREAM_ERROR_DEFAULT_MESSAGE = 'Assistant stream reported an error.'

export const AI_ASSISTANT_NETWORK_STREAM_ERROR_MESSAGE = 'Network error while streaming.'

export const OPTIMISTIC_MESSAGE_ID_PREFIX = 'optimistic-'

export const ABORT_ERROR_NAME = 'AbortError'

/** No assistant tokens for this long while `started` -> show Thinking (tools / network gaps). */
export const ASSISTANT_MESSAGE_IDLE_FOR_THINKING_MS = 1000

/** Interval for `useStreamingTurn` thinking poll; see comment there for why polling is required. */
export const STREAM_THINKING_POLL_MS = 250
