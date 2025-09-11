import type { RefetchValidationSummary } from '@apihub/api-hooks/ApiQuality/useValidationSummaryByPackageVersion'
import { useEffect, useState } from 'react'
import { ClientValidationStatuses, useApiQualityClientValidationStatus } from '../../ApiQualityValidationSummaryProvider'

const POLLING_INTERVAL: number = 10 // Seconds

export function usePollingForValidationSummaryReadiness(
  refetch: RefetchValidationSummary | undefined,
): void {
  const [status, setStatus] = useApiQualityClientValidationStatus()
  const [count, setCount] = useState(5)
  useEffect(() => {
    if (!refetch) {
      return
    }
    if (count === 0) {
      setStatus?.(ClientValidationStatuses.NOT_VALIDATED)
      return
    }
    if (status === ClientValidationStatuses.IN_PROGRESS) {
      setTimeout(() => {
        refetch()
        setCount(prev => prev - 1)
      }, POLLING_INTERVAL * 1000)
    }
  }, [status, refetch, count, setStatus])
}
