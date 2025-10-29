// import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestVoid } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'
import { useInvalidateAiEnhancementStatus } from './useAiEnhancementStatus'
import { STUB_API_PATH } from './REMOVE_IT'

type EnhanceDocumentCallbackOptions = {
  packageId: PackageKey
  version: VersionKey
  slug: string
}

type EnhanceDocumentCallback = (options: EnhanceDocumentCallbackOptions) => void

export function useAiEnhanceDocument(): [EnhanceDocumentCallback, IsLoading, Error | null] {
  const invalidateAiEnhancementStatus = useInvalidateAiEnhancementStatus()

  const { mutate, isLoading, error } = useMutation<void, Error, EnhanceDocumentCallbackOptions>({
    mutationFn: options => enhanceDocument(options),
    onSuccess: async () => {
      await invalidateAiEnhancementStatus()
    },
    onError: async (error) => {
      console.error(error)
      await invalidateAiEnhancementStatus()
    },
  })

  return [mutate, isLoading, error]
}

function enhanceDocument(options: EnhanceDocumentCallbackOptions): Promise<void> {
  const { packageId, version, slug } = options
  const endpointPattern = '/packages/:packageId/versions/:version/enhancedFiles/:slug'
  const endpoint = generatePath(endpointPattern, { packageId, version, slug })
  return requestVoid(
    endpoint,
    { method: 'POST' },
    { basePath: STUB_API_PATH },
  )
}
