import type { Express } from 'express'
import request from 'supertest'

import { createApp } from '../createApp'
import {
  buildFixtureChats,
  FIXTURE_EMPTY_CHAT_ID,
  FIXTURE_OLD_CHAT_ID,
  FIXTURE_PAGINATION_120_CHAT_ID,
  FIXTURE_PINNED_CHAT_ID,
  FIXTURE_RECENT_CHAT_ID,
  FIXTURE_WITH_HISTORY_CHAT_ID,
} from '../mocks/ai-chat/fixtures'
import { MOCK_FILE_DOWNLOAD_TOKEN } from '../mocks/ai-chat/constants'
import { MOCK_ATTACHMENT_FILE_ID } from '../mocks/ai-chat/generatedFileUrl'
import { aiChatStore } from '../mocks/ai-chat/store'
import type {
  AiChat,
  AiChatErrorResponse,
  AiChatMessage,
  AiChatMessagesListResponse,
  AiChatsListResponse,
  AiChatStreamEvent,
} from '../mocks/ai-chat/types'

const BASE = '/api/v1/ai-chat'
const GEN = '/api/v1/generated-files'

let app: Express

beforeEach(() => {
  // Re-seed the singleton store to a known state so test order can't leak.
  aiChatStore.seed(buildFixtureChats())
  app = createApp()
})

type SseFrame = { event: string; data: Record<string, unknown> }

// Parses an SSE body into an ordered list of { event, data } frames.
// Supertest buffers the response text for us; scripted streams always end
// with `event: done` or `event: error`, so no streaming parser is needed.
function parseSse(body: string): SseFrame[] {
  const frames: SseFrame[] = []
  for (const block of body.split(/\n\n+/)) {
    const trimmed = block.trim()
    if (!trimmed) continue
    const lines = trimmed.split('\n')
    let event = 'message'
    const dataLines: string[] = []
    for (const line of lines) {
      if (line.startsWith('event:')) event = line.slice(6).trim()
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim())
    }
    const data = dataLines.length
      ? JSON.parse(dataLines.join('\n')) as Record<string, unknown>
      : {}
    frames.push({ event: event, data: data })
  }
  return frames
}

describe('AI Chat mock server - GET /chats', () => {
  it('lists all seeded chats with pinned first', async () => {
    const res = await request(app).get(`${BASE}/chats`).expect(200)
    const body = res.body as AiChatsListResponse
    expect(body.chats.length).toBe(6)
    expect(body.hasMore).toBe(false)
    expect(body.chats[0].chatId).toBe(FIXTURE_PINNED_CHAT_ID)
    expect(body.chats[0].pinned).toBe(true)
    const unpinnedPart = body.chats.slice(1)
    // Within unpinned, order must be lastMessageAt desc.
    for (let i = 1; i < unpinnedPart.length; i++) {
      expect(unpinnedPart[i - 1].lastMessageAt >= unpinnedPart[i].lastMessageAt).toBe(true)
    }
  })

  it('filters by case-insensitive substring search', async () => {
    const res = await request(app).get(`${BASE}/chats`).query({ search: 'ORDERS' }).expect(200)
    const body = res.body as AiChatsListResponse
    expect(body.chats.length).toBe(1)
    expect(body.chats[0].chatId).toBe(FIXTURE_RECENT_CHAT_ID)
  })

  it('honours limit and reports hasMore', async () => {
    const res = await request(app).get(`${BASE}/chats`).query({ limit: 2 }).expect(200)
    const body = res.body as AiChatsListResponse
    expect(body.chats.length).toBe(2)
    expect(body.hasMore).toBe(true)
  })

  it('keyset-paginates unpinned chats via `before` cursor', async () => {
    const first = await request(app).get(`${BASE}/chats`).query({ limit: 2 }).expect(200)
    const firstBody = first.body as AiChatsListResponse
    const lastShown = firstBody.chats[firstBody.chats.length - 1]
    // Cursor uses lastMessageAt of the oldest item on the first page.
    const next = await request(app)
      .get(`${BASE}/chats`)
      .query({ limit: 10, before: lastShown.lastMessageAt })
      .expect(200)
    const nextBody = next.body as AiChatsListResponse
    // Pagination cursor excludes pinned chats and the one at the cursor.
    for (const chat of nextBody.chats) {
      expect(chat.pinned).toBe(false)
      expect(chat.lastMessageAt < lastShown.lastMessageAt).toBe(true)
    }
  })
})

