import { useMemo } from 'react'

import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { CONTRACT_TYPE_DDL, type ContractType } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { VersionChangesSummary } from '@netcracker/qubership-apihub-ui-shared/entities/version-changes-summary'

import { useComparisonParams } from '../useComparisonParams'
import { usePackageVersionApiTypes } from '../usePackageVersionApiTypes'
import { useApiTypesFromChangesSummary } from './useApiTypesFromChangesSummary'

export function useCompareAllowedApiTypes(
  versionChangesSummary?: VersionChangesSummary,
  refPackageKey?: Key,
): Array<ApiType | ContractType> {
  const { changedPackageKey, changedVersionKey } = useComparisonParams()
  const apiTypesFromSummary = useApiTypesFromChangesSummary(versionChangesSummary, refPackageKey, {
    excludeMcp: true,
  })
  const { apiTypes: apiTypesFromVersion } = usePackageVersionApiTypes(
    changedPackageKey ?? '',
    changedVersionKey ?? '',
    { excludeMcp: true },
  )

  return useMemo(() => {
    if (apiTypesFromVersion.includes(CONTRACT_TYPE_DDL) && !apiTypesFromSummary.includes(CONTRACT_TYPE_DDL)) {
      return [...apiTypesFromSummary, CONTRACT_TYPE_DDL]
    }
    return apiTypesFromSummary
  }, [apiTypesFromSummary, apiTypesFromVersion])
}
