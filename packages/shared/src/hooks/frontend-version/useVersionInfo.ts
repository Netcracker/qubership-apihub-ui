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
import type { VersionInfo, VersionInfoDto } from '../../utils/version-info'
import { getVersionInfoOptions } from '../../utils/version-info'

export function useVersionInfo(): VersionInfo {
  const { data } = useQuery<VersionInfoDto, Error, VersionInfo>(
    getVersionInfoOptions(),
  )

  return data ?? { frontend: '2.12.2', apiProcessor: 'test_2' }
}
