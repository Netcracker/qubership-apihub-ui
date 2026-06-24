import { useMemo } from 'react'
import type { VersionChangesSummary } from '@netcracker/qubership-apihub-ui-shared/entities/version-changes-summary'
import { isDashboardComparisonSummary } from '@netcracker/qubership-apihub-ui-shared/entities/version-changes-summary'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import {
  CONTRACT_TYPE_MCP,
  type ContractType,
} from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'

export type UseApiTypesFromChangesSummaryOptions = Readonly<{
  excludeMcp?: boolean
}>

export function useApiTypesFromChangesSummary(
  versionChangesSummary?: VersionChangesSummary,
  refPackageKey?: Key,
  options?: UseApiTypesFromChangesSummaryOptions,
): Array<ApiType | ContractType> {
  const { excludeMcp = true } = options ?? {}

  return useMemo(
    () => {
      if (!versionChangesSummary) {
        return []
      }

      const operationTypes = isDashboardComparisonSummary(versionChangesSummary)
        ? versionChangesSummary.find(refSummary => refSummary.refKey === refPackageKey)?.operationTypes
        : versionChangesSummary.operationTypes

      const apiTypes: Array<ApiType | ContractType> = operationTypes?.map(type => type.apiType) ?? []

      if (excludeMcp) {
        return apiTypes.filter(type => type !== CONTRACT_TYPE_MCP)
      }

      return apiTypes
    },
    [excludeMcp, refPackageKey, versionChangesSummary],
  )
}
