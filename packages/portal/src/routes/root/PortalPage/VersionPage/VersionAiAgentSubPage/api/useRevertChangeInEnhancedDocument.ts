import type { RevertChangeInAiEnhancedPackageVersionMutationState, RevertChangeInAiEnhancedPackageVersionRequest, RevertChangeInAiEnhancedPackageVersionResponse } from '@netcracker/qubership-apihub-ui-shared/entities/ai-agent'
import { requestJson, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import { useInvalidateAiEnhancedDocumentRawContent } from './useAiEnhancedDocumentRawContent'

export function useRevertChangeInEnhancedDocument(): RevertChangeInAiEnhancedPackageVersionMutationState {
  const invalidateAiEnhancedDocumentRawContent = useInvalidateAiEnhancedDocumentRawContent()

  const { mutate, isLoading: isReverting } = useMutation<
    RevertChangeInAiEnhancedPackageVersionResponse,
    Error,
    RevertChangeInAiEnhancedPackageVersionRequest
  >({
    mutationFn: request => saveChangeReverting(request),
    onSuccess: async () => {
      await invalidateAiEnhancedDocumentRawContent()
    },
  })

  return { mutate, isReverting }
}

function saveChangeReverting(
  request: RevertChangeInAiEnhancedPackageVersionRequest,
): Promise<RevertChangeInAiEnhancedPackageVersionResponse> {
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
  return requestJson<RevertChangeInAiEnhancedPackageVersionResponse>(
    endpoint,
    {
      method: 'PUT',
      body: content,
    },
    { basePath: STUB_API_V1 },
  )
}

