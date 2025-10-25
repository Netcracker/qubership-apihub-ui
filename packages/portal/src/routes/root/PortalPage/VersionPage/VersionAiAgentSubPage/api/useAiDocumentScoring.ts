import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery } from '@tanstack/react-query'
import type { DocumentScoring, DocumentScoringDto } from '../types/document-scoring'

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
        details: [
          {
            name: 'missingSummary',
            value: '3/15',
          },
          {
            name: 'missingOperationId',
            value: '5/23',
          },
          {
            name: 'completenessOfDescription',
            value: '13/31',
          },
          {
            name: 'operationWithoutTag',
            value: '2/11',
          },
          {
            name: 'numberOfUnusedComponents',
            value: '1',
          },
          {
            name: 'tagsWithoutOperation',
            value: '0/31',
          },
        ],
      })
    }, 1000)
  })
}
