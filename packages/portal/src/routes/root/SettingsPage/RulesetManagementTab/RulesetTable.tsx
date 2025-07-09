import type { FC } from 'react'
import { Fragment, memo, useEffect, useMemo, useRef, useState } from 'react'
import type { ColumnDef } from '@tanstack/table-core'
import {
  Box,
  capitalize,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import type { ColumnSizingInfoState, ColumnSizingState, OnChangeFn } from '@tanstack/react-table'
import { flexRender, getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table'
import type { ColumnModel } from '@netcracker/qubership-apihub-ui-shared/hooks/table-resizing/useColumnResizing'
import {
  DEFAULT_CONTAINER_WIDTH,
  useColumnsSizing,
} from '@netcracker/qubership-apihub-ui-shared/hooks/table-resizing/useColumnResizing'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { isEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'
import { CustomTableHeadCell } from '@netcracker/qubership-apihub-ui-shared/components/CustomTableHeadCell'
import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
import { createComponents } from '@netcracker/qubership-apihub-ui-shared/utils/components'
import { DEFAULT_NUMBER_SKELETON_ROWS } from '@netcracker/qubership-apihub-ui-shared/utils/constants'
import { useResizeObserver } from '@netcracker/qubership-apihub-ui-shared/hooks/common/useResizeObserver'
import type { Ruleset } from '@apihub/entities/api-quality-ruleset'
import { FormattedDate } from '@netcracker/qubership-apihub-ui-shared/components/FormattedDate'
import { RulesetActions } from '@apihub/routes/root/SettingsPage/RulesetManagementTab/RulesetActions'
import { TableCellSkeleton } from '@netcracker/qubership-apihub-ui-shared/components/TableCellSkeleton'

const RULESET_NAME_COLUMN_ID = 'ruleset-name'
const ACTIVATION_HISTORY_COLUMN_ID = 'activation-history'
const STATUS_COLUMN_ID = 'status'
const CREATED_AT_COLUMN_ID = 'created-at'
const CONTROLS_COLUMN_ID = 'controls'

const COLUMNS_MODELS: ColumnModel[] = [
  { name: RULESET_NAME_COLUMN_ID },
  { name: ACTIVATION_HISTORY_COLUMN_ID, fixedWidth: 195 },
  { name: STATUS_COLUMN_ID, fixedWidth: 116 },
  { name: CREATED_AT_COLUMN_ID, fixedWidth: 132 },
  { name: CONTROLS_COLUMN_ID, fixedWidth: 169 },
]

const tableContainerStyles = {
  mt: 1,
  maxHeight: 'calc(100vh - 260px)',
  overflowX: 'hidden',
} as const

export type RulesetTableProps = {
  rulesets: Ruleset[]
  isLoading: boolean
}

export const RulesetTable: FC<RulesetTableProps> = memo<RulesetTableProps>(({
  rulesets,
  isLoading,
}) => {
  const [containerWidth, setContainerWidth] = useState(DEFAULT_CONTAINER_WIDTH)
  const [columnSizingInfo, setColumnSizingInfo] = useState<ColumnSizingInfoState>()
  const [, setHandlingColumnSizing] = useState<ColumnSizingState>()

  const tableContainerRef = useRef<HTMLDivElement>(null)
  useResizeObserver(tableContainerRef, setContainerWidth)

  const actualColumnSizing = useColumnsSizing({
    containerWidth: containerWidth,
    columnModels: COLUMNS_MODELS,
    columnSizingInfo: columnSizingInfo,
    defaultMinColumnSize: 60,
  })

  const columns: ColumnDef<Ruleset>[] = useMemo(() => {
    const result: ColumnDef<Ruleset>[] = [
      {
        id: RULESET_NAME_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Ruleset Name" />,
        cell: ({ row: { original: { name } } }) => (
          <Box display="flex" alignItems="center">
            <TextWithOverflowTooltip tooltipText={name}>
              {name}
            </TextWithOverflowTooltip>
          </Box>
        ),
      },
      {
        id: ACTIVATION_HISTORY_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Activation History" />,
        cell: ({ row: { original: { activationHistory } } }) => (
          <Typography variant="body2">
            {activationHistory[0]?.activeFrom
              ? <FormattedDate value={activationHistory[0]?.activeFrom} />
              : '...'}
            {' - '}
            {activationHistory[0]?.activeTo
              ? <FormattedDate value={activationHistory[0]?.activeTo} />
              : '...'}
          </Typography>
        ),
      },
      {
        id: STATUS_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Status" />,
        cell: ({ row: { original: { status } } }) => (
          <Chip
            label={capitalize(status)}
            size="small"
            color="release"
          />
        ),
      },
      {
        id: CREATED_AT_COLUMN_ID,
        header: () => <CustomTableHeadCell title="Created At" />,
        cell: ({ row: { original: { createdAt } } }) => <FormattedDate value={createdAt} />,
      },
      {
        id: CONTROLS_COLUMN_ID,
        header: () => '',
        cell: ({ row: { original: ruleset } }) => <RulesetActions ruleset={ruleset} />,
      },
    ]

    return result
  }, [])

  const { getHeaderGroups, getRowModel, setColumnSizing } = useReactTable({
    data: rulesets,
    columns: columns,
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

  return (
    <TableContainer 
      ref={tableContainerRef} 
      sx={tableContainerStyles}
    >
      <Table stickyHeader>
        <TableHead>
          {getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((headerColumn) => (
                <TableCell
                  key={headerColumn.id}
                  align="left"
                  width={actualColumnSizing ? actualColumnSizing[headerColumn.id] : headerColumn.getSize()}
                >
                  {flexRender(headerColumn.column.columnDef.header, headerColumn.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <TableRow>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} data-testid={`Cell-${cell.column.id}`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            </Fragment>
          ))}
          {isLoading && <TableSkeleton />}
        </TableBody>
      </Table>
      {isEmpty(rulesets) && !isLoading
        ? (
          <Placeholder
            sx={{ width: 'inherit' }}
            invisible={isLoading}
            area={CONTENT_PLACEHOLDER_AREA}
            message="No Rulesets"
          />
        )
        : null}
    </TableContainer>
  )
})

const TableSkeleton: FC = memo(() => {
  return createComponents(<RowSkeleton />, DEFAULT_NUMBER_SKELETON_ROWS)
})

const RowSkeleton: FC = memo(() => {
  return (
    <TableRow>
      {Array.from({ length: COLUMNS_MODELS.length }, (_, index) => <TableCellSkeleton key={index} />)}
    </TableRow>
  )
})
