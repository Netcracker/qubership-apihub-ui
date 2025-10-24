import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery } from '@tanstack/react-query'

type DocumentScoringDto = {
  overallScore: string
  missingSummary: string
  missingOperationId: string
  completenessOfDescription: string
  operationWithoutTag: string
  numberOfUnusedComponents: number
  tagsWithoutOperation: string
}

type DocumentScoring = DocumentScoringDto

const QUERY_KEY_ENHANCED_DOCUMENT_SCORING = 'enhanced-document-scoring'

export function useAiEnhancedDocumentScoring(
  docPackageKey: string,
  docVersionKey: string,
  documentSlug: string,
): [DocumentScoring | undefined, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<DocumentScoringDto, Error, DocumentScoring>({
    queryKey: [QUERY_KEY_ENHANCED_DOCUMENT_SCORING, docPackageKey, docVersionKey, documentSlug],
    queryFn: () => getAiEnhancedDocumentScoring(docPackageKey, docVersionKey, documentSlug),
  })

  return [data, isLoading, error]
}

// eslint-disable-next-line
function getAiEnhancedDocumentScoring(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<DocumentScoringDto> {
  return new Promise<DocumentScoringDto>((resolve) => {
    setTimeout(() => {
      resolve({
        overallScore: '100/100 - Great',
        missingSummary: '3/15',
        missingOperationId: '5/23',
        completenessOfDescription: '13/31',
        operationWithoutTag: '2/11',
        numberOfUnusedComponents: 1,
        tagsWithoutOperation: '0/31',
      })
    }, 1000)
  })
}
