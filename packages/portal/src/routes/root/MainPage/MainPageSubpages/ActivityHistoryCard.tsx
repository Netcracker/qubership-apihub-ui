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
import type { ActivityType } from '@apihub/entities/activity-enums'
import { CollapsedPanel } from '@netcracker/qubership-apihub-ui-shared/components/CollapsedPanel'
import { ActivityHistoryPanel } from '@apihub/components/ActivityList/ActivityHistoryPanel'
import type { ActivityHistoryQueryResult } from '@apihub/routes/root/useActivityHistory'
import { usePortalPageSettingsContext } from '@apihub/routes/PortalPageSettingsProvider'

export type ActivityHistoryCardProps = {
  useActivity: (enabled: boolean) => ActivityHistoryQueryResult
  textFilter?: string
  types?: ReadonlyArray<ActivityType>
  onChangeFilters?: (filters: {
    textFilter?: string
    types?: ReadonlyArray<ActivityType>
  }) => void
  placeholderText?: string
}

// High Order Component //
export const ActivityHistoryCard: FC<ActivityHistoryCardProps> = memo<ActivityHistoryCardProps>((props) => {
  const { useActivity } = props
  const { expandActivityHistoryPanel, toggleExpandActivityHistoryPanel } = usePortalPageSettingsContext()

  const { activities, isLoading } = useActivity(expandActivityHistoryPanel)

  return (
    <>
      {
        expandActivityHistoryPanel
          ? <ActivityHistoryPanel
            onCollapse={toggleExpandActivityHistoryPanel}
            activities={activities}
            isLoading={isLoading}
            {...props}
          />
          : <CollapsedPanel
            onExpand={toggleExpandActivityHistoryPanel}
          />
      }
    </>
  )
})
