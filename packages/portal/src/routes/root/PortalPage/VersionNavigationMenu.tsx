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

import type { Key } from '@apihub/entities/keys'
import type { FC } from 'react'
import { memo, useCallback, useMemo } from 'react'
import type { To } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { usePackageVersionContent } from '../usePackageVersionContent'

import {
  API_CHANGES_PAGE,
  API_QUALITY_PAGE,
  CONFIGURATION_PAGE,
  DEPRECATED_PAGE,
  DOCUMENTS_PAGE,
  CONTRACTS_PAGE,
  OVERVIEW_PAGE,
  PACKAGE_SETTINGS_PAGE,
} from '../../../routes'

import { usePortalPageSettingsContext } from '@apihub/routes/PortalPageSettingsProvider'
import { getDefaultApiType } from '@apihub/utils/operation-types'
import {
  getApiChangesTabApiTypes,
  getApiQualityTabApiTypes,
  getContractsTabApiTypes,
  getDeprecatedTabApiTypes,
  getTabDefaultApiType,
  hasTabApiTypes,
  type PublishedApiTypes,
} from '@apihub/utils/tab-api-types'
import type { SidebarMenu } from '@netcracker/qubership-apihub-ui-shared/components/NavigationMenu'
import { NavigationMenu } from '@netcracker/qubership-apihub-ui-shared/components/NavigationMenu'
import { isApiType, type ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { ContractType } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import {
  API_TYPE_ASYNCAPI,
  API_TYPE_GRAPHQL,
  API_TYPE_REST,
} from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { SPECIAL_VERSION_KEY } from '@netcracker/qubership-apihub-ui-shared/entities/versions'
import { useSystemInfo } from '@netcracker/qubership-apihub-ui-shared/features/system-info'
import { useActiveTabs } from '@netcracker/qubership-apihub-ui-shared/hooks/pathparams/useActiveTabs'
import {
  EXPAND_NAVIGATION_MENU,
} from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useExpandNavigationMenuSearchParam'
import { ApiIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ApiIcon'
import { CertifiedFileIcon } from '@netcracker/qubership-apihub-ui-shared/icons/CertifiedFileIcon'
import { ComparisonIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ComparisonIcon'
import { ConfigureIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ConfigureIcon'
import { FileIcon } from '@netcracker/qubership-apihub-ui-shared/icons/FileIcon'
import { ServicesIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ServicesIcon'
import { SettingIcon } from '@netcracker/qubership-apihub-ui-shared/icons/SettingIcon'
import { DefaultWarningIcon } from '@netcracker/qubership-apihub-ui-shared/icons/WarningIcon'
import type { OperationsViewMode } from '@netcracker/qubership-apihub-ui-shared/types/views'
import {
  EXPAND_NAVIGATION_MENU_SEARCH_PARAM,
  OPERATIONS_VIEW_MODE_PARAM,
} from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import {
  getApiChangesPath,
  getApiQualityPath,
  getDeprecatedPath,
  getDocumentPath,
  getOperationsPath,
  getOverviewPath,
  getPackageSettingsPath,
  getVersionPath,
} from '../../NavigationProvider'
import type {
  ApiQualityTabTooltip} from './VersionPage/ApiQualityValidationSummaryProvider'
import { NotLintedApiTypes,
} from './VersionPage/ApiQualityValidationSummaryProvider'
import {
  useApiQualityLinterEnabled,
  useApiQualityTabTooltip,
} from './VersionPage/ApiQualityValidationSummaryProvider'
import { useOperationsView } from './VersionPage/useOperationsView'
import { usePackageVersionApiTypes } from './VersionPage/usePackageVersionApiTypes'

export type VersionNavigationMenuProps = {
  menuItems: string[]
  showSettings?: boolean
}

export const VersionNavigationMenu: FC<VersionNavigationMenuProps> = memo<VersionNavigationMenuProps>(({
  menuItems,
  showSettings = false,
}) => {
  const navigate = useNavigate()
  const { productionMode } = useSystemInfo()
  const linterEnabled = useApiQualityLinterEnabled()

  const { packageId, versionId } = useParams()
  const { versionContent } = usePackageVersionContent({
    packageKey: packageId,
    versionKey: versionId,
    includeSummary: true,
  })
  const { previousVersion } = versionContent ?? {}
  const { apiTypes, isLoading } = usePackageVersionApiTypes(packageId!, versionId!)
  const contractsDefaultApiType = useMemo(
    () => getDefaultApiType(getContractsTabApiTypes(apiTypes)),
    [apiTypes],
  )
  const apiChangesDefaultApiType = useMemo(
    () => getDefaultApiType(getApiChangesTabApiTypes(apiTypes)),
    [apiTypes],
  )
  const deprecatedAllowedApiTypes = useMemo(() => getDeprecatedTabApiTypes(apiTypes), [apiTypes])
  const apiQualityAllowedApiTypes = useMemo(() => getApiQualityTabApiTypes(apiTypes), [apiTypes])
  const deprecatedDefaultApiType = useMemo(
    () => getTabDefaultApiType(deprecatedAllowedApiTypes),
    [deprecatedAllowedApiTypes],
  )
  const apiQualityDefaultApiType = useMemo(
    () => getTabDefaultApiType(apiQualityAllowedApiTypes),
    [apiQualityAllowedApiTypes],
  )
  const { expandMainMenu, toggleExpandMainMenu, operationsViewMode } = usePortalPageSettingsContext()
  const [operationsView] = useOperationsView(operationsViewMode)

  const apiQualityTabTooltip = useApiQualityTabTooltip()

  const [currentMenuItem] = useActiveTabs()
  const sidebarMenuItems = useMemo(
    () =>
      getAvailableSidebarMenuItems(
        previousVersion,
        apiChangesDefaultApiType,
        productionMode,
        isLoading,
        {
          deprecatedAllowedApiTypes: deprecatedAllowedApiTypes,
          apiQualityAllowedApiTypes: apiQualityAllowedApiTypes,
          apiQualityDefaultApiType: apiQualityDefaultApiType,
          linterEnabled: linterEnabled,
          tooltip: apiQualityTabTooltip,
        },
      ).filter(({ id }) => menuItems.includes(id)),
    [
      apiChangesDefaultApiType,
      apiQualityAllowedApiTypes,
      apiQualityDefaultApiType,
      apiQualityTabTooltip,
      deprecatedAllowedApiTypes,
      isLoading,
      linterEnabled,
      menuItems,
      previousVersion,
      productionMode,
    ],
  )
  const sidebarServiceMenuItems = useMemo(
    () => getAvailableSidebarServiceMenuItems(showSettings).filter(({ id }) => menuItems.includes(id)),
    [menuItems, showSettings],
  )
  const pagePathsMap = useMemo(
    () => getPagePathsMap(
      packageId!,
      versionId!,
      contractsDefaultApiType,
      apiChangesDefaultApiType,
      deprecatedDefaultApiType,
      apiQualityDefaultApiType,
      operationsView,
      expandMainMenu,
    ),
    [
      apiChangesDefaultApiType,
      apiQualityDefaultApiType,
      contractsDefaultApiType,
      deprecatedDefaultApiType,
      operationsView,
      expandMainMenu,
      packageId,
      versionId,
    ],
  )

  const navigateAndSelect = useCallback((menuItemId: string): void => {
    const pathToNavigate = pagePathsMap[menuItemId]
    pathToNavigate && navigate(pathToNavigate)
  }, [navigate, pagePathsMap])

  return (
    <NavigationMenu
      open={expandMainMenu}
      setOpen={toggleExpandMainMenu}
      activeItem={currentMenuItem}
      sidebarMenuItems={sidebarMenuItems}
      sidebarServiceMenuItems={sidebarServiceMenuItems}
      onSelectItem={navigateAndSelect}
    />
  )
})

const getPagePathsMap = (
  packageKey: Key,
  versionKey: Key,
  contractsDefaultApiType: ApiType | ContractType,
  apiChangesDefaultApiType: ApiType | ContractType,
  deprecatedDefaultApiType: ApiType | ContractType | undefined,
  apiQualityDefaultApiType: ApiType | ContractType | undefined,
  defaultOperationsView: OperationsViewMode,
  expandMenu: boolean,
): Record<string, To> => {
  const commonSearchParams = {
    [EXPAND_NAVIGATION_MENU_SEARCH_PARAM]: { value: expandMenu ? EXPAND_NAVIGATION_MENU : undefined },
  }

  const paths: Record<string, To> = {
    [CONFIGURATION_PAGE]: getVersionPath({
      packageKey: packageKey,
      versionKey: versionKey ?? SPECIAL_VERSION_KEY,
      edit: true,
    }),
    [OVERVIEW_PAGE]: getOverviewPath({
      packageKey: packageKey,
      versionKey: versionKey,
      search: commonSearchParams,
    }),
    [CONTRACTS_PAGE]: getOperationsPath({
      packageKey: packageKey,
      versionKey: versionKey,
      apiType: contractsDefaultApiType as ApiType,
      search: {
        ...commonSearchParams,
        [OPERATIONS_VIEW_MODE_PARAM]: { value: defaultOperationsView },
      },
    }),
    [API_CHANGES_PAGE]: getApiChangesPath({
      packageKey: packageKey,
      versionKey: versionKey,
      apiType: apiChangesDefaultApiType as ApiType,
      search: {
        ...commonSearchParams,
        [OPERATIONS_VIEW_MODE_PARAM]: { value: defaultOperationsView },
      },
    }),
    [DOCUMENTS_PAGE]: getDocumentPath({ packageKey: packageKey, versionKey: versionKey, search: commonSearchParams }),
    [PACKAGE_SETTINGS_PAGE]: getPackageSettingsPath({ packageKey }),
  }

  if (deprecatedDefaultApiType !== undefined) {
    paths[DEPRECATED_PAGE] = getDeprecatedPath({
      packageKey: packageKey,
      versionKey: versionKey,
      apiType: deprecatedDefaultApiType as ApiType,
      search: {
        ...commonSearchParams,
        [OPERATIONS_VIEW_MODE_PARAM]: { value: defaultOperationsView },
      },
    })
  }

  if (apiQualityDefaultApiType !== undefined) {
    paths[API_QUALITY_PAGE] = getApiQualityPath({
      packageKey: packageKey,
      versionKey: versionKey,
      apiType: apiQualityDefaultApiType as ApiType,
      search: commonSearchParams,
    })
  }

  return paths
}

type VersionTabMenuOptions = {
  deprecatedAllowedApiTypes: PublishedApiTypes
  apiQualityAllowedApiTypes: PublishedApiTypes
  apiQualityDefaultApiType: ApiType | ContractType | undefined
  linterEnabled: boolean
  tooltip: ApiQualityTabTooltip
}

const getAvailableSidebarMenuItems = (
  previousVersion: Key | undefined,
  apiChangesDefaultApiType: ApiType | ContractType,
  productionMode: boolean,
  isLoading: boolean,
  tabMenuOptions: VersionTabMenuOptions,
): SidebarMenu[] => {
  const disableTab = isApiType(apiChangesDefaultApiType)
    ? API_TYPE_DISABLE_TAB_MAP[apiChangesDefaultApiType](productionMode)
    : false
  const deprecatedTabDisabled = !isLoading && !hasTabApiTypes(tabMenuOptions.deprecatedAllowedApiTypes)
  const apiQualityTabDisabled = !isLoading && (
    !hasTabApiTypes(tabMenuOptions.apiQualityAllowedApiTypes) ||
    (tabMenuOptions.apiQualityDefaultApiType !== undefined &&
      !NotLintedApiTypes(tabMenuOptions.apiQualityDefaultApiType)) ||
    !!tabMenuOptions.tooltip
  )

  const menuItems = [
    {
      id: CONFIGURATION_PAGE,
      title: 'Configuration',
      tooltip: 'Configuration',
      icon: <ConfigureIcon />,
      'data-testid': 'ConfigureDashboardButton',
    },
    {
      id: OVERVIEW_PAGE,
      title: 'Overview',
      tooltip: 'Overview',
      icon: <ServicesIcon />,
      'data-testid': 'OverviewButton',
    },
    {
      id: CONTRACTS_PAGE,
      title: 'Contracts',
      tooltip: 'Contracts',
      icon: <ApiIcon />,
      'data-testid': 'ContractsButton',
    },
    {
      id: API_CHANGES_PAGE,
      title: 'API Changes',
      tooltip: !previousVersion ? 'No API changes since there is no previous version' : 'API Changes',
      disabled: !previousVersion || disableTab,
      icon: <ComparisonIcon />,
      'data-testid': 'ApiChangesButton',
    },
    {
      id: DEPRECATED_PAGE,
      title: 'Deprecated',
      tooltip: 'Deprecated',
      disabled: deprecatedTabDisabled || disableTab,
      icon: <DefaultWarningIcon />,
      'data-testid': 'DeprecatedButton',
    },
    {
      id: DOCUMENTS_PAGE,
      title: 'Documents',
      tooltip: 'Documents',
      icon: <FileIcon />,
      'data-testid': 'DocumentsButton',
    },
  ]

  if (tabMenuOptions.linterEnabled) {
    let index = -1
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].id === DEPRECATED_PAGE) {
        index = i
        break
      }
    }
    if (index !== -1) {
      menuItems.splice(index + 1, 0, {
        id: API_QUALITY_PAGE,
        title: 'API Quality',
        disabled: apiQualityTabDisabled,
        tooltip: tabMenuOptions.tooltip ?? 'API Quality',
        icon: <CertifiedFileIcon />,
        'data-testid': 'ApiQualityButton',
      })
    }
  }

  return menuItems
}

const getAvailableSidebarServiceMenuItems = (
  showSettings: boolean,
): SidebarMenu[] => {
  const sidebarServiceMenu: SidebarMenu[] = []

  if (showSettings) {
    sidebarServiceMenu.splice(0, 0, {
      id: PACKAGE_SETTINGS_PAGE,
      title: 'Settings',
      tooltip: 'Package Settings',
      icon: <SettingIcon color="#626D82" />,
      'data-testid': 'SettingsButton',
    })
  }

  return sidebarServiceMenu
}

const API_TYPE_DISABLE_TAB_MAP: Record<ApiType, (productionMode: boolean) => boolean> = {
  [API_TYPE_REST]: () => false,
  [API_TYPE_GRAPHQL]: (productionMode) => productionMode,
  [API_TYPE_ASYNCAPI]: () => false,
}
