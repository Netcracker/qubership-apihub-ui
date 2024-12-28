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

import { usePackageVersionContent } from '../../usePackageVersionContent'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'

export function usePackageVersionApiTypes(packageKey: string, versionKey: string): {
  apiTypes: ApiType[]
  isLoading: IsLoading
} {
  const { versionContent, isLoading } = usePackageVersionContent(
    { packageKey: packageKey, versionKey: versionKey, includeSummary: true })

  return {
    apiTypes: versionContent?.operationTypes
      ? Object.keys(versionContent.operationTypes!) as ApiType[]
      : [],
    isLoading: isLoading,
  }
}