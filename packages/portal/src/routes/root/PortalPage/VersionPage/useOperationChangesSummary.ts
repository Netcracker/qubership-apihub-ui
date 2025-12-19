import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { ChangesSummary } from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import { API_V2, requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'

type Options = {
  packageId: string
  versionId: string
  apiType: ApiType
  operationId: string
  enabled: boolean
}

type Result = {
  data: ChangesSummary
  isLoading: boolean
  error: Error | null
}

const QUERY_KEY_OPERATION_CHANGES_SUMMARY = 'operationChangesSummary'

const EMPTY_CHANGES_SUMMARY: ChangesSummary = {
  breaking: 0,
  risky: 0,
  deprecated: 0,
  'non-breaking': 0,
  unclassified: 0,
  annotation: 0,
}

export function useOperationChangesSummary(options: Options): Result {
  const { packageId, versionId, apiType, operationId, enabled } = options
  const {
    data: operationChangesSummary,
    isLoading: loadingOperationChangesSummary,
    error: errorOperationChangesSummary,
  } = useQuery<ChangesSummary, Error>({
    queryKey: [QUERY_KEY_OPERATION_CHANGES_SUMMARY, packageId, versionId, apiType, operationId],
    queryFn: () => getOperationChangesSummary(packageId, versionId, apiType, operationId),
    enabled: enabled && !!packageId && !!versionId && !!apiType && !!operationId,
  })
  return {
    data: operationChangesSummary ?? EMPTY_CHANGES_SUMMARY,
    isLoading: loadingOperationChangesSummary,
    error: errorOperationChangesSummary,
  }
}

function getOperationChangesSummary(
  packageId: string,
  versionId: string,
  apiType: ApiType,
  operationId: string,
): Promise<ChangesSummary> {
  const endpointPattern = '/packages/:packageId/versions/:versionId/:apiType/operations/:operationId/changes/summary'
  const endpoint = generatePath(
    endpointPattern,
    { packageId, versionId, apiType, operationId },
  )
  return requestJson<ChangesSummary>(
    endpoint,
    { method: 'GET' },
    { basePath: API_V2 },
  )
}
