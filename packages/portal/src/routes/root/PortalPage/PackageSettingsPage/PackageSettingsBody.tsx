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

import {
  ExportSettingsTab,
} from '@apihub/routes/root/PortalPage/PackageSettingsPage/ExportSettingsTab/ExportSettingsTab'
import {
  UserPackageAccessControlSettingsTab,
} from '@apihub/routes/root/PortalPage/PackageSettingsPage/UserPackageAccessControlSettingsTab/UserPackageAccessControlSettingsTab'
import type { FC } from 'react'
import { memo } from 'react'
import {
  ACCESS_TOKENS_PAGE,
  API_SPECIFIC_CONFIGURATION_PAGE,
  EXPORT_SETTINGS_PAGE,
  GENERAL_PAGE,
  USER_ACCESS_CONTROLS_PAGE,
  VERSIONS_PAGE,
} from '../../../../routes'
import { AccessTokensPackageSettingsTab } from './AccessTokensPackageSettingsTab'
import { GeneralPackageSettingsTab } from './GeneralPackageSettingsTab/GeneralPackageSettingsTab'
import type { PackageSettingsTabProps } from './package-settings'
import { useActiveTabContentContext } from './PackageSettingsPage'
import {
  SpecificConfigurationPackageSettingsTab,
} from './SpecificConfigurationPackageSettingsTab/SpecificConfigurationPackageSettingsTab'
import { VersionsPackageSettingsTab } from './VersionsPackageSettingsTab/VersionsPackageSettingsTab'

export const PackageSettingsBody: FC<PackageSettingsTabProps> = memo<PackageSettingsTabProps>(({
  packageObject,
  isPackageLoading,
}) => {
  const activeTab = useActiveTabContentContext()

  return (
    <>
      {{
        [GENERAL_PAGE]: (
          <GeneralPackageSettingsTab
            packageObject={packageObject}
            isPackageLoading={isPackageLoading}
          />
        ),
        [API_SPECIFIC_CONFIGURATION_PAGE]: <SpecificConfigurationPackageSettingsTab packageObject={packageObject} />,
        [EXPORT_SETTINGS_PAGE]: <ExportSettingsTab packageObject={packageObject} />,
        [VERSIONS_PAGE]: <VersionsPackageSettingsTab packageObject={packageObject} />,
        [ACCESS_TOKENS_PAGE]: <AccessTokensPackageSettingsTab packageObject={packageObject} />,
        [USER_ACCESS_CONTROLS_PAGE]: <UserPackageAccessControlSettingsTab packageObject={packageObject} />,
      }[activeTab]}
    </>
  )
})
