import { useBackwardLocationContext } from '@apihub/routes/BackwardLocationProvider'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, IconButton, Skeleton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DdlTableViewModeToggler } from '@netcracker/qubership-apihub-ui-shared/components/Ddl/DdlTableViewModeToggler'
import { PageLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayout'
import type { SpecViewMode } from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import { DOC_SPEC_VIEW_MODE } from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import { Toolbar } from '@netcracker/qubership-apihub-ui-shared/components/Toolbar'
import { ToolbarTitle } from '@netcracker/qubership-apihub-ui-shared/components/ToolbarTitle'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { CONTRACT_TYPE_DDL } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import type { DdlContractEntity } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import { getDdlEntityDisplayName } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import type { FC } from 'react'
import { memo, useCallback, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAutoFetchInfinitePages } from '../useAutoFetchInfinitePages'

import type { Key } from '@apihub/entities/keys'
import { useNavigation } from '../../../../NavigationProvider'
import { PackageBreadcrumbs } from '../../../PackageBreadcrumbs'
import { usePackage } from '../../../usePackage'
import { useDdlTableDetails } from '../api/useDdlTableDetails'
import { useDdlTables } from '../api/useDdlTables'
import { getDdlTableLink } from '../useNavigateToOperation'
import { DdlTableContentView } from '../VersionContractsSubPage/DdlTableContentView'
import { DdlEntitySelector } from './DdlEntitySelector'

export const DdlTablePage: FC = memo(() => {
  const { packageId, versionId, operationId: ddlEntityId } = useParams<{
    packageId: Key
    versionId: Key
    operationId: Key
  }>()

  const [packageObject] = usePackage({ showParents: true })

  const { data: tableDetails, isInitialLoading } = useDdlTableDetails({
    packageKey: packageId,
    versionKey: versionId,
    ddlEntityId: ddlEntityId,
  })

  const [allTables, isTablesLoading, fetchNextPage, isFetchingNextPage, hasNextPage] = useDdlTables({
    packageKey: packageId,
    versionKey: versionId,
    limit: 100,
  })

  useAutoFetchInfinitePages({
    isLoading: isTablesLoading,
    isFetchingNextPage: isFetchingNextPage,
    hasNextPage: hasNextPage,
    fetchNextPage: fetchNextPage,
  })

  const isSiblingsLoading = isTablesLoading || isFetchingNextPage || !!hasNextPage

  const filteredSiblings = useMemo(
    () => allTables.filter(table => table.ddlEntityId !== ddlEntityId),
    [allTables, ddlEntityId],
  )

  const navigate = useNavigate()
  const { navigateToOperations } = useNavigation()
  const backwardLocation = useBackwardLocationContext()

  const [viewMode, setViewMode] = useState<SpecViewMode>(DOC_SPEC_VIEW_MODE)

  const handleBackClick = useCallback(() => {
    if (backwardLocation.fromOperation) {
      navigate({ ...backwardLocation.fromOperation })
      return
    }
    navigateToOperations({
      packageKey: packageId!,
      versionKey: versionId!,
      apiType: CONTRACT_TYPE_DDL as unknown as ApiType,
    })
  }, [backwardLocation, navigate, navigateToOperations, packageId, versionId])

  const prepareLinkFn = useCallback((table: DdlContractEntity) =>
    getDdlTableLink({
      packageKey: packageId!,
      versionKey: versionId!,
      ddlEntityId: table.ddlEntityId,
    }), [packageId, versionId])

  const title = useMemo(() => {
    if (!tableDetails) {
      return ''
    }
    return getDdlEntityDisplayName(tableDetails)
  }, [tableDetails])

  return (
    <PageLayout
      toolbar={
        <Toolbar
          breadcrumbs={
            <PackageBreadcrumbs
              packageObject={packageObject}
              versionKey={versionId}
              showPackagePath={true}
            />
          }
          header={
            <ToolbarHeaderRow>
              <IconButton color="primary" onClick={handleBackClick} data-testid="BackButton">
                <ArrowBackIcon />
              </IconButton>
              <ToolbarTitle
                value={
                  <Box display="flex" component="span" alignItems="center">
                    {isInitialLoading
                      ? <Skeleton variant="text" width="150px" />
                      : (
                        <Typography component="span" variant="h5" data-testid="ToolbarTitle">
                          {title}
                        </Typography>
                      )}
                    <DdlEntitySelector
                      tables={filteredSiblings}
                      isLoading={isSiblingsLoading}
                      prepareLinkFn={prepareLinkFn}
                    />
                  </Box>
                }
              />
            </ToolbarHeaderRow>
          }
          action={<DdlTableViewModeToggler mode={viewMode} onChange={setViewMode} />}
        />
      }
      body={
        <BodyBox>
          {isInitialLoading
            ? <Skeleton variant="rectangular" height="100%" />
            : (
              <DdlTableContentView
                data={tableDetails?.data}
                viewMode={viewMode}
              />
            )}
        </BodyBox>
      }
    />
  )
})

DdlTablePage.displayName = 'DdlTablePage'

const ToolbarHeaderRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

const BodyBox = styled(Box)({
  height: '100%',
  minHeight: 0,
  overflow: 'hidden',
})
