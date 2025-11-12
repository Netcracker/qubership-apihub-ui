// import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { Key } from '@apihub/entities/keys'
import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { generatePath } from 'react-router-dom'
import type { AiDocumentScoring, AiDocumentScoringDto } from '../types/document-scoring'

const QUERY_KEY_DOCUMENT_SCORING = 'document-scoring'

export function useAiDocumentScoring(
  docPackageId: string | undefined,
  docVersionId: string | undefined,
  docSlug: string | undefined,
  enabled: boolean = false,
): [AiDocumentScoring | undefined, IsLoading, Error | null] {
  const docPackageKey = encodeURIComponent(docPackageId ?? '')
  const docVersionKey = encodeURIComponent(docVersionId ?? '')
  const docKey = encodeURIComponent(docSlug ?? '')

  const { data, isLoading, error } = useQuery<AiDocumentScoringDto | undefined, Error, AiDocumentScoring | undefined>({
    queryKey: [QUERY_KEY_DOCUMENT_SCORING, docPackageKey, docVersionKey, docKey],
    queryFn: () => (
      docPackageKey && docVersionKey && docKey
        ? getAiDocumentScoring(docPackageKey, docVersionKey, docKey)
        : Promise.resolve(undefined)
    ),
    enabled: enabled && !!docPackageKey && !!docVersionKey && !!docKey,
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
    { basePath: STUB_API_V1 },
  )
}

type RefreshAiDocumentScoringFn = (packageKey: PackageKey, versionKey: VersionKey, documentKey: Key) => void

export function useRefreshAiDocumentScoring(): RefreshAiDocumentScoringFn {
  const client = useQueryClient()
  return useCallback(async (packageId: PackageKey, versionId: VersionKey, slug: Key) => {
    const docPackageKey = encodeURIComponent(packageId)
    const docVersionKey = encodeURIComponent(versionId)
    const docKey = encodeURIComponent(slug)

    await client.refetchQueries({
      queryKey: [QUERY_KEY_DOCUMENT_SCORING, docPackageKey, docVersionKey, docKey],
    })
  }, [client])
}
