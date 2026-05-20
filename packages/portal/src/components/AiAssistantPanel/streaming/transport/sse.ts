import {
  API_V1,
  FETCH_ERROR_EVENT,
  type FetchErrorDetails,
  getResponseError,
} from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { HttpError } from '@netcracker/qubership-apihub-ui-shared/utils/responses'

import type { AiChatStreamEvent, ChatId, ClientMessageId } from '../../api/types'
import type { SseFrame } from './sseFramer'
import { splitSseFrames } from './sseFramer'

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

function parseSseFrame(frame: SseFrame): AiChatStreamEvent | null {
  try {
    const payload = JSON.parse(frame.data) as Record<string, unknown>
    const mergedType = String(payload.type ?? frame.event)
    return { ...payload, type: mergedType } as AiChatStreamEvent
  } catch {
    return null
  }
}

function drainSseBuffer(buffer: string): { events: AiChatStreamEvent[]; rest: string } {
  const { frames, rest } = splitSseFrames(buffer)
  const events: AiChatStreamEvent[] = []
  for (const frame of frames) {
    const event = parseSseFrame(frame)
    if (event !== null) {
      events.push(event)
    }
  }
  return { events, rest }
}

function* yieldParsedEvents(events: readonly AiChatStreamEvent[]): Generator<readonly AiChatStreamEvent[], void> {
  for (const event of events) {
    yield [event]
  }
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
      buffer += readResult.value
      const drained = drainSseBuffer(buffer)
      buffer = drained.rest
      yield* yieldParsedEvents(drained.events)
      readResult = await reader.read()
    }
    if (buffer.length > 0) {
      const drained = drainSseBuffer(`${buffer}\n\n`)
      yield* yieldParsedEvents(drained.events)
    }
  } finally {
    reader.releaseLock()
  }
}
