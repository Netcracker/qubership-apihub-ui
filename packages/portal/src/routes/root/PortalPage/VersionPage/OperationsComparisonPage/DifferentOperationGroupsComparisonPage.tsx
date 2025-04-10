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

import { OperationContent } from '@apihub/routes/root/PortalPage/VersionPage/OperationContent/OperationContent'
import {
  COMPARE_SAME_OPERATIONS_MODE,
} from '@apihub/routes/root/PortalPage/VersionPage/OperationContent/OperationView/OperationDisplayMode'
import { useComparisonObjects } from '@apihub/routes/root/PortalPage/VersionPage/useComparisonObjects'
import {
  groupOperationsByTags,
  isFullyAddedOrRemovedOperationChange
} from '@apihub/utils/operations'
import type { ActionType } from '@netcracker/qubership-apihub-api-diff'
import type { OperationChangesDto } from '@netcracker/qubership-apihub-api-processor'
import { convertToSlug } from '@netcracker/qubership-apihub-api-processor'
import { PageLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayout'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type {
  Operation,
  OperationsGroupedByTag,
  RestOperation
} from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import {
  isOperationChangeDataArray,
  isOperationDataArray,
  isRestOperation,
  NO_BWC_API_KIND,
} from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import type { OperationChangeData } from '@netcracker/qubership-apihub-ui-shared/entities/version-changelog'
import type {
  DashboardComparisonSummary,
  RefComparisonSummary,
} from '@netcracker/qubership-apihub-ui-shared/entities/version-changes-summary'
import {
  useSeverityFiltersSearchParam,
} from '@netcracker/qubership-apihub-ui-shared/hooks/change-severities/useSeverityFiltersSearchParam'
import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import { isEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'
import { filterChangesBySeverity } from '@netcracker/qubership-apihub-ui-shared/utils/change-severities'
import {
  DOCUMENT_SEARCH_PARAM,
  FILTERS_SEARCH_PARAM,
  GROUP_SEARCH_PARAM,
} from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import type { FC } from 'react'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigation } from '../../../../NavigationProvider'
import { usePackage } from '../../../usePackage'
import { usePackageSearchParam } from '../../../usePackageSearchParam'
import { useVersionSearchParam } from '../../../useVersionSearchParam'
import { useCompareGroups } from '../../useCompareGroups'
import { useIsPackageFromDashboard } from '../../useIsPackageFromDashboard'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useChangesSummaryContext } from '../ChangesSummaryProvider'
import { CompareOperationPathsDialog } from '../CompareOperationPathsDialog'
import { ComparedOperationsContext } from '../ComparedOperationsContext'
import { BreadcrumbsDataContext } from '../ComparedPackagesBreadcrumbsProvider'
import { ComparisonToolbar } from '../ComparisonToolbar'
import { SelectedOperationTagsProvider } from '../SelectedOperationTagsProvider'
import { ShouldAutoExpandTagsProvider, useSetShouldAutoExpandTagsContext } from '../ShouldAutoExpandTagsProvider'
import { VersionsComparisonGlobalParamsContext } from '../VersionsComparisonGlobalParams'
import { VERSION_SWAPPER_HEIGHT } from '../shared-styles'
import { useCompareBreadcrumbs } from '../useCompareBreadcrumbs'
import { useComparisonParams } from '../useComparisonParams'
import { useDocumentSearchParam } from '../useDocumentSearchParam'
import { useNavigateToOperation } from '../useNavigateToOperation'
import { useOperation } from '../useOperation'
import { isOperationGrouped } from '../useOperationsGroupedByTags'
import { OperationsSidebarOnComparison } from './OperationsSidebarOnComparison'

