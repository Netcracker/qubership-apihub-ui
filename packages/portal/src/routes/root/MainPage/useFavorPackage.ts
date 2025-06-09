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

import { useMutation } from '@tanstack/react-query'
import { useShowErrorNotification, useShowSuccessNotification } from '../BasePage/Notification'
import { PACKAGES_QUERY_KEY, useRefetchPackages } from '../usePackages'
import { useInvalidatePackage } from '../usePackage'
import { generatePath } from 'react-router-dom'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading, IsSuccess } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { portalRequestVoid } from '@apihub/utils/requests'
import { getPackageRedirectDetails } from '@netcracker/qubership-apihub-ui-shared/utils/redirects'

type FavorPackage = (packageKey: Key) => void

export function useFavorPackage(packageKey?: Key, refererPageName?: string, isWorkspace: boolean = false): [FavorPackage, IsLoading, IsSuccess] {
  const showErrorNotification = useShowErrorNotification()
  const showNotification = useShowSuccessNotification()
  const invalidatePackage = useInvalidatePackage()
  const refetchPackages = useRefetchPackages({queryKey: [PACKAGES_QUERY_KEY]})

  const { mutate, isLoading, isSuccess } = useMutation<void, Error, Key>({
    mutationFn: packageKey => favorPackage(packageKey),
    onSuccess: () => {
      refetchPackages()
      packageKey && invalidatePackage(packageKey)
      isWorkspace && showNotification({ message: 'List of workspaces successfully updated' })
    },
    onError: (error) => {
      showErrorNotification({ message: error?.message })
    },
  })

  return [mutate, isLoading, isSuccess]
}

export async function favorPackage(
  packageKey: Key,
): Promise<void> {
  const packageId = encodeURIComponent(packageKey)

  const pathPattern = '/packages/:packageId/favor'
  return await portalRequestVoid(generatePath(pathPattern, { packageId }), {
    method: 'POST',
  }, {
    customRedirectHandler: (response) => getPackageRedirectDetails(response, pathPattern),
  })
}
