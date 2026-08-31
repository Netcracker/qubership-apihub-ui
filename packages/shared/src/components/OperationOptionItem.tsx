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

import type { FC, HTMLAttributes } from 'react'
import * as React from 'react'
import { memo, useMemo } from 'react'
import type { Operation } from '../entities/operations'
import { isGraphQlOperation, isRestOperation } from '../entities/operations'
import type { TestableProps } from './Testable'
import { OptionItem } from './OptionItem'
import { OperationChip } from './Operations/OperationChip'

export type OperationOptionItemProps = {
  props: HTMLAttributes<HTMLLIElement>
  operation: Operation
} & TestableProps

export const OperationOptionItem: FC<OperationOptionItemProps> = memo<OperationOptionItemProps>(({
  props,
  operation,
  'data-testid': dataTestId,
}) => {
  const subtitle = useMemo(() => (
    isRestOperation(operation)
      ? operation.path
      : isGraphQlOperation(operation)
        ? operation.type
        : 'unknown' // Default, should not happen
  ), [operation])

  return (
    <OptionItem
      title={operation.title}
      subtitle={subtitle}
      chip={<OperationChip operation={operation}/>}
      data-testid={dataTestId}
      props={props}
    />
  )
})
