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

import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { ServiceNames, ServiceNamesDto } from '@netcracker/qubership-apihub-ui-shared/entities/service-names'
import { getServiceNames, toServiceNames } from '@netcracker/qubership-apihub-ui-shared/entities/service-names'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery } from '@tanstack/react-query'

const SERVICE_NAMES_QUERY_KEY = 'service-names-query-key'

export function useServiceNames(agentKey: Key, namespaceName: string | undefined): [ServiceNames, IsLoading] {
  const { data, isLoading } = useQuery<ServiceNamesDto, Error, ServiceNames>({
    queryKey: [SERVICE_NAMES_QUERY_KEY, agentKey, namespaceName],
    queryFn: () => getServiceNames(agentKey!, namespaceName!),
    select: toServiceNames,
    enabled: !!agentKey && !!namespaceName,
  })

  return [
    data ?? [],
    isLoading,
  ]
}
