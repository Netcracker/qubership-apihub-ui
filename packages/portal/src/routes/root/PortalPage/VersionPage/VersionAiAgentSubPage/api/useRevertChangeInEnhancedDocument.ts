import type { RevertChangeInAiEnhancedPackageVersionMutationState, RevertChangeInAiEnhancedPackageVersionRequest } from '@netcracker/qubership-apihub-ui-shared/entities/ai-agent'
import { requestVoid, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import type { OriginalDocumentFileFormat } from '../../VersionApiQualitySubPage/types'
import { transformRawDocumentByFormat } from '../../VersionApiQualitySubPage/utilities/transformers'
import { useInvalidateAiEnhancedDocumentRawContent } from './useAiEnhancedDocumentRawContent'

export function useRevertChangeInEnhancedDocument(
  originalFormat: OriginalDocumentFileFormat | undefined,
): RevertChangeInAiEnhancedPackageVersionMutationState {
  const invalidateAiEnhancedDocumentRawContent = useInvalidateAiEnhancedDocumentRawContent()

  const { mutate, isLoading: isReverting } =
    useMutation<void, Error, RevertChangeInAiEnhancedPackageVersionRequest>({
      mutationFn: request => saveChangeReverting(request, originalFormat),
      onSuccess: async () => {
        await invalidateAiEnhancedDocumentRawContent()
      },
    })

  return { mutate, isReverting }
}

function saveChangeReverting(
  request: RevertChangeInAiEnhancedPackageVersionRequest,
  originalFormat: OriginalDocumentFileFormat | undefined,
): Promise<void> {
  const { packageId, version, slug, content } = request

  const [transformedContent] = originalFormat
    ? transformRawDocumentByFormat(content, originalFormat)
    : [content]

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
      body: transformedContent,
    },
    { basePath: STUB_API_V1 },
  )
}