export const DifferentOperationGroupsComparisonPage: FC = memo(() => {
  const previousGroup = useSearchParam(GROUP_SEARCH_PARAM)
  const {
    packageId: changedPackageKey,
    versionId: changedVersionKey,
    operationId: operationKey,
    group,
    apiType,
  } = useParams()
  const [packageSearchParam] = usePackageSearchParam()
  const [packageObj] = usePackage()
  const originPackageKey = packageSearchParam ?? changedPackageKey
  const [versionSearchParam] = useVersionSearchParam()
  const originVersionKey = versionSearchParam
  const [operationPackageKey, operationPackageVersion] = usePackageParamsWithRef()
  const [selectedDocumentSlug] = useDocumentSearchParam()
  const [filters] = useSeverityFiltersSearchParam()

  const { isPackageFromDashboard, refPackageKey } = useIsPackageFromDashboard()

  const { navigateToFirstGroupOperation } = useNavigation()

  const [searchValue, setSearchValue] = useState('')

  const [compareGroups, isComparisonLoading] = useCompareGroups({
    changedPackageKey: changedPackageKey,
    changedVersionKey: changedVersionKey,
    originPackageKey: originPackageKey,
    originVersionKey: originVersionKey,
    currentGroup: group,
    previousGroup: previousGroup,
  })

  const operationAction = useMemo((): ActionType | string => {
    const targetChange = compareGroups?.data?.find(
      element => element.operationId === operationKey && isFullyAddedOrRemovedOperationChange(element),
    )?.changes?.[0]

    return isEmpty(compareGroups?.data) ? '' : targetChange?.action ?? 'rename'
  }, [compareGroups, operationKey])

  const [changesSummary] = useChangesSummaryContext({
    changedPackageKey: changedPackageKey,
    changedVersionKey: changedVersionKey,
    originPackageKey: originPackageKey,
    originVersionKey: originVersionKey,
    currentGroup: group,
    previousGroup: previousGroup,
  })

  const refComparisonSummary: RefComparisonSummary | undefined = useMemo(() => {
    if (!isPackageFromDashboard) {
      return undefined
    }
    return (changesSummary as DashboardComparisonSummary)?.find(summary => {
      return summary.refKey === refPackageKey
    })
  }, [changesSummary, isPackageFromDashboard, refPackageKey])

  const restGroupingPrefix = packageObj?.restGroupingPrefix

  const { data: originOperation, isLoading: isOriginOperationLoading } = useOperation({
    packageKey: !isPackageFromDashboard ? originPackageKey : refPackageKey,
    versionKey: !isPackageFromDashboard ? changedVersionKey : refComparisonSummary?.previousVersion,
    enabled: actionForOriginalOperation.includes(operationAction) && !!restGroupingPrefix,
    apiType: apiType as ApiType,
    operationKey: operationAction === 'rename'
      ? `${getFullGroupForOperation(restGroupingPrefix, previousGroup!)}-${operationKey}`
      : operationKey,
  })

  const { data: changedOperation, isLoading: isChangedOperationLoading } = useOperation({
    packageKey: !isPackageFromDashboard ? originPackageKey : refPackageKey,
    versionKey: !isPackageFromDashboard ? changedVersionKey : refComparisonSummary?.version,
    enabled: actionForChangedOperation.includes(operationAction) && !!restGroupingPrefix,
    apiType: apiType as ApiType,
    operationKey: operationAction === 'rename'
      ? `${getFullGroupForOperation(restGroupingPrefix, group!)}-${operationKey}`
      : operationKey,
  })

  const areChangesAndOperationsLoading = isOriginOperationLoading && isChangedOperationLoading
  const operationsGroupedByTags: OperationsGroupedByTag<Operation> = useMemo(() => {
    const filteredChanges: OperationChangesDto[] = compareGroups.data?.filter(
      operationChange => filterChangesBySeverity(filters, operationChange.changeSummary),
    ) ?? []

    const operations: Operation[] = []
    for (const operationChange of filteredChanges) {
      // @ts-expect-error // Will be gone after migration to new types
      const previousOperation: Operation | undefined = operationChange.previousOperationId ? {
        // @ts-expect-error // Will be gone after migration to new types
        operationKey: operationChange.previousOperationId,
        title: operationChange.metadata?.previousOperationMetadata?.title ?? '',
        apiKind: operationChange.previousApiKind ?? NO_BWC_API_KIND, // TODO 10.04.25 // Fix it
        apiAudience: 'unknown',
        tags: operationChange.metadata?.previousOperationMetadata?.tags,
      } : undefined
      const currentOperation: Operation | undefined = operationChange.operationId ? {
        operationKey: operationChange.operationId,
        title: operationChange.metadata?.title ?? '',
        apiKind: operationChange.apiKind ?? NO_BWC_API_KIND, // TODO 10.04.25 // Fix it
        apiAudience: 'unknown',
        tags: operationChange.metadata?.tags,
      } : undefined
      const allTags = new Set([...previousOperation?.tags ?? [], ...currentOperation?.tags ?? []])
      const operation: Operation = {
        ...currentOperation ?? previousOperation!,
        tags: Array.from(allTags),
      }
      operations.push(operation)
    }

    return groupOperationsByTags(operations)
  }, [compareGroups.data, filters])
  const tags = useMemo(() => Array.from(Object.keys(operationsGroupedByTags)), [operationsGroupedByTags])

  const filterGroupedOperations = useCallback((property: keyof Pick<RestOperation, 'method' | 'path' | 'title'>) =>
    (operation: Operation): boolean => isRestOperation(operation) &&
      !Array.isArray(operation[property]) &&
      operation[property]?.toLowerCase().includes(searchValue.toLowerCase()),
    [searchValue])

  const filterOperations = useCallback((filterFunction: (operation: Operation) => boolean): OperationsGroupedByTag<Operation> => {
    return Object.fromEntries(
      Object.entries(operationsGroupedByTags).map(([tag, operations]) => [
        tag,
        isOperationDataArray(operations)
          ? operations.filter(filterFunction)
          : isOperationChangeDataArray(operations)
            ? operations.filter(filterFunction)
            : operations,
      ]),
    )
  }, [operationsGroupedByTags])

  const filteredOperationsGroupedByTags = useMemo(() => {
    if (searchValue) {
      let filterResult = filterOperations(filterGroupedOperations('title'))

      if (httpMethods.includes(searchValue.toUpperCase())) {
        filterResult = {
          ...filterResult,
          ...filterOperations(filterGroupedOperations('method')),
        }
      }
      if (searchValue.includes('/') || searchValue.includes('api')) {
        filterResult = {
          ...filterResult,
          ...filterOperations(filterGroupedOperations('path')),
        }
      }

      return filterResult
    }

    return operationsGroupedByTags
  }, [filterGroupedOperations, filterOperations, operationsGroupedByTags, searchValue])

  const filteredTagsInSidebar = useMemo(() => tags.filter(tag => filteredOperationsGroupedByTags[tag]?.length), [filteredOperationsGroupedByTags, tags])

  const [firstOperation] = useMemo(
    () => (filteredTagsInSidebar.length && (filteredOperationsGroupedByTags || searchValue) ? filteredOperationsGroupedByTags[filteredTagsInSidebar[0]] : []),
    [filteredOperationsGroupedByTags, filteredTagsInSidebar, searchValue],
  )
  const isCurrentOperationGrouped = useMemo(
    () => isOperationGrouped(filteredOperationsGroupedByTags, operationKey),
    [operationKey, filteredOperationsGroupedByTags],
  )

  useEffect(() => {
    if (firstOperation && !isCurrentOperationGrouped && !areChangesAndOperationsLoading) {
      const firstOperationId = firstOperation?.operationKey

      const searchParams = {
        [DOCUMENT_SEARCH_PARAM]: { value: selectedDocumentSlug },
        [FILTERS_SEARCH_PARAM]: { value: filters ? filters : undefined },
        [GROUP_SEARCH_PARAM]: { value: previousGroup },
      }

      navigateToFirstGroupOperation({
        packageKey: changedPackageKey!,
        versionKey: changedVersionKey!,
        groupKey: group!,
        apiType: apiType as ApiType,
        operationKey: firstOperationId!,
        search: searchParams,
      })
    }
  }, [apiType, areChangesAndOperationsLoading, changedPackageKey, changedVersionKey, filters, firstOperation, group, isCurrentOperationGrouped, navigateToFirstGroupOperation, previousGroup, selectedDocumentSlug])

  const comparedOperationsPair = {
    left: originOperation,
    right: changedOperation,
    isLoading: isOriginOperationLoading || isChangedOperationLoading,
  }

  const setShouldAutoExpand = useSetShouldAutoExpandTagsContext()

  const groupsComparisonParams = useComparisonParams()
  const [originComparisonObject, changedComparisonObject] = useComparisonObjects({
    ...groupsComparisonParams,
    currentGroup: group,
    previousGroup: previousGroup,
  })
  const mergedBreadcrumbsData = useCompareBreadcrumbs(originComparisonObject, changedComparisonObject)

  const handleOperationClick = useNavigateToOperation(changedPackageKey!, changedVersionKey!, apiType as ApiType, setShouldAutoExpand)

  return (
    <ShouldAutoExpandTagsProvider>
      <SelectedOperationTagsProvider>
        <VersionsComparisonGlobalParamsContext.Provider value={groupsComparisonParams}>
          <BreadcrumbsDataContext.Provider value={mergedBreadcrumbsData}>
            <ComparedOperationsContext.Provider value={comparedOperationsPair}>
              <PageLayout
                toolbar={<ComparisonToolbar compareToolbarMode={COMPARE_SAME_OPERATIONS_MODE} />}
                navigation={
                  <OperationsSidebarOnComparison
                    operationPackageKey={operationPackageKey!}
                    operationPackageVersion={operationPackageVersion!}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    tags={filteredTagsInSidebar}
                    apiType={apiType as ApiType}
                    operationsGroupedByTag={filteredOperationsGroupedByTags}
                    areChangesLoading={isComparisonLoading}
                    onOperationClick={handleOperationClick}
                  />
                }
                body={
                  <OperationContent
                    changedOperation={changedOperation}
                    originOperation={originOperation}
                    displayMode={COMPARE_SAME_OPERATIONS_MODE}
                    isLoading={areChangesAndOperationsLoading}
                    paddingBottom={VERSION_SWAPPER_HEIGHT}
                  />
                }
              />
            </ComparedOperationsContext.Provider>
          </BreadcrumbsDataContext.Provider>
        </VersionsComparisonGlobalParamsContext.Provider>
        <CompareOperationPathsDialog />
      </SelectedOperationTagsProvider>
    </ShouldAutoExpandTagsProvider>
  )
})

const actionForOriginalOperation = ['remove', 'replace', 'rename']
const actionForChangedOperation = ['add', 'replace', 'rename']

export const getFullGroupForOperation = (restGroupingPrefix: string | undefined, group: string): string => {
  if (!restGroupingPrefix) return group

  return convertToSlug(restGroupingPrefix.replace(/{group}/g, group))
}

const httpMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

