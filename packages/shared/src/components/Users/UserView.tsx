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

import { Box } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'
import { EmptyUserIcon } from '../../icons/EmptyUserIcon'
import { TextWithOverflowTooltip } from '../TextWithOverflowTooltip'
import { UserAvatar } from './UserAvatar'

export type UserViewProps = Partial<{
  name: string
  avatarUrl: string
}>

export const UserView: FC<UserViewProps> = memo<UserViewProps>(({ name = '', avatarUrl }) => {
  return (
    <Box display="flex" alignItems="center" gap="4px" overflow="hidden" data-testid="UserView">
      {avatarUrl
        ? (
          <UserAvatar
            name={name}
            src={avatarUrl}
            size="small"
          />
        )
        : <EmptyUserIcon />}
      <TextWithOverflowTooltip tooltipText={name}>
        {name}
      </TextWithOverflowTooltip>
    </Box>
  )
})
