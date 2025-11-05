import { useMutation, useQueryClient } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'
import type { Key } from '../../entities/keys'
import { requestJson } from '../../utils/requests'
  
const STUB_API_PATH = '/stub/api/v1'

type RevertAiEnhancedPackageVersionRequest = {
  packageId: Key
  version: Key
  slug: Key
  content: string
}

type RevertAiEnhancedPackageVersionResponse = {
  message: string
}

type RevertMutationFn = (request: RevertAiEnhancedPackageVersionRequest) => void

type RevertMutationState = {
  mutate: RevertMutationFn
  isReverting: boolean
}

export function useRevert(): RevertMutationState {
  const queryClient = useQueryClient()

  const { mutate, isLoading: isReverting } = useMutation<
    RevertAiEnhancedPackageVersionResponse,
    Error,
    RevertAiEnhancedPackageVersionRequest
  >({
    mutationFn: request => revert(request),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['ai-enhanced-document-raw-content'] })
    },
  })

  return { mutate, isReverting }
}

function revert(request: RevertAiEnhancedPackageVersionRequest): Promise<RevertAiEnhancedPackageVersionResponse> {
  const { packageId, version, slug, content } = request
  const packageKey = encodeURIComponent(packageId)
  const versionKey = encodeURIComponent(version)
  const documentKey = encodeURIComponent(slug)

  const endpointPattern = '/packages/:packageId/versions/:versionId/enhancedFiles/:documentId/raw'
  const endpoint = generatePath(endpointPattern, {
    packageId: packageKey,
    versionId: versionKey,
    documentId: documentKey,
  })
  return requestJson<RevertAiEnhancedPackageVersionResponse>(
    endpoint,
    {
      method: 'PUT',
      body: content,
    },
    {
      basePath: STUB_API_PATH,
    },
  )
}
