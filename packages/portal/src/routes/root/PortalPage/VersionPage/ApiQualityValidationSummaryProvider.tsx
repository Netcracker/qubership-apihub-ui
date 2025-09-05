import { type ValidationSummary } from '@apihub/entities/api-quality/package-version-validation-summary'
import { ValidationStatuses, type ValidationStatus } from '@apihub/entities/api-quality/validation-statuses'
import { Link } from '@mui/material'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { API_TYPE_GRAPHQL } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

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

type RunLinter = () => void

export function useApiQualityValidationStatus(): [ValidationStatus | undefined, RunLinter] {
  const summary = useApiQualityValidationSummary()
  const [overriddenStatus, setOverriddenStatus] = useState<ValidationStatus | undefined>(undefined)
  const onRunLinter = useCallback(() => {
    setOverriddenStatus(ValidationStatuses.IN_PROGRESS)
  }, [])
  return [
    useMemo(() => {
      if (overriddenStatus) {
        return overriddenStatus
      }
      if (!summary) {
        return undefined
      }
      return summary.status

    }, [summary, overriddenStatus]),
    onRunLinter,
  ]
}

export type IsApiQualityTabDisabled = boolean
export type ApiQualityTabTooltip = string | undefined
export type ApiQualityTabVisibilityParams = [ApiQualityTabTooltip, IsApiQualityTabDisabled]

export function useApiQualityTabVisibilityParams(): ApiQualityTabVisibilityParams {
  const [status] = useApiQualityValidationStatus()
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
  onManualRunLinter: RunLinter,
): ApiQualitySummarySectionProperties {
  const [status, updateStatus] = useApiQualityValidationStatus()
  const onManualRunLinterWithStatusUpdate = useCallback(() => {
    updateStatus()
    onManualRunLinter()
  }, [updateStatus, onManualRunLinter])
  switch (status) {
    case ValidationStatuses.IN_PROGRESS:
      return ['Validation is in progress, please wait...', true]
    case ValidationStatuses.NOT_VALIDATED:
      return [
        <>
          No validation results.
          <br />
          <Link onClick={onManualRunLinterWithStatusUpdate}>
            Run Validation
          </Link>
        </>,
        true,
      ]
    case ValidationStatuses.SUCCESS:
      return [undefined, false]
  }
  return ['Starting validation...', true]
}

export function useApiQualityValidationFailed(): boolean {
  const [status] = useApiQualityValidationStatus()
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
