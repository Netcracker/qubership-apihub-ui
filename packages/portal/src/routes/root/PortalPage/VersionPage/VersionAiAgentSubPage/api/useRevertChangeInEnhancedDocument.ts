import type { RevertChangeInAiEnhancedPackageVersionMutationState, RevertChangeInAiEnhancedPackageVersionRequest } from '@netcracker/qubership-apihub-ui-shared/entities/ai-agent'
import { requestVoid, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import { useInvalidateAiEnhancedDocumentRawContent } from './useAiEnhancedDocumentRawContent'

export function useRevertChangeInEnhancedDocument(): RevertChangeInAiEnhancedPackageVersionMutationState {
  const invalidateAiEnhancedDocumentRawContent = useInvalidateAiEnhancedDocumentRawContent()

  const { mutate, isLoading: isReverting } =
    useMutation<void, Error, RevertChangeInAiEnhancedPackageVersionRequest>({
      mutationFn: request => saveChangeReverting(request),
      onSuccess: async () => {
        console.log('BEFORE !!!')
        await invalidateAiEnhancedDocumentRawContent()
        console.log('AFTER !!!')
      },
    })

  return { mutate, isReverting }
}

function saveChangeReverting(
  request: RevertChangeInAiEnhancedPackageVersionRequest,
): Promise<void> {
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
  return requestVoid(
    endpoint,
    {
      method: 'PUT',
      body: content,
    },
    { basePath: STUB_API_V1 },
  )
}

