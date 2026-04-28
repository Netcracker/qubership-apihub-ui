import type { Router } from 'express'
import { Router as createRouter } from 'express'

import { MAGIC_EXPIRED_FILE_ID, MAGIC_MISSING_FILE_ID, MOCK_FILE_DOWNLOAD_TOKEN } from '../../mocks/ai-chat/constants'
import { sendError } from '../ai-chat/errors'

const DUMMY_CSV = `operation,method,path,package,version
listCustomers,GET,/api/v1/customers,Customers,2024.4
createCustomer,POST,/api/v1/customers,Customers,2024.4
listOrders,GET,/api/v1/orders,Orders,2024.3
`

const DUMMY_MARKDOWN = `# Operations Report

| Method | Path | Package |
| --- | --- | --- |
| GET | /api/v1/customers | Customers@2024.4 |
| POST | /api/v1/customers | Customers@2024.4 |
| GET | /api/v1/orders | Orders@2024.3 |
`

function isValidToken(token: string): boolean {
  if (token === MOCK_FILE_DOWNLOAD_TOKEN) return true
  if (token.startsWith('mock-')) return true
  return false
}

export function GeneratedFilesRouter(): Router {
  const router = createRouter()

  router.get('/:fileId', (req, res) => {
    const { fileId } = req.params
    const token = typeof req.query.token === 'string' ? req.query.token : ''

    if (fileId === MAGIC_MISSING_FILE_ID) {
      sendError(res, 404, 'APIHUB-AI-3002', 'Generated file no longer exists.')
      return
    }
    if (fileId === MAGIC_EXPIRED_FILE_ID) {
      sendError(res, 410, 'APIHUB-AI-4101', 'Signed download token expired.')
      return
    }
    if (!token || !isValidToken(token)) {
      sendError(res, 400, 'APIHUB-AI-4001', 'Signed download token is required.')
      return
    }

    if (fileId.endsWith('.md') || fileId.includes('markdown')) {
      res
        .status(200)
        .type('text/markdown')
        .setHeader('Content-Disposition', `attachment; filename="${fileId}.md"`)
        .send(DUMMY_MARKDOWN)
      return
    }
    res
      .status(200)
      .type('text/csv')
      .setHeader('Content-Disposition', `attachment; filename="${fileId}.csv"`)
      .send(DUMMY_CSV)
  })

  return router
}
