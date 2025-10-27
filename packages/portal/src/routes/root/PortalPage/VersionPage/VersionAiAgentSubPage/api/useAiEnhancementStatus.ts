import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'
import type { AiEnhancementStatus, AiEnhancementStatusDto } from '../types/enhancing-status'
import { AiEnhancementStatuses } from '../types/enhancing-status'

const QUERY_KEY_AI_ENHANCEMENT_STATUS = 'ai-enhancement-status'

export function useAiEnhancementStatus(
  docPackageId: string | undefined,
  docVersion: string | undefined,
  documentSlug: string | undefined,
): [AiEnhancementStatus | undefined, IsLoading, Error | null] {
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

  return [data ?? AiEnhancementStatuses.NOT_STARTED, isFetching, error]
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
    { basePath: API_LINTER_API_V1 },
  )
}

export function useInvalidateAiEnhancementStatus(): () => Promise<void> {
  const queryClient = useQueryClient()
  return (): Promise<void> => {
    return queryClient.invalidateQueries({ queryKey: [QUERY_KEY_AI_ENHANCEMENT_STATUS] })
  }
}
