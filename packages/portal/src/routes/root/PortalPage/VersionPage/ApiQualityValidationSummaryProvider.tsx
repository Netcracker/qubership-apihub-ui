import { type ValidationSummary } from '@apihub/entities/api-quality/package-version-validation-summary'
import { ValidationStatuses, type ValidationStatus } from '@apihub/entities/api-quality/validation-statuses'
import { Link } from '@mui/material'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { API_TYPE_GRAPHQL } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import { createContext, useContext, useMemo } from 'react'

// Raw contexts

export const ApiQualityValidationSummaryContext = createContext<ValidationSummary | undefined>(undefined)
export const ApiQualityLinterEnabledContext = createContext<boolean>(false)

type ApiQualityDataProviderProps = PropsWithChildren & {
  linterEnabled: boolean
  validationSummary: ValidationSummary | undefined
}

export function useApiQualityValidationSummary(): ValidationSummary | undefined {
  return useContext(ApiQualityValidationSummaryContext)
}

const NOT_LINTED_API_TYPES: ApiType[] = [API_TYPE_GRAPHQL]

export function useApiQualityLinterEnabled(apiType: ApiType): boolean {
  const linterEnabled = useContext(ApiQualityLinterEnabledContext) &&
    !NOT_LINTED_API_TYPES.some(notLintedApiType => notLintedApiType === apiType)
  return linterEnabled
}

// High-order hooks

export function useApiQualityValidationStatus(): ValidationStatus | undefined {
  const summary = useApiQualityValidationSummary()
  return useMemo(() => {
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
  }, [summary])
}

const VALIDATION_STATUS_PRIORITY: Record<ValidationStatus, number> = {
  [ValidationStatuses.FAILED]: 3,
  [ValidationStatuses.IN_PROGRESS]: 2,
  [ValidationStatuses.NOT_VALIDATED]: 1,
  [ValidationStatuses.SUCCESS]: 0,
}

function compareValidationStatuses(status1: ValidationStatus, status2: ValidationStatus): number {
  return VALIDATION_STATUS_PRIORITY[status1] - VALIDATION_STATUS_PRIORITY[status2]
}

export type IsApiQualityTabDisabled = boolean
export type ApiQualityTabTooltip = string | undefined
export type ApiQualityTabVisibilityParams = [ApiQualityTabTooltip, IsApiQualityTabDisabled]

export function useApiQualityTabVisibilityParams(): ApiQualityTabVisibilityParams {
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
  return [undefined, false]
}

type ApiQualitySummaryPlaceholder = string | ReactNode | undefined
type ApiQualitySummaryDisabled = boolean
type ApiQualitySummarySectionProperties = [ApiQualitySummaryPlaceholder, ApiQualitySummaryDisabled]

export function useApiQualitySummarySectionProperties(
  onManualRunLinter: () => void,
): ApiQualitySummarySectionProperties {
  const status = useApiQualityValidationStatus()
  switch (status) {
    case ValidationStatuses.IN_PROGRESS:
      return ['Validation is in progress, please wait...', true]
    case ValidationStatuses.NOT_VALIDATED:
      // return [<>No validation results.<br />Republish the version to start quality validation for the new revision.</>, true]
      return [<>No validation results.<br /><Link onClick={onManualRunLinter}>Run linter</Link></>, true]
    case ValidationStatuses.SUCCESS:
      return [undefined, false]
  }
  return [undefined, true]
}

export function useApiQualityValidationFailed(): boolean {
  const status = useApiQualityValidationStatus()
  return status === ValidationStatuses.FAILED
}

// Public provider

export const ApiQualityDataProvider: FC<ApiQualityDataProviderProps> = ({ children, linterEnabled, validationSummary }) => {
  return (
    <ApiQualityValidationSummaryContext.Provider value={validationSummary}>
      <ApiQualityLinterEnabledContext.Provider value={linterEnabled}>
        {children}
      </ApiQualityLinterEnabledContext.Provider>
    </ApiQualityValidationSummaryContext.Provider>
  )
}