describe('AI Chat mock server - POST /chats', () => {
  it('creates an empty chat with generated id and 0 messagesCount', async () => {
    const res = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const body = res.body as AiChat
    expect(body.chatId).toMatch(/^[0-9a-f-]{36}$/)
    expect(body.messagesCount).toBe(0)
    expect(body.pinned).toBe(false)
    expect(body.title).toBe('')
    // New chat must appear in the list right after.
    const list = await request(app).get(`${BASE}/chats`).expect(200)
    expect((list.body as AiChatsListResponse).chats.some((c) => c.chatId === body.chatId)).toBe(true)
  })
})

describe('AI Chat mock server - GET/PATCH/DELETE /chats/:id', () => {
  it('GET returns the chat', async () => {
    const res = await request(app).get(`${BASE}/chats/${FIXTURE_PINNED_CHAT_ID}`).expect(200)
    expect((res.body as AiChat).chatId).toBe(FIXTURE_PINNED_CHAT_ID)
  })

  it('GET returns APIHUB-AI-3001 / 404 for unknown chat', async () => {
    const res = await request(app).get(`${BASE}/chats/does-not-exist`).expect(404)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-3001')
  })

  it('PATCH can rename a chat', async () => {
    const res = await request(app)
      .patch(`${BASE}/chats/${FIXTURE_RECENT_CHAT_ID}`)
      .send({ title: 'Renamed title' })
      .expect(200)
    expect((res.body as AiChat).title).toBe('Renamed title')
  })

  it('PATCH can pin and unpin, and sets pinnedAt', async () => {
    const pin = await request(app)
      .patch(`${BASE}/chats/${FIXTURE_RECENT_CHAT_ID}`)
      .send({ pinned: true })
      .expect(200)
    const pinBody = pin.body as AiChat
    expect(pinBody.pinned).toBe(true)
    expect(pinBody.pinnedAt).toBeTruthy()

    const unpin = await request(app)
      .patch(`${BASE}/chats/${FIXTURE_RECENT_CHAT_ID}`)
      .send({ pinned: false })
      .expect(200)
    const unpinBody = unpin.body as AiChat
    expect(unpinBody.pinned).toBe(false)
    expect(unpinBody.pinnedAt).toBeNull()
  })

  it('PATCH enforces pin limit with APIHUB-AI-4003', async () => {
    // Pin two more (one is already pinned in fixtures) to fill the cap of 3.
    await request(app)
      .patch(`${BASE}/chats/${FIXTURE_RECENT_CHAT_ID}`)
      .send({ pinned: true })
      .expect(200)
    await request(app)
      .patch(`${BASE}/chats/${FIXTURE_OLD_CHAT_ID}`)
      .send({ pinned: true })
      .expect(200)
    // Fourth pin must fail.
    const res = await request(app)
      .patch(`${BASE}/chats/${FIXTURE_EMPTY_CHAT_ID}`)
      .send({ pinned: true })
      .expect(400)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-4003')
  })

  it('DELETE removes an existing chat and 404s thereafter', async () => {
    await request(app).delete(`${BASE}/chats/${FIXTURE_RECENT_CHAT_ID}`).expect(204)
    await request(app).get(`${BASE}/chats/${FIXTURE_RECENT_CHAT_ID}`).expect(404)
  })

  it('DELETE unknown chat -> 404', async () => {
    const res = await request(app).delete(`${BASE}/chats/unknown`).expect(404)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-3001')
  })
})

