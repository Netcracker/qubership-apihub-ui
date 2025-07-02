import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { CustomTableHeadCell } from '@netcracker/qubership-apihub-ui-shared/components/CustomTableHeadCell'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import type { SpecItemUri } from '@netcracker/qubership-apihub-ui-shared/utils/specifications'
import type { ColumnDef } from '@tanstack/react-table'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import type { FC } from 'react'
import { memo, useMemo, useRef } from 'react'
import type { Issue, ValidationDetails } from './types'

const TABLE_COLUMN_ID_TYPE = 'type'
const TABLE_COLUMN_ID_MESSAGE = 'message'

const TABLE_COLUMN_ID_LABELS = {
  [TABLE_COLUMN_ID_TYPE]: 'Type',
  [TABLE_COLUMN_ID_MESSAGE]: 'Message',
}

type TableData = {
  type: string
  message: string
  path: SpecItemUri // Example: /foo/bar/baz/qux/1
}

type ValidationResultsTableProps = {
  data: ValidationDetails | undefined
  loading: IsLoading
  onSelectIssue: (pathToIssue: SpecItemUri) => void
}

const ValidationResultsTableSkeleton: FC = memo(() => {
  const rows = Array(5).fill(null)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {rows.map((_, index) => (
            <TableRow key={`skeleton-row-${index}`}>
              <TableCell>
                <Skeleton variant="text" width={100} height={20} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width='80%' height={20} />
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
    </TableContainer>
  )
})

export const ValidationResultsTable: FC<ValidationResultsTableProps> = memo<ValidationResultsTableProps>(props => {
  const { data, loading, onSelectIssue } = props

  const tableContainerRef = useRef<HTMLDivElement>(null)

  const columns: ColumnDef<TableData>[] = useMemo(() => [
    {
      id: TABLE_COLUMN_ID_TYPE,
      width: 100,
      header: () => <CustomTableHeadCell title={TABLE_COLUMN_ID_LABELS[TABLE_COLUMN_ID_TYPE]} />,
      cell: ({ row: { original: { type } } }) => {
        return (
          <Typography variant="body2">
            {type}
          </Typography>
        )
      },
    },
    {
      id: TABLE_COLUMN_ID_MESSAGE,
      header: () => <CustomTableHeadCell title={TABLE_COLUMN_ID_LABELS[TABLE_COLUMN_ID_MESSAGE]} />,
      cell: ({ row: { original: { message } } }) => (
        <Typography variant="body2">
          {message}
        </Typography>
      ),
    },
  ], [])

  const transformedData: TableData[] = useMemo(() => (data?.issues ?? []).map((issue: Issue) => ({
    type: issue.severity,
    message: issue.message,
    path: `/${issue.jsonPath.join('/')}`,
  })), [data?.issues])

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: transformedData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (loading) {
    return <ValidationResultsTableSkeleton />
  }

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
            <TableRow key={row.id} onClick={() => onSelectIssue(row.original.path)}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})
