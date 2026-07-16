import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { type FC, memo, useRef } from 'react'

import { McpEntityTitleWithMeta } from '@netcracker/qubership-apihub-ui-shared/components/Mcp/McpEntityTitleWithMeta'
import type { FetchNextMetaList } from '@netcracker/qubership-apihub-ui-shared/components/MetaClickableListWithPreview'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
import {
  getMcpEntityListKey,
  MCP_COLLECTION_EMPTY_MESSAGES,
  type McpCollection,
  type McpEntity,
} from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { useIntersectionObserver } from '@netcracker/qubership-apihub-ui-shared/hooks/common/useIntersectionObserver'
import { isNotEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'

import { usePackageKind } from '../../usePackageKind'
import { useRefSearchParam } from '../../useRefSearchParam'
import { useContractBrowseLinkHandlers } from '../useContractBrowseLinkHandlers'
import { useMcpEndpointSearchParam } from '../useMcpEndpointSearchParam'
import { useMcpEntitySearchParam } from '../useMcpEntitySearchParam'
import { getMcpEntityLink } from '../useNavigateToOperation'

export type McpEntityListViewProps = {
  entities: ReadonlyArray<McpEntity>
  packageKey: Key
  versionKey: Key
  collection: McpCollection
  fetchNextPage?: FetchNextMetaList
  isNextPageFetching?: boolean
  hasNextPage?: boolean
  isLoading?: boolean
}

export const McpEntityListView: FC<McpEntityListViewProps> = memo<McpEntityListViewProps>(({
  entities,
  packageKey,
  versionKey,
  collection,
  fetchNextPage,
  isNextPageFetching,
  hasNextPage,
  isLoading = false,
}) => {
  const [mcpEndpoint] = useMcpEndpointSearchParam()
  const [mcpEntity] = useMcpEntitySearchParam()
  const [refKey] = useRefSearchParam()
  const [packageKind] = usePackageKind()
  const isDashboard = packageKind === DASHBOARD_KIND
  const onLinkClick = useContractBrowseLinkHandlers()
  const ref = useRef<HTMLTableRowElement>(null)
  useIntersectionObserver(ref, isNextPageFetching, hasNextPage, fetchNextPage)

  const columnCount = isDashboard ? 2 : 1

  return (
    <Placeholder
      invisible={isNotEmpty(entities) || isLoading}
      area={CONTENT_PLACEHOLDER_AREA}
      message={MCP_COLLECTION_EMPTY_MESSAGES[collection]}
      data-testid="NoItemsPlaceholder"
    >
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              {isDashboard && <TableCell>Package</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {entities.map(entity => (
              <TableRow key={getMcpEntityListKey(entity)} hover>
                <TableCell data-testid="Cell-name">
                  <McpEntityTitleWithMeta
                    entity={entity}
                    link={getMcpEntityLink({
                      packageKey: packageKey,
                      versionKey: versionKey,
                      mcpEntityId: entity.mcpEntityId,
                      mcpEndpoint: mcpEndpoint ?? entity.mcpEndpoint,
                      mcpEntity: mcpEntity ?? collection,
                      ref: entity.packageRef?.key ?? refKey,
                    })}
                    onLinkClick={onLinkClick}
                  />
                </TableCell>
                {isDashboard && (
                  <TableCell data-testid="Cell-package">
                    {entity.packageRef?.name && (
                      <TextWithOverflowTooltip tooltipText={entity.packageRef.name}>
                        {entity.packageRef.name}
                      </TextWithOverflowTooltip>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
            {isLoading && (
              <TableRow>
                <TableCell colSpan={columnCount}>
                  <Skeleton variant="rectangular" height={20} />
                </TableCell>
              </TableRow>
            )}
            {hasNextPage && (
              <TableRow ref={ref}>
                <TableCell colSpan={columnCount}>
                  <Skeleton variant="rectangular" height={20} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Placeholder>
  )
})

McpEntityListView.displayName = 'McpEntityListView'
