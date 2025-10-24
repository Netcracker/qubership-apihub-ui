import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery } from '@tanstack/react-query'

const QUERY_KEY_DOCUMENT_ENHANCEMENTS = 'document-enhancements'

type EnhancemetCategory = string
type EnhancementCount = number

type DocumentEnhancementsDto = {
  enhancements: Record<EnhancemetCategory, EnhancementCount>
}
type DocumentEnhancements = DocumentEnhancementsDto

export function useAiDocumentEnhancements(
  docPackageKey: string | undefined,
  docVersionKey: string | undefined,
  documentSlug: string | undefined,
  enabled: boolean = false,
): [DocumentEnhancements | undefined, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<DocumentEnhancementsDto | undefined, Error, DocumentEnhancements | undefined>({
    queryKey: [QUERY_KEY_DOCUMENT_ENHANCEMENTS, docPackageKey, docVersionKey, documentSlug],
    queryFn: () => (
      docPackageKey && docVersionKey && documentSlug
        ? getAiDocumentEnhancements(docPackageKey, docVersionKey, documentSlug)
        : Promise.resolve(undefined)
    ),
    enabled: enabled && !!docPackageKey && !!docVersionKey && !!documentSlug,
  })

  return [data, isLoading, error]
}

// eslint-disable-next-line
function getAiDocumentEnhancements(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<DocumentEnhancementsDto> {
  return new Promise<DocumentEnhancementsDto>((resolve) => {
    setTimeout(() => {
      resolve({
        enhancements: {
          structureImprovements: 1,
          missingDescriptions: 2,
          missingExamples: 3,
        },
      })
    }, 1000)
  })
}
