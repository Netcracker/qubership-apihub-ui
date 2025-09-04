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

import {
  fetchDeprecatedItems,
  fetchOperations,
  getPackageVersionContent,
  getVersionReferences,
  toVersionOperation,
} from './packages-builder'
import type {
  VersionDeprecatedResolver,
  VersionOperationsResolver,
  VersionReferencesResolver,
  VersionResolver,
} from '@netcracker/qubership-apihub-api-processor'

export async function packageVersionResolver(): Promise<VersionResolver> {
  //should update token
  return async (packageId, version, includeOperations = false) => {
    const versionConfig = await getPackageVersionContent(packageId, version, includeOperations)
    if (!versionConfig) {
      return null
    }

    return {
      packageId: packageId,
      ...versionConfig,
    }
  }
}

export async function versionReferencesResolver(): Promise<VersionReferencesResolver> {
  //should update token
  return async (version, packageId) => {
    const references = await getVersionReferences(packageId, version)

    if (!references) {
      return null
    }

    return references
  }
}

export async function versionOperationsResolver(): Promise<VersionOperationsResolver> {
  //should update token
  return async (apiType, version, packageId, operationsIds, includeData) => {
    const EMPTY_OPERATIONS = { operations: [] }
    const limit = includeData ? 100 : 1000
    const result = []
    let page = 0
    let operationsCount = 0

    try {
      while (page === 0 || operationsCount === limit) {
        const { operations } = await fetchOperations(
          apiType,
          packageId,
          version,
          operationsIds,
          includeData,
          page,
          limit,
        ) ?? EMPTY_OPERATIONS
        page += 1
        result.push(...operations)
        operationsCount = operations.length
      }
      return { operations: result.map(toVersionOperation) }
    } catch (error) {
      console.error(error)
      return EMPTY_OPERATIONS
    }
  }
}

export async function versionDeprecatedResolver(): Promise<VersionDeprecatedResolver> {
  //should update token
  return async (apiType, version, packageId, operationsIds) => {
    return await fetchDeprecatedItems(apiType, packageId, version, operationsIds)
  }
}
