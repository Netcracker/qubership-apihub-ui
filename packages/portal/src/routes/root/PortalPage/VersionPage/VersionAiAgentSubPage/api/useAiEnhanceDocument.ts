// import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestVoid, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'
import { useRefreshAiEnhancementStatus } from './useAiEnhancementStatus'

type EnhanceDocumentCallbackOptions = {
  packageId: PackageKey
  version: VersionKey
  slug: string
}

type EnhanceDocumentCallback = (options: EnhanceDocumentCallbackOptions) => void

export function useAiEnhanceDocument(): [EnhanceDocumentCallback, IsLoading, Error | null] {
  const refreshAiEnhancementStatus = useRefreshAiEnhancementStatus()

  const { mutate, isLoading, error } = useMutation<void, Error, EnhanceDocumentCallbackOptions>({
    mutationFn: options => enhanceDocument(options),
    onSuccess: async (_, options) => {
      await refreshAiEnhancementStatus(options.packageId, options.version, options.slug)
    },
    onError: async (error, options) => {
      console.error(error)
      await refreshAiEnhancementStatus(options.packageId, options.version, options.slug)
    },
  })

  return [mutate, isLoading, error]
}

function enhanceDocument(options: EnhanceDocumentCallbackOptions): Promise<void> {
  const { packageId, version, slug } = options

  const packageKey = encodeURIComponent(packageId ?? '')
  const versionKey = encodeURIComponent(version ?? '')
  const documentKey = encodeURIComponent(slug ?? '')

  const endpointPattern = '/packages/:packageId/versions/:version/enhancedFiles/:slug'
  const endpoint = generatePath(
    endpointPattern, 
    { 
      packageId: packageKey, 
      version: versionKey, 
      slug: documentKey,
    },
  )
  return requestVoid(
    endpoint,
    { method: 'POST' },
    { basePath: STUB_API_V1 },
  )
}
