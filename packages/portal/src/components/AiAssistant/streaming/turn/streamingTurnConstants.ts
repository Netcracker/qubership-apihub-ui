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
  sseBatch: 'sseBatch',
  aborted: 'aborted',
  reset: 'reset',
} as const

export const AI_ASSISTANT_STREAM_ERROR_DEFAULT_MESSAGE = 'Assistant stream reported an error.'

/** Shown when the stream connection closed before the assistant turn finished (warning snackbar). */
export const AI_ASSISTANT_INCOMPLETE_STREAM_MESSAGE =
  'The reply stopped before the assistant finished. What you see may be incomplete - try sending your message again if something is missing.'

/** Fallback when the stream request fails before a normal SSE body (error snackbar). */
export const AI_ASSISTANT_STREAM_REQUEST_FAILED_MESSAGE =
  'Could not complete the request. Check your connection and try again.'

/** Prefix for client-generated user message ids written to the messages cache before the server responds. */
export const CACHED_USER_MESSAGE_ID_PREFIX = 'cached-'

export const ABORT_ERROR_NAME = 'AbortError'

/** No assistant tokens for this long while `started` -> show Thinking (tools / network gaps). */
export const ASSISTANT_MESSAGE_IDLE_FOR_THINKING_MS = 1000

/** Interval for `useAssistantThinkingDuringPause`; see comment there for why polling is required. */
export const STREAM_THINKING_POLL_MS = 250
