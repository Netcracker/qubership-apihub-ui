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

import { useMemo } from 'react'
import type { Key } from '@apihub/entities/keys'
import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import { VERSION_SEARCH_PARAM } from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import { useSetSearchParams } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSetSearchParams'

export function useVersionSearchParam(): [Key | undefined, SetVersionSearchParam] {
  const param = useSearchParam<Key>(VERSION_SEARCH_PARAM)
  const setSearchParams = useSetSearchParams()

  return useMemo(
    () => [param, value => setSearchParams({ [VERSION_SEARCH_PARAM]: value ?? '' }, { replace: true })],
    [param, setSearchParams],
  )
}

type SetVersionSearchParam = (value: Key | undefined) => void
