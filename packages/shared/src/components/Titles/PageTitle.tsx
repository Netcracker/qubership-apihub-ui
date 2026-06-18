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

import type { FC, ReactNode } from 'react'
import * as React from 'react'
import { memo } from 'react'
import { Box, Typography } from '@mui/material'

import { ContractTypeSelector } from '../ContractTypeSelector'
import type { ContractType } from '../../entities/contract-types'

export type PageTitleProps = {
  title: string
  titleComponent?: ReactNode
  additionalSelectors?: ReactNode
  contractType?: ContractType
  allowedContractTypes?: ReadonlyArray<ContractType>
  withContractTypeSelector?: boolean
  onContractTypeChange?: (contractType: ContractType) => void
}

// First Order Component //
export const PageTitle: FC<PageTitleProps> = memo<PageTitleProps>(({
  title,
  titleComponent,
  additionalSelectors,
  contractType,
  allowedContractTypes,
  withContractTypeSelector = false,
  onContractTypeChange,
}) => {
  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      flexGrow={1}
      gap={3}
      mr={3}
      height="32px"
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body1" fontSize={15} sx={{ fontWeight: 600 }}>{title}</Typography>
        {titleComponent && <Box fontSize={15} fontWeight={600}>{titleComponent}</Box>}
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        {withContractTypeSelector && contractType && allowedContractTypes && (
          <ContractTypeSelector
            contractType={contractType}
            allowedContractTypes={allowedContractTypes}
            onChange={onContractTypeChange}
          />
        )}
        {additionalSelectors}
      </Box>
    </Box>
  )
})

PageTitle.displayName = 'PageTitle'
