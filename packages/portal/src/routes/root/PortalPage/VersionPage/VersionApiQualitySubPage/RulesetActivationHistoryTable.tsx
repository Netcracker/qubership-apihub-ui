import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { CustomTableHeadCell } from '@netcracker/qubership-apihub-ui-shared/components/CustomTableHeadCell'
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table'
import { useMemo, useRef, type FC } from 'react'
import type { RulesetActivation } from './types'

const TABLE_COLUMN_ID_ACTIVATION_HISTORY = 'activationHistory'

const TABLE_COLUMN_ID_LABELS = {
  [TABLE_COLUMN_ID_ACTIVATION_HISTORY]: 'Activation History',
}

type TableData = {
  rulesetActivation: RulesetActivation
}

type RulesetActivationHistoryTableProps = {
  data: readonly RulesetActivation[]
}

export const RulesetActivationHistoryTable: FC<RulesetActivationHistoryTableProps> = ({ data }) => {
  const tableContainerRef = useRef<HTMLDivElement>(null)

  const columns: ColumnDef<TableData>[] = useMemo(() => [
    {
      id: TABLE_COLUMN_ID_ACTIVATION_HISTORY,
      header: () => <CustomTableHeadCell title={TABLE_COLUMN_ID_LABELS[TABLE_COLUMN_ID_ACTIVATION_HISTORY]} />,
      cell: ({ row: { original: { rulesetActivation } } }) => {
        return (
          <Typography variant="body2">
            {rulesetActivation.activeFrom} - {rulesetActivation.activeTo}
          </Typography>
        )
      },
    },
  ], [])

  const transformedData: TableData[] = useMemo(
    () => data.map((rulesetActivation: RulesetActivation) => ({ rulesetActivation })),
    [data],
  )

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: transformedData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <TableContainer ref={tableContainerRef}>
      <Table>
        <TableHead>
          {getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.column.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
