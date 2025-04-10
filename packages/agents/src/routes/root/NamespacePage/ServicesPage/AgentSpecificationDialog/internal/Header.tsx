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

import type { FC, PropsWithChildren } from 'react'
import { memo } from 'react'
import { Box } from '@mui/material'
import { Subtitle } from './Subtitle'

type HeaderProps = Partial<{
  agentId: string
  namespaceKey: string
  specKey?: string
}>

export const Header: FC<PropsWithChildren<HeaderProps>> = memo<PropsWithChildren<HeaderProps>>((props) => {
  const { agentId, namespaceKey, specKey, children } = props

  return (
    <Box display="inline-flex" gap="16px" alignItems="center" justifyContent="center">
      <Subtitle label="Cloud" value={agentId}/>
      <Subtitle label="Namespace" value={namespaceKey}/>
      <Subtitle label="Service" value={specKey}/>
      {children}
    </Box>
  )
})