describe('AI Chat mock server - GET /chats/:id/messages', () => {
  it('returns the newest page by default', async () => {
    const res = await request(app)
      .get(`${BASE}/chats/${FIXTURE_WITH_HISTORY_CHAT_ID}/messages`)
      .query({ limit: 10 })
      .expect(200)
    const body = res.body as AiChatMessagesListResponse
    expect(body.messages.length).toBe(10)
    expect(body.hasMore).toBe(true)
    // Newest first.
    for (let i = 1; i < body.messages.length; i++) {
      expect(body.messages[i - 1].createdAt >= body.messages[i].createdAt).toBe(true)
    }
  })

  it('keyset-paginates with the `before` cursor', async () => {
    const first = await request(app)
      .get(`${BASE}/chats/${FIXTURE_WITH_HISTORY_CHAT_ID}/messages`)
      .query({ limit: 10 })
      .expect(200)
    const firstBody = first.body as AiChatMessagesListResponse
    const cursor = firstBody.messages[firstBody.messages.length - 1].createdAt
    const next = await request(app)
      .get(`${BASE}/chats/${FIXTURE_WITH_HISTORY_CHAT_ID}/messages`)
      .query({ limit: 50, before: cursor })
      .expect(200)
    const nextBody = next.body as AiChatMessagesListResponse
    for (const m of nextBody.messages) {
      expect(m.createdAt < cursor).toBe(true)
    }
    expect(nextBody.messages.length + firstBody.messages.length).toBeLessThanOrEqual(40)
  })

  it('fixture pagination-120 requires a second messages page at default limit 100', async () => {
    const first = await request(app)
      .get(`${BASE}/chats/${FIXTURE_PAGINATION_120_CHAT_ID}/messages`)
      .expect(200)
    const firstBody = first.body as AiChatMessagesListResponse
    expect(firstBody.messages.length).toBe(100)
    expect(firstBody.hasMore).toBe(true)
    expect(firstBody.messages[0].content).toMatch(/Response #120/)
    const cursor = firstBody.messages[firstBody.messages.length - 1].createdAt
    const second = await request(app)
      .get(`${BASE}/chats/${FIXTURE_PAGINATION_120_CHAT_ID}/messages`)
      .query({ limit: 200, before: cursor })
      .expect(200)
    const secondBody = second.body as AiChatMessagesListResponse
    expect(secondBody.messages.length).toBe(140)
    expect(secondBody.hasMore).toBe(false)
    const oldest = secondBody.messages[secondBody.messages.length - 1]
    expect(oldest.content).toBe('Request #1')
  })

  it('404s unknown chat', async () => {
    await request(app).get(`${BASE}/chats/unknown/messages`).expect(404)
  })
})

describe('AI Chat mock server - POST /chats/:id/messages (non-streaming)', () => {
  it('appends user message, synthesises assistant message, auto-titles', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat

    const res = await request(app)
      .post(`${BASE}/chats/${chatId}/messages`)
      .send({ content: 'What is REST?' })
      .expect(200)
    const assistant = res.body as AiChatMessage
    expect(assistant.role).toBe('assistant')
    expect(assistant.content.length).toBeGreaterThan(0)

    const listed = await request(app)
      .get(`${BASE}/chats/${chatId}/messages`)
      .expect(200)
    const listBody = listed.body as AiChatMessagesListResponse
    expect(listBody.messages.length).toBe(2)
    expect(listBody.messages[0].role).toBe('assistant')
    expect(listBody.messages[1].role).toBe('user')

    const chat = (await request(app).get(`${BASE}/chats/${chatId}`).expect(200)).body as AiChat
    expect(chat.title).toBe('What is REST?')
    expect(chat.messagesCount).toBe(2)
  })

  it('idempotent replay: same clientMessageId returns the same assistant message', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat

    const first = await request(app)
      .post(`${BASE}/chats/${chatId}/messages`)
      .send({ content: 'hello', clientMessageId: 'cm-xyz' })
      .expect(200)
    const second = await request(app)
      .post(`${BASE}/chats/${chatId}/messages`)
      .send({ content: 'hello', clientMessageId: 'cm-xyz' })
      .expect(200)
    expect((second.body as AiChatMessage).messageId).toBe((first.body as AiChatMessage).messageId)

    // No double-insertion: still 2 messages total.
    const listed = await request(app).get(`${BASE}/chats/${chatId}/messages`).expect(200)
    expect((listed.body as AiChatMessagesListResponse).messages.length).toBe(2)
  })

  it('rejects messages beyond the max length with APIHUB-AI-4004', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const tooLong = 'x'.repeat(32001)
    const res = await request(app)
      .post(`${BASE}/chats/${chatId}/messages`)
      .send({ content: tooLong })
      .expect(400)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-4004')
  })

  it('rejects empty messages with APIHUB-AI-4001', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const res = await request(app)
      .post(`${BASE}/chats/${chatId}/messages`)
      .send({ content: '   ' })
      .expect(400)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-4001')
  })

  it('404s unknown chat', async () => {
    await request(app)
      .post(`${BASE}/chats/unknown/messages`)
      .send({ content: 'x' })
      .expect(404)
  })
})

