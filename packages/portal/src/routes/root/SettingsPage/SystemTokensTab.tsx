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
import { useUser } from '@netcracker/qubership-apihub-ui-shared/hooks/authorization/useUser'
import {
  useDeleteApiKey,
  useGenerateApiKey,
  useTokens,
} from '@netcracker/qubership-apihub-ui-shared/hooks/tokens/useTokens'
import { useRoles } from '@netcracker/qubership-apihub-ui-shared/hooks/user-roles/useRoles'
import type { GenerateApiKeyValue } from '@netcracker/qubership-apihub-ui-shared/types/tokens'
import type { FC } from 'react'
import { memo, useCallback, useMemo, useState } from 'react'

export const SystemTokensTab: FC = memo(() => {
  const [systemTokens, isSystemTokensLoading] = useTokens()
  const [deleteAPIKey, isDeleteLoading] = useDeleteApiKey()
  const [generatedApiKey, generateApiKey, isLoading] = useGenerateApiKey()
  const { data: roles, isLoading: isRolesLoading } = useRoles()

  const [user] = useUser()
  const [userSearch, setUserSearch] = useState<string>('')
  const [usersData, isUsersDataLoading] = useUsers({ searchValue: userSearch })

  const handleGenerateToken = useCallback((value: GenerateApiKeyValue): void => {
    generateApiKey({ value })
  }, [generateApiKey])

  const handleSetUserSearch = useCallback((search: string) => {
    setUserSearch(search)
  }, [setUserSearch])

  const availableRoles = useMemo(() => roles?.map(role => role.role) ?? [], [roles])

  const showSuccessNotification = useShowSuccessNotification()

  return (
    <BodyCard
      header="System Tokens"
      body={
        <>
          <Box>
            <GenerateTokenForm
              roles={availableRoles}
              defaultUser={user}
              users={usersData?.users}
              setUserSearch={handleSetUserSearch}
              generatedApiKey={generatedApiKey}
              generateApiKey={handleGenerateToken}
              isLoading={isLoading || isRolesLoading || isUsersDataLoading}
              showSuccessNotification={showSuccessNotification}
            />
          </Box>
          <TokensTable
            data={systemTokens}
            deleteApiKey={deleteAPIKey}
            isLoading={isSystemTokensLoading || isDeleteLoading}
          />
        </>
      }
    />)
})
