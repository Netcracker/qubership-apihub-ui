import type { RefetchValidationSummary } from '@apihub/api-hooks/ApiQuality/useValidationSummaryByPackageVersion'
import { ValidationStatuses } from '@apihub/entities/api-quality/validation-statuses'
import { useEffect, useState } from 'react'
import { useApiQualityValidationStatus } from '../../ApiQualityValidationSummaryProvider'

const POLLING_INTERVAL: number = 10 // Seconds

export function usePollingForValidationSummaryReadiness(
  refetch: RefetchValidationSummary | undefined,
): void {
  const [status] = useApiQualityValidationStatus()
  const [count, setCount] = useState(5)
  useEffect(() => {
    if (!refetch || count === 0) {
      return
    }
    if (status === ValidationStatuses.IN_PROGRESS) {
      setTimeout(() => {
        refetch()
        setCount(count - 1)
      }, POLLING_INTERVAL * 1000)
    }
  }, [status, refetch, count])
}
