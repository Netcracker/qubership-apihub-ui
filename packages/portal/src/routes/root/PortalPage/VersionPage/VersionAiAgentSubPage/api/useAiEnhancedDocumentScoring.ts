import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery } from '@tanstack/react-query'
import type { DocumentScoring, DocumentScoringDto } from '../types/document-scoring'

const QUERY_KEY_ENHANCED_DOCUMENT_SCORING = 'enhanced-document-scoring'

export function useAiEnhancedDocumentScoring(
  docPackageKey: string | undefined,
  docVersionKey: string | undefined,
  documentSlug: string | undefined,
  enabled: boolean = false,
): [DocumentScoring | undefined, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<DocumentScoringDto | undefined, Error, DocumentScoring | undefined>({
    queryKey: [QUERY_KEY_ENHANCED_DOCUMENT_SCORING, docPackageKey, docVersionKey, documentSlug],
    queryFn: () => (
      docPackageKey && docVersionKey && documentSlug
        ? getAiEnhancedDocumentScoring(docPackageKey, docVersionKey, documentSlug)
        : Promise.resolve(undefined)
    ),
    enabled: enabled && !!docPackageKey && !!docVersionKey && !!documentSlug,
  })

  return [data, isLoading, error]
}

// eslint-disable-next-line
function getAiEnhancedDocumentScoring(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<DocumentScoringDto> {
  return new Promise<DocumentScoringDto>((resolve) => {
    setTimeout(() => {
      resolve({
        overallScore: '100/100 - Great',
        details: [
          {
            name: 'Missing Summary',
            value: '3/15',
          },
          {
            name: 'Missing "operationId"',
            value: '5/23',
          },
          {
            name: 'Completeness of Description',
            value: '13/31',
          },
          {
            name: 'Operation without Tag',
            value: '2/11',
          },
          {
            name: 'Number of Unused Components',
            value: '1',
          },
          {
            name: 'Tags without Operation',
            value: '0/31',
          },
        ],
      })
    }, 1000)
  })
}
