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

import type { NumberSize, ResizeDirection } from 're-resizable'
import type { FC, MutableRefObject } from 'react'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

import type { Key } from '@apihub/entities/keys'
import { usePortalPageSettingsContext } from '@apihub/routes/PortalPageSettingsProvider'
import { isApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import {
  CONTRACT_TYPE_DDL,
  CONTRACT_TYPE_MCP,
  type ContractType,
} from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import { MCP_COLLECTION_INIT } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import { DEFAULT_API_TYPE } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import { isEmpty, isNotEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'
import { NAVIGATION_MAX_WIDTH } from '@netcracker/qubership-apihub-ui-shared/utils/page-layouts'
import { isEmptyTag } from '@netcracker/qubership-apihub-ui-shared/utils/tags'
import { useSetSelectedPreviewOperation } from '../../SelectedPreviewOperationProvider'
import { useRefSearchParam } from '../../useRefSearchParam'
import { useDdlTables } from '../api/useDdlTables'
import { useMcpEntities } from '../api/useMcpEntities'
import { ExportDdlTablesMenu } from '../ExportDdlTablesMenu'
import { ExportOperationsMenu } from '../ExportOperationsMenu'
import { McpContractsSelectors } from '../McpContractsSelectors'
import { OperationTable } from '../OpenApiViewer/OperationTable'
import { OperationListWithPreview } from '../OperationListWithPreview'
import { OperationsNavigation } from '../OperationsNavigation'
import { useApiAudienceSearchFilter } from '../useApiAudienceSearchFilters'
import { useApiKindSearchFilter } from '../useApiKindSearchFilters'
import { useMcpEndpointSearchParam } from '../useMcpEndpointSearchParam'
import { useMcpEntitySearchParam } from '../useMcpEntitySearchParam'
import { useOperationGroupSearchFilter } from '../useOperationGroupSearchFilter'
import { useOperations } from '../useOperations'
import { useStatusSearchFilter } from '../useStatusSearchFIlter'
import { useTagSearchFilter } from '../useTagSearchFilter'
import { VersionContractsPanel } from '../VersionContractsPanel'
import { DdlTableListView } from './DdlTableListView'
import { DdlTableListWithPreview } from './DdlTableListWithPreview'
import { McpEntityListView } from './McpEntityListView'
import { McpEntityListWithPreview } from './McpEntityListWithPreview'
import { McpOverview } from './McpOverview'

export const VersionContractsSubPage: FC = memo(() => {
  const [searchValue, setSearchValue] = useState('')
  const { packageId, versionId, apiType = DEFAULT_API_TYPE } = useParams<{
    packageId: Key
    versionId: Key
    apiType: string
  }>()
  const contractType = apiType as ContractType
  const bodyRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  const [apiKindFilter] = useApiKindSearchFilter()
  const [apiAudienceFilter] = useApiAudienceSearchFilter()
  const [selectedTag] = useTagSearchFilter()
  const [statusFilter] = useStatusSearchFilter()
  const [refKey] = useRefSearchParam()
  const [mcpEndpoint, setMcpEndpoint] = useMcpEndpointSearchParam()
  const [mcpEntity, setMcpEntity] = useMcpEntitySearchParam()

  const emptyTag = isEmptyTag(selectedTag)
  const [operationGroup] = useOperationGroupSearchFilter()
  const setPreviewOperation = useSetSelectedPreviewOperation()

  const isMcp = contractType === CONTRACT_TYPE_MCP
  const isDdl = contractType === CONTRACT_TYPE_DDL
  const isApiContract = isApiType(contractType)

  const mcpCollection = mcpEntity ?? MCP_COLLECTION_INIT
  const isMcpOverview = isMcp && mcpCollection === MCP_COLLECTION_INIT

  const [initEntities, isInitEntitiesLoading] = useMcpEntities({
    packageKey: packageId,
    versionKey: versionId,
    collection: MCP_COLLECTION_INIT,
    enabled: isMcp,
  })

  const endpointOptions = useMemo(
    () => [...new Set(initEntities.map(entity => entity.mcpEndpoint))],
    [initEntities],
  )

  const selectedInitEntity = useMemo(
    () => initEntities.find(entity => entity.mcpEndpoint === mcpEndpoint) ?? initEntities[0],
    [initEntities, mcpEndpoint],
  )

  const mcpOverview = useMemo(() => (
    <McpOverview
      packageKey={packageId!}
      versionKey={versionId!}
      mcpEndpoint={mcpEndpoint}
      selectedEntity={selectedInitEntity}
      isInitLoading={isInitEntitiesLoading}
    />
  ), [isInitEntitiesLoading, mcpEndpoint, packageId, selectedInitEntity, versionId])

  useEffect(() => {
    if (!isMcp) {
      return
    }
    if (!mcpEndpoint && endpointOptions[0]) {
      setMcpEndpoint(endpointOptions[0])
    }
    if (!mcpEntity) {
      setMcpEntity(MCP_COLLECTION_INIT)
    }
  }, [endpointOptions, isMcp, mcpEndpoint, mcpEntity, setMcpEndpoint, setMcpEntity])

  const [
    operations,
    isOperationsLoading,
    fetchNextOperationsPage,
    isFetchingNextOperationsPage,
    hasNextOperationsPage,
  ] = useOperations({
    packageKey: packageId,
    versionKey: versionId,
    kind: apiKindFilter,
    apiAudience: apiAudienceFilter,
    deprecated: statusFilter,
    tag: selectedTag,
    textFilter: searchValue,
    apiType: isApiContract ? contractType : DEFAULT_API_TYPE,
    groupName: operationGroup,
    refPackageKey: refKey,
    page: 1,
    limit: 100,
    enabled: isApiContract,
  })

  const [mcpEntities, isMcpEntitiesLoading, fetchNextMcpPage, isFetchingNextMcpPage, hasNextMcpPage] = useMcpEntities({
    packageKey: packageId,
    versionKey: versionId,
    collection: mcpCollection,
    textFilter: searchValue,
    mcpEndpoint: mcpEndpoint,
    limit: 100,
    enabled: isMcp && !isMcpOverview,
  })

  const [ddlTables, isDdlTablesLoading, fetchNextDdlPage, isFetchingNextDdlPage, hasNextDdlPage] = useDdlTables({
    packageKey: packageId,
    versionKey: versionId,
    textFilter: searchValue,
    limit: 100,
    enabled: isDdl,
  })

  useEffect(() => {
    if (isMcpOverview) {
      setPreviewOperation(undefined)
      return
    }
    if (isMcp && isNotEmpty(mcpEntities)) {
      setPreviewOperation({ operationKey: mcpEntities[0].mcpEntityId })
      return
    }
    if (isDdl && isNotEmpty(ddlTables)) {
      setPreviewOperation({ operationKey: ddlTables[0].ddlEntityId })
      return
    }
    if (isApiContract) {
      isNotEmpty(operations)
        ? setPreviewOperation(operations[0])
        : setPreviewOperation(undefined)
    }
  }, [
    ddlTables,
    isApiContract,
    isDdl,
    isMcp,
    isMcpOverview,
    mcpEntities,
    operations,
    setPreviewOperation,
  ])

  const {
    previewSize,
    togglePreviewSize,
    hideFiltersPanel,
    toggleHideFiltersPanel,
    toggleOperationsViewMode,
    operationsViewMode,
  } = usePortalPageSettingsContext()

  const onResize = useCallback(
    (_: MouseEvent | TouchEvent, __: ResizeDirection, ___: HTMLElement, delta: NumberSize) => {
      togglePreviewSize(previewSize + delta.width)
    },
    [previewSize, togglePreviewSize],
  )

  const maxPreviewWidth = useMemo(() => {
    if (bodyRef.current?.clientWidth) {
      return bodyRef.current.clientWidth - SUBPAGE_MARGIN
    }
    return NAVIGATION_MAX_WIDTH
    // We need to reset maxPreviewWidth when body width changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyRef.current?.clientWidth])

  const searchPlaceholder = isApiContract ? 'Search Operations' : 'Search'

  const table = useMemo(() => {
    if (isMcpOverview) {
      return mcpOverview
    }
    if (isMcp) {
      return (
        <McpEntityListView
          entities={mcpEntities}
          packageKey={packageId!}
          versionKey={versionId!}
          collection={mcpCollection}
          fetchNextPage={fetchNextMcpPage}
          isNextPageFetching={isFetchingNextMcpPage}
          hasNextPage={hasNextMcpPage}
          isLoading={isMcpEntitiesLoading}
        />
      )
    }
    if (isDdl) {
      return (
        <DdlTableListView
          tables={ddlTables}
          packageKey={packageId!}
          versionKey={versionId!}
          fetchNextPage={fetchNextDdlPage}
          isNextPageFetching={isFetchingNextDdlPage}
          hasNextPage={hasNextDdlPage}
          isLoading={isDdlTablesLoading}
        />
      )
    }
    return (
      <OperationTable
        value={operations}
        fetchNextPage={fetchNextOperationsPage}
        isNextPageFetching={isFetchingNextOperationsPage}
        hasNextPage={hasNextOperationsPage}
        isLoading={isOperationsLoading}
        apiType={contractType}
        textFilter={searchValue}
      />
    )
  }, [
    contractType,
    ddlTables,
    fetchNextDdlPage,
    fetchNextMcpPage,
    fetchNextOperationsPage,
    hasNextDdlPage,
    hasNextMcpPage,
    hasNextOperationsPage,
    isDdl,
    isDdlTablesLoading,
    isFetchingNextDdlPage,
    isFetchingNextMcpPage,
    isFetchingNextOperationsPage,
    isMcp,
    isMcpEntitiesLoading,
    isMcpOverview,
    isOperationsLoading,
    mcpCollection,
    mcpEntities,
    mcpOverview,
    operations,
    packageId,
    searchValue,
    versionId,
  ])

  const list = useMemo(() => {
    if (isMcpOverview) {
      return mcpOverview
    }
    if (isMcp) {
      return (
        <McpEntityListWithPreview
          entities={mcpEntities}
          fetchNextPage={fetchNextMcpPage}
          hasNextPage={hasNextMcpPage}
          isListLoading={isMcpEntitiesLoading}
          isNextPageFetching={isFetchingNextMcpPage}
          packageKey={packageId!}
          versionKey={versionId!}
          collection={mcpCollection}
          initialSize={previewSize}
          handleResize={onResize}
          maxPreviewWidth={maxPreviewWidth}
        />
      )
    }
    if (isDdl) {
      return (
        <DdlTableListWithPreview
          tables={ddlTables}
          fetchNextPage={fetchNextDdlPage}
          hasNextPage={hasNextDdlPage}
          isListLoading={isDdlTablesLoading}
          isNextPageFetching={isFetchingNextDdlPage}
          packageKey={packageId!}
          versionKey={versionId!}
          initialSize={previewSize}
          handleResize={onResize}
          maxPreviewWidth={maxPreviewWidth}
        />
      )
    }
    return (
      <OperationListWithPreview
        operations={operations}
        fetchNextPage={fetchNextOperationsPage}
        hasNextPage={hasNextOperationsPage}
        isListLoading={isOperationsLoading}
        isNextPageFetching={isFetchingNextOperationsPage}
        packageKey={packageId!}
        versionKey={versionId!}
        apiType={contractType}
        initialSize={previewSize}
        handleResize={onResize}
        maxPreviewWidth={maxPreviewWidth}
      />
    )
  }, [
    contractType,
    ddlTables,
    fetchNextDdlPage,
    fetchNextMcpPage,
    fetchNextOperationsPage,
    hasNextDdlPage,
    hasNextMcpPage,
    hasNextOperationsPage,
    isDdl,
    isDdlTablesLoading,
    isFetchingNextDdlPage,
    isFetchingNextMcpPage,
    isFetchingNextOperationsPage,
    isMcp,
    isMcpEntitiesLoading,
    isMcpOverview,
    isOperationsLoading,
    maxPreviewWidth,
    mcpCollection,
    mcpEntities,
    mcpOverview,
    onResize,
    operations,
    packageId,
    previewSize,
    versionId,
  ])

  const exportButton = useMemo(() => {
    if (isDdl) {
      return (
        <ExportDdlTablesMenu
          tables={ddlTables}
          textFilter={searchValue}
          disabled={isEmpty(ddlTables)}
        />
      )
    }
    if (isApiContract) {
      return (
        <ExportOperationsMenu
          disabled={isEmpty(operations)}
          textFilter={searchValue}
          kind={apiKindFilter}
          apiAudience={apiAudienceFilter}
          tag={selectedTag}
          group={operationGroup}
          refPackageId={refKey}
          emptyTag={emptyTag}
        />
      )
    }
    return null
  }, [
    apiAudienceFilter,
    apiKindFilter,
    ddlTables,
    emptyTag,
    isApiContract,
    isDdl,
    operationGroup,
    operations,
    refKey,
    searchValue,
    selectedTag,
  ])

  return (
    <VersionContractsPanel
      onContextSearch={setSearchValue}
      title={VERSION_CONTRACTS_TITLE}
      bodyRef={bodyRef}
      hideFiltersPanel={isMcp || isDdl ? true : hideFiltersPanel}
      toggleHideFiltersPanel={toggleHideFiltersPanel}
      operationsViewMode={operationsViewMode}
      toggleOperationsViewMode={toggleOperationsViewMode}
      additionalSelectors={isMcp ? <McpContractsSelectors endpointOptions={endpointOptions} /> : undefined}
      hideSearch={isMcpOverview}
      hideFilter={isMcp || isDdl}
      hideViewToggle={isMcpOverview}
      hideExport={isMcp}
      searchPlaceholder={searchPlaceholder}
      table={table}
      list={list}
      filters={<OperationsNavigation />}
      exportButton={exportButton}
      data-testid="ContractsTab"
    />
  )
})

VersionContractsSubPage.displayName = 'VersionContractsSubPage'

const VERSION_CONTRACTS_TITLE = 'API Contracts'

const SUBPAGE_MARGIN = 24
