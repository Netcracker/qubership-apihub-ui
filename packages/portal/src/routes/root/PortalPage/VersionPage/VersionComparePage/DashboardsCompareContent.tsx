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

import { useBackwardLocationContext, useSetBackwardLocationContext } from '@apihub/routes/BackwardLocationProvider'
import { useEventBus } from '@apihub/routes/EventBusProvider'
import { isRevisionCompare } from '@apihub/routes/root/PortalPage/VersionPage/VersionComparePage/VersionCompareContent'
import { getDefaultApiType } from '@apihub/utils/operation-types'
import { Box, Card, CardContent, Grid, ListItem, ListItemText, Typography } from '@mui/material'
import type { OperationType } from '@netcracker/qubership-apihub-api-processor'
import { calculateTotalChangeSummary, EMPTY_CHANGE_SUMMARY } from '@netcracker/qubership-apihub-api-processor'
import { ChangeSeverityIndicator } from '@netcracker/qubership-apihub-ui-shared/components/ChangeSeverityIndicator'
import { Changes } from '@netcracker/qubership-apihub-ui-shared/components/Changes'
import { CustomChip } from '@netcracker/qubership-apihub-ui-shared/components/CustomChip'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { OverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/OverflowTooltip'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { API_TYPE_TITLE_MAP } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { ChangeSeverity } from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import {
  ACTION_TYPE_COLOR_MAP,
  ADD_ACTION_TYPE,
  REMOVE_ACTION_TYPE,
} from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import { calculateAction } from '@netcracker/qubership-apihub-ui-shared/entities/version-changelog'
import type { DashboardComparisonSummary } from '@netcracker/qubership-apihub-ui-shared/entities/version-changes-summary'
import type { VersionStatus } from '@netcracker/qubership-apihub-ui-shared/entities/version-status'
import {
  useSeverityFiltersSearchParam,
} from '@netcracker/qubership-apihub-ui-shared/hooks/change-severities/useSeverityFiltersSearchParam'
import { isNotEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'
import { getMajorSeverity } from '@netcracker/qubership-apihub-ui-shared/utils/change-severities'
import {
  API_TYPE_SEARCH_PARAM,
  FILTERS_SEARCH_PARAM,
  optionalSearchParams,
  PACKAGE_SEARCH_PARAM,
  REF_SEARCH_PARAM,
  VERSION_SEARCH_PARAM,
} from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import { format } from '@netcracker/qubership-apihub-ui-shared/utils/strings'
import { getSplittedVersionKey } from '@netcracker/qubership-apihub-ui-shared/utils/versions'
import type { FC } from 'react'
import { memo, useCallback, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigation } from '../../../../NavigationProvider'
import { useBackwardLocation } from '../../../useBackwardLocation'
import { useIsPackageFromDashboard } from '../../useIsPackageFromDashboard'
import { useChangesLoadingStatus, useSetChangesLoadingStatus } from '../ChangesLoadingStatusProvider'
import { useChangesSummaryFromContext } from '../ChangesSummaryProvider'
import { useBreadcrumbsData } from '../ComparedPackagesBreadcrumbsProvider'
import { ComparisonSwapper } from '../ComparisonSwapper'
import { useVersionsComparisonGlobalParams } from '../VersionsComparisonGlobalParams'
import { VERSION_SWAPPER_HEIGHT } from '../shared-styles'
import { useFilteredDashboardChanges } from './useFilteredDashboardChanges'
import { WarningApiProcessorVersion } from '@netcracker/qubership-apihub-ui-shared/components/WarningApiProcessorVersion'

export const DashboardsCompareContent: FC = memo(() => {
  const location = useBackwardLocation()
  const backwardLocation = useBackwardLocationContext()
  const setBackwardLocation = useSetBackwardLocationContext()

  const { isPackageFromDashboard, refPackageKey } = useIsPackageFromDashboard()

  const {
    originPackageKey,
    originVersionKey,
    changedPackageKey,
    changedVersionKey,
    apiType,
  } = useVersionsComparisonGlobalParams()

  const { showCompareVersionsDialog, showCompareRevisionsDialog } = useEventBus()

  const showCompareDialog = isRevisionCompare(originVersionKey!, changedVersionKey!)
    ? showCompareRevisionsDialog
    : showCompareVersionsDialog

  const changesSummary = useChangesSummaryFromContext() as DashboardComparisonSummary
  const breadcrumbsData = useBreadcrumbsData()

  const isLoading = useChangesLoadingStatus()
  const setChangesLoadingStatus = useSetChangesLoadingStatus()
  useEffect(() => {
    setChangesLoadingStatus(!changesSummary)
  }, [changesSummary, setChangesLoadingStatus])

  const [filters] = useSeverityFiltersSearchParam()
  const apiTypeFilter = getApiTypeFilter(apiType as string)
  const filteredDashboardChanges = useFilteredDashboardChanges(changesSummary, filters, apiTypeFilter)

  const onPackageChangeClick = (): void => {
    setBackwardLocation({ ...backwardLocation, fromPackagesComparison: location })
  }

  const { navigateToComparison } = useNavigation()

  const handleSwap = useCallback(() => {
    const searchParams = {
      [VERSION_SEARCH_PARAM]: { value: changedVersionKey },
      [PACKAGE_SEARCH_PARAM]: { value: originPackageKey !== changedPackageKey ? encodeURIComponent(changedPackageKey!) : '' },
      [REF_SEARCH_PARAM]: { value: isPackageFromDashboard ? refPackageKey : undefined },
      [API_TYPE_SEARCH_PARAM]: { value: apiType },
      [FILTERS_SEARCH_PARAM]: { value: filters.join() },
    }

    navigateToComparison({
      packageKey: originPackageKey ?? changedPackageKey!,
      versionKey: originVersionKey!,
      search: searchParams,
    })
  }, [apiType, changedPackageKey, changedVersionKey, filters, isPackageFromDashboard, navigateToComparison, originPackageKey, originVersionKey, refPackageKey])

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  return (
    <Card>
      <ComparisonSwapper
        breadcrumbsData={breadcrumbsData}
        handleSwap={handleSwap}
        showCompareDialog={showCompareDialog}
        customComponentBeforeSwapperBreadcrumbs={<WarningApiProcessorVersion packageKey={originPackageKey} versionKey={originVersionKey} />}
        customComponentAfterSwapperBreadcrumbs={<WarningApiProcessorVersion packageKey={changedPackageKey} versionKey={changedVersionKey} />}
      />
      <Placeholder
        invisible={isNotEmpty(filteredDashboardChanges)}
        area={CONTENT_PLACEHOLDER_AREA}
        message="No differences"
        testId="NoDifferencesPlaceholder">
        <CardContent
          sx={{
            display: 'flex',
            height: `calc(100% - ${VERSION_SWAPPER_HEIGHT})`,
            flexDirection: 'column',
            overflow: 'auto',
            pt: 0,
          }}
        >
          {/*todo think about unification changes list */}
          <Box pt={2}>
            {
              filteredDashboardChanges.map((refChangesSummary) => {
                const {
                  refKey,
                  version,
                  previousVersion,
                  status,
                  previousStatus,
                  name: title,
                  operationTypes,
                  parentPackages = [],
                  latestRevision,
                } = refChangesSummary

                const changeSummary = calculateTotalChangeSummary(operationTypes.map(type => type.changesSummary ?? EMPTY_CHANGE_SUMMARY))
                const path = parentPackages.join(' / ')
                const currentAction = calculateAction(version, previousVersion)
                const severity = getMajorSeverity(changeSummary)
                const comparingSearchParams = optionalSearchParams({
                  [PACKAGE_SEARCH_PARAM]: { value: changedPackageKey === originPackageKey ? '' : originPackageKey! },
                  [VERSION_SEARCH_PARAM]: { value: originVersionKey! },
                  [API_TYPE_SEARCH_PARAM]: { value: getDefaultApiType(operationTypes.map(type => type.apiType)) },
                  [REF_SEARCH_PARAM]: { value: refKey },
                })

                return (
                  <Grid
                    key={`dashboards-compare-content-filtered-dashboard-changes-grid-${refKey}-${version}-${previousVersion}`}
                    component={NavLink}
                    container
                    spacing={0}
                    sx={{ textDecoration: 'none', color: '#353C4E', marginBottom: '8px', position: 'relative' }}
                    to={{
                      pathname: format(
                        '/portal/packages/{}/{}/compare',
                        encodeURIComponent(changedPackageKey!),
                        encodeURIComponent(changedVersionKey!),
                      ),
                      search: `${comparingSearchParams}`,
                    }}
                    onClick={onPackageChangeClick}
                    data-testid="ComparisonRow"
                  >
                    <Grid
                      item
                      xs={6}
                      sx={{
                        borderRight: '1px solid #D5DCE3',
                        background: ACTION_TYPE_COLOR_MAP[currentAction] ?? '#F2F3F5',
                      }}
                      data-testid="LeftComparisonSummary"
                    >
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                      }}>
                        <ChangeSeverityIndicator
                          severity={severity as ChangeSeverity}
                          sx={{
                            alignItems: 'center',
                            display: 'flex',
                            overflow: 'hidden',
                            zIndex: '1',
                            '&:hover': {
                              color: '#FFFFFF',
                              padding: '5px',
                              width: '105px',
                            },
                          }}
                        />
                        <Package
                          key={refKey}
                          value={title && currentAction !== ADD_ACTION_TYPE ? {
                            title: title,
                            version: previousVersion,
                            status: previousStatus,
                            path: path,
                          } : undefined}
                        />
                      </Box>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{ background: ACTION_TYPE_COLOR_MAP[currentAction] ?? '#F2F3F5' }}
                      data-testid="RightComparisonSummary"
                    >
                      <Package
                        key={`changed-${refKey}`}
                        value={title && currentAction !== REMOVE_ACTION_TYPE ? {
                          title: title,
                          version: version,
                          latestRevision: latestRevision,
                          status: status,
                          path: path,
                        } : undefined}
                        operationTypes={operationTypes}
                      />
                    </Grid>
                  </Grid>
                )
              })
            }
          </Box>
        </CardContent>
      </Placeholder>
    </Card>
  )
})