describe('AI Chat mock server - POST /chats/:id/messages/stream (SSE)', () => {
  it('happy path produces start -> deltas -> completed -> done', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const res = await request(app)
      .post(`${BASE}/chats/${chatId}/messages/stream`)
      .send({ content: 'Explain the happy path.', clientMessageId: 'hp-1' })
      .buffer(true)
      .parse((response, cb) => {
        const chunks: Buffer[] = []
        response.on('data', (c: Buffer) => chunks.push(c))
        response.on('end', () => cb(null, Buffer.concat(chunks).toString('utf-8')))
      })
      .expect(200)
    expect(res.headers['content-type']).toMatch(/text\/event-stream/)
    const frames = parseSse(res.body as string)
    const types = frames.map((f) => f.event)
    expect(types[0]).toBe('message.assistant.start')
    expect(types[types.length - 1]).toBe('done')
    expect(types).toContain('message.assistant.delta')
    expect(types).toContain('message.assistant.completed')
    const completed = frames.find((f) => f.event === 'message.assistant.completed') as SseFrame
    expect(
      (completed.data as unknown as Extract<AiChatStreamEvent, { type: 'message.assistant.completed' }>).message.role,
    ).toBe('assistant')
  })

  it('idempotent replay: second stream with same clientMessageId emits no timing delay and completes with the original message', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const firstRes = await request(app)
      .post(`${BASE}/chats/${chatId}/messages/stream`)
      .send({ content: 'same-input', clientMessageId: 'idem-1' })
      .buffer(true)
      .parse((response, cb) => {
        const chunks: Buffer[] = []
        response.on('data', (c: Buffer) => chunks.push(c))
        response.on('end', () => cb(null, Buffer.concat(chunks).toString('utf-8')))
      })
      .expect(200)
    const firstCompleted = parseSse(firstRes.body as string)
      .find((f) => f.event === 'message.assistant.completed') as SseFrame
    const firstMessage = (firstCompleted.data as { message: AiChatMessage }).message

    const startedAt = Date.now()
    const replayRes = await request(app)
      .post(`${BASE}/chats/${chatId}/messages/stream`)
      .send({ content: 'same-input', clientMessageId: 'idem-1' })
      .buffer(true)
      .parse((response, cb) => {
        const chunks: Buffer[] = []
        response.on('data', (c: Buffer) => chunks.push(c))
        response.on('end', () => cb(null, Buffer.concat(chunks).toString('utf-8')))
      })
      .expect(200)
    const elapsed = Date.now() - startedAt
    // Replay emits frames synchronously; give a generous budget for CI jitter.
    expect(elapsed).toBeLessThan(500)
    const replayCompleted = parseSse(replayRes.body as string)
      .find((f) => f.event === 'message.assistant.completed') as SseFrame
    const replayMessage = (replayCompleted.data as { message: AiChatMessage }).message
    expect(replayMessage.messageId).toBe(firstMessage.messageId)
    expect(replayMessage.content).toBe(firstMessage.content)
  })

  it('debug:error scenario emits an error SSE frame with APIHUB-AI-5001', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const res = await request(app)
      .post(`${BASE}/chats/${chatId}/messages/stream`)
      .send({ content: 'please debug:error now', clientMessageId: 'err-1' })
      .buffer(true)
      .parse((response, cb) => {
        const chunks: Buffer[] = []
        response.on('data', (c: Buffer) => chunks.push(c))
        response.on('end', () => cb(null, Buffer.concat(chunks).toString('utf-8')))
      })
      .expect(200)
    const frames = parseSse(res.body as string)
    const last = frames[frames.length - 1]
    expect(last.event).toBe('error')
    expect((last.data as { code: string }).code).toBe('APIHUB-AI-5001')

    // Errored streams must NOT persist the assistant message (only the user one
    // is kept). History should contain only the user message.
    const listed = await request(app).get(`${BASE}/chats/${chatId}/messages`).expect(200)
    const body = listed.body as AiChatMessagesListResponse
    expect(body.messages.filter((m) => m.role === 'assistant').length).toBe(0)
    expect(body.messages.filter((m) => m.role === 'user').length).toBe(1)
  })

  it('debug:links scenario includes portal package and operation paths', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const res = await request(app)
      .post(`${BASE}/chats/${chatId}/messages/stream`)
      .send({ content: 'run debug:links', clientMessageId: 'lnk-1' })
      .buffer(true)
      .parse((response, cb) => {
        const chunks: Buffer[] = []
        response.on('data', (c: Buffer) => chunks.push(c))
        response.on('end', () => cb(null, Buffer.concat(chunks).toString('utf-8')))
      })
      .expect(200)
    const frames = parseSse(res.body as string)
    const completed = frames.find((f) => f.event === 'message.assistant.completed') as SseFrame
    const { message } = completed.data as { message: AiChatMessage }
    expect(message.content).toContain('/portal/packages/QS.QSS.PRG.APIHUB/2026.1')
    expect(message.content).toContain('/portal/packages/QS.QSS.PRG.APIHUB/2026.1/operations/rest/get-packages-list')
  })

  it('debug:longmd scenario produces markdown at least 4000 characters', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const res = await request(app)
      .post(`${BASE}/chats/${chatId}/messages/stream`)
      .send({ content: 'please debug:longmd', clientMessageId: 'lm-1' })
      .buffer(true)
      .parse((response, cb) => {
        const chunks: Buffer[] = []
        response.on('data', (c: Buffer) => chunks.push(c))
        response.on('end', () => cb(null, Buffer.concat(chunks).toString('utf-8')))
      })
      .expect(200)
    const frames = parseSse(res.body as string)
    const completed = frames.find((f) => f.event === 'message.assistant.completed') as SseFrame
    const { message } = completed.data as { message: AiChatMessage }
    expect(message.content.length).toBeGreaterThanOrEqual(4000)
    expect(message.content).toMatch(/```yaml/)
    expect(message.content).toMatch(/```json/)
  })

  it('404s unknown chat', async () => {
    await request(app)
      .post(`${BASE}/chats/unknown/messages/stream`)
      .send({ content: 'x' })
      .expect(404)
  })

  it('empty content returns APIHUB-AI-4001', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const res = await request(app)
      .post(`${BASE}/chats/${chatId}/messages/stream`)
      .send({ content: '' })
      .expect(400)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-4001')
  })
})

