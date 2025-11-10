import type { Key, PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { useEffect, useRef } from 'react'
import type { RefetchAiScoringStatus } from '../api/useAiDocumentScoringStatus'
import type { AiScoringCalculationStatus } from '../types/document-scoring-calculation-status'
import { AiScoringCalculationStatuses } from '../types/document-scoring-calculation-status'

const POLLING_INTERVAL: number = 10 // Seconds

const POLLING_FAILURE_COUNT: number = 600

export function usePollingForAiScoringReadiness(
  status: AiScoringCalculationStatus | undefined,
  refetch: RefetchAiScoringStatus | undefined,
  options: {
    packageId: PackageKey | undefined
    version: VersionKey | undefined
    slug: Key | undefined
  },
): void {
  const count = useRef(POLLING_FAILURE_COUNT)
  const timer = useRef<NodeJS.Timeout | undefined>(undefined)
  const { packageId, version, slug } = options
  useEffect(() => {
    if (!refetch) {
      return
    }
    if (!status || !packageId || !version || !slug) {
      return
    }
    if (status === AiScoringCalculationStatuses.SUCCESS || status === AiScoringCalculationStatuses.ERROR) {
      clearInterval(timer.current!)
      delete timer.current
      return
    }
    if (timer.current) {
      clearInterval(timer.current)
      delete timer.current
    }
    timer.current = setInterval(() => {
      if (count.current === 0) {
        count.current = POLLING_FAILURE_COUNT
        clearInterval(timer.current!)
        return
      }
      if (status === AiScoringCalculationStatuses.PROCESSING) {
        refetch()
        count.current--
      }
    }, POLLING_INTERVAL * 1000)
  }, [packageId, refetch, slug, status, version])
}
