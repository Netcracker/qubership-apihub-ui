import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { requestVoid, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router'

type Request = {
  packageId: PackageKey
  version: VersionKey
}

type Response = void

type QueryState = {
  calculateDocumentScoring: (request: Request) => void
  isLoading: boolean
  error: Error | null
}

export function useCalculateAiDocumentScoring(): QueryState {
  const { mutate, isLoading, error } = useMutation<Response, Error, Request>({
    mutationFn: (request: Request) => calculateAiDocumentScoring(request),
  })

  return {
    calculateDocumentScoring: mutate,
    isLoading: isLoading,
    error: error,
  }
}

function calculateAiDocumentScoring(request: Request): Promise<Response> {
  const endpointPattern = '/packages/:packageId/versions/:version/scoring'
  const endpoint = generatePath(endpointPattern, {
    packageId: request.packageId,
    version: request.version,
  })

  return requestVoid(
    endpoint,
    {
      method: 'POST',
      body: JSON.stringify(request),
    },
    {
      basePath: STUB_API_V1,
    },
  )
}
