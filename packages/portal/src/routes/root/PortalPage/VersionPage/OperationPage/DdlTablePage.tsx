import { useBackwardLocationContext } from '@apihub/routes/BackwardLocationProvider'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, IconButton, Skeleton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ContractSiblingSelector } from '@netcracker/qubership-apihub-ui-shared/components/ContractSiblingSelector'
import { DdlTableWithMetaList } from '@netcracker/qubership-apihub-ui-shared/components/Ddl/DdlTableWithMetaList'
import { PageLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayout'
import { Toolbar } from '@netcracker/qubership-apihub-ui-shared/components/Toolbar'
import { ToolbarTitle } from '@netcracker/qubership-apihub-ui-shared/components/ToolbarTitle'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { CONTRACT_TYPE_DDL } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import type { DdlTableContract } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import { getDdlTableTitle } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import type { FC } from 'react'
import { memo, useCallback, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import type { Key } from '@apihub/entities/keys'
import { useNavigation } from '../../../../NavigationProvider'
import { PackageBreadcrumbs } from '../../../PackageBreadcrumbs'
import { usePackage } from '../../../usePackage'
import { useDdlTableDetails } from '../api/useDdlTableDetails'
import { useDdlTables } from '../api/useDdlTables'
import { getDdlTableLink } from '../useNavigateToOperation'
import { DdlTableContentView } from '../VersionContractsSubPage/DdlTableContentView'

export const DdlTablePage: FC = memo(() => {
  const { packageId, versionId, operationId: tableId } = useParams<{
    packageId: Key
    versionId: Key
    operationId: Key
  }>()

  const [packageObject] = usePackage({ showParents: true })

  const { data: tableDetails, isInitialLoading } = useDdlTableDetails({
    packageKey: packageId,
    versionKey: versionId,
    tableId: tableId,
  })

  const [allTables, isTablesLoading] = useDdlTables({
    packageKey: packageId,
    versionKey: versionId,
    limit: 100,
  })

  const filteredSiblings = useMemo(
    () => allTables.filter(table => table.tableId !== tableId),
    [allTables, tableId],
  )

  const navigate = useNavigate()
  const { navigateToOperations } = useNavigation()
  const backwardLocation = useBackwardLocationContext()

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

  const prepareLinkFn = useCallback((table: DdlTableContract) =>
    getDdlTableLink({
      packageKey: packageId!,
      versionKey: versionId!,
      tableId: table.tableId,
    }), [packageId, versionId])

  const title = useMemo(() => {
    if (!tableDetails) {
      return ''
    }
    return getDdlTableTitle(tableDetails)
  }, [tableDetails])

  const handleSelectorClose = useCallback(() => undefined, [])

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
                    <ContractSiblingSelector
                      sectionTitle="Tables"
                      isLoading={isTablesLoading}
                      isEmpty={filteredSiblings.length === 0}
                      emptyMessage="No tables"
                      data-testid="DdlTableSelector"
                    >
                      <DdlTableWithMetaList
                        tables={filteredSiblings}
                        prepareLinkFn={prepareLinkFn}
                        onClick={handleSelectorClose}
                      />
                    </ContractSiblingSelector>
                  </Box>
                }
              />
            </ToolbarHeaderRow>
          }
        />
      }
      body={
        <BodyBox>
          {isInitialLoading
            ? <Skeleton variant="rectangular" height="100%" />
            : <DdlTableContentView data={tableDetails?.data} />}
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
