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

import type { User, UserDto } from '@netcracker/qubership-apihub-ui-shared/types/user'
import type { Key } from './keys'

export type ProjectFileHistory = ReadonlyArray<ProjectFileChangeHistory>

export type ProjectFileChangeHistory = Readonly<{
  key: Key
  modifiedBy: User
  modifiedAt: string
  comment: string
  version?: string
  publishedAt?: string
  commitId?: string
}>

export type ProjectFileHistoryDto = Readonly<{
  changes: ReadonlyArray<ProjectFileChangeHistoryDto>
}>

export type ProjectFileChangeHistoryDto = Readonly<{
  commitId: Key
  comment: string
  modifiedBy: UserDto
  modifiedAt: string
  version?: string
  publishedAt?: string
}>
