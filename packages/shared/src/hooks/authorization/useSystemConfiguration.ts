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

import { useQuery } from '@tanstack/react-query'
import type { IsLoading } from '../../utils/aliases'
import { requestJson } from '../../utils/requests'
import type { SystemConfiguration, SystemConfigurationDto } from '../../types/system-configuration'

const SYSTEM_CONGIGURATION_QUERY_KEY = 'system-configuration-query-key'

export function useSystemConfiguration(): [SystemConfiguration | null, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<SystemConfigurationDto, Error, SystemConfiguration>({
    queryKey: [SYSTEM_CONGIGURATION_QUERY_KEY],
    queryFn: () => systemConfiguration(),
    enabled: true,
    select: toSystemConfiguration,
  })

  return [data ?? null, isLoading, error]
}

export async function systemConfiguration(): Promise<SystemConfigurationDto> {
  return await requestJson<SystemConfigurationDto>('/api/v1/system/configuration', {
    method: 'GET',
  })
}

export function toSystemConfiguration(value: SystemConfigurationDto): SystemConfiguration {
  return {
    ssoIntegrationEnabled: value.ssoIntegrationEnabled,
    autoRedirect: value.autoRedirect,
    defaultWorkspaceId: value.defaultWorkspaceId,
    // TODO 31.03.25 // Auth kinds will be available here
    authKinds: [],
  }
}
