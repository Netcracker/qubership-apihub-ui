// import { Box, Link, Table, TableBody, TableContainer, TableHead, Typography } from '@mui/material'
// import { CustomChip } from '@netcracker/qubership-apihub-ui-shared/components/CustomChip'
// import { CustomTableHeadCell } from '@netcracker/qubership-apihub-ui-shared/components/CustomTableHeadCell'
// import { FormattedDate } from '@netcracker/qubership-apihub-ui-shared/components/FormattedDate'
// import { OverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/OverflowTooltip'
// import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
// import { DRAFT_VERSION_STATUS } from '@netcracker/qubership-apihub-ui-shared/entities/version-status'
// import { ArrowDown } from '@netcracker/qubership-apihub-ui-shared/icons/ArrowDown'
// import { getSplittedVersionKey } from '@netcracker/qubership-apihub-ui-shared/utils/versions'
// import type { ColumnDef, ColumnSizingInfoState, ColumnSizingState, OnChangeFn } from '@tanstack/react-table'
// import { getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table'
// import { memo, useMemo, useRef } from 'react'

// const TABLE_COLUMN_ID_TYPE = 'type'
// const TABLE_COLUMN_ID_MESSAGE = 'message'

// const TABLE_COLUMN_ID_LABELS = {
//   [TABLE_COLUMN_ID_TYPE]: 'Type',
//   [TABLE_COLUMN_ID_MESSAGE]: 'Message',
// }

// type TableData = {
//   type: string
//   message: string
// }

// type ValidationResultsTableProps = {
//   data: ReadonlyArray<>
// }

// export const ValidationResultsTable = memo(() => {
//   const tableContainerRef = useRef<HTMLDivElement>(null)

//   const columns: ColumnDef<TableData>[] = useMemo(() => [
//     {
//       id: TABLE_COLUMN_ID_TYPE,
//       header: () => <CustomTableHeadCell title={TABLE_COLUMN_ID_LABELS[TABLE_COLUMN_ID_TYPE]} />,
//       cell: ({ row: { original: { type } } }) => {
//         return (
//           <Typography>
//             {type}
//           </Typography>
//         )
//       },
//     },
//     {
//       id: TABLE_COLUMN_ID_MESSAGE,
//       header: () => <CustomTableHeadCell title={TABLE_COLUMN_ID_LABELS[TABLE_COLUMN_ID_MESSAGE]} />,
//       cell: ({ row: { original: { message } } }) => (
//         <Typography>
//           {message}
//         </Typography>
//       ),
//     },
//   ], [])

//   const data: TableData[] = useMemo(() => value.map(version => ({
//     version: version,
//   })), [value])

//   const { getHeaderGroups, getRowModel, setColumnSizing } = useReactTable({
//     data: data,
//     columns: columns,
//     state: { expanded, columnVisibility },
//     onExpandedChange: setExpanded,
//     onColumnVisibilityChange: setColumnVisibility,
//     getCoreRowModel: getCoreRowModel(),
//     getExpandedRowModel: getExpandedRowModel(),
//     columnResizeMode: 'onChange',
//     onColumnSizingChange: setHandlingColumnSizing as OnChangeFn<ColumnSizingState>,
//     onColumnSizingInfoChange: setColumnSizingInfo as OnChangeFn<ColumnSizingInfoState>,
//   })

//   return (
//     <TableContainer ref={tableContainerRef}>
//       <Table>
//         <TableHead>

//         </TableHead>
//         <TableBody>

//         </TableBody>
//       </Table>
//     </TableContainer>
//   )
// })
