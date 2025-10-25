import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { LS_KEY_AI_ENHANCE_STATUS } from '../constants/local-storage-keys'
import type { AiEnhancementStatus, GetAiEnhancementStatusResponse } from '../types/enhancing-status'
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

  const { data, isFetching, error } = useQuery<GetAiEnhancementStatusResponse, Error, AiEnhancementStatus>({
    queryKey: [QUERY_KEY_AI_ENHANCEMENT_STATUS, docPackageKey, docVersionKey, documentSlugKey],
    queryFn: () => new Promise<GetAiEnhancementStatusResponse>(
      (resolve) => {
        const status =
          localStorage.getItem(LS_KEY_AI_ENHANCE_STATUS)?.replace(/"/g, '') ??
          AiEnhancementStatuses.NOT_STARTED
        resolve({ status: status as AiEnhancementStatus })
      },
    ),
    select: (data: GetAiEnhancementStatusResponse): AiEnhancementStatus => data.status,
    enabled: !!docPackageKey && !!docVersionKey && !!documentSlugKey,
  })

  return [data ?? AiEnhancementStatuses.NOT_STARTED, isFetching, error]
}

// eslint-disable-next-line
function getAiEnhancementStatus(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<GetAiEnhancementStatusResponse> {
  return new Promise<GetAiEnhancementStatusResponse>((resolve) => {
    const status: AiEnhancementStatus =
      localStorage.getItem(LS_KEY_AI_ENHANCE_STATUS) as AiEnhancementStatus ??
      AiEnhancementStatuses.NOT_STARTED
    resolve({ status })
  })
}

export function useInvalidateAiEnhancementStatus(): () => Promise<void> {
  const queryClient = useQueryClient()
  return (): Promise<void> => {
    return queryClient.invalidateQueries({ queryKey: [QUERY_KEY_AI_ENHANCEMENT_STATUS] })
  }
}
