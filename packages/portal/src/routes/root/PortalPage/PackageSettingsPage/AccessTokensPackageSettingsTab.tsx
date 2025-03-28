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

import { useShowSuccessNotification } from '@apihub/routes/root/BasePage/Notification'
import { useUsers } from '@apihub/routes/root/useUsers'
import { Box } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { GenerateTokenForm } from '@netcracker/qubership-apihub-ui-shared/components/GenerateTokenForm'
import { TokensTable } from '@netcracker/qubership-apihub-ui-shared/components/TokensTable'
import { ACCESS_TOKEN_MANAGEMENT_PERMISSION } from '@netcracker/qubership-apihub-ui-shared/entities/package-permissions'
import { useUserInfo } from '@netcracker/qubership-apihub-ui-shared/hooks/authorization/useUserInfo'
import {
  useAvailablePackageRoles,
  useDeleteApiKey,
  useGenerateApiKey,
  useTokens,
} from '@netcracker/qubership-apihub-ui-shared/hooks/tokens/useTokens'
import type { GenerateApiKeyValue } from '@netcracker/qubership-apihub-ui-shared/types/tokens'
import type { FC } from 'react'
import { memo, useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { PackageSettingsTabProps } from './package-settings'

export const AccessTokensPackageSettingsTab: FC<PackageSettingsTabProps> = memo<PackageSettingsTabProps>(({ packageObject }) => {
  const hasTokenManagementPermission = useMemo(
    () => !!packageObject.permissions?.includes(ACCESS_TOKEN_MANAGEMENT_PERMISSION),
    [packageObject],
  )

  const { packageId: packageKey = '' } = useParams()
  const [userInfo] = useUserInfo()

  const [availableRoles, isLoadingRoles] = useAvailablePackageRoles(packageKey, userInfo?.key ?? '')

  const [tokensList, isTokensLoading] = useTokens(packageKey!)
  const [deleteAPIKey] = useDeleteApiKey()
  const [generatedApiKey, generateApiKey, isLoading] = useGenerateApiKey()

  const [userSearch, setUserSearch] = useState<string>('')
  const [usersData, isUsersDataLoading] = useUsers(userSearch)

  const handleGenerateToken = useCallback((value: GenerateApiKeyValue): void => {
    generateApiKey({ value, packageKey })
  }, [generateApiKey, packageKey])

  const handleSetUserSearch = useCallback((search: string) => {
    setUserSearch(search)
  }, [setUserSearch])

  const availableRolesForPackage = useMemo(
    () => availableRoles?.map(role => role.role) ?? []
    , [availableRoles])

  const showSuccessNotification = useShowSuccessNotification()

  // TODO: need for expireTime control in a future
  // const ref = useRef<DatePickerRef>()

  return (
    <BodyCard
      header="Access Tokens"
      body={
        <>
          <Box>
            <GenerateTokenForm
              roles={availableRolesForPackage}
              users={usersData?.users}
              defaultUser={userInfo}
              setUserSearch={handleSetUserSearch}
              generatedApiKey={generatedApiKey}
              disabled={!hasTokenManagementPermission}
              generateApiKey={handleGenerateToken}
              isLoading={isLoading || isLoadingRoles || isUsersDataLoading}
              showSuccessNotification={showSuccessNotification}
            />
          </Box>
          <TokensTable
            data={tokensList}
            disableDelete={!hasTokenManagementPermission}
            deleteApiKey={deleteAPIKey}
            isLoading={isTokensLoading}
          />
        </>
      }
    />
  )
})

// TODO: need for expireTime control in a future
// type DatePickerRef = {
//   openCalendar: () => void
// }
