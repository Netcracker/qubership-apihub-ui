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

import { useCompareBreadcrumbs } from '@apihub/routes/root/PortalPage/VersionPage/useCompareBreadcrumbs'
import { useComparisonObjects } from '@apihub/routes/root/PortalPage/VersionPage/useComparisonObjects'
import { PageLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayout'
import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import { isEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'
import { GROUP_SEARCH_PARAM } from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import type { FC } from 'react'
import { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useCompareGroups } from '../../useCompareGroups'
import { ChangesLoadingStatusProvider } from '../ChangesLoadingStatusProvider'
import { BreadcrumbsDataContext } from '../ComparedPackagesBreadcrumbsProvider'
import { CompareRestGroupsDialog } from '../CompareRestGroupsDialog'
import { ComparisonToolbar } from '../ComparisonToolbar'
import { COMPARE_PACKAGES_MODE } from '../OperationContent/OperationView/OperationDisplayMode'
import { useComparisonParams } from '../useComparisonParams'
import { VersionsComparisonGlobalParamsContext } from '../VersionsComparisonGlobalParams'
import { GroupCompareContent } from './GroupCompareContent'
import { GroupCompareSidebar } from './GroupCompareSidebar'

export const GroupComparePage: FC = memo(() => {
  const { group } = useParams()
  const groupsComparisonParams = useComparisonParams()
  const { originPackageKey, originVersionKey, changedPackageKey, changedVersionKey } = groupsComparisonParams
  const previousGroup = useSearchParam(GROUP_SEARCH_PARAM)

  const [compareGroups] = useCompareGroups({
    changedPackageKey: changedPackageKey,
    changedVersionKey: changedVersionKey,
    originPackageKey: originPackageKey,
    originVersionKey: originVersionKey,
    currentGroup: group,
    previousGroup: previousGroup,
  })

  const tags = useMemo(() => (isEmpty(compareGroups.operationTypes[0]?.tags)
    ? compareGroups.operationTypes[1]?.tags ?? []
    : compareGroups.operationTypes[0]?.tags ?? []), [compareGroups.operationTypes])
  const groupChanges = useMemo(() => compareGroups.data ?? [], [compareGroups.data])

  const [originComparisonObject, changedComparisonObject] = useComparisonObjects({
    ...groupsComparisonParams,
    currentGroup: group,
    previousGroup: previousGroup,
  })
  const mergedBreadcrumbsData = useCompareBreadcrumbs(originComparisonObject, changedComparisonObject)

  return (
    <ChangesLoadingStatusProvider>
      <BreadcrumbsDataContext.Provider value={mergedBreadcrumbsData}>
        <VersionsComparisonGlobalParamsContext.Provider value={groupsComparisonParams}>
          <PageLayout
            toolbar={<ComparisonToolbar compareToolbarMode={COMPARE_PACKAGES_MODE} />}
            body={
              <GroupCompareContent
                groupChanges={groupChanges}
                breadcrumbsData={mergedBreadcrumbsData}
              />
            }
            navigation={<GroupCompareSidebar tags={tags} />}
          />
        </VersionsComparisonGlobalParamsContext.Provider>
      </BreadcrumbsDataContext.Provider>
      <CompareRestGroupsDialog />
    </ChangesLoadingStatusProvider>
  )
})
