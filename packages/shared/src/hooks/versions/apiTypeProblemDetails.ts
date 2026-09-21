import { type ApiType, isApiType } from '../../entities/api-types'
import {
  CONTRACT_TYPE_DDL,
  CONTRACT_TYPE_MCP,
  type ContractType,
  getRouteApiTypeTitle,
} from '../../entities/contract-types'
import type { OperationTypeSummary, VersionContractsSummary } from '../../entities/version-contents'
import {
  getPackageVersionApiTypeNoOperationsTooltip,
  getPackageVersionApiTypeSomeOperationsTooltip,
  getPackageVersionContractTypeNoEntitiesTooltip,
  getPackageVersionContractTypeSomeEntitiesTooltip,
} from '../../utils/publicationErrorMessages'

export type ApiTypeProblemDetails = Readonly<{
  hasProblems: boolean
  tooltip?: string
}>

type ResolveApiTypeProblemDetailsParams = Readonly<{
  apiType: ApiType | ContractType
  operationType?: OperationTypeSummary
  contractsSummary?: VersionContractsSummary
}>

type ResolveVersionApiTypeProblemsMapParams = Readonly<{
  allowedApiTypes?: ReadonlyArray<ApiType | ContractType>
  operationTypes?: Partial<Record<ApiType, OperationTypeSummary>>
  contractsSummary?: VersionContractsSummary
}>

const NO_API_TYPE_PROBLEMS: ApiTypeProblemDetails = {
  hasProblems: false,
}

export function resolveApiTypeProblemDetails(
  params: ResolveApiTypeProblemDetailsParams,
): ApiTypeProblemDetails {
  const { apiType, operationType, contractsSummary } = params

  if (isApiType(apiType)) {
    if (operationType?.hasErrors) {
      const displayTitle = getRouteApiTypeTitle(apiType)
      const operationsCount = operationType.operationsCount ?? 0
      return {
        hasProblems: true,
        tooltip: operationsCount === 0
          ? getPackageVersionApiTypeNoOperationsTooltip(displayTitle)
          : getPackageVersionApiTypeSomeOperationsTooltip(displayTitle),
      }
    }
    return NO_API_TYPE_PROBLEMS
  }

  if (apiType === CONTRACT_TYPE_DDL) {
    const ddlSummary = contractsSummary?.ddl
    if (ddlSummary?.hasErrors) {
      const displayTitle = getRouteApiTypeTitle(apiType)
      const tablesCount = ddlSummary.tablesCount ?? 0
      return {
        hasProblems: true,
        tooltip: tablesCount === 0
          ? getPackageVersionContractTypeNoEntitiesTooltip(displayTitle)
          : getPackageVersionContractTypeSomeEntitiesTooltip(displayTitle),
      }
    }
    return NO_API_TYPE_PROBLEMS
  }

  if (apiType === CONTRACT_TYPE_MCP) {
    const mcpTotals = contractsSummary?.mcp?.totals
    if (mcpTotals?.hasErrors) {
      const displayTitle = getRouteApiTypeTitle(apiType)
      const entitiesCount = (mcpTotals.toolsCount ?? 0) +
        (mcpTotals.promptsCount ?? 0) +
        (mcpTotals.resourcesCount ?? 0)
      return {
        hasProblems: true,
        tooltip: entitiesCount === 0
          ? getPackageVersionContractTypeNoEntitiesTooltip(displayTitle)
          : getPackageVersionContractTypeSomeEntitiesTooltip(displayTitle),
      }
    }
    return NO_API_TYPE_PROBLEMS
  }

  return NO_API_TYPE_PROBLEMS
}

export function resolveVersionApiTypeProblemsMap(
  params: ResolveVersionApiTypeProblemsMapParams,
): Partial<Record<ApiType | ContractType, ApiTypeProblemDetails>> {
  const { allowedApiTypes = [] } = params
  const result: Partial<Record<ApiType | ContractType, ApiTypeProblemDetails>> = {}

  for (const apiType of allowedApiTypes) {
    const problem = resolveApiTypeProblemDetails({
      apiType: apiType,
      operationType: isApiType(apiType) ? params.operationTypes?.[apiType] : undefined,
      contractsSummary: params.contractsSummary,
    })
    if (problem.hasProblems) {
      result[apiType] = problem
    }
  }

  return result
}
