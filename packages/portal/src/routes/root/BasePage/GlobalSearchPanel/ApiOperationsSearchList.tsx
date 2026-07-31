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

import { type FC, memo, useRef } from 'react'
import { Marker } from 'react-mark.js'

import { CustomChip } from '@netcracker/qubership-apihub-ui-shared/components/CustomChip'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import {
  OperationPathMeta,
  useOperationTitleMeta,
} from '@netcracker/qubership-apihub-ui-shared/components/Operations/OperationTitleWithMeta'
import { getMcpKindDefinition } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import { useIntersectionObserver } from '@netcracker/qubership-apihub-ui-shared/hooks/common/useIntersectionObserver'
import { getSplittedVersionKey } from '@netcracker/qubership-apihub-ui-shared/utils/versions'

import type {
  ContractElementSearchResult,
  DdlContractSearchResult,
  McpContractSearchResult,
  OperationSearchResult,
} from '@apihub/entities/global-search'
import { DDL_LEVEL, MCP_LEVEL, OPERATION_LEVEL } from '@apihub/entities/global-search'
import { getOperationsPath } from '../../../NavigationProvider'
import { getDdlTableLink, getMcpEntityLink } from '../../PortalPage/VersionPage/useNavigateToOperation'
import type { FetchNextSearchResultList } from './global-search'
import { ResultCommonHeader } from './ResultCommonHeader'
import {
  SearchResultListRoot,
  SearchResultListSentinel,
  SearchResultMetaLine,
  SearchResultRowRoot,
  SearchResultRowSection,
} from './SearchResultRowLayout'

type ApiOperationsSearchListProps = {
  value: ContractElementSearchResult[]
  searchText: string
  fetchNextPage?: FetchNextSearchResultList
  isNextPageFetching?: boolean
  hasNextPage?: boolean
}

export const ApiOperationsSearchList: FC<ApiOperationsSearchListProps> = memo<ApiOperationsSearchListProps>((
  { value, searchText, isNextPageFetching, hasNextPage, fetchNextPage },
) => {
  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref, isNextPageFetching, hasNextPage, fetchNextPage)

  return (
    <SearchResultListRoot>
      {value.map((item) => (
        <ContractElementSearchResultRow
          key={getContractElementSearchResultKey(item)}
          item={item}
          searchText={searchText}
        />
      ))}

      {hasNextPage && (
        <SearchResultListSentinel ref={ref}>
          <LoadingIndicator />
        </SearchResultListSentinel>
      )}
    </SearchResultListRoot>
  )
})

ApiOperationsSearchList.displayName = 'ApiOperationsSearchList'

type ContractElementSearchResultRowProps = {
  item: ContractElementSearchResult
  searchText: string
}

const ContractElementSearchResultRow: FC<ContractElementSearchResultRowProps> = memo<
  ContractElementSearchResultRowProps
>(({
  item,
  searchText,
}) => {
  switch (item.level) {
    case OPERATION_LEVEL:
      return <OperationSearchResultRow operation={item.result} searchText={searchText} />
    case MCP_LEVEL:
      return <McpContractSearchResultRow result={item.result} searchText={searchText} />
    case DDL_LEVEL:
      return <DdlContractSearchResultRow result={item.result} searchText={searchText} />
  }
})

ContractElementSearchResultRow.displayName = 'ContractElementSearchResultRow'

type OperationSearchResultRowProps = {
  operation: OperationSearchResult
  searchText: string
}

const OperationSearchResultRow: FC<OperationSearchResultRowProps> = memo<OperationSearchResultRowProps>(({
  operation,
  searchText,
}) => {
  const { version, operationKey, packageKey, apiType, parentPackages, name } = operation
  const { versionKey } = getSplittedVersionKey(version)
  const { subtitle, type } = useOperationTitleMeta(operation)

  return (
    <SearchResultRowRoot data-testid="SearchResultRow">
      <ResultCommonHeader
        url={getOperationsPath({
          packageKey: packageKey,
          versionKey: versionKey,
          operationKey: operationKey,
          apiType: apiType,
        })}
        title={operation.title}
        parents={[...parentPackages, name, versionKey]}
        searchText={searchText}
      />
      <Marker mark={searchText}>
        <OperationPathMeta subtitle={subtitle} type={type}/>
      </Marker>
    </SearchResultRowRoot>
  )
})

OperationSearchResultRow.displayName = 'OperationSearchResultRow'

type McpContractSearchResultRowProps = {
  result: McpContractSearchResult
  searchText: string
}

const McpContractSearchResultRow: FC<McpContractSearchResultRowProps> = memo<McpContractSearchResultRowProps>(({
  result,
  searchText,
}) => {
  const {
    packageKey,
    name,
    parentPackages,
    version,
    entityId,
    entityName,
    kind,
    mcpEndpoint,
    status,
  } = result
  const { versionKey } = getSplittedVersionKey(version)
  const { mcpCollection, mcpDocumentType } = getMcpKindDefinition(kind)

  return (
    <SearchResultRowRoot data-testid="SearchResultRow">
      <ResultCommonHeader
        url={getMcpEntityLink({
          packageKey: packageKey,
          versionKey: versionKey,
          mcpEntityId: entityId,
          mcpEndpoint: mcpEndpoint,
          mcpCollection: mcpCollection,
        })}
        icon={mcpDocumentType}
        breadCrumbsStatus={status}
        title={entityName ?? entityId}
        parents={[...parentPackages, name, versionKey]}
        searchText={searchText}
      />
      <SearchResultMetaLine
        label="MCP Endpoint"
        value={mcpEndpoint}
        searchText={searchText}
        data-testid="McpEndpointValue"
        valueTestId="McpEndpointPath"
      />
    </SearchResultRowRoot>
  )
})

McpContractSearchResultRow.displayName = 'McpContractSearchResultRow'

type DdlContractSearchResultRowProps = {
  result: DdlContractSearchResult
  searchText: string
}

const DdlContractSearchResultRow: FC<DdlContractSearchResultRowProps> = memo<DdlContractSearchResultRowProps>(({
  result,
  searchText,
}) => {
  const {
    packageKey,
    name,
    parentPackages,
    version,
    entityId,
    entityName,
    schemaName,
    status,
  } = result
  const { versionKey } = getSplittedVersionKey(version)

  return (
    <SearchResultRowRoot data-testid="SearchResultRow">
      <ResultCommonHeader
        url={getDdlTableLink({
          packageKey: packageKey,
          versionKey: versionKey,
          ddlEntityId: entityId,
        })}
        breadCrumbsStatus={status}
        title={entityName ?? entityId}
        parents={[...parentPackages, name, versionKey]}
        searchText={searchText}
      />
      {schemaName && (
        <SearchResultRowSection>
          <CustomChip
            value="ddlSchema"
            label={schemaName}
            data-testid="DdlSchemaNameChip"
          />
        </SearchResultRowSection>
      )}
    </SearchResultRowRoot>
  )
})

DdlContractSearchResultRow.displayName = 'DdlContractSearchResultRow'

function getContractElementSearchResultKey(item: ContractElementSearchResult): string {
  const { level, result } = item
  switch (level) {
    case OPERATION_LEVEL:
      return `${level}-${result.packageKey}-${result.operationKey}-${result.version}`
    case MCP_LEVEL:
      return `${level}-${result.packageKey}-${result.entityId}-${result.version}`
    case DDL_LEVEL:
      return `${level}-${result.packageKey}-${result.entityId}-${result.version}`
  }
}
