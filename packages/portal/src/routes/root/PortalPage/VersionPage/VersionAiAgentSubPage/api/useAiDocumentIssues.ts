// import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'
import type { AiIssue, AiIssueDto } from '../types/issues'
import { STUB_API_PATH } from './REMOVE_IT'

const QUERY_KEY_AI_DOCUMENT_ISSUES = 'ai-document-issues'

const EMPTY_AI_ISSUES: AiIssue[] = []

export function useAiDocumentIssues(
  docPackageKey: string | undefined,
  docVersionKey: string | undefined,
  documentSlug: string | undefined,
  enabled: boolean = false,
): [AiIssue[], IsLoading, Error | null] {
  const { data, isFetching, error } = useQuery<AiIssueDto[], Error, AiIssue[]>({
    queryKey: [QUERY_KEY_AI_DOCUMENT_ISSUES, docPackageKey, docVersionKey, documentSlug],
    queryFn: () => (
      docPackageKey && docVersionKey && documentSlug
        ? getAiDocumentIssues(docPackageKey, docVersionKey, documentSlug)
        : Promise.resolve(EMPTY_AI_ISSUES)
    ),
    enabled: enabled && !!docPackageKey && !!docVersionKey && !!documentSlug,
  })
  return [data ?? EMPTY_AI_ISSUES, isFetching, error]
}

function getAiDocumentIssues(docPackageKey: string, docVersionKey: string, docSlug: string): Promise<AiIssueDto[]> {
  const endpointPattern = '/packages/:packageId/versions/:version/files/:slug/problems'
  const endpoint = generatePath(endpointPattern, {
    packageId: docPackageKey,
    version: docVersionKey,
    slug: docSlug,
  })
  return requestJson<AiIssueDto[]>(
    endpoint,
    { method: 'GET' },
    { basePath: STUB_API_PATH },
  )
}
