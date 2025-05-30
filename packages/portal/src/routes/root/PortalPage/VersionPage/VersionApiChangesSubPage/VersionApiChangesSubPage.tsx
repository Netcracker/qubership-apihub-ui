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
import { memo, useMemo, useState } from 'react'

import { usePortalPageSettingsContext } from '@apihub/routes/PortalPageSettingsProvider'
import { isApiTypeSelectorShown } from '@apihub/utils/operation-types'
import { Link } from '@mui/material'
import { CATEGORY_OPERATION } from '@netcracker/qubership-apihub-ui-shared/components/ChangesTooltip'
import { RichFiltersLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayouts/RichFiltersLayout'
import { PageTitle } from '@netcracker/qubership-apihub-ui-shared/components/Titles/PageTitle'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { CHANGE_SEVERITIES } from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import { DEFAULT_API_TYPE } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { useSeverityFiltersSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/change-severities/useSeverityFiltersSearchParam'
import { isEmptyTag } from '@netcracker/qubership-apihub-ui-shared/utils/tags'
import { getSplittedVersionKey } from '@netcracker/qubership-apihub-ui-shared/utils/versions'
import {
  usePreviousReleaseVersion,
} from '@netcracker/qubership-apihub-ui-shared/widgets/ChangesViewWidget/components/PreviousReleaseOptionsProvider'
import { NavLink, useParams } from 'react-router-dom'
import { getVersionPath } from '../../../../NavigationProvider'
import { usePackage } from '../../../usePackage'
import { usePackageSearchParam } from '../../../usePackageSearchParam'
import { useVersionSearchParam } from '../../../useVersionSearchParam'
import { useRefSearchParam } from '../../useRefSearchParam'
import { ChangesSummaryProvider } from '../ChangesSummaryProvider'
import { ComparisonChangeSeverityFilters } from '../ComparisonChangeSeverityFilters'
import { ExportChangesMenu } from '../ExportChangesMenu'
import { useApiAudienceSearchFilter } from '../useApiAudienceSearchFilters'
import { useApiKindSearchFilter } from '../useApiKindSearchFilters'
import { useCheckOperationFiltersApplied } from '../useCheckOperationFiltersApplied'
import { useOperationGroupSearchFilter } from '../useOperationGroupSearchFilter'
import { usePackageVersionApiTypes } from '../usePackageVersionApiTypes'
import { useSetPathParam } from '../useSetPathParam'
import { useTagSearchFilter } from '../useTagSearchFilter'
import { ApiChangesCard } from './ApiChangesCard'
import { ApiChangesNavigation } from './ApiChangesNavigation'

// High Order Component //
export const VersionApiChangesSubPage: FC = memo(() => {
  const { packageId, versionId, apiType } = useParams<{
    packageId: string
    versionId: string
    apiType: ApiType
  }>()
  const [apiKindFilter] = useApiKindSearchFilter()
  const [apiAudienceFilter] = useApiAudienceSearchFilter()
  const [selectedTag] = useTagSearchFilter()
  const [severityFilter] = useSeverityFiltersSearchParam()
  const [refKey] = useRefSearchParam()
  const [previousVersion] = useVersionSearchParam()
  const [previousVersionPackageKey] = usePackageSearchParam()
  const [operationGroup] = useOperationGroupSearchFilter()
  const setPathParam = useSetPathParam()

  const { apiTypes } = usePackageVersionApiTypes(packageId!, versionId!)
  const emptyTag = isEmptyTag(selectedTag)

  const previousReleaseVersion = usePreviousReleaseVersion()
  const { versionKey: previousReleaseVersionKey } = getSplittedVersionKey(previousReleaseVersion)

  const [searchValue, setSearchValue] = useState('')

  const [packageObject] = usePackage({ showParents: true })
  const isDashboard = packageObject?.kind === DASHBOARD_KIND
  const filtersApplied = useCheckOperationFiltersApplied(isDashboard)

  const { hideFiltersPanel, toggleHideFiltersPanel } = usePortalPageSettingsContext()

  const versionElement = useMemo(() => (
    <Link
      component={NavLink}
      to={getVersionPath({ packageKey: packageId!, versionKey: previousReleaseVersion! })}
      data-testid="ComparedToLink"
    >
      {previousReleaseVersionKey}
    </Link>
  ), [packageId, previousReleaseVersion, previousReleaseVersionKey])

  return (
    <ChangesSummaryProvider>
      <RichFiltersLayout
        title={
          <PageTitle
            title={API_CHANGES_TITLE}
            titleComponent={versionElement}
            onApiTypeChange={setPathParam}
            apiType={apiType}
            withApiSelector={isApiTypeSelectorShown(apiTypes)}
          />
        }
        searchPlaceholder="Search Operations"
        setSearchValue={setSearchValue}
        exportButton={
          <ExportChangesMenu
            textFilter={searchValue}
            severityChanges={CHANGE_SEVERITIES}
            kind={apiKindFilter}
            apiAudience={apiAudienceFilter}
            tag={selectedTag}
            severityFilter={severityFilter}
            refPackageId={refKey}
            emptyTag={emptyTag}
            group={operationGroup}
            previousVersion={previousVersion}
            previousVersionPackageId={previousVersionPackageKey}
          />
        }
        additionalActions={
          <ComparisonChangeSeverityFilters
            category={CATEGORY_OPERATION}
            apiType={apiType ?? DEFAULT_API_TYPE}
          />
        }
        filtersApplied={filtersApplied}
        hideFiltersPanel={hideFiltersPanel}
        filters={<ApiChangesNavigation />}
        onClickFilterButton={toggleHideFiltersPanel}
        body={<ApiChangesCard searchValue={searchValue} />}
        testId="ApiChangesTab"
      />
    </ChangesSummaryProvider>
  )
})

const API_CHANGES_TITLE = 'API changes compared to '
