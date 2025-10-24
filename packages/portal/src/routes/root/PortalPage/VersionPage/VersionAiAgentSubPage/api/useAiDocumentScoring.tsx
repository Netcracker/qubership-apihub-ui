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

const QUERY_KEY_DOCUMENT_SCORING = 'document-scoring'

export function useAiDocumentScoring(
  docPackageKey: string | undefined,
  docVersionKey: string | undefined,
  documentSlug: string | undefined,
  enabled: boolean = false,
): [DocumentScoring | undefined, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<DocumentScoringDto | undefined, Error, DocumentScoring | undefined>({
    queryKey: [QUERY_KEY_DOCUMENT_SCORING, docPackageKey, docVersionKey, documentSlug],
    queryFn: () => (
      docPackageKey && docVersionKey && documentSlug
        ? getAiDocumentScoring(docPackageKey, docVersionKey, documentSlug)
        : Promise.resolve(undefined)
    ),
    enabled: enabled && !!docPackageKey && !!docVersionKey && !!documentSlug,
  })

  return [data, isLoading, error]
}

// eslint-disable-next-line
function getAiDocumentScoring(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<DocumentScoringDto> {
  return new Promise<DocumentScoringDto>((resolve) => {
    setTimeout(() => {
      resolve({
        overallScore: '45/100 - Bad',
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
