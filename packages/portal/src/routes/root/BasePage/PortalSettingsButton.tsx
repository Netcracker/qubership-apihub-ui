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

import { useBackwardLocationContext, useSetBackwardLocationContext } from '@apihub/routes/BackwardLocationProvider'
import { IconButton } from '@mui/material'
import { PortalSettingsIcon } from '@netcracker/qubership-apihub-ui-shared/icons/PortalSettingsIcon'
import type { FC } from 'react'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-use'
import { getSettingsPath } from '../../NavigationProvider'

export const PortalSettingsButton: FC = memo(() => {
  const location = useLocation()
  const backwardLocation = useBackwardLocationContext()
  const setBackwardLocation = useSetBackwardLocationContext()

  const packageSettingsLinkHandle = (): void => {
    setBackwardLocation({
      ...backwardLocation,
      fromPackageSettings: {
        pathname: location.pathname!,
        search: location.search!,
      },
    })
  }

  return (
    <IconButton
      data-testid="PortalSettingsButton"
      size="large"
      color="inherit"
      component={NavLink}
      to={getSettingsPath()}
      onClick={packageSettingsLinkHandle}
    >
      <PortalSettingsIcon />
    </IconButton>
  )
})
