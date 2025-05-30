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

import type { BadgeProps, BadgePropsColorOverrides } from '@mui/material'
import { Badge } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { OverridableStringUnion } from '@mui/types'
import { memo } from 'react'

export const DottedBadge = styled(memo((props: BadgeProps) => (
  <Badge
    {...props}
    variant="dot"
  />
)))(({ color, theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: color && DOT_COLORS[color],
    right: 6,
    top: 17,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: 2,
  },
}))

const DOT_COLORS: Record<
  OverridableStringUnion<
    'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning',
    BadgePropsColorOverrides
  >,
  string | undefined
> = {
  primary: '#0068FF',
  secondary: undefined,
  default: undefined,
  error: undefined,
  info: undefined,
  success: '#00BB5B',
  warning: undefined,
}
