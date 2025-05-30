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

import type { ActionType } from '@netcracker/qubership-apihub-api-diff'
import { DiffAction } from '@netcracker/qubership-apihub-api-diff'
import type { GraphApiSchema } from '@netcracker/qubership-apihub-graphapi'
import { printGraphApi as stringifyGraphQl } from '@netcracker/qubership-apihub-graphapi'
import type { Key } from '../entities/keys'
import type { OperationData } from '../entities/operations'
import { isRestOperation } from '../entities/operations'

export function stringifyOperation(operationData?: OperationData | null): string {
  if (!operationData) {
    return ''
  }

  return isRestOperation(operationData)
    ? JSON.stringify(operationData.data)
    : stringifyGraphQl((operationData.data ?? {}) as GraphApiSchema)
}

export function joinedJsonPath(data: JsonPath): string {
  return data.join('/')
}

export type JsonPath = PropertyKey[]

type OperationKeysPair = {
  previousOperationKey: Key | undefined
  currentOperationKey: Key | undefined
}

export function safeOperationKeysPair(
  operationKeysPair: OperationKeysPair,
  diffAction: ActionType | undefined,
): OperationKeysPair {
  if (diffAction === DiffAction.remove) {
    return {
      previousOperationKey: operationKeysPair.previousOperationKey ?? operationKeysPair.currentOperationKey!,
      currentOperationKey: undefined,
    }
  }

  if (diffAction === DiffAction.add) {
    return {
      previousOperationKey: undefined,
      currentOperationKey: operationKeysPair.currentOperationKey,
    }
  }

  return operationKeysPair
}
