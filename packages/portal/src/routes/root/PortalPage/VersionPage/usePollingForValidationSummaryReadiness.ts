import type { RefetchValidationSummary } from '@apihub/api-hooks/ApiQuality/useValidationSummaryByPackageVersion'
import type { PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useRef } from 'react'
import type { ClientValidationStatus } from './ApiQualityValidationSummaryProvider'
import { ClientValidationStatuses } from './ApiQualityValidationSummaryProvider'

const POLLING_INTERVAL: number = 10 // Seconds

const POLLING_FAILURE_COUNT: number = 5

export function usePollingForValidationSummaryReadiness(
  status: ClientValidationStatus | undefined,
  setStatus: Dispatch<SetStateAction<ClientValidationStatus | undefined>>,
  refetch: RefetchValidationSummary | undefined,
  options: {
    packageId: PackageKey | undefined
    version: VersionKey | undefined
  },
): void {
  const count = useRef(POLLING_FAILURE_COUNT)
  const timer = useRef<NodeJS.Timeout | undefined>(undefined)
  const { packageId, version } = options
  useEffect(() => {
    if (!refetch || !setStatus) {
      return
    }
    if (!status || !packageId || !version) {
      return
    }
    if (status === ClientValidationStatuses.SUCCESS || status === ClientValidationStatuses.ERROR) {
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
        setStatus(ClientValidationStatuses.NOT_VALIDATED)
        count.current = POLLING_FAILURE_COUNT
        clearInterval(timer.current!)
        return
      }
      if (status === ClientValidationStatuses.IN_PROGRESS) {
        refetch()
        count.current--
      }
    }, POLLING_INTERVAL * 1000)
  }, [refetch, setStatus, status, packageId, version])
}