describe('Mock server - GET /api/v1/generated-files/:fileId', () => {
  it('returns a CSV body with a content-disposition header for a valid download', async () => {
    const res = await request(app)
      .get(`${GEN}/${MOCK_ATTACHMENT_FILE_ID}`)
      .query({ token: MOCK_FILE_DOWNLOAD_TOKEN })
      .expect(200)
    expect(res.headers['content-type']).toMatch(/text\/csv/)
    expect(res.headers['content-disposition']).toMatch(/attachment; filename/)
    expect((res.text as string).split('\n')[0]).toBe('operation,method,path,package,version')
  })

  it('magic id "missing" returns 404 APIHUB-AI-3002', async () => {
    const res = await request(app)
      .get(`${GEN}/missing`)
      .query({ token: MOCK_FILE_DOWNLOAD_TOKEN })
      .expect(404)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-3002')
  })

  it('magic id "expired" returns 410 APIHUB-AI-4101', async () => {
    const res = await request(app)
      .get(`${GEN}/expired`)
      .query({ token: MOCK_FILE_DOWNLOAD_TOKEN })
      .expect(410)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-4101')
  })

  it('rejects downloads without a token (APIHUB-AI-4001)', async () => {
    const res = await request(app).get(`${GEN}/some-file`).expect(400)
    expect((res.body as AiChatErrorResponse).code).toBe('APIHUB-AI-4001')
  })

  it('debug:attachment stream links to generated-files and download succeeds', async () => {
    const create = await request(app).post(`${BASE}/chats`).send({}).expect(201)
    const { chatId } = create.body as AiChat
    const stream = await request(app)
      .post(`${BASE}/chats/${chatId}/messages/stream`)
      .send({ content: 'debug:attachment please', clientMessageId: 'att-download-1' })
      .buffer(true)
      .parse((response, cb) => {
        const chunks: Buffer[] = []
        response.on('data', (c: Buffer) => chunks.push(c))
        response.on('end', () => cb(null, Buffer.concat(chunks).toString('utf-8')))
      })
      .expect(200)
    const frames = parseSse(stream.body as string)
    const completed = frames.find((f) => f.event === 'message.assistant.completed') as SseFrame
    const { message } = completed.data as { message: AiChatMessage }
    expect(message.content).toMatch(/\/api\/v1\/generated-files\//)
    expect(message.content).not.toMatch(/\/api\/v1\/ai-chat\/files\//)
    const match = message.content.match(/\]\((\/api\/v1\/generated-files\/[^)]+)\)/)
    expect(match).toBeTruthy()
    const download = await request(app).get(match![1]).expect(200)
    expect((download.text as string).length).toBeGreaterThan(0)
  })
})
