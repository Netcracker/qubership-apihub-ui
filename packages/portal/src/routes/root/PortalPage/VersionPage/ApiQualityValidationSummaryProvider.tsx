import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { ValidationStatuses, type ValidationStatus, type ValidationSummary } from './VersionApiQualitySubPage/types'

export const ApiQualityValidationSummaryContext = createContext<ValidationSummary | undefined>(undefined)

type ApiQualityValidationSummaryProviderProps = PropsWithChildren & {
  value: ValidationSummary | undefined
}

export function useApiQualityValidationSummary(): ValidationSummary | undefined {
  return useContext(ApiQualityValidationSummaryContext)
}

export function useApiQualityValidationStatus(): ValidationStatus | undefined {
  const summary = useApiQualityValidationSummary()
  if (!summary) {
    return undefined
  }
  let finalValidationStatus: ValidationStatus | undefined
  for (const { status } of summary) {
    if (finalValidationStatus === undefined) {
      finalValidationStatus = status
    } else {
      const comparisonResult = compareValidationStatuses(status, finalValidationStatus)
      if (comparisonResult > 0) {
        finalValidationStatus = status
      }
    }
  }
  return finalValidationStatus
}

const VALIDATION_STATUS_PRIORITY: Record<ValidationStatus, number> = {
  [ValidationStatuses.IN_PROGRESS]: 2,
  [ValidationStatuses.NOT_VALIDATED]: 1,
  [ValidationStatuses.SUCCESS]: 0,
}

function compareValidationStatuses(status1: ValidationStatus, status2: ValidationStatus): number {
  return VALIDATION_STATUS_PRIORITY[status1] - VALIDATION_STATUS_PRIORITY[status2]
}

export type IsApiQualityTabDisabled = boolean
export type ApiQualityTabTooltip = string | undefined
export type ApiQualityTabResolution = [ApiQualityTabTooltip, IsApiQualityTabDisabled]

export function useApiQualityTabResolution(): ApiQualityTabResolution {
  const status = useApiQualityValidationStatus()
  if (!status) {
    return [undefined, true]
  }
  switch (status) {
    case ValidationStatuses.IN_PROGRESS:
      return ['API quality check is in progress', true]
    case ValidationStatuses.NOT_VALIDATED:
      return ['API quality is not validated', true]
    case ValidationStatuses.SUCCESS:
      return [undefined, false]
  }
}

export const ApiQualityValidationSummaryProvider: FC<ApiQualityValidationSummaryProviderProps> = ({ children, value }) => {
  return (
    <ApiQualityValidationSummaryContext.Provider value={value}>
      {children}
    </ApiQualityValidationSummaryContext.Provider>
  )
}
