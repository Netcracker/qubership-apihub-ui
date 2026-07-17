import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import type { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query'
import type {
  ColumnSizingInfoState,
  ColumnSizingState,
  ExpandedState,
  OnChangeFn,
  Row,
  VisibilityState,
} from '@tanstack/react-table'
import { flexRender, getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/table-core'
import type { FC, RefObject } from 'react'
import { Fragment, memo, useEffect, useMemo, useRef, useState } from 'react'

import { Changes } from '../../../components/Changes'
import { ColumnDelimiter } from '../../../components/ColumnDelimiter'
import { CustomTableHeadCell } from '../../../components/CustomTableHeadCell'
import { TextWithOverflowTooltip } from '../../../components/TextWithOverflowTooltip'
import {
  ACTION_TYPE_COLOR_MAP,
  NON_BREAKING_CHANGE_SEVERITY,
  REPLACE_ACTION_TYPE,
  RISKY_CHANGE_SEVERITY,
} from '../../../entities/change-severities'
import type { DdlChangesPage, DdlEntityChangeEntry } from '../../../entities/contracts-ddl-changelog'
import type { Key } from '../../../entities/keys'
import type { Package } from '../../../entities/packages'
import { DASHBOARD_KIND } from '../../../entities/packages'
import { PACKAGE_COLUMN_ID } from '../../../entities/table-columns'
import { useIntersectionObserver } from '../../../hooks/common/useIntersectionObserver'
import { useResizeObserver } from '../../../hooks/common/useResizeObserver'
import { DEFAULT_CONTAINER_WIDTH, useColumnsSizing } from '../../../hooks/table-resizing/useColumnResizing'
import { insertIntoArrayByIndex } from '../../../utils/arrays'
import { createComponents } from '../../../utils/components'
import { DEFAULT_NUMBER_SKELETON_ROWS } from '../../../utils/constants'
import type { DdlChangesViewTableData } from '../const/ddlTable'
import { DDL_CHANGES_COLUMNS_MODELS, DDL_TABLE_COLUMN_ID } from '../const/ddlTable'
import { CHANGES_COLUMN_ID } from '../const/table'
import { DdlEntityChangeCell } from './DdlEntityChangeCell'

export type FetchNextDdlChangesPage = (
  options?: FetchNextPageOptions,
) => Promise<InfiniteQueryObserverResult<DdlChangesPage, Error>>

export type DdlChangesViewTableProps = {
  value: ReadonlyArray<DdlEntityChangeEntry>
  packageKey: Key
  versionKey: Key
  packageObject: Package | null
  fetchNextPage?: FetchNextDdlChangesPage
  isNextPageFetching?: boolean
  hasNextPage?: boolean
  SubTableComponent: FC<DdlSubTableComponentProps>
  isLoading: boolean
}

export const DdlChangesViewTable: FC<DdlChangesViewTableProps> = memo<DdlChangesViewTableProps>(({
  value,
  packageKey,
  versionKey,
  packageObject,
  fetchNextPage,
  isNextPageFetching,
  hasNextPage,
  SubTableComponent,
  isLoading,
}) => {
  const isDashboardType = packageObject?.kind === DASHBOARD_KIND

  const [containerWidth, setContainerWidth] = useState(DEFAULT_CONTAINER_WIDTH)
  const [columnSizingInfo, setColumnSizingInfo] = useState<ColumnSizingInfoState>()
  const [, setHandlingColumnSizing] = useState<ColumnSizingState>()

  const tableContainerRef = useRef<HTMLDivElement>(null)
  useResizeObserver(tableContainerRef, setContainerWidth)

  const actualColumnSizing = useColumnsSizing({
    containerWidth: containerWidth,
    columnModels: DDL_CHANGES_COLUMNS_MODELS,
    columnSizingInfo: columnSizingInfo,
    defaultMinColumnSize: 60,
  })

  const columns: ColumnDef<DdlChangesViewTableData>[] = useMemo(() => {
    const result: ColumnDef<DdlChangesViewTableData>[] = [
      {
        id: DDL_TABLE_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Table" />,
        cell: ({ row }) => (
          <TextWithOverflowTooltip>
            <DdlEntityChangeCell value={row} mainPackageKind={packageObject?.kind} />
          </TextWithOverflowTooltip>
        ),
      },
      {
        id: CHANGES_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Changes summary" />,
        cell: ({ row: { original: { change } } }) => {
          const { changeSummary } = change
          if (changeSummary) {
            return <Changes value={changeSummary} mode="compact" />
          }
        },
      },
    ]

    if (isDashboardType) {
      insertIntoArrayByIndex(result, {
        id: PACKAGE_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Package" />,
        cell: ({ row: { original: { change: { ddlEntityData, previousDdlEntityData } } } }) => {
          const ref = ddlEntityData?.packageRef ?? previousDdlEntityData?.packageRef
          if (ref) {
            return (
              <TextWithOverflowTooltip tooltipText={ref.name}>
                {ref.name}
              </TextWithOverflowTooltip>
            )
          }
        },
      }, 1)
    }

    return result
  }, [isDashboardType, packageObject?.kind])

  const data: DdlChangesViewTableData[] = useMemo(() =>
    value.map(change => {
      const {
        action,
        changeSummary: {
          breaking = 0,
          [RISKY_CHANGE_SEVERITY]: risky = 0,
          deprecated = 0,
          [NON_BREAKING_CHANGE_SEVERITY]: nonBreaking = 0,
          annotation = 0,
          unclassified = 0,
        } = {},
      } = change
      return {
        change: change,
        canExpand: action === REPLACE_ACTION_TYPE &&
          (breaking > 0 || risky > 0 || deprecated > 0 || nonBreaking > 0 || annotation > 0 || unclassified > 0),
      }
    }), [value])

  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

  const { getHeaderGroups, getRowModel, setColumnSizing } = useReactTable({
    data: data,
    columns: columns,
    state: { expanded, columnVisibility },
    getRowCanExpand: (row) => row.original.canExpand,
    onExpandedChange: setExpanded,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    columnResizeMode: 'onChange',
    onColumnSizingChange: setHandlingColumnSizing as OnChangeFn<ColumnSizingState>,
    onColumnSizingInfoChange: setColumnSizingInfo as OnChangeFn<ColumnSizingInfoState>,
  })

  useEffect(
    () => setColumnSizing(actualColumnSizing),
    [setColumnSizing, actualColumnSizing],
  )

  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref, isNextPageFetching, hasNextPage, fetchNextPage)

  return (
    <TableContainer ref={tableContainerRef} sx={{ mt: 1 }}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          {getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((headerColumn, index) => (
                <TableCell
                  key={headerColumn.id}
                  align="left"
                  width={actualColumnSizing ? actualColumnSizing[headerColumn.id] : headerColumn.getSize()}
                  sx={{
                    '&:hover': {
                      borderRight: '2px solid rgba(224, 224, 224, 1)',
                    },
                  }}
                >
                  {flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}
                  {index !== headerGroup.headers.length - 1 &&
                    <ColumnDelimiter header={headerColumn} resizable={true} />}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <TableRow sx={{ backgroundColor: ACTION_TYPE_COLOR_MAP[row.original.change.action] }}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} data-testid={`Cell-${cell.column.id}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
              {row.getIsExpanded() && (
                <SubTableComponent
                  value={row}
                  packageKey={packageKey}
                  versionKey={versionKey}
                />
              )}
            </Fragment>
          ))}
          {isLoading && createComponents(
            <DdlRowSkeleton isDashboard={isDashboardType} />,
            DEFAULT_NUMBER_SKELETON_ROWS,
          )}
          {hasNextPage && <DdlRowSkeleton refObject={ref} isDashboard={isDashboardType} />}
        </TableBody>
      </Table>
    </TableContainer>
  )
})

DdlChangesViewTable.displayName = 'DdlChangesViewTable'

type DdlRowSkeletonProps = {
  refObject?: RefObject<HTMLDivElement>
  isDashboard?: boolean
}

const DdlRowSkeleton: FC<DdlRowSkeletonProps> = memo<DdlRowSkeletonProps>(({ refObject, isDashboard }) => (
  <TableRow>
    <TableCell ref={refObject}>
      <Skeleton variant="rectangular" width="80%" />
    </TableCell>
    {isDashboard && (
      <TableCell>
        <Skeleton variant="rectangular" width="80%" />
      </TableCell>
    )}
    <TableCell>
      <Skeleton variant="rectangular" width="80%" />
    </TableCell>
  </TableRow>
))

DdlRowSkeleton.displayName = 'DdlRowSkeleton'

export type DdlSubTableComponentProps = {
  value: Row<DdlChangesViewTableData>
  packageKey: Key | undefined
  versionKey: Key | undefined
}
