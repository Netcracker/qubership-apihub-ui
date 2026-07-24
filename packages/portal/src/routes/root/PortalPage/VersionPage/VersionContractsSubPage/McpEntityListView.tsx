import type { ColumnDef } from '@tanstack/table-core'
import { type FC, memo, useCallback, useMemo } from 'react'

import { CustomTableHeadCell } from '@netcracker/qubership-apihub-ui-shared/components/CustomTableHeadCell'
import { McpEntityTitleWithMeta } from '@netcracker/qubership-apihub-ui-shared/components/Mcp/McpEntityTitleWithMeta'
import type { FetchNextMetaList } from '@netcracker/qubership-apihub-ui-shared/components/MetaClickableListWithPreview'
import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
import {
  getMcpEntityListKey,
  MCP_COLLECTION_EMPTY_MESSAGES,
  type McpCollection,
  type McpEntity,
} from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import type { ColumnModel } from '@netcracker/qubership-apihub-ui-shared/hooks/table-resizing/useColumnResizing'

import { usePackageKind } from '../../usePackageKind'
import { useRefSearchParam } from '../../useRefSearchParam'
import { useContractBrowseLinkHandlers } from '../useContractBrowseLinkHandlers'
import { useMcpEndpointSearchParam } from '../useMcpEndpointSearchParam'
import { useMcpEntitySearchParam } from '../useMcpEntitySearchParam'
import { getMcpEntityLink } from '../useNavigateToOperation'
import { ContractsEntityListTable } from './ContractsEntityListTable'

const NAME_COLUMN_ID = 'name'
const PACKAGE_COLUMN_ID = 'package'

const PACKAGE_COLUMNS_MODELS: ColumnModel[] = [
  { name: NAME_COLUMN_ID },
]

const DASHBOARD_COLUMNS_MODELS: ColumnModel[] = [
  { name: NAME_COLUMN_ID },
  { name: PACKAGE_COLUMN_ID, width: 226 },
]

type McpEntityListViewRow = {
  entity: McpEntity
}

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

  const columns: ColumnDef<McpEntityListViewRow>[] = useMemo(() => {
    const result: ColumnDef<McpEntityListViewRow>[] = [
      {
        id: NAME_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Name" />,
        cell: ({ row: { original: { entity } } }) => (
          <McpEntityTitleWithMeta
            entity={entity}
            link={getMcpEntityLink({
              packageKey: packageKey,
              versionKey: versionKey,
              mcpEntityId: entity.mcpEntityId,
              mcpEndpoint: mcpEndpoint ?? entity.mcpEndpoint,
              mcpEntity: mcpEntity ?? collection,
              ref: isDashboard ? entity.packageRef?.key ?? refKey : undefined,
            })}
            onLinkClick={onLinkClick}
          />
        ),
      },
    ]

    if (isDashboard) {
      result.push({
        id: PACKAGE_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Package" />,
        cell: ({ row: { original: { entity } } }) => {
          if (entity.packageRef?.name) {
            return (
              <TextWithOverflowTooltip tooltipText={entity.packageRef.name}>
                {entity.packageRef.name}
              </TextWithOverflowTooltip>
            )
          }
        },
      })
    }

    return result
  }, [collection, isDashboard, mcpEndpoint, mcpEntity, onLinkClick, packageKey, refKey, versionKey])

  const data: McpEntityListViewRow[] = useMemo(
    () => entities.map(entity => ({ entity })),
    [entities],
  )

  const columnModels = isDashboard ? DASHBOARD_COLUMNS_MODELS : PACKAGE_COLUMNS_MODELS
  const resolveRowId = useCallback((row: McpEntityListViewRow) => getMcpEntityListKey(row.entity), [])

  return (
    <ContractsEntityListTable
      columns={columns}
      data={data}
      getRowId={resolveRowId}
      columnModels={columnModels}
      emptyMessage={MCP_COLLECTION_EMPTY_MESSAGES[collection]}
      fetchNextPage={fetchNextPage}
      isNextPageFetching={isNextPageFetching}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
    />
  )
})

McpEntityListView.displayName = 'McpEntityListView'
