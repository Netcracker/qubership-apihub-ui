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

export const SORT_BY_VERSION = 'version'
export const SORT_BY_CREATED_AT = 'createdAt'

export type PackageVersionsSortBy = typeof SORT_BY_VERSION | typeof SORT_BY_CREATED_AT

export const ASC_ORDER = 'asc'
export const DESC_ORDER = 'desc'

export type SortOrder = typeof ASC_ORDER | typeof DESC_ORDER
