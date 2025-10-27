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

import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { Key } from '@apihub/entities/keys'
import type { IsLoading, IsSuccess } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { getPackageRedirectDetails } from '@netcracker/qubership-apihub-ui-shared/utils/redirects'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'

type PublicationAiEnhancedVersionMutationState = {
  mutationFn: PublishAiEnhancedPackageVersionMutationFn
  publicationId: Key | undefined
  isLoading: IsLoading
  isSuccess: IsSuccess
}


type PublishAiEnhancedPackageVersionRequest = {
  packageKey: Key
  versionKey: Key
  targetPackageParameters: TargetPackageParameters
}

type TargetPackageParameters = {
  packageKey: string
  version: string
  status: string
  previousVersion: string
  labels: string[]
}

type PublishAiEnhancedPackageVersionMutationFn = (values: PublishAiEnhancedPackageVersionRequest) => void

type PublishAiEnhancedPackageVersionResponse = {
  publishId: Key
}

export function usePublishAiEnhancedPackageVersion(): PublicationAiEnhancedVersionMutationState {
  const {
    mutate,
    data,
    isLoading,
    isSuccess,
  } = useMutation<
    PublishAiEnhancedPackageVersionResponse,
    Error,
    PublishAiEnhancedPackageVersionRequest
  >({
    mutationFn: request => publishAiEnhancedPackageVersion(request),
  })

  return {
    mutationFn: mutate,
    publicationId: data?.publishId,
    isLoading: isLoading,
    isSuccess: isSuccess,
  }
}

async function publishAiEnhancedPackageVersion(
  request: PublishAiEnhancedPackageVersionRequest,
): Promise<PublishAiEnhancedPackageVersionResponse> {
  const {
    packageKey,
    versionKey,
    targetPackageParameters,
  } = request

  const packageId = encodeURIComponent(packageKey)
  const versionId = encodeURIComponent(versionKey)
  const pathPattern = '/packages/:packageId/versions/:versionId/enhanced/publish'
  const {
    packageKey: targetPackageKey,
    version: targetVersion,
    status: targetStatus,
    previousVersion: targetPreviousVersion,
    labels: targetVersionLabels,
  } = targetPackageParameters
  return await requestJson<PublishAiEnhancedPackageVersionResponse>(
    generatePath(pathPattern, { packageId, versionId }),
    {
      method: 'POST',
      body: JSON.stringify({
        packageId: targetPackageKey,
        version: targetVersion,
        previousVersion: targetPreviousVersion,
        status: targetStatus,
        labels: targetVersionLabels,
      }),
    },
    {
      basePath: API_LINTER_API_V1,
      customRedirectHandler: (response) => getPackageRedirectDetails(response, pathPattern),
    },
  )
}
