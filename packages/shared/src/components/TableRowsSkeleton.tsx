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

import { Skeleton, TableCell, TableRow } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'

export type TableRowsSkeletonProps = {
  cellsCount: number
  rowsCount?: number
}
export const TableRowsSkeleton: FC<TableRowsSkeletonProps> = memo<TableRowsSkeletonProps>(({
  rowsCount = 5,
  cellsCount,
}) => {
  return (
    <>
      {[...Array(rowsCount)].map((row, index) => (
        <TableRow key={`row-${index}`}>
          {[...Array(cellsCount)].map((cell, index) => (
            <TableCell component="th" scope="row" key={`cell-${index}`}>
              <Skeleton variant="text" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  )
})
