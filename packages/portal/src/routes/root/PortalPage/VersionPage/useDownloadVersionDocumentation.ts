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
import type { Key } from '@apihub/entities/keys'
import fileDownload from 'js-file-download'
import { generatePath } from 'react-router-dom'
import { portalRequestBlob } from '@apihub/utils/requests'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { getPackageRedirectDetails } from '@netcracker/qubership-apihub-ui-shared/utils/redirects'

export function useDownloadVersionDocumentation(): [DownloadVersionDocumentation, IsLoading] {
  const { mutate, isLoading } = useMutation<void, Error, Options>({
    mutationFn: ({ packageKey, version }) => downloadVersionDocumentation(packageKey, version),
  })

  return [mutate, isLoading]
}

async function downloadVersionDocumentation(
  packageKey: Key,
  versionKey: Key,
): Promise<void> {
  const packageId = encodeURIComponent(packageKey)
  const versionId = encodeURIComponent(versionKey)

  const pathPattern = '/packages/:packageId/versions/:versionId/doc'
  const response = await portalRequestBlob(
    generatePath(pathPattern, { packageId, versionId }),
    {
      method: 'get',
    }, {
      customRedirectHandler: (response) => getPackageRedirectDetails(response, pathPattern),
    },
  )

  const getFilename = (): string => response.headers.get('content-disposition')!.split('filename=')[1].split(';')[0]
  fileDownload(await response.blob(), getFilename())
}

type DownloadVersionDocumentation = (options: Options) => void

type Options = {
  packageKey: Key
  version: Key
}
