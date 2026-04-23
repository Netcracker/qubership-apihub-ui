import type { Router } from 'express'
import type { AiChatAttachment } from '../../mocks/ai-chat/types'
import { sendError } from './errors'

const ONE_HOUR_MS = 60 * 60 * 1000

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

// Fixed magic file ids so the UI can exercise
// expired/missing branches without server-side scheduling.
export const MAGIC_EXPIRED_FILE_ID = 'expired'
export const MAGIC_MISSING_FILE_ID = 'missing'

// Used by messages/stream to synthesize attachment metadata that the UI can
// render and download. The URL is a relative API path so the Vite proxy also
// routes it to the mock server.
export function buildAttachment(
  fileId: string,
  fileName: string,
  nowIso: string,
): AiChatAttachment {
  const expiresAt = new Date(Date.parse(nowIso) + ONE_HOUR_MS).toISOString()
  const url = `/api/v1/ai-chat/files/${encodeURIComponent(fileId)}?token=mock-${fileId}`
  return {
    fileId: fileId,
    fileName: fileName,
    mimeType: fileName.endsWith('.csv') ? 'text/csv' : 'text/markdown',
    sizeBytes: DUMMY_CSV.length,
    url: url,
    expiresAt: expiresAt,
  }
}

export function getFile(router: Router): void {
  router.get('/files/:fileId', (req, res) => {
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
    if (!token) {
      sendError(res, 400, 'APIHUB-AI-4001', 'Signed download token is required.')
      return
    }

    // Body shape is driven by the fileId suffix so the download UX can be
    // inspected for both CSV and markdown.
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
}