type PackageProps = {
  value?: {
    title?: string
    version?: string
    latestRevision?: boolean
    path?: string
    status?: VersionStatus
  }
  operationTypes?: ReadonlyArray<OperationType>
}

const Package: FC<PackageProps> = memo<PackageProps>(({ value, operationTypes }) => {
  const { version, path, title, status, latestRevision } = value ?? {}
  const { versionKey } = getSplittedVersionKey(version, latestRevision)

  const primary = (
    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
      {title && <Typography component="span" noWrap variant="inherit"
        data-testid="PackageVersionTitle">{title} / {versionKey}</Typography>}
      {status && <CustomChip sx={{ ml: 1 }} value={status} data-testid="PackageVersionStatus" />}
    </Box>
  )
  return (
    <ListItem
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: operationTypes ? '2px 16px' : '8px 16px',
        paddingTop: value ? 0 : '44px',
        overflow: 'hidden',
        gap: '2px',
      }}
    >
      <Box>
        {path && (
          <OverflowTooltip title={path}>
            <Typography component="span" noWrap variant="subtitle2" data-testid="DashboardPath">{path}</Typography>
          </OverflowTooltip>
        )}
      </Box>
      <Box display="flex" gap={1}>
        <ListItemText
          primary={primary}
        />
      </Box>
      {operationTypes?.map(operationTypeChange =>
        <Box component="span" gap={1} sx={{ display: 'flex', alignItems: 'center' }}
          data-testid={`ChangesApiType-${operationTypeChange.apiType}`}>
          <Typography component="span" noWrap variant="subtitle2">
            {API_TYPE_TITLE_MAP[operationTypeChange.apiType]}:
          </Typography>
          <Changes value={operationTypeChange.changesSummary} mode="compact" />
        </Box>,
      )}
    </ListItem>
  )
})

// handle specific dashboard comparison value
function getApiTypeFilter(apiTypeParameter: string): ApiType | undefined {
  return apiTypeParameter === 'all' ? undefined : apiTypeParameter as ApiType
}


