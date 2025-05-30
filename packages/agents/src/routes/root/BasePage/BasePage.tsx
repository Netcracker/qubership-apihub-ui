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
import type { Theme } from '@mui/material/styles'
import type { SystemStyleObject } from '@mui/system/styleFunctionSx/styleFunctionSx'
import { AppHeader } from '@netcracker/qubership-apihub-ui-shared/components/AppHeader'
import { MaintenanceNotification } from '@netcracker/qubership-apihub-ui-shared/components/MaintenanceNotification'
import { SystemInfoPopup } from '@netcracker/qubership-apihub-ui-shared/features/system-info'
import { useAuthorization } from '@netcracker/qubership-apihub-ui-shared/hooks/authorization'
import { LogoIcon } from '@netcracker/qubership-apihub-ui-shared/icons/LogoIcon'
import { cutViewPortStyleCalculator } from '@netcracker/qubership-apihub-ui-shared/utils/themes'
import type { FC } from 'react'
import { memo, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import * as packageJson from '../../../../package.json'
import { useSystemInfo } from '../useSystemInfo'
import { ErrorNotificationHandler, SuccessNotificationHandler } from './NotificationHandler'
import { UserPanel } from './UserPanel'

export const BasePage: FC = memo(() => {
  useAuthorization()
  const { notification: systemNotification } = useSystemInfo()

  const viewPortStyleCalculator = useCallback(
    (theme: Theme): SystemStyleObject<Theme> => {
      return cutViewPortStyleCalculator(theme, 0)
    },
    [],
  )

  return (
    <Box
      display="grid"
      gridTemplateRows="max-content 1fr"
      height="100vh"
    >
      <AppHeader
        logo={<LogoIcon />}
        title="APIHUB"
        links={[
          { name: 'Portal', pathname: '/portal', testId: 'PortalHeaderButton' },
          { name: 'API Editor', pathname: '/editor', testId: 'EditorHeaderButton' },
          { name: 'Agent', pathname: '/agents', active: true, testId: 'AgentHeaderButton' },
        ]}
        action={
          <>
            <SystemInfoPopup frontendVersionKey={packageJson.version} />
            <UserPanel />
          </>
        }
      />
      <Box sx={viewPortStyleCalculator}>
        <Outlet />
        <ErrorNotificationHandler />
        <SuccessNotificationHandler />
      </Box>
      {systemNotification && <MaintenanceNotification value={systemNotification} />}
    </Box>
  )
})
