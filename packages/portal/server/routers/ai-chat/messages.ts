import type { Router } from 'express'
import { randomUUID } from 'node:crypto'
import { assistantMessageFromScenario, pickScenario } from '../../mocks/ai-chat/scriptedStreams'
import { aiChatStore } from '../../mocks/ai-chat/store'
import { buildGeneratedFileUrl } from '../../mocks/ai-chat/generatedFileUrl'
import { MAX_USER_MESSAGE_LENGTH, type AiChatMessage, type AiChatMessagesListResponse } from '../../mocks/ai-chat/types'
import { sendError } from './errors'

function parsePositiveInt(value: unknown, fallback: number): number {
  if (typeof value !== 'string') return fallback
  const n = Number.parseInt(value, 10)
  if (!Number.isFinite(n) || n <= 0) return fallback
  return n
}

export function listMessages(router: Router): void {
  router.get('/chats/:chatId/messages', (req, res) => {
    const { chatId } = req.params
    if (!aiChatStore.has(chatId)) {
      sendError(res, 404, 'APIHUB-AI-3001', 'Chat not found.')
      return
    }
    const limit = parsePositiveInt(req.query.limit, 100)
    const before = typeof req.query.before === 'string' ? req.query.before : undefined
    const page = aiChatStore.messagesPage(chatId, { limit, before })
    if (!page) {
      sendError(res, 404, 'APIHUB-AI-3001', 'Chat not found.')
      return
    }
    const body: AiChatMessagesListResponse = page
    res.status(200).json(body)
  })
}

function firstWords(text: string, count: number): string {
  return text.trim().split(/\s+/).slice(0, count).join(' ')
}

function autoTitleIfNeeded(chatId: string, userContent: string): void {
  const chat = aiChatStore.get(chatId)
  if (!chat || chat.title) return
  aiChatStore.setTitle(chatId, firstWords(userContent, 5))
}

export function sendMessageNonStreaming(router: Router): void {
  router.post('/chats/:chatId/messages', (req, res) => {
    const { chatId } = req.params
    if (!aiChatStore.has(chatId)) {
      sendError(res, 404, 'APIHUB-AI-3001', 'Chat not found.')
      return
    }
    const body = req.body ?? {}
    const content = typeof body.content === 'string' ? body.content : ''
    const clientMessageId = typeof body.clientMessageId === 'string' ? body.clientMessageId : null
    if (!content.trim()) {
      sendError(res, 400, 'APIHUB-AI-4001', 'Message content must not be empty.')
      return
    }
    const maxLen = MAX_USER_MESSAGE_LENGTH
    if (content.length > maxLen) {
      sendError(res, 400, 'APIHUB-AI-4004', `Message exceeds maximum length of ${maxLen} characters.`)
      return
    }

    const replay = clientMessageId
      ? aiChatStore.findReplay(chatId, { content, clientMessageId })
      : undefined
    if (replay) {
      res.status(200).json(replay)
      return
    }

    const now = new Date()
    const userMessage: AiChatMessage = {
      messageId: randomUUID(),
      clientMessageId: clientMessageId,
      role: 'user',
      content: content,
      createdAt: now.toISOString(),
    }
    aiChatStore.appendMessage(chatId, userMessage)
    autoTitleIfNeeded(chatId, content)

    const assistantCreatedAt = new Date(now.getTime() + 1).toISOString()
    const assistantMessageId = randomUUID()
    const scenario = pickScenario(content)
    const assistantMessage = assistantMessageFromScenario(scenario, {
      messageId: assistantMessageId,
      nowIso: assistantCreatedAt,
      clientMessageId: clientMessageId,
      buildFileUrl: (fileId) => buildGeneratedFileUrl(fileId),
    })
    aiChatStore.appendMessage(chatId, assistantMessage)
    if (clientMessageId) {
      aiChatStore.rememberAssistantByClientKey(chatId, clientMessageId, assistantMessage)
    }
    res.status(200).json(assistantMessage)
  })
}
