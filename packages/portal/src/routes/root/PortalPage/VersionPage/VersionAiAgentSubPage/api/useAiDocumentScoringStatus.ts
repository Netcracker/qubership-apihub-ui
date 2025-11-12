import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { requestJson, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { generatePath } from 'react-router'
import { type AiScoringCalculationStatusDetails } from '../types/document-scoring-calculation-status'

export type RefetchAiScoringStatus = () => void

type QueryState = {
  data: AiScoringCalculationStatusDetails | undefined
  isLoading: boolean
  error: Error | null
  refetch: RefetchAiScoringStatus
}

const QUERY_KEY = 'ai-document-scoring-status'

export function useAiDocumentScoringStatus(
  packageId: PackageKey | undefined,
  version: VersionKey | undefined,
): QueryState {
  const packageKey = encodeURIComponent(packageId ?? '')
  const versionKey = encodeURIComponent(version ?? '')

  const { data, isFetching, error, refetch } =
    useQuery<
      AiScoringCalculationStatusDetails,
      Error,
      AiScoringCalculationStatusDetails
    >({
      queryKey: [QUERY_KEY, packageKey, versionKey],
      queryFn: () => getAiDocumentScoringStatus(packageKey, versionKey),
    })

  return {
    data: data,
    isLoading: isFetching,
    error: error,
    refetch: refetch,
  }
}

function getAiDocumentScoringStatus(
  packageKey: PackageKey,
  versionKey: VersionKey,
): Promise<AiScoringCalculationStatusDetails> {
  const endpointPattern = '/packages/:packageId/versions/:version/scoring/status'
  const endpoint = generatePath(endpointPattern, {
    packageId: packageKey,
    version: versionKey,
  })

  return requestJson<AiScoringCalculationStatusDetails>(
    endpoint,
    { method: 'GET' },
    { basePath: STUB_API_V1 },
  )
}

export function useRefreshAiDocumentScoringStatus(): (packageId: PackageKey, version: VersionKey) => Promise<void> {
  const client = useQueryClient()
  return useCallback(async (packageId: PackageKey, version: VersionKey) => {
    const packageKey = encodeURIComponent(packageId ?? '')
    const versionKey = encodeURIComponent(version ?? '')
    await client.invalidateQueries({ queryKey: [QUERY_KEY, packageKey, versionKey] })
  }, [client])
}
