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

import type { Key } from '@apihub/entities/keys'
import { usePortalPageSettingsContext } from '@apihub/routes/PortalPageSettingsProvider'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type {
  OperationData,
  OperationWithDeprecations,
} from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import { DEFAULT_API_TYPE } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import { isEmpty, isNotEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'
import { NAVIGATION_MAX_WIDTH } from '@netcracker/qubership-apihub-ui-shared/utils/page-layouts'
import { isEmptyTag } from '@netcracker/qubership-apihub-ui-shared/utils/tags'
import type { NumberSize, ResizeDirection } from 're-resizable'
import type { FC } from 'react'
import { memo, type MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSetSelectedPreviewOperation } from '../../SelectedPreviewOperationProvider'
import { useRefSearchParam } from '../../useRefSearchParam'
import { ExportOperationsMenu } from '../ExportOperationsMenu'
import { OperationListWithPreview } from '../OperationListWithPreview'
import { useApiAudienceSearchFilter } from '../useApiAudienceSearchFilters'
import { useApiKindSearchFilter } from '../useApiKindSearchFilters'
import { useOperationGroupSearchFilter } from '../useOperationGroupSearchFilter'
import { useTagSearchFilter } from '../useTagSearchFilter'
import { VersionOperationsPanel } from '../VersionOperationsPanel'
import { DeprecatedItemsList } from './DeprecatedItemList'
import { DeprecatedOperationsNavigation } from './DeprecatedOperationsNavigation'
import { DeprecatedOperationsTable } from './DeprecatedOperationsTable'
import { useDeprecatedOperations } from './useDeprecatedOperations'

// High Order Component //
export const VersionDeprecatedOperationsSubPage: FC = memo(() => {
  const [searchValue, setSearchValue] = useState('')
  const { packageId, versionId, apiType = DEFAULT_API_TYPE } = useParams<{
    packageId: Key
    versionId: Key
    apiType: ApiType
  }>()

  const [apiKindFilter] = useApiKindSearchFilter()
  const [apiAudienceFilter] = useApiAudienceSearchFilter()
  const [selectedTag] = useTagSearchFilter()
  const [refKey] = useRefSearchParam()

  const emptyTag = isEmptyTag(selectedTag)
  const [operationGroup] = useOperationGroupSearchFilter()
  const setPreviewOperation = useSetSelectedPreviewOperation()

  const [operations, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage] = useDeprecatedOperations({
    packageKey: packageId,
    versionKey: versionId,
    apiKind: apiKindFilter,
    apiAudience: apiAudienceFilter,
    tag: selectedTag,
    textFilter: searchValue,
    apiType: apiType as ApiType,
    groupName: operationGroup,
    refPackageKey: refKey,
    page: 1,
    limit: 100,
  })

  useEffect(() => {
    isNotEmpty(operations)
      ? setPreviewOperation(operations[0])
      : setPreviewOperation(undefined)
  }, [operations, setPreviewOperation])

  const bodyRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const {
    previewSize,
    togglePreviewSize,
    hideFiltersPanel,
    toggleHideFiltersPanel,
    operationsViewMode,
    toggleOperationsViewMode,
  } = usePortalPageSettingsContext()

  const onResize = useCallback(
    (_: MouseEvent | TouchEvent, __: ResizeDirection, ___: HTMLElement, delta: NumberSize) => {
      togglePreviewSize(previewSize + delta.width)
    },
    [previewSize, togglePreviewSize],
  )

  // todo move to low level (VersionOperationsPanel or OperationListWithPreview)
  const maxPreviewWidth = useMemo(() => {
    if (bodyRef.current?.clientWidth) {
      return bodyRef.current.clientWidth - SUBPAGE_MARGIN
    }
    return NAVIGATION_MAX_WIDTH
    // We need to reset maxPreviewWidth when body width changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyRef.current?.clientWidth])

  const isExpandableItem = useCallback((operation: OperationData): boolean => {
    const operationWithDeprecations = operation as OperationWithDeprecations
    const onlyDeprecatedOperationItem = operationWithDeprecations.deprecated
      && Number(operationWithDeprecations?.deprecatedCount ?? 0) === 1
    return !onlyDeprecatedOperationItem
  }, [])

  return (
    <VersionOperationsPanel
      hideFiltersPanel={hideFiltersPanel}
      toggleHideFiltersPanel={toggleHideFiltersPanel}
      operationsViewMode={operationsViewMode}
      toggleOperationsViewMode={toggleOperationsViewMode}
      onContextSearch={setSearchValue}
      title={DEPRECATED_TITLE}
      bodyRef={bodyRef}
      table={
        <DeprecatedOperationsTable
          operations={operations}
          isLoading={isLoading}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
        />
      }
      list={
        <OperationListWithPreview
          operations={operations}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isListLoading={isLoading}
          isNextPageFetching={isFetchingNextPage}
          packageKey={packageId!}
          versionKey={versionId!}
          apiType={apiType}
          initialSize={previewSize}
          handleResize={onResize}
          maxPreviewWidth={maxPreviewWidth}
          isExpandableItem={isExpandableItem}
          SubComponent={DeprecatedItemsList}
        />
      }
      filters={<DeprecatedOperationsNavigation />}
      exportButton={
        <ExportOperationsMenu
          title="Export to Excel"
          disabled={isEmpty(operations)}
          textFilter={searchValue}
          kind={apiKindFilter}
          apiAudience={apiAudienceFilter}
          tag={selectedTag}
          group={operationGroup}
          refPackageId={refKey}
          emptyTag={emptyTag}
          onlyDeprecated
        />
      }
      testId="DeprecatedTab"
    />
  )
})

const DEPRECATED_TITLE = 'Deprecated Operations'

const SUBPAGE_MARGIN = 24
