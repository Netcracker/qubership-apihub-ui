/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useMemo } from 'react'

import {
  calculateImpactedSummary,
  calculateTotalChangeSummary,
  calculateTotalImpactedSummary,
  EMPTY_CHANGE_SUMMARY,
} from '@netcracker/qubership-apihub-api-processor'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { ChangeSeverity, ChangesSummary } from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import {
  ANNOTATION_CHANGE_SEVERITY,
  BREAKING_CHANGE_SEVERITY,
  DEPRECATED_CHANGE_SEVERITY,
  NON_BREAKING_CHANGE_SEVERITY,
  RISKY_CHANGE_SEVERITY,
  UNCLASSIFIED_CHANGE_SEVERITY,
} from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import type { ContractType } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import { CONTRACT_TYPE_DDL } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import { hasDdlComparisonChanges } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { DashboardComparisonSummary } from '@netcracker/qubership-apihub-ui-shared/entities/version-changes-summary'
import {
  isDashboardComparisonSummary,
  isPackageComparisonSummary,
} from '@netcracker/qubership-apihub-ui-shared/entities/version-changes-summary'

import { useRefSearchParam } from '../useRefSearchParam'
import { useChangesSummaryFromContext } from './ChangesSummaryProvider'

export function useOrderedComparisonFiltersSummary(options: {
  isDashboardsComparison?: boolean
  apiType: ApiType | ContractType | undefined
}): Record<ChangeSeverity, number> | undefined {
  const { isDashboardsComparison = false, apiType } = options

  const versionChangesSummary = useChangesSummaryFromContext()
  const [refPackageKey] = useRefSearchParam()

  const totalVersionChanges: ChangesSummary | undefined = useMemo(() => {
    if (!versionChangesSummary) {
      return undefined
    }

    if (apiType === CONTRACT_TYPE_DDL) {
      return calculateDdlChangesSummary(
        versionChangesSummary,
        isDashboardsComparison,
        refPackageKey,
      )
    }

    if (isDashboardComparisonSummary(versionChangesSummary)) {
      return calculateDashboardChangesSummary(versionChangesSummary, isDashboardsComparison, apiType)
    }

    const refChangesSummaries = versionChangesSummary.operationTypes
      .filter(type => type.apiType === apiType)
      .map(type => type.numberOfImpactedOperations ?? EMPTY_CHANGE_SUMMARY)

    return calculateTotalChangeSummary(refChangesSummaries)
  }, [apiType, isDashboardsComparison, refPackageKey, versionChangesSummary])

  if (!totalVersionChanges) {
    return undefined
  }

  return {
    [BREAKING_CHANGE_SEVERITY]: totalVersionChanges[BREAKING_CHANGE_SEVERITY],
    [RISKY_CHANGE_SEVERITY]: totalVersionChanges[RISKY_CHANGE_SEVERITY],
    [DEPRECATED_CHANGE_SEVERITY]: totalVersionChanges[DEPRECATED_CHANGE_SEVERITY],
    [NON_BREAKING_CHANGE_SEVERITY]: totalVersionChanges[NON_BREAKING_CHANGE_SEVERITY],
    [ANNOTATION_CHANGE_SEVERITY]: totalVersionChanges[ANNOTATION_CHANGE_SEVERITY],
    [UNCLASSIFIED_CHANGE_SEVERITY]: totalVersionChanges[UNCLASSIFIED_CHANGE_SEVERITY],
  }
}

function calculateDdlChangesSummary(
  versionChangesSummary: NonNullable<ReturnType<typeof useChangesSummaryFromContext>>,
  isDashboardsComparison: boolean,
  refPackageKey: Key | undefined,
): ChangesSummary | undefined {
  if (isDashboardComparisonSummary(versionChangesSummary)) {
    if (isDashboardsComparison || !refPackageKey) {
      const ddlImpactedSummaries = versionChangesSummary
        .map(({ contractsChangesSummary }) => contractsChangesSummary?.ddl)
        .filter(hasDdlComparisonChanges)
        .map(ddl => ddl!.numberOfImpactedEntities ?? ddl!.changesSummary ?? EMPTY_CHANGE_SUMMARY)

      if (ddlImpactedSummaries.length === 0) {
        return undefined
      }

      return calculateTotalChangeSummary(ddlImpactedSummaries)
    }

    const refSummary = versionChangesSummary.find(summary => summary.refKey === refPackageKey)
    const ddlSummary = refSummary?.contractsChangesSummary?.ddl
    if (!hasDdlComparisonChanges(ddlSummary)) {
      return undefined
    }

    return ddlSummary?.numberOfImpactedEntities ?? ddlSummary?.changesSummary
  }

  if (isPackageComparisonSummary(versionChangesSummary)) {
    const ddlSummary = versionChangesSummary.contractsChangesSummary?.ddl
    if (!hasDdlComparisonChanges(ddlSummary)) {
      return undefined
    }

    return ddlSummary?.numberOfImpactedEntities ?? ddlSummary?.changesSummary
  }

  return undefined
}

function calculateDashboardChangesSummary(
  versionChangesSummary: DashboardComparisonSummary,
  isDashboardsComparison: boolean,
  apiType: ApiType | ContractType | undefined,
): ChangesSummary {
  if (isDashboardsComparison) {
    return calculateTotalImpactedSummary(
      versionChangesSummary.map(({ operationTypes, contractsChangesSummary }) => {
        const refChangesSummaries = operationTypes
          .filter(type => (apiType ? type.apiType === apiType : true))
          .map(type => type.changesSummary ?? EMPTY_CHANGE_SUMMARY)

        if (!apiType && hasDdlComparisonChanges(contractsChangesSummary?.ddl)) {
          refChangesSummaries.push(
            contractsChangesSummary!.ddl!.changesSummary ?? EMPTY_CHANGE_SUMMARY,
          )
        }

        return calculateImpactedSummary(refChangesSummaries)
      }),
    )
  }
  const refChangesSummaries = versionChangesSummary
    .flatMap(({ operationTypes }) => operationTypes
      .filter(type => type.apiType === apiType)
      .map(type => type.numberOfImpactedOperations ?? EMPTY_CHANGE_SUMMARY))

  return calculateTotalChangeSummary(refChangesSummaries)
}
