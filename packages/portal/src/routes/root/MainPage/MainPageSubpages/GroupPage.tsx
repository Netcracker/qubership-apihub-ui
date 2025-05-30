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

import { MainPageCard } from '@apihub/routes/root/MainPage/MainPageCard'
import { Box, IconButton } from '@mui/material'
import { ToolbarTitle } from '@netcracker/qubership-apihub-ui-shared/components/ToolbarTitle'
import { isBoolean } from '@netcracker/qubership-apihub-ui-shared/utils/types'
import type { FC } from 'react'
import React, { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { PackageBreadcrumbs } from '../../PackageBreadcrumbs'
import type { ActivityHistoryQueryResult } from '../../useActivityHistory'
import { usePackageActivityHistory } from '../../useActivityHistory'
import { usePackage } from '../../usePackage'
import {
  useActivityHistoryFiltersContext,
  useSetActivityHistoryFiltersContext,
} from '../ActivityHistoryFiltersProvider'
import { FavoriteIconButton } from '../FavoriteIconButton'
import { useDisfavorPackage } from '../useDisfavorPackage'
import { useFavorPackage } from '../useFavorPackage'
import { ActivityHistoryCard } from './ActivityHistoryCard'

export const GroupPage: FC = memo(() => {
  const { groupId: groupKey = '' } = useParams()

  const [groupPackage] = usePackage({ packageKey: groupKey, showParents: true })

  const [favorPackage] = useFavorPackage(groupKey)
  const [disfavorPackage] = useDisfavorPackage(groupKey)
  const isFavorite = groupPackage?.isFavorite

  const { textFilter, types } = useActivityHistoryFiltersContext()
  const setActivityHistoryFilters = useSetActivityHistoryFiltersContext()

  const useActivity = (enabled: boolean): ActivityHistoryQueryResult => {
    return usePackageActivityHistory({
      packageKey: groupKey,
      includeRefs: true,
      types: types,
      textFilter: textFilter,
      enabled: enabled,
    })
  }

  const title = useMemo(
    () => (
      <Box>
        <PackageBreadcrumbs packageObject={groupPackage} />
        <Box display="flex" gap={1}>
          <IconButton
            sx={{ padding: 0 }}
            onClick={() => {
              !isFavorite ? favorPackage(groupKey) : disfavorPackage(groupKey)
            }}
            data-testid="FavoriteButton"
          >
            {isBoolean(isFavorite) && <FavoriteIconButton isFavorite={isFavorite} />}
          </IconButton>
          <ToolbarTitle value={groupPackage?.name} />
        </Box>
      </Box>
    ),
    [disfavorPackage, favorPackage, groupKey, groupPackage, isFavorite],
  )

  return (
    <Box display="flex" width="100%">
      <MainPageCard
        rootPackageKey={groupKey}
        title={title}
      />
      <ActivityHistoryCard
        useActivity={useActivity}
        types={types}
        textFilter={textFilter}
        onChangeFilters={setActivityHistoryFilters}
      />
    </Box>
  )
})
