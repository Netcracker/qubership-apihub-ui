import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { ContractType } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import type { Key, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type {
  OperationTypeSummary,
  VersionContractsSummary,
} from '@netcracker/qubership-apihub-ui-shared/entities/version-contents'
import type { ApiTypeProblemDetails } from '@netcracker/qubership-apihub-ui-shared/hooks/versions/apiTypeProblemDetails'
import { resolveVersionApiTypeProblemsMap } from '@netcracker/qubership-apihub-ui-shared/hooks/versions/apiTypeProblemDetails'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'

import {
  getDefaultApiTypeFromTabApiTypes,
  isTabApiTypesEmpty,
  type PublishedApiTypes,
  resolveTabApiTypes,
  type TabAllowedApiType,
  VERSION_TAB_IDS,
  type VersionTabId,
} from './version-tab-allowed-api-types'

export type VersionTabApiTypesState = {
  allowedApiTypes: ReadonlyArray<TabAllowedApiType>
  defaultApiType: ApiType | ContractType | undefined
  disabled: boolean
  tooltip?: string
  apiTypeProblems: Partial<Record<ApiType | ContractType, ApiTypeProblemDetails>>
}

export type VersionTabsApiTypesState = {
  publishedApiTypes: PublishedApiTypes
  isLoading: IsLoading
  tabs: Record<VersionTabId, VersionTabApiTypesState>
}

export type BuildVersionTabsApiTypesStateInput = {
  publishedApiTypes: PublishedApiTypes
  isLoading: IsLoading
  previousVersion: Key | undefined
  versionKey?: VersionKey
  linterEnabled: boolean
  apiQualityTooltip: string | undefined
  operationTypes?: Record<ApiType, OperationTypeSummary>
  contractsSummary?: VersionContractsSummary
}

const API_CHANGES_NO_PREVIOUS_VERSION_TOOLTIP = 'No API changes since there is no previous version'

export function buildVersionTabsApiTypesState(
  input: BuildVersionTabsApiTypesStateInput,
): VersionTabsApiTypesState {
  const contractsAllowedApiTypes = resolveTabApiTypes(
    VERSION_TAB_IDS.contracts,
    input.publishedApiTypes,
  )
  const apiChangesAllowedApiTypes = resolveTabApiTypes(
    VERSION_TAB_IDS.apiChanges,
    input.publishedApiTypes,
  )
  const deprecatedAllowedApiTypes = resolveTabApiTypes(
    VERSION_TAB_IDS.deprecated,
    input.publishedApiTypes,
  )
  const apiQualityAllowedApiTypes = resolveTabApiTypes(
    VERSION_TAB_IDS.apiQuality,
    input.publishedApiTypes,
  )

  const hasNoPreviousVersion = input.previousVersion === undefined
  const apiQualityDisabledByLinter = !input.linterEnabled
  const hasApiQualityTooltip = input.apiQualityTooltip !== undefined

  return {
    publishedApiTypes: input.publishedApiTypes,
    isLoading: input.isLoading,
    tabs: {
      [VERSION_TAB_IDS.contracts]: toVersionTabApiTypesState(
        contractsAllowedApiTypes,
        isTabDisabledByEmptyApiTypes(contractsAllowedApiTypes, input.isLoading),
        undefined,
        input.operationTypes,
        input.contractsSummary,
        input.versionKey,
      ),
      [VERSION_TAB_IDS.apiChanges]: toVersionTabApiTypesState(
        apiChangesAllowedApiTypes,
        isTabDisabledByEmptyApiTypes(apiChangesAllowedApiTypes, input.isLoading) || hasNoPreviousVersion,
        hasNoPreviousVersion ? API_CHANGES_NO_PREVIOUS_VERSION_TOOLTIP : undefined,
        input.operationTypes,
        input.contractsSummary,
        input.versionKey,
      ),
      [VERSION_TAB_IDS.deprecated]: toVersionTabApiTypesState(
        deprecatedAllowedApiTypes,
        isTabDisabledByEmptyApiTypes(deprecatedAllowedApiTypes, input.isLoading),
        undefined,
        input.operationTypes,
        input.contractsSummary,
        input.versionKey,
      ),
      [VERSION_TAB_IDS.apiQuality]: toVersionTabApiTypesState(
        apiQualityAllowedApiTypes,
        isTabDisabledByEmptyApiTypes(apiQualityAllowedApiTypes, input.isLoading) ||
          apiQualityDisabledByLinter ||
          hasApiQualityTooltip,
        input.apiQualityTooltip,
        input.operationTypes,
        input.contractsSummary,
        input.versionKey,
      ),
    },
  }
}

function toVersionTabApiTypesState(
  allowedApiTypes: ReadonlyArray<TabAllowedApiType>,
  disabled: boolean,
  tooltip?: string,
  operationTypes?: Record<ApiType, OperationTypeSummary>,
  contractsSummary?: VersionContractsSummary,
  versionKey?: VersionKey,
): VersionTabApiTypesState {
  return {
    allowedApiTypes: allowedApiTypes,
    defaultApiType: getDefaultApiTypeFromTabApiTypes(allowedApiTypes),
    disabled: disabled,
    tooltip: tooltip,
    apiTypeProblems: versionKey
      ? resolveVersionApiTypeProblemsMap({
        allowedApiTypes: allowedApiTypes,
        operationTypes: operationTypes,
        contractsSummary: contractsSummary,
        versionKey: versionKey,
      })
      : {},
  }
}

function isTabDisabledByEmptyApiTypes(
  allowedApiTypes: PublishedApiTypes,
  isLoading: IsLoading,
): boolean {
  if (isLoading) {
    return false
  }
  return isTabApiTypesEmpty(allowedApiTypes)
}
