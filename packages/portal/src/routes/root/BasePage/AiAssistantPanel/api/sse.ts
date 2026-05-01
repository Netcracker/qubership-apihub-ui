import {
  API_V1,
  FETCH_ERROR_EVENT,
  type FetchErrorDetails,
  getResponseError,
} from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { HttpError } from '@netcracker/qubership-apihub-ui-shared/utils/responses'

import { splitSseFrames } from '../utils/sseFramer'
import type { AiChatStreamEvent, ChatId, ClientMessageId } from './types'

export type AiChatStreamRequestBody = {
  content: string
  clientMessageId: ClientMessageId
}

async function toAiChatHttpError(response: Response): Promise<HttpError> {
  const [message, code, status] = await getResponseError(response)
  const title = `Error ${response.status}`
  const detail: FetchErrorDetails = {
    title,
    message,
    code,
    status,
  }
  dispatchEvent(
    new CustomEvent<FetchErrorDetails>(FETCH_ERROR_EVENT, {
      detail: detail,
      bubbles: true,
      composed: true,
      cancelable: false,
    }),
  )
  return new HttpError(message, code, status)
}

export async function* streamAiChatTurn(
  chatId: ChatId,
  body: AiChatStreamRequestBody,
  signal: AbortSignal,
): AsyncGenerator<readonly AiChatStreamEvent[], void> {
  const response = await fetch(
    `${API_V1}/ai-chat/chats/${encodeURIComponent(chatId)}/messages/stream`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      credentials: 'include',
      body: JSON.stringify(body),
      signal: signal,
    },
  )
  if (!response.ok) {
    throw await toAiChatHttpError(response)
  }
  if (!response.body) {
    throw new Error('Streaming response has no body')
  }

  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader()
  let buffer = ''
  try {
    let readResult = await reader.read()
    while (!readResult.done) {
      const { value } = readResult
      buffer += value
      const { frames, rest } = splitSseFrames(buffer)
      buffer = rest
      const parsedEvents: AiChatStreamEvent[] = []
      for (const frame of frames) {
        try {
          const payload = JSON.parse(frame.data) as Record<string, unknown>
          const mergedType = String(payload.type ?? frame.event)
          const event = { ...payload, type: mergedType } as AiChatStreamEvent
          parsedEvents.push(event)
        } catch {
          // ignore malformed frames
        }
      }
      // One event per yield: one TCP read can contain many SSE frames; a single
      // batched reducer update would fold them into one UI commit.
      for (const event of parsedEvents) {
        yield [event]
      }
      readResult = await reader.read()
    }
  } finally {
    reader.releaseLock()
  }
}
