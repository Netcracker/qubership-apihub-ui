import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { type FC, memo, useRef } from 'react'

import { DdlTableTitleWithMeta } from '@netcracker/qubership-apihub-ui-shared/components/Ddl/DdlTableTitleWithMeta'
import type { FetchNextMetaList } from '@netcracker/qubership-apihub-ui-shared/components/MetaClickableListWithPreview'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
import {
  DDL_TABLES_EMPTY_MESSAGE,
  type DdlContractEntity,
  getDdlTableListKey,
} from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { useIntersectionObserver } from '@netcracker/qubership-apihub-ui-shared/hooks/common/useIntersectionObserver'
import { isNotEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'

import { usePackageKind } from '../../usePackageKind'
import { useRefSearchParam } from '../../useRefSearchParam'
import { useContractBrowseLinkHandlers } from '../useContractBrowseLinkHandlers'
import { getDdlTableLink } from '../useNavigateToOperation'

export type DdlTableListViewProps = {
  tables: ReadonlyArray<DdlContractEntity>
  packageKey: Key
  versionKey: Key
  fetchNextPage?: FetchNextMetaList
  isNextPageFetching?: boolean
  hasNextPage?: boolean
  isLoading?: boolean
}

export const DdlTableListView: FC<DdlTableListViewProps> = memo<DdlTableListViewProps>(({
  tables,
  packageKey,
  versionKey,
  fetchNextPage,
  isNextPageFetching,
  hasNextPage,
  isLoading = false,
}) => {
  const [refKey] = useRefSearchParam()
  const [packageKind] = usePackageKind()
  const isDashboard = packageKind === DASHBOARD_KIND
  const onLinkClick = useContractBrowseLinkHandlers()
  const ref = useRef<HTMLTableRowElement>(null)
  useIntersectionObserver(ref, isNextPageFetching, hasNextPage, fetchNextPage)

  const columnCount = isDashboard ? 2 : 1

  return (
    <Placeholder
      invisible={isNotEmpty(tables) || isLoading}
      area={CONTENT_PLACEHOLDER_AREA}
      message={DDL_TABLES_EMPTY_MESSAGE}
      data-testid="NoItemsPlaceholder"
    >
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Tables</TableCell>
              {isDashboard && <TableCell>Package</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {tables.map(table => (
              <TableRow key={getDdlTableListKey(table)} hover>
                <TableCell data-testid="Cell-tables">
                  <DdlTableTitleWithMeta
                    table={table}
                    link={getDdlTableLink({
                      packageKey: packageKey,
                      versionKey: versionKey,
                      ddlEntityId: table.ddlEntityId,
                      ref: table.packageRef?.key ?? refKey,
                    })}
                    onLinkClick={onLinkClick}
                  />
                </TableCell>
                {isDashboard && (
                  <TableCell data-testid="Cell-package">
                    {table.packageRef?.name && (
                      <TextWithOverflowTooltip tooltipText={table.packageRef.name}>
                        {table.packageRef.name}
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

DdlTableListView.displayName = 'DdlTableListView'
