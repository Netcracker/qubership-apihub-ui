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

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import type { ReactNode } from 'react'
import { useMemo } from 'react'

type CustomToggleButtonGroupProps<T> = {
  value: T
  onClick?: (value: T) => void
  children: ReactNode
  exclusive?: boolean
  customLastButton?: boolean
}

export function CustomToggleButtonGroup<T>(
  props: CustomToggleButtonGroupProps<T>,
): JSX.Element {
  const { value, onClick, children, exclusive, customLastButton } = props

  return useMemo(() => (
    <ToggleButtonGroup
      sx={{
        '.MuiToggleButtonGroup-grouped': {
          padding: '15px 16px',
          '&.Mui-selected': {
            backgroundColor: 'rgba(46, 58, 82, 0.09)',
            boxShadow: 0,
          },
          margin: 0,
          border: '1px solid #D5DCE3',
          '&:first-of-type': {
            borderRadius: '6px 0px 0px 6px',
          },
          '&:not(:first-of-type)': {
            borderRadius: 0,
          },
          '&:last-of-type': {
            borderRadius: customLastButton ? '6px' : '0px 6px 6px 0px',
          },
          '&:hover': {
            backgroundColor: onClick ? '#F9F9F9' : 'transparent',
          },
          '&:focus': {
            outline: 'none',
          },
        },
      }}
      exclusive={exclusive}
      size="small"
      value={value}
      onChange={(event, value) => {
        onClick?.(value)
      }}
    >
      {children}
    </ToggleButtonGroup>
  ), [children, customLastButton, exclusive, onClick, value])
}
