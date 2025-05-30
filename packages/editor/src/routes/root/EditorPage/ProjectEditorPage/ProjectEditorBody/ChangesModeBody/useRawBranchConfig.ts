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

import { editorRequestText } from '@apihub/utils/requests'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { optionalSearchParams } from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import { useParams } from 'react-router-dom'
import { useBranchSearchParam } from '../../../../useBranchSearchParam'

const RAW_BRANCH_CONFIG_QUERY_KEY = 'raw-branch-config-query-key'

export function useRawBranchConfig(
  original: boolean,
  enabled: boolean = true,
): [string, IsLoading] {
  const { projectId } = useParams()
  const [selectedBranch] = useBranchSearchParam()

  const { data, isLoading } = useQuery<string, Error, string>({
    queryKey: [RAW_BRANCH_CONFIG_QUERY_KEY, projectId, selectedBranch, original],
    queryFn: () => getRawBranchConfig(projectId!, selectedBranch!, original),
    enabled: enabled && !!projectId && !!selectedBranch,
  })

  return [
    data ?? '',
    isLoading,
  ]
}

async function getRawBranchConfig(
  projectKey: Key,
  branchName: string,
  original: boolean,
): Promise<string> {
  const projectId = encodeURIComponent(projectKey)
  const branch = encodeURIComponent(branchName)

  const searchParams = optionalSearchParams({
    original: { value: original },
  })
  return await editorRequestText(`/projects/${projectId}/branches/${branch}/config?${searchParams}`, {
    method: 'GET',
  })
}
