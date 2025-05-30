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

import { PageLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayout'
import { useActiveTabs } from '@netcracker/qubership-apihub-ui-shared/hooks/pathparams/useActiveTabs'
import type { FC, ReactNode } from 'react'
import { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import type { OverviewPageRoute } from '../../../../../routes'
import {
  ACTIVITY_HISTORY_PAGE,
  OPERATION_GROUPS_PAGE,
  PACKAGES_PAGE,
  REVISION_HISTORY_PAGE,
  SUMMARY_PAGE,
} from '../../../../../routes'
import { useNavigation } from '../../../../NavigationProvider'
import { ActivityHistoryByPackageCard } from './ActivityHistoryByPackageCard'
import { IncludedPackagesCard } from './IncludedPackagesCard'
import { OperationGroupsCard } from './OperationGroupsCard/OperationGroupsCard'
import { OverviewSidebar } from './OverviewSidebar'
import { RevisionsHistoryCard } from './RevisionsHistoryCard'
import { SummaryCard } from './SummaryCard'

export const VersionOverviewSubPage: FC = memo(() => {
  const [, sidebarItem] = useActiveTabs()
  const { packageId, versionId } = useParams()
  const { navigateToOverview } = useNavigation()

  useEffect(
    () => {
      !sidebarItem && navigateToOverview({ packageKey: packageId!, versionKey: versionId! })
    },
    [navigateToOverview, sidebarItem, packageId, versionId],
  )

  return (
    <PageLayout
      navigation={<OverviewSidebar />}
      body={OVERVIEW_SUB_PAGE_MAP[sidebarItem as OverviewPageRoute]}
      nestedPage
      testId="OverviewTab"
    />
  )
})

const OVERVIEW_SUB_PAGE_MAP: Record<OverviewPageRoute, ReactNode> = {
  [SUMMARY_PAGE]: <SummaryCard />,
  [ACTIVITY_HISTORY_PAGE]: <ActivityHistoryByPackageCard />,
  [PACKAGES_PAGE]: <IncludedPackagesCard />,
  [REVISION_HISTORY_PAGE]: <RevisionsHistoryCard />,
  [OPERATION_GROUPS_PAGE]: <OperationGroupsCard />,
}
