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

import type { ProjectFile } from '@apihub/entities/project-files'
import type { FileSourceMap } from '@netcracker/qubership-apihub-api-processor'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { wrap } from 'comlink'
import type { PackageVersionBuilderWorker } from './package-version-builder-worker'
import Worker from './package-version-builder-worker?worker'

export type BuilderOptions = {
  packageKey: Key
  versionKey: Key
  authorization: string
  previousPackageKey: Key
  previousVersionKey: Key
  branchName?: string
  files?: ReadonlyArray<ProjectFile>
  sources?: FileSourceMap
}

export const PackageVersionBuilder = wrap<PackageVersionBuilderWorker>(new Worker())
