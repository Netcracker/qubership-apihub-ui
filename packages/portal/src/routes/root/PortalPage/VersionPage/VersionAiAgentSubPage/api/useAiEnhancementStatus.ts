import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery } from '@tanstack/react-query'

const AiEnhancementStatuses = {
  NOT_STARTED: 'not_started',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  ERROR: 'error',
} as const
export type AiEnhancementStatus = typeof AiEnhancementStatuses[keyof typeof AiEnhancementStatuses]

type GetAiEnhancementStatusResponse = {
  status: AiEnhancementStatus
}

const QUERY_KEY_AI_ENHANCEMENT_STATUS = 'ai-enhancement-status'

export function useAiEnhancementStatus(
  docPackageId: string | undefined,
  docVersion: string | undefined,
  documentSlug: string | undefined,
  enabled: boolean = false,
): [AiEnhancementStatus | undefined, IsLoading, Error | null] {
  const docPackageKey = docPackageId ? encodeURIComponent(docPackageId) : undefined
  const docVersionKey = docVersion ? encodeURIComponent(docVersion) : undefined
  const documentSlugKey = documentSlug ? encodeURIComponent(documentSlug) : undefined

  const { data, isFetching, error } = useQuery<GetAiEnhancementStatusResponse, Error, GetAiEnhancementStatusResponse>({
    queryKey: [QUERY_KEY_AI_ENHANCEMENT_STATUS, docPackageKey, docVersionKey, documentSlugKey],
    queryFn: () => (
      !!docPackageKey && !!docVersionKey && !!documentSlugKey
        ? getAiEnhancementStatus(docPackageKey, docVersionKey, documentSlugKey)
        : Promise.resolve({ status: AiEnhancementStatuses.NOT_STARTED })
    ),
    enabled: enabled,
  })

  return [data?.status, isFetching, error]
}

// eslint-disable-next-line
function getAiEnhancementStatus(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<GetAiEnhancementStatusResponse> {
  const status: AiEnhancementStatus = AiEnhancementStatuses.NOT_STARTED
  return new Promise<GetAiEnhancementStatusResponse>((resolve) => {
    resolve({ status })
  })
}
