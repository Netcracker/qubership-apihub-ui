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

import type { FC } from 'react'
import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { ChangelogView } from './ChangelogView'
import { useApiKindSearchFilter } from '../useApiKindSearchFilters'
import { useTagSearchFilter } from '../useTagSearchFilter'
import { useOperationGroupSearchFilter } from '../useOperationGroupSearchFilter'
import { DEFAULT_CONTRACT_TYPE, type ContractType } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import { useApiAudienceSearchFilter } from '../useApiAudienceSearchFilters'

export type ApiChangesTabProps = {
  searchValue: string
}

export const ApiChangesTab: FC<ApiChangesTabProps> = memo<ApiChangesTabProps>(({ searchValue }) => {
  const { packageId, versionId, apiType } = useParams<{
    packageId: string
    versionId: string
    apiType?: ContractType
  }>()
  const contractType = apiType ?? DEFAULT_CONTRACT_TYPE
  const [apiKind] = useApiKindSearchFilter()
  const [apiAudienceFilter] = useApiAudienceSearchFilter()
  const [tag] = useTagSearchFilter()
  const [operationGroup] = useOperationGroupSearchFilter()

  return (
    <ChangelogView
      packageKey={packageId!}
      versionKey={versionId!}
      tag={tag}
      searchValue={searchValue}
      contractType={contractType}
      apiKind={apiKind}
      apiAudience={apiAudienceFilter}
      group={operationGroup}
    />
  )
})
