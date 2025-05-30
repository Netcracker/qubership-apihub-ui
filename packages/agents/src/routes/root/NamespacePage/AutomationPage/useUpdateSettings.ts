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

import type { Emails, Schedules } from '@apihub/entities/settings'
import { updateSettings } from '@apihub/entities/settings'
import type { AutodiscoveryStatus } from '@apihub/entities/statuses'
import type { VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import type { IsError, IsLoading, IsSuccess } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { WORKSPACE_SEARCH_PARAM } from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import { useMutation } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useSetSettings } from './useSettings'

export function useUpdateSettings(): [UpdateSettings, IsLoading, IsSuccess, IsError] {
  const { agentId, namespaceKey } = useParams()
  const workspaceKey = useSearchParam(WORKSPACE_SEARCH_PARAM)
  const setSettings = useSetSettings()

  const { mutate, isLoading, isSuccess, isError } = useMutation<void, Error, UpdateSettingsOptions>({
    mutationFn: ({
      versionKey,
      previousVersionKey,
      autodiscoveryStatus,
      schedules,
      emailNotificationList,
      emailNotificationsEnabled,
    }) =>
      updateSettings(
        agentId!,
        namespaceKey!,
        workspaceKey!,
        versionKey,
        previousVersionKey,
        autodiscoveryStatus,
        schedules,
        emailNotificationsEnabled,
        emailNotificationList,
      ),
    onSuccess: (_, {
      versionKey,
      previousVersionKey,
      autodiscoveryStatus,
      schedules,
      emailNotificationList,
      emailNotificationsEnabled,
    }) =>
      setSettings({
        name: namespaceKey!,
        version: versionKey,
        previousVersion: previousVersionKey,
        autoDiscovery: autodiscoveryStatus,
        schedules: schedules,
        emailNotificationsEnabled: emailNotificationsEnabled,
        emailNotificationList: emailNotificationList,
      }),
  })

  return [
    mutate,
    isLoading,
    isSuccess,
    isError,
  ]
}

export type UpdateSettings = (options: UpdateSettingsOptions) => void

type UpdateSettingsOptions = {
  versionKey: VersionKey
  previousVersionKey: VersionKey
  autodiscoveryStatus: AutodiscoveryStatus
  schedules: Schedules
  emailNotificationsEnabled: boolean
  emailNotificationList: Emails
}
