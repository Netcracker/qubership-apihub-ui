import { MOCK_FILE_DOWNLOAD_TOKEN } from './constants'

/** Stable id used in `debug:attachment` stream markdown (mock download). Ends with `.md` so the handler returns Markdown. */
export const MOCK_ATTACHMENT_FILE_ID = '11111111-1111-4111-8111-111111111111.md'

export function buildGeneratedFileUrl(
  fileId: string,
  token: string = MOCK_FILE_DOWNLOAD_TOKEN,
): string {
  return `/api/v1/generated-files/${encodeURIComponent(fileId)}?token=${encodeURIComponent(token)}`
}
