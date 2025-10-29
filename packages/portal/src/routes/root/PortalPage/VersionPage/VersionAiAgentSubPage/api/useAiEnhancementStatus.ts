// import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { Key, PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'
import type { AiEnhancementStatus, AiEnhancementStatusDto } from '../types/enhancing-status'
import { AiEnhancementStatuses } from '../types/enhancing-status'
import { STUB_API_PATH } from './REMOVE_IT'

export type RefetchAiEnhancementStatus = (packageId: PackageKey, version: VersionKey, slug: Key) => Promise<void>

type AiEnhancementStatusQueryState = {
  data: AiEnhancementStatus | undefined
  isLoading: IsLoading
  error: Error | null
  refetch: RefetchAiEnhancementStatus
}

const QUERY_KEY_AI_ENHANCEMENT_STATUS = 'ai-enhancement-status'

export function useAiEnhancementStatus(
  docPackageId: string | undefined,
  docVersion: string | undefined,
  documentSlug: string | undefined,
): AiEnhancementStatusQueryState {
  const refetch = useRefetchAiEnhancementStatus()

  const docPackageKey = docPackageId ? encodeURIComponent(docPackageId) : undefined
  const docVersionKey = docVersion ? encodeURIComponent(docVersion) : undefined
  const documentSlugKey = documentSlug ? encodeURIComponent(documentSlug) : undefined

  const { data, isFetching, error } = useQuery<AiEnhancementStatusDto, Error, AiEnhancementStatus>({
    queryKey: [QUERY_KEY_AI_ENHANCEMENT_STATUS, docPackageKey, docVersionKey, documentSlugKey],
    queryFn: () => (
      docPackageKey && docVersionKey && documentSlugKey
        ? getAiEnhancementStatus(docPackageKey, docVersionKey, documentSlugKey)
        : Promise.resolve<AiEnhancementStatusDto>({ status: AiEnhancementStatuses.NOT_STARTED })
    ),
    select: (data: AiEnhancementStatusDto): AiEnhancementStatus => data.status,
    enabled: !!docPackageKey && !!docVersionKey && !!documentSlugKey,
  })

  return {
    data: data ?? AiEnhancementStatuses.NOT_STARTED,
    isLoading: isFetching,
    error: error,
    refetch: refetch,
  }
}

function getAiEnhancementStatus(docPackageKey: string, docVersionKey: string, docSlug: string): Promise<AiEnhancementStatusDto> {
  const endpointPattern = '/packages/:packageId/versions/:version/enhancedFiles/:slug/status'
  const endpoint = generatePath(endpointPattern, {
    packageId: docPackageKey,
    version: docVersionKey,
    slug: docSlug,
  })
  return requestJson<AiEnhancementStatusDto>(
    endpoint,
    { method: 'GET' },
    { basePath: STUB_API_PATH },
  )
}

export function useInvalidateAiEnhancementStatus(): () => Promise<void> {
  const queryClient = useQueryClient()
  return (): Promise<void> => (
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY_AI_ENHANCEMENT_STATUS] })
  )
}

export function useRefetchAiEnhancementStatus(): RefetchAiEnhancementStatus {
  const queryClient = useQueryClient()
  return (packageId: PackageKey, version: VersionKey, slug: Key): Promise<void> => (
    queryClient.refetchQueries({
      queryKey: [QUERY_KEY_AI_ENHANCEMENT_STATUS, packageId, version, slug],
    })
  )
}
