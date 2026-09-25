import { bypass, http, HttpResponse, passthrough } from 'msw'

import type { VersionChangesSummaryDto } from '@netcracker/qubership-apihub-ui-shared/entities/version-changes-summary'

export const comparisonHandlers = [
  http.get('*/api/v2/packages/:packageKey/versions/:versionKey/changes/summary', async ({ request, params }) => {
    const versionKey = String(params.versionKey)
    const url = new URL(request.url)
    const previousVersion = url.searchParams.get('previousVersion') ?? ''
    if (!versionKey.includes('errors-comparison-summary') && !previousVersion.includes('errors-comparison-summary')) {
      return passthrough()
    }
    const originalResponse = await fetch(bypass(request))
    if (!originalResponse.ok) {
      return originalResponse
    }
    const realData = await originalResponse.json()
    return HttpResponse.json<VersionChangesSummaryDto>({ ...realData, hasErrors: true })
  }),
]
