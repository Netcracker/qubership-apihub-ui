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
import type { OperationData } from '../../entities/operations'
import { stringifyOperation } from '../../utils/operations'

export function useOperationsPairAsStrings(left?: OperationData | null, right?: OperationData | null): [string, string] {
  return useMemo(
    () => [stringifyOperation(left), stringifyOperation(right)],
    [left, right],
  )
}