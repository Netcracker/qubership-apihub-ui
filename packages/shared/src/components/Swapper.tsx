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

import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined'
import { IconButton, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'

export type SwapperProps = {
  onSwap: () => void
}

export const Swapper: FC<SwapperProps> = memo<SwapperProps>(({ onSwap }) => {
  return (
    <Tooltip title="Swap">
      <IconButton
        sx={{ alignSelf: 'center' }}
        size="small"
        color="primary"
        onClick={onSwap}
        data-testid="SwapButton"
      >
        <SwapHorizOutlinedIcon />
      </IconButton>
    </Tooltip>
  )
})
