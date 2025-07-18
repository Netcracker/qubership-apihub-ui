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

import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import type { TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { OverflowTooltip } from './OverflowTooltip'

export type ToolbarTitleProps = Partial<{
  value: string | ReactNode | undefined | null
  titleTypographyProps?: TypographyProps
}>

export const ToolbarTitle: FC<ToolbarTitleProps> = memo<ToolbarTitleProps>(({ value, titleTypographyProps }) => {
  return (
    <OverflowTooltip title={value ?? ''}>
      {typeof value === 'string' ? (
        <Typography data-testid="ToolbarTitleTypography" noWrap variant="inherit" {...titleTypographyProps}>
          {value}
        </Typography>
      ) : <>{value}</>}
    </OverflowTooltip>
  )
})
