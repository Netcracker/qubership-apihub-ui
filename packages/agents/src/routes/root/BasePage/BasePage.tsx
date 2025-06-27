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
import {
  VsCodeExtensionButton,
} from '@netcracker/qubership-apihub-ui-shared/components/Buttons/VsCodeExtensionButton/VsCodeExtensionButton'
import {
  AppHeaderDivider,
} from '@netcracker/qubership-apihub-ui-shared/components/Dividers/AppHeaderDivider/AppHeaderDivider'
import { MaintenanceNotification } from '@netcracker/qubership-apihub-ui-shared/components/MaintenanceNotification'
import {
  ModuleFetchingErrorBoundary,
} from '@netcracker/qubership-apihub-ui-shared/components/ModuleFetchingErrorBoundary/ModuleFetchingErrorBoundary'
import { SystemInfoPopup } from '@netcracker/qubership-apihub-ui-shared/features/system-info'
import { useAuthorization } from '@netcracker/qubership-apihub-ui-shared/hooks/authorization'
import { useVersionInfo } from '@netcracker/qubership-apihub-ui-shared/hooks/frontend-version/useVersionInfo'
import { LogoIcon } from '@netcracker/qubership-apihub-ui-shared/icons/LogoIcon'
import { cutViewPortStyleCalculator } from '@netcracker/qubership-apihub-ui-shared/utils/themes'
import { agent } from '@netcracker/qubership-apihub-ui-shared/utils/version-info'
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
  const { frontendVersion, apiProcessorVersion } = useVersionInfo(agent)

  const viewPortStyleCalculator = useCallback(
    (theme: Theme): SystemStyleObject<Theme> => {
      return cutViewPortStyleCalculator(theme, 0)
    },
    [],
  )

  return (
    <ModuleFetchingErrorBoundary showReloadPopup={packageJson.version !== frontendVersion}>
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
            { name: 'Agent', pathname: '/agents', active: true, testId: 'AgentHeaderButton' },
          ]}
          action={
            <>
              <VsCodeExtensionButton />
              <AppHeaderDivider />
              <SystemInfoPopup
                frontendVersionKey={frontendVersion}
                apiProcessorVersion={apiProcessorVersion}
              />
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
    </ModuleFetchingErrorBoundary>
  )
})
