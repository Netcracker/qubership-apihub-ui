import { bypass, http, HttpResponse, passthrough } from 'msw'

export const versionHandlers = [
  http.get('*/api/v3/packages/:packageKey/versions/:versionKey', async ({ request, params }) => {
    const versionKey = String(params.versionKey)

    // api-processor version mismatch
    if (versionKey.includes('errors-processor-mismatch')) {
      const originalResponse = await fetch(bypass(request))
      if (originalResponse.ok) {
        const realData = await originalResponse.json()
        return HttpResponse.json({
          ...realData,
          apiProcessorVersion: '1.1.1',
        })
      }
      return originalResponse
    }

    return passthrough()
  }),

  http.get('*/api/v3/packages/:packageKey/versions/:versionKey/references', async ({ request, params }) => {
    const versionKey = String(params.versionKey)

    // deleted package version reference in a dashboard
    if (versionKey.includes('errors-deleted-reference')) {
      const originalResponse = await fetch(bypass(request))
      if (originalResponse.ok) {
        const realData = await originalResponse.json()
        return HttpResponse.json({
          ...realData,
          references: [
            ...(realData.references ?? []),
            { packageRef: 'test-package', parentPackageRef: '', excluded: false },
          ],
          packages: {
            ...(realData.packages ?? {}),
            'test-package': {
              refId: 'test-package',
              kind: 'package',
              name: 'Test Package',
              version: 'deleted',
              status: 'draft',
              deletedAt: '2026-08-15T10:30:00Z',
              deletedBy: 'System Mock',
              parentPackages: [],
            },
          },
        })
      }
      return originalResponse
    }

    return passthrough()
  }),
]
