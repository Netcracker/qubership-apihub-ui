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

import { useSetBackwardLocationContext } from '@apihub/routes/BackwardLocationProvider'
import { getProfilePath } from '@apihub/routes/NavigationProvider'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Avatar, IconButton, MenuItem } from '@mui/material'
import { MenuButton } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/MenuButton'
import { UserAvatar } from '@netcracker/qubership-apihub-ui-shared/components/Users/UserAvatar'
import { useUserInfo } from '@netcracker/qubership-apihub-ui-shared/hooks/authorization/useUserInfo'
import type { FC } from 'react'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserPanel: FC = memo(() => {
  const [userInfo] = useUserInfo()
  const navigate = useNavigate()
  const setBackwardLocation = useSetBackwardLocationContext()

  return (
    <>
      <IconButton data-testid="AppUserAvatar" size="large" color="inherit">
        {
          userInfo?.avatarUrl
            ? <Avatar src={userInfo.avatarUrl} />
            : <UserAvatar size="medium" name={userInfo?.name ?? ''} />
        }
      </IconButton>

      <MenuButton
        sx={{ p: 0 }}
        variant="text"
        color="inherit"
        title={userInfo?.name ?? ''}
        icon={<KeyboardArrowDownOutlinedIcon />}
        data-testid="UserMenuButton"
      >
        <MenuItem
          data-testid="ProfileMenuItem"
          onClick={() => {
            setBackwardLocation({
              fromProfile: {
                pathname: location.pathname,
              },
            })
            navigate(getProfilePath())
          }}
        >
          My Profile
        </MenuItem>
        <MenuItem
          data-testid="LogoutMenuItem"
          onClick={() => {
            // TODO 01.04.2025 // Send logout request
            location.replace(`${location.origin}/login?redirectUri=${encodeURIComponent(location.href)}`)
          }}
        >
          Logout
        </MenuItem>
      </MenuButton>
    </>
  )
})
