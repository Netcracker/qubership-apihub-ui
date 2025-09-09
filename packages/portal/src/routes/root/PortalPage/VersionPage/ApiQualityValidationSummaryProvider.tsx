import { type ValidationSummary } from '@apihub/entities/api-quality/package-version-validation-summary'
import { ValidationStatuses, type ValidationStatus } from '@apihub/entities/api-quality/validation-statuses'
import { Link } from '@mui/material'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { API_TYPE_GRAPHQL } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { FC, PropsWithChildren, ReactNode } from 'react'
import { createContext, memo, useCallback, useContext, useMemo, useState } from 'react'

export const ClientValidationStatuses = {
  CHECKING: 'checking',
  IN_PROGRESS: 'in-progress',
  VALIDATED: 'validated',
  NOT_VALIDATED: 'not-validated',
} as const
export type ClientValidationStatus = (typeof ClientValidationStatuses)[keyof typeof ClientValidationStatuses]

type RefetchValidationSummary = () => void

export type SetClientValidationStatus = (status: ClientValidationStatus) => void

// Raw contexts

export const ApiQualityLinterEnabledContext = createContext<boolean>(false)
export const ApiQualityValidationSummaryContext = createContext<ValidationSummary | undefined>(undefined)
export const ClientValidationStatusContext = createContext<ClientValidationStatus>(ClientValidationStatuses.CHECKING)
export const SetClientValidationStatusContext = createContext<SetClientValidationStatus | undefined>(undefined)
export const RefetchApiQualityValidationSummaryContext = createContext<RefetchValidationSummary | undefined>(undefined)

type ApiQualityDataProviderProps = PropsWithChildren & {
  linterEnabled: boolean
  validationSummary: ValidationSummary | undefined
  refetchValidationSummary: RefetchValidationSummary | undefined
  clientValidationStatus: ClientValidationStatus
  setClientValidationStatus: SetClientValidationStatus
}

export function useApiQualityValidationSummary(): [ValidationSummary | undefined, RefetchValidationSummary | undefined] {
  return [
    useContext(ApiQualityValidationSummaryContext),
    useContext(RefetchApiQualityValidationSummaryContext),
  ]
}

export function useApiQualityClientValidationStatus(): [ClientValidationStatus | undefined, SetClientValidationStatus | undefined] {
  return [
    useContext(ClientValidationStatusContext),
    useContext(SetClientValidationStatusContext),
  ]
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
  const [summary] = useApiQualityValidationSummary()
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

export const ApiQualityDataProvider: FC<ApiQualityDataProviderProps> = memo((props) => {
  const {
    children,
    linterEnabled,
    validationSummary,
    clientValidationStatus,
    setClientValidationStatus,
    refetchValidationSummary,
  } = props
  return (
    <ApiQualityLinterEnabledContext.Provider value={linterEnabled}>
      <ClientValidationStatusContext.Provider value={clientValidationStatus}>
        <SetClientValidationStatusContext.Provider value={setClientValidationStatus}>
          <ApiQualityValidationSummaryContext.Provider value={validationSummary}>
            <RefetchApiQualityValidationSummaryContext.Provider value={refetchValidationSummary}>
              {children}
            </RefetchApiQualityValidationSummaryContext.Provider>
          </ApiQualityValidationSummaryContext.Provider>
        </SetClientValidationStatusContext.Provider>
      </ClientValidationStatusContext.Provider>
    </ApiQualityLinterEnabledContext.Provider>
  )
})
