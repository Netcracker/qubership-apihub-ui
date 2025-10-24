import { Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { CustomTableHeadCell } from '@netcracker/qubership-apihub-ui-shared/components/CustomTableHeadCell'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import type { ColumnDef } from '@tanstack/react-table'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import type { FC } from 'react'
import { memo, useMemo, useRef } from 'react'
import { AiIssueSeverityMarker } from './AiIssueSeverityMarker'
import type { AiValidationDetails } from './types/document-validation-details'
import type { AiIssueSeverity } from './types/issue-severities'
import type { AiIssue } from './types/issues'

const TABLE_COLUMN_ID_TYPE = 'type'
const TABLE_COLUMN_ID_MESSAGE = 'message'

const TABLE_COLUMN_ID_LABELS = {
  [TABLE_COLUMN_ID_TYPE]: 'Type',
  [TABLE_COLUMN_ID_MESSAGE]: 'Message',
}

type TableData = {
  type: AiIssueSeverity
  message: string
}

type AiValidationResultsTableProps = {
  data: AiValidationDetails | undefined
  loading: IsLoading
}

const AiValidationResultsTableSkeleton: FC = memo(() => {
  const rows = Array(5).fill(null)

  return (
    <TableContainer>
      <Table>
        <TableHead>
          {rows.map((_, index) => (
            <TableRow key={`skeleton-row-${index}`}>
              <TableCell width={TABLE_COLUMNS_LAYOUT_CONFIG[TABLE_COLUMN_ID_TYPE].width}>
                <Skeleton variant="text" width={20} height={20} />
              </TableCell>
              <TableCell width={TABLE_COLUMNS_LAYOUT_CONFIG[TABLE_COLUMN_ID_MESSAGE].width}>
                <Skeleton variant="text" width='80%' height={20} />
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
      </Table>
    </TableContainer>
  )
})

type TableColumnLayoutConfig = {
  width: string
  whiteSpace: string
  textAlign: string
}

const TABLE_COLUMNS_LAYOUT_CONFIG: Record<string, TableColumnLayoutConfig> = {
  [TABLE_COLUMN_ID_TYPE]: {
    width: '50px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
  [TABLE_COLUMN_ID_MESSAGE]: {
    width: 'auto',
    whiteSpace: 'normal',
    textAlign: 'left',
  },
}

const COLUMNS: ColumnDef<TableData>[] = [
  {
    id: TABLE_COLUMN_ID_TYPE,
    header: () => <CustomTableHeadCell title={TABLE_COLUMN_ID_LABELS[TABLE_COLUMN_ID_TYPE]} />,
    cell: ({ row: { original: { type } } }) => {
      return (
        <Typography variant="body2">
          <AiIssueSeverityMarker severity={type} />
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
]

export const AiValidationResultsTable: FC<AiValidationResultsTableProps> = memo<AiValidationResultsTableProps>(props => {
  const { data, loading } = props

  const tableContainerRef = useRef<HTMLDivElement>(null)

  const transformedData: TableData[] = useMemo(() => (data?.issues ?? []).map((issue: AiIssue) => ({
    type: issue.severity,
    message: issue.message,
  })), [data?.issues])

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: transformedData,
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  })

  if (loading) {
    return <AiValidationResultsTableSkeleton />
  }

  return (
    <TableContainer ref={tableContainerRef}>
      <Table>
        <TableHead>
          {getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell
                  key={header.id}
                  sx={{
                    width: TABLE_COLUMNS_LAYOUT_CONFIG[header.id].width,
                    whiteSpace: TABLE_COLUMNS_LAYOUT_CONFIG[header.id].whiteSpace,
                    textAlign: TABLE_COLUMNS_LAYOUT_CONFIG[header.id].textAlign,
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map(row => (
            <TableRow key={row.id} sx={{ cursor: 'pointer' }}>
              {row.getVisibleCells().map(cell => (
                <TableCell
                  key={cell.column.id}
                  sx={{
                    textAlign: TABLE_COLUMNS_LAYOUT_CONFIG[cell.column.id].textAlign,
                  }}
                >
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
