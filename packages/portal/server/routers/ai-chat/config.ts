import type { Router } from 'express'
import { aiChatStore } from '../../mocks/ai-chat/store'

export function getConfig(router: Router): void {
  router.get('/config', (_req, res) => {
    res.status(200).json(aiChatStore.getConfig())
  })
}
