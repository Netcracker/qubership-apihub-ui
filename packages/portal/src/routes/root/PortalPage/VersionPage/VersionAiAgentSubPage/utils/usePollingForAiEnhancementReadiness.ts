import type { Key, PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { useEffect, useRef } from 'react'
import type { RefetchAiEnhancementStatus } from '../api/useAiEnhancementStatus'
import type { AiEnhancementStatus } from '../types/enhancing-status'
import { AiEnhancementStatuses } from '../types/enhancing-status'

const POLLING_INTERVAL: number = 10 // Seconds

const POLLING_FAILURE_COUNT: number = 600

let interval: NodeJS.Timeout | undefined

export function usePollingForAiEnhancementReadiness(
  status: AiEnhancementStatus | undefined,
  refetch: RefetchAiEnhancementStatus | undefined,
  options: {
    packageId: PackageKey | undefined
    version: VersionKey | undefined
    slug: Key | undefined
  },
): void {
  const count = useRef(POLLING_FAILURE_COUNT)
  const { packageId, version, slug } = options
  useEffect(() => {
    if (!refetch) {
      return
    }
    if (!packageId || !version || !slug) {
      return
    }
    if (status === AiEnhancementStatuses.SUCCESS || status === AiEnhancementStatuses.ERROR) {
      clearInterval(interval!)
      return
    }
    interval = setTimeout(() => {
      if (count.current === 0) {
        count.current = POLLING_FAILURE_COUNT
        clearInterval(interval!)
        return
      }
      if (status === AiEnhancementStatuses.PROCESSING) {
        refetch(packageId, version, slug)
        count.current--
      }
    }, POLLING_INTERVAL * 1000)
  }, [packageId, refetch, slug, status, version])
}
