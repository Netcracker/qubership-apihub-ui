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
    authConfig: {
      // TODO 18.04.25 // Get rid of mocks
      identityProviders: [
        {
          id: '58ea1d9b-5a0e-4bc7-bd18-651445aba382',
          type: 'internal',
          displayName: 'Internal',
          imageSvg: '',
          url: '/api/v3/auth/local',
        },
        {
          id: 'ac24e662-1952-4a2e-8405-bfa7b02a0ded',
          type: 'external',
          displayName: 'Google',
          imageSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>',
          url: '/login/sso',
        },
        {
          id: 'ac24e662-1952-4a2e-8405-bfa7b02a0ded',
          type: 'external',
          displayName: 'GitHub',
          imageSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" version="1.1" data-view-component="true" class="octicon octicon-mark-github"><path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path></svg>',
          url: '/login/sso',
        },
      ],
      defaultProviderId: '58ea1d9b-5a0e-4bc7-bd18-651445aba382',
    },
  }
}
