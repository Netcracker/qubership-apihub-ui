import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'
import type { AiDocumentScoring, AiDocumentScoringDto } from '../types/document-scoring'

const QUERY_KEY_DOCUMENT_SCORING = 'document-scoring'

export function useAiDocumentScoring(
  docPackageKey: string | undefined,
  docVersionKey: string | undefined,
  documentSlug: string | undefined,
  enabled: boolean = false,
): [AiDocumentScoring | undefined, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<AiDocumentScoringDto | undefined, Error, AiDocumentScoring | undefined>({
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

function getAiDocumentScoring(docPackageKey: string, docVersionKey: string, docSlug: string): Promise<AiDocumentScoringDto> {
  const endpointPattern = '/packages/:packageId/versions/:version/files/:slug/scoring'
  const endpoint = generatePath(endpointPattern, {
    packageId: docPackageKey,
    version: docVersionKey,
    slug: docSlug,
  })
  return requestJson<AiDocumentScoringDto>(
    endpoint,
    { method: 'GET' },
    { basePath: API_LINTER_API_V1 },
  )
}
