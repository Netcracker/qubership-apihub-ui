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

import type { FC } from 'react'
import { memo } from 'react'
import type { CustomChipProps } from '../CustomChip'
import { CustomChip } from '../CustomChip'
import { HttpMethodChip } from './HttpMethodChip'
import type { Operation } from '../../entities/operations'
import { isRestOperation } from '../../entities/operations'

export type OperationChipProps = {
  operation: Operation
} & Omit<CustomChipProps, 'value' | 'useCustomColor' | 'color'>

export const OperationChip: FC<OperationChipProps> = memo<OperationChipProps>(({
  operation,
  ...props
}) => {
  if (isRestOperation(operation)) {
    return <HttpMethodChip {...props} method={operation.method} />
  }

  return (
    <CustomChip
      {...props}
      value={(operation as { method?: string }).method ?? ''}
      useCustomColor={false}
    />
  )
})
