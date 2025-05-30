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
import {
  CONTENT_PLACEHOLDER_AREA,
  NO_PERMISSION,
  Placeholder,
} from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { ToolbarTitle } from '@netcracker/qubership-apihub-ui-shared/components/ToolbarTitle'
import { READ_PERMISSION } from '@netcracker/qubership-apihub-ui-shared/entities/package-permissions'
import { isBoolean } from '@netcracker/qubership-apihub-ui-shared/utils/types'
import type { FC } from 'react'
import React, { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
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

export const WorkspacePage: FC = memo(() => {
  const { workspaceKey = '' } = useParams()

  const [workspace, isLoadingWorkspace] = usePackage({ packageKey: workspaceKey, hideError: true })

  const [favorPackage] = useFavorPackage(workspaceKey, workspaceKey)
  const [disfavorPackage] = useDisfavorPackage(workspaceKey, workspaceKey)
  const isFavorite = workspace?.isFavorite

  const hasReedPermissionWorkspace = workspace?.permissions?.includes(READ_PERMISSION)

  const { textFilter, types } = useActivityHistoryFiltersContext()
  const setActivityHistoryFilters = useSetActivityHistoryFiltersContext()

  const useActivity = (enabled: boolean): ActivityHistoryQueryResult => {
    return usePackageActivityHistory({
      packageKey: workspaceKey,
      includeRefs: true,
      types: types,
      textFilter: textFilter,
      enabled: enabled,
    })
  }

  const title = useMemo(
    () => (
      <Box display="flex" gap={1}>
        <IconButton
          sx={{ padding: 0 }}
          onClick={() => {
            !isFavorite ? favorPackage(workspaceKey) : disfavorPackage(workspaceKey)
          }}
          data-testid="FavoriteButton"
        >
          {isBoolean(isFavorite) && <FavoriteIconButton isFavorite={isFavorite} />}
        </IconButton>
        <ToolbarTitle value={workspace?.name} />
      </Box>
    ),
    [disfavorPackage, favorPackage, isFavorite, workspace?.name, workspaceKey],
  )

  if (!hasReedPermissionWorkspace && !isLoadingWorkspace) {
    return (
      <MainPageCard
        title=""
        hideSearchBar
        hideViewSelector
        content={
          <Placeholder
            invisible={false}
            area={CONTENT_PLACEHOLDER_AREA}
            message={NO_PERMISSION}
          />
        }
      />
    )
  }

  return (
    <Box display="flex" width="100%">
      <MainPageCard
        rootPackageKey={workspaceKey}
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
