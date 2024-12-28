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

import type { FC } from 'react'
import { memo } from 'react'
import type { Row } from '@tanstack/react-table'
import { Box, Typography } from '@mui/material'
import type { Service } from '@apihub/entities/services'
import { OverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/OverflowTooltip'

export type BaselinePackageTableCellProps = {
  value: Row<CellData>
}

type CellData = Partial<{
  service: Service
}>

export const BaselinePackageTableCell: FC<BaselinePackageTableCellProps> = memo<BaselinePackageTableCellProps>(({ value: { original: { service } } }) => {
  if (service && service.baseline) {
    const baselinePackage = `${service.baseline.packageKey} / ${service.baseline.name}`
    return (
      <Box display="flex">
        <OverflowTooltip title={baselinePackage}>
          <Typography noWrap variant="inherit">{baselinePackage}</Typography>
        </OverflowTooltip>
      </Box>
    )
  }

  return null
})
