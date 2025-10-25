import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useMutation } from '@tanstack/react-query'
import { useLocalStorage } from 'react-use'
import { LS_KEY_AI_ENHANCE_STATUS } from '../constants/local-storage-keys'
import type { AiEnhancementStatus } from '../types/enhancing-status'
import { AiEnhancementStatuses } from '../types/enhancing-status'
import { useInvalidateAiEnhancementStatus } from './useAiEnhancementStatus'

type EnhanceDocumentCallbackOptions = {
  packageId: PackageKey
  version: VersionKey
  slug: string
}

type EnhanceDocumentCallback = (options: EnhanceDocumentCallbackOptions) => void

export function useAiEnhanceDocument(): [EnhanceDocumentCallback, IsLoading, Error | null] {
  const [, setAiEnhancementStatus] = useLocalStorage<AiEnhancementStatus>(LS_KEY_AI_ENHANCE_STATUS, AiEnhancementStatuses.NOT_STARTED)
  const invalidateAiEnhancementStatus = useInvalidateAiEnhancementStatus()

  const { mutate, isLoading, error } = useMutation<void, Error, EnhanceDocumentCallbackOptions>({
    // eslint-disable-next-line
    mutationFn: ({ packageId, version, slug }) => {
      setAiEnhancementStatus(AiEnhancementStatuses.PROCESSING)
      invalidateAiEnhancementStatus()
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          setAiEnhancementStatus(AiEnhancementStatuses.SUCCESS)
          resolve()
        }, 10_000)
      })
    },
    onSuccess: async () => {
      await invalidateAiEnhancementStatus()
    },
  })

  return [mutate, isLoading, error]
}
