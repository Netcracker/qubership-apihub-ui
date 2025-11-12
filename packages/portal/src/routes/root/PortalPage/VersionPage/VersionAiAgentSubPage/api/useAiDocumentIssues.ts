// import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { Key, VersionKey } from '@apihub/entities/keys'
import type { PackageKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { generatePath } from 'react-router-dom'
import type { AiIssue, AiIssueDto } from '../types/issues'

const QUERY_KEY_AI_DOCUMENT_ISSUES = 'ai-document-issues'

const EMPTY_AI_ISSUES: AiIssue[] = []

export function useAiDocumentIssues(
  docPackageId: string | undefined,
  docVersionId: string | undefined,
  docSlug: string | undefined,
  enabled: boolean = false,
): [AiIssue[], IsLoading, Error | null] {
  const docPackageKey = encodeURIComponent(docPackageId ?? '')
  const docVersionKey = encodeURIComponent(docVersionId ?? '')
  const docKey = encodeURIComponent(docSlug ?? '')

  const { data, isFetching, error } = useQuery<AiIssueDto[], Error, AiIssue[]>({
    queryKey: [QUERY_KEY_AI_DOCUMENT_ISSUES, docPackageKey, docVersionKey, docKey],
    queryFn: () => (
      docPackageKey && docVersionKey && docKey
        ? getAiDocumentIssues(docPackageKey, docVersionKey, docKey)
        : Promise.resolve(EMPTY_AI_ISSUES)
    ),
    enabled: enabled && !!docPackageKey && !!docVersionKey && !!docKey,
  })
  return [data ?? EMPTY_AI_ISSUES, isFetching, error]
}

function getAiDocumentIssues(docPackageKey: string, docVersionKey: string, docKey: string): Promise<AiIssueDto[]> {
  const endpointPattern = '/packages/:packageId/versions/:version/files/:slug/problems'
  const endpoint = generatePath(endpointPattern, {
    packageId: docPackageKey,
    version: docVersionKey,
    slug: docKey,
  })
  
  return requestJson<AiIssueDto[]>(
    endpoint,
    { method: 'GET' },
    { basePath: STUB_API_V1 },
  )
}

type RefreshAiDocumentIssuesFn = (packageKey: PackageKey, versionKey: VersionKey, documentKey: Key) => void

export function useRefreshAiDocumentIssues(): RefreshAiDocumentIssuesFn {
  const client = useQueryClient()
  return useCallback(async (packageId: PackageKey, versionId: VersionKey, slug: Key) => {
    const docPackageKey = encodeURIComponent(packageId)
    const docVersionKey = encodeURIComponent(versionId)
    const docKey = encodeURIComponent(slug)

    await client.refetchQueries({
      queryKey: [QUERY_KEY_AI_DOCUMENT_ISSUES, docPackageKey, docVersionKey, docKey],
    })
  }, [client])
}
