import type { RefetchValidationSummary } from '@apihub/api-hooks/ApiQuality/useValidationSummaryByPackageVersion'
import { useEffect, useState } from 'react'
import { ClientValidationStatuses, useApiQualityClientValidationStatus } from '../../ApiQualityValidationSummaryProvider'

const POLLING_INTERVAL: number = 10 // Seconds

export function usePollingForValidationSummaryReadiness(
  refetch: RefetchValidationSummary | undefined,
): void {
  const [status] = useApiQualityClientValidationStatus()
  const [count, setCount] = useState(5)
  useEffect(() => {
    if (!refetch || count === 0) {
      return
    }
    if (status === ClientValidationStatuses.IN_PROGRESS) {
      setTimeout(() => {
        refetch()
        setCount(prev => prev - 1)
      }, POLLING_INTERVAL * 1000)
    }
  }, [status, refetch, count])
}
