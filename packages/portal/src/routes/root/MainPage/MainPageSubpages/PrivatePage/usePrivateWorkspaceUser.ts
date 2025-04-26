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
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { portalRequestJson } from '@apihub/utils/requests'

export const SPACE_QUERY_KEY = 'space-query-key'

export function usePrivateWorkspace(): [Key, IsLoading] {
  const { data, isLoading } = useQuery<Key, Error, Key>({
    queryKey: [SPACE_QUERY_KEY],
    queryFn: () => getPrivateWorkspaceUser(),
  })

  return [data ?? '', isLoading]
}

export async function getPrivateWorkspaceUser(): Promise<Key> {
  const { packageId } = await portalRequestJson<PrivateWorkspaceId>(
    '/space',
    {
      method: 'get',
    },
    { customErrorHandler: onErrorHandler },
  )

  return packageId
}

async function onErrorHandler(): Promise<void> {
  return Promise.resolve()
}

type PrivateWorkspaceId = {
  packageId: Key
}
