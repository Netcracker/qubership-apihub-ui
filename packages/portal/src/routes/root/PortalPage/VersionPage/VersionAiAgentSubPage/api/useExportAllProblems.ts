import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { requestBlob } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import fileDownload from 'js-file-download'
import { generatePath } from 'react-router'

type Options = {
  packageId: PackageKey | undefined
  versionId: VersionKey | undefined
}

type Result = {
  exportAllProblems: (options: Options) => void
  isExportingAllProblems: boolean
}

export function useExportAllProblems(): Result {
  const { mutate, isLoading } = useMutation<void, Error, Options>({
    mutationFn: async (options: Options) => {
      if (!options.packageId || !options.versionId) {
        return
      }
      await exportAllProblems(options)
    },
  })

  return {
    exportAllProblems: mutate,
    isExportingAllProblems: isLoading,
  }
}


async function exportAllProblems(options: Options): Promise<void> {
  const { packageId, versionId } = options

  const packageKey = encodeURIComponent(packageId!)
  const versionKey = encodeURIComponent(versionId!)

  const endpointPattern = '/packages/:packageId/versions/:versionId/issues'
  const endpoint = generatePath(
    endpointPattern,
    {
      packageId: packageKey,
      versionId: versionKey,
    },
  )
  const response = await requestBlob(
    endpoint,
    { method: 'GET' },
    { basePath: API_LINTER_API_V1 },
  )

  const blob = await response.blob()
  const filename = response.headers
    .get('content-disposition')!
    .split('filename=')[1]
    .split(';')[0]
    .slice(1, -1)

  fileDownload(blob, filename)
}
