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
import type {
  SystemInfo,
  SystemInfoDto} from '@netcracker/qubership-apihub-ui-shared/utils/system-info'
import {
  EMPTY_SYSTEM_INFO,
  getSystemInfoOptions,
} from '@netcracker/qubership-apihub-ui-shared/utils/system-info'

export function useSystemInfo(): SystemInfo {
  const { data } = useQuery<SystemInfoDto, Error, SystemInfo>(
    getSystemInfoOptions(),
  )

  return data ?? EMPTY_SYSTEM_INFO
}