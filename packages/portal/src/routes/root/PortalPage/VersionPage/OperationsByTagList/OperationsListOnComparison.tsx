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

import { CustomListItemButton } from '@netcracker/qubership-apihub-ui-shared/components/CustomListItemButton'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { Operation } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import {
  useSeverityFiltersSearchParam,
} from '@netcracker/qubership-apihub-ui-shared/hooks/change-severities/useSeverityFiltersSearchParam'
import { useRefWithAutoScroll } from '@netcracker/qubership-apihub-ui-shared/hooks/common/useRefWithAutoScroll'
import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import {
  DOCUMENT_SEARCH_PARAM,
  FILTERS_SEARCH_PARAM,
  GROUP_SEARCH_PARAM,
  PACKAGE_SEARCH_PARAM,
  REF_SEARCH_PARAM,
  SEARCH_TEXT_PARAM_KEY,
  VERSION_SEARCH_PARAM,
} from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import type { Dispatch, FC } from 'react'
import React, { memo, useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigation } from '../../../../NavigationProvider'
import { usePackageSearchParam } from '../../../usePackageSearchParam'
import { useTextSearchParam } from '../../../useTextSearchParam'
import { useVersionSearchParam } from '../../../useVersionSearchParam'
import { useIsPackageFromDashboard } from '../../useIsPackageFromDashboard'
import { useSetShouldAutoExpandTagsContext, useShouldAutoExpandTagsContext } from '../ShouldAutoExpandTagsProvider'
import { useDocumentSearchParam } from '../useDocumentSearchParam'
import { OperationListItem } from './OperationListItem'

export type OperationsListOnComparisonProps = {
  changedOperations: Operation[]
}

export const OperationsListOnComparison: FC<OperationsListOnComparisonProps> = memo<OperationsListOnComparisonProps>(props => {
  const { changedOperations } = props
  const { navigateToOperationsComparison, navigateToGroupsOperationsComparison } = useNavigation()

  const previousGroup = useSearchParam(GROUP_SEARCH_PARAM)
  const [originPackageKey] = usePackageSearchParam()
  const [originVersionKey] = useVersionSearchParam()
  const [documentSlug] = useDocumentSearchParam()
  const { packageId: changedPackageKey, versionId: changedVersionKey, operationId, group, apiType } = useParams()

  const { isPackageFromDashboard, refPackageKey } = useIsPackageFromDashboard(true)
  const [searchValue] = useTextSearchParam()

  const [filters] = useSeverityFiltersSearchParam()

  const [selectedElement, setSelectedElement] = useState<string>('')
  const shouldAutoExpand = useShouldAutoExpandTagsContext()
  const selectedElementRef = useRefWithAutoScroll(shouldAutoExpand, selectedElement)
  const setShouldAutoExpand = useSetShouldAutoExpandTagsContext()
  useNavigateToSelectedOperation(setSelectedElement, operationId)

  const searchParams = useMemo(
    () => (
      (changedPackageKey === originPackageKey || !originPackageKey)
        ? {
          [VERSION_SEARCH_PARAM]: { value: originVersionKey! ?? changedVersionKey! },
          [REF_SEARCH_PARAM]: { value: isPackageFromDashboard ? refPackageKey : undefined },
          [DOCUMENT_SEARCH_PARAM]: { value: documentSlug },
          [GROUP_SEARCH_PARAM]: { value: previousGroup },
          [SEARCH_TEXT_PARAM_KEY]: { value: searchValue },
          [FILTERS_SEARCH_PARAM]: { value: filters.join() },
        }
        : {
          [PACKAGE_SEARCH_PARAM]: { value: originPackageKey! },
          [VERSION_SEARCH_PARAM]: { value: originVersionKey! },
          [REF_SEARCH_PARAM]: { value: isPackageFromDashboard ? refPackageKey : undefined },
          [DOCUMENT_SEARCH_PARAM]: { value: documentSlug },
          [SEARCH_TEXT_PARAM_KEY]: { value: searchValue },
          [FILTERS_SEARCH_PARAM]: { value: filters.join() },
        }
    ),
    [changedPackageKey, changedVersionKey, documentSlug, filters, isPackageFromDashboard, originPackageKey, originVersionKey, previousGroup, refPackageKey, searchValue])

  const handleListItemClick = useCallback(
    (operation: Operation) => {
      setShouldAutoExpand(false)
      group
        ? navigateToGroupsOperationsComparison({
          packageKey: changedPackageKey!,
          versionKey: changedVersionKey!,
          groupKey: group!,
          apiType: apiType as ApiType,
          operationKey: operation.operationKey!,
          search: searchParams,
        })
        : navigateToOperationsComparison({
          packageKey: changedPackageKey!,
          versionKey: changedVersionKey!,
          apiType: apiType as ApiType,
          operationKey: operation.operationKey!,
          search: searchParams,
        })
    },
    [apiType, changedPackageKey, changedVersionKey, group, navigateToGroupsOperationsComparison, navigateToOperationsComparison, searchParams, setShouldAutoExpand],
  )

  return (
    <>
      {changedOperations.map(operation => {
        const isSelected = selectedElement === operation!.operationKey
        return (
          <CustomListItemButton<Operation>
            refObject={isSelected ? selectedElementRef : undefined}
            key={operation!.operationKey}
            keyProp={operation!.operationKey}
            data={operation}
            onClick={handleListItemClick}
            itemComponent={<OperationListItem operation={operation!} />}
            isSelected={isSelected}
            testId="OperationButton"
          />
        )
      })}
    </>
  )
})

function useNavigateToSelectedOperation(
  setSelectedElements: Dispatch<React.SetStateAction<string>>,
  operation?: Key,
): void {

  useLayoutEffect(() => {
    if (operation) {
      setSelectedElements(operation)
    }
  }, [operation, setSelectedElements])
}
