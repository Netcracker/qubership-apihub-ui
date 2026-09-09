import { bypass, http, HttpResponse, passthrough } from 'msw'

import type { PackageVersionContentDto } from '@netcracker/qubership-apihub-ui-shared/entities/version-contents'
import type { PackageVersionDto, PackageVersionsDto } from '@netcracker/qubership-apihub-ui-shared/entities/versions'

export const versionHandlers = [
  http.get('*/api/v3/packages/:packageKey/versions/:versionKey', async ({ request, params }) => {
    const versionKey = String(params.versionKey)

    // processor mismatch and build errors
    if (versionKey.includes('errors-processor-mismatch-and-build')) {
      const originalResponse = await fetch(bypass(request))
      if (!originalResponse.ok) {
        return originalResponse
      }
      const realData: PackageVersionContentDto = await originalResponse.json()
      return HttpResponse.json<PackageVersionContentDto>({
        ...realData,
        apiProcessorVersion: '1.1.1',
        hasErrors: true,
      })
    }

    // api-processor version mismatch
    if (versionKey.includes('errors-processor-mismatch')) {
      const originalResponse = await fetch(bypass(request))
      if (!originalResponse.ok) {
        return originalResponse
      }
      const realData: PackageVersionContentDto = await originalResponse.json()
      return HttpResponse.json<PackageVersionContentDto>({
        ...realData,
        apiProcessorVersion: '1.1.1',
      })
    }

    // build errors and comparison errors
    if (versionKey.includes('errors-build-and-comparison')) {
      const originalResponse = await fetch(bypass(request))
      if (!originalResponse.ok) {
        return originalResponse
      }
      const realData: PackageVersionContentDto = await originalResponse.json()
      return HttpResponse.json<PackageVersionContentDto>({
        ...realData,
        hasErrors: true,
        changelogHasErrors: true,
      })
    }

    // build errors only
    if (versionKey.includes('errors-build')) {
      const originalResponse = await fetch(bypass(request))
      if (!originalResponse.ok) {
        return originalResponse
      }
      const realData: PackageVersionContentDto = await originalResponse.json()
      return HttpResponse.json<PackageVersionContentDto>({
        ...realData,
        hasErrors: true,
        changelogHasErrors: false,
      })
    }

    // comparison errors only
    if (versionKey.includes('errors-comparison')) {
      const originalResponse = await fetch(bypass(request))
      if (!originalResponse.ok) {
        return originalResponse
      }
      const realData: PackageVersionContentDto = await originalResponse.json()
      return HttpResponse.json<PackageVersionContentDto>({
        ...realData,
        hasErrors: false,
        changelogHasErrors: true,
      })
    }

    return passthrough()
  }),

  http.get('*/api/v3/packages/:packageKey/versions', async ({ request }) => {
    const originalResponse = await fetch(bypass(request))
    if (!originalResponse.ok) {
      return originalResponse
    }

    // json() consumes the body; clone keeps original bytes/headers when nothing is patched.
    const unmodifiedResponse = originalResponse.clone()
    const realData: PackageVersionsDto = await originalResponse.json()
    if (!realData.versions?.length) {
      return unmodifiedResponse
    }

    let modified = false
    const versions = realData.versions.map((version: PackageVersionDto): PackageVersionDto => {
      // processor mismatch and build errors
      if (version.version.includes('errors-processor-mismatch-and-build')) {
        modified = true
        return { ...version, apiProcessorVersion: '1.1.1', hasErrors: true }
      }
      // api-processor version mismatch
      if (version.version.includes('errors-processor-mismatch')) {
        modified = true
        return { ...version, apiProcessorVersion: '1.1.1' }
      }
      // build errors and comparison errors
      if (version.version.includes('errors-build-and-comparison')) {
        modified = true
        return { ...version, hasErrors: true, changelogHasErrors: true }
      }
      // build errors only
      if (version.version.includes('errors-build')) {
        modified = true
        return { ...version, hasErrors: true, changelogHasErrors: false }
      }
      // comparison errors only
      if (version.version.includes('errors-comparison')) {
        modified = true
        return { ...version, hasErrors: false, changelogHasErrors: true }
      }

      return version
    })

    return modified
      ? HttpResponse.json<PackageVersionsDto>({ ...realData, versions })
      : unmodifiedResponse
  }),

  http.get('*/api/v3/packages/:packageKey/versions/:versionKey/references', async ({ request, params }) => {
    const versionKey = String(params.versionKey)

    // deleted package version reference in a dashboard
    if (versionKey.includes('errors-deleted-reference')) {
      const originalResponse = await fetch(bypass(request))
      if (!originalResponse.ok) {
        return originalResponse
      }
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

    return passthrough()
  }),
]
