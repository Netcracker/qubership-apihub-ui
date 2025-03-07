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

import { API_AUDIENCE_COLUMN_ID, API_KIND_COLUMN_ID } from '@netcracker/qubership-apihub-ui-shared/entities/table-columns'

export const CUSTOM_METADATA_COLUMN_ID = 'custom-metadata'
export const STATUS_COLUMN_ID = 'status'
export const COLUMNS_SIZES_MAP: Record<string, number> = {
  [API_AUDIENCE_COLUMN_ID]: 100,
  [API_KIND_COLUMN_ID]: 100,
}
