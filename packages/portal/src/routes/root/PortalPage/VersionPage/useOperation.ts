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

import { portalRequestJson } from '@apihub/utils/requests'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { OperationData, OperationDto, PackagesRefs } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import { DEFAULT_API_TYPE, toOperation } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import type { IsInitialLoading, IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { getPackageRedirectDetails } from '@netcracker/qubership-apihub-ui-shared/utils/redirects'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { generatePath } from 'react-router-dom'
import { useVersionWithRevision } from '../../useVersionWithRevision'

const OPERATION_QUERY_KEY = 'operation-query-key'

type OperationQueryState = {
  data: OperationData | undefined
  isLoading: IsLoading
  isInitialLoading: IsInitialLoading
}

export type OperationOptions = Partial<{
  packageKey: string
  versionKey: string
  operationKey: string
  apiType: ApiType
  enabled: boolean
  includeData: boolean
}>

export function useOperation(options?: OperationOptions): OperationQueryState {
  const packageKey = options?.packageKey
  const versionKey = options?.versionKey
  const operationKey = options?.operationKey
  const apiType = options?.apiType ?? DEFAULT_API_TYPE
  const enabled = options?.enabled ?? true
  const includeData = options?.includeData

  const packageRef = `${packageKey}@${versionKey}`

  // Memoize packagesRefs to prevent creating new objects on every render
  const packagesRefs: PackagesRefs = useMemo(() => ({
    [packageRef]: {
      refId: packageKey ?? '',
      version: versionKey ?? '',
    },
  }), [packageRef, packageKey, versionKey])

  const { fullVersion } = useVersionWithRevision(versionKey, packageKey)
  const { data, isLoading, isInitialLoading } = useQuery<OperationDto, Error, OperationData | undefined>({
    queryKey: [OPERATION_QUERY_KEY, operationKey, packageKey, fullVersion, apiType, includeData],
    queryFn: () => getOperation(packageKey!, fullVersion!, operationKey!, apiType, includeData),
    enabled: !!operationKey && !!fullVersion && !!packageKey && enabled,
    select: (operationDto) => toOperation(operationDto, packagesRefs, includeData), // TODO 09.12.25 // Remove this WA when BE is ready
  })

  return useMemo(() => ({
    data: data,
    isLoading: isLoading,
    isInitialLoading: isInitialLoading,
  }), [data, isInitialLoading, isLoading])
}

async function getOperation(
  packageKey: Key,
  versionKey: Key,
  operationKey: Key,
  apiType: ApiType,
  includeData: boolean | undefined,
): Promise<OperationDto> {
  const packageId = encodeURIComponent(packageKey)
  const versionId = encodeURIComponent(versionKey)
  const operationId = encodeURIComponent(operationKey)

  const queryParams = new URLSearchParams({
    ...includeData !== undefined ? { includeData: `${includeData}` } : {},
  })

  const endpointPattern = '/packages/:packageId/versions/:versionId/:apiType/operations/:operationId'
  const endpoint = generatePath(endpointPattern, { packageId, versionId, apiType, operationId })
  return await portalRequestJson<OperationDto>(
    `${endpoint}?${queryParams}`,
    { method: 'get' },
    { customRedirectHandler: (response) => getPackageRedirectDetails(response, endpointPattern) },
  )
}
