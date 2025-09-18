import type { RefetchValidationSummary } from '@apihub/api-hooks/ApiQuality/useValidationSummaryByPackageVersion'
import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef } from 'react'
import type { ClientValidationStatus } from './ApiQualityValidationSummaryProvider'
import { ClientValidationStatuses } from './ApiQualityValidationSummaryProvider'

const POLLING_INTERVAL: number = 10 // Seconds

const POLLING_FAILURE_COUNT: number = 5

let interval

export function usePollingForValidationSummaryReadiness(
  status: ClientValidationStatus,
  setStatus: Dispatch<SetStateAction<ClientValidationStatus>>,
  refetch: RefetchValidationSummary | undefined,
): void {
  const count = useRef(POLLING_FAILURE_COUNT)
  useEffect(() => {
    if (!refetch || !setStatus) {
      return
    }
    interval = setInterval(() => {
      if (count.current === 0) {
        setStatus(ClientValidationStatuses.NOT_VALIDATED)
        count.current = POLLING_FAILURE_COUNT
        clearInterval(interval!)
        return
      }
      if (status === ClientValidationStatuses.IN_PROGRESS) {
        refetch()
        count.current--
      }
    }, POLLING_INTERVAL * 1000)
  }, [status, refetch, setStatus])
}
