import { Box, Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { type FC, memo, useCallback, useEffect, useMemo } from 'react'
import { createPath, useParams } from 'react-router-dom'

import {
  useApiDiffResult,
  useHasComparisonInternalDocument,
  useIsApiDiffResultLoading,
  useSetApiDiffResult,
} from '@apihub/routes/root/ApiDiffResultProvider'
import type { DiffMetaKeys } from '@apihub/entities/diff-meta-keys'
import { useComparedDdlContractsPair } from '@apihub/routes/root/PortalPage/VersionPage/ComparedDdlContractsContext'
import { OperationsSwapper } from '@apihub/routes/root/PortalPage/VersionPage/OperationContent/OperationsSwapper'
import {
  isComparisonMode,
  type OperationDisplayMode,
} from '@apihub/routes/root/PortalPage/VersionPage/OperationContent/OperationView/OperationDisplayMode'
import { useBreadcrumbsData } from '@apihub/routes/root/PortalPage/VersionPage/ComparedPackagesBreadcrumbsProvider'
import { useOperationViewMode } from '@apihub/routes/root/PortalPage/VersionPage/useOperationViewMode'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import {
  CONTENT_PLACEHOLDER_AREA,
  Placeholder,
  PLACEHOLDER_MESSAGE_NO_INTERNAL_DOCUMENT,
  SEARCH_RAINY_DAY_PLACEHOLDER_VARIANT,
} from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { RawSpecDiffView } from '@netcracker/qubership-apihub-ui-shared/components/RawSpecDiffView'
import { RawSpecView } from '@netcracker/qubership-apihub-ui-shared/components/SpecificationDialog/RawSpecView'
import {
  DOC_SPEC_VIEW_MODE,
  RAW_SPEC_VIEW_MODE,
  SIMPLE_SPEC_VIEW_MODE,
  type SpecViewMode,
} from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import { CONTRACT_TYPE_DDL } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import type { DdlContractEntityDetails } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import { DDL_ENTITY_KIND_TABLE } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { DEFAULT_VIEW_MODE_MAP_BY_API_TYPE } from '@netcracker/qubership-apihub-ui-shared/entities/operation-view-mode'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import {
  useSeverityFiltersSearchParam,
} from '@netcracker/qubership-apihub-ui-shared/hooks/change-severities/useSeverityFiltersSearchParam'
import {
  useIsDocOperationViewMode,
  useIsRawOperationViewMode,
} from '@netcracker/qubership-apihub-ui-shared/hooks/operations/useOperationMode'
import {
  DETAILED_SCHEMA_VIEW_MODE,
  SIMPLE_SCHEMA_VIEW_MODE,
} from '@netcracker/qubership-apihub-ui-shared/entities/schema-view-mode'
import { theme } from '@netcracker/qubership-apihub-ui-shared/themes/theme'
import { SQL_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { DDL_DOCUMENT_TYPE } from '@netcracker/qubership-apihub-ui-shared/utils/specs'

import { useNormalizedDdlContract } from '@apihub/api-hooks/InternalDocuments/useNormalizedDdlContract'
import { DdlTableDiffsViewer, DdlTableViewer } from '@netcracker/qubership-apihub-api-doc-viewer'
import { calculateDdlEntityId } from '@netcracker/qubership-apihub-api-processor'
import { DIFFS_AGGREGATED_META_KEY, DIFF_META_KEY } from '@netcracker/qubership-apihub-api-diff'
import { usePackageKind } from '../../usePackageKind'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useRefSearchParam } from '../../useRefSearchParam'
import { getDdlTableLink } from '../useNavigateToOperation'
import { DdlTableNavigationLink } from './DdlTableNavigationLink'

const DIFFS_META_KEYS: DiffMetaKeys = {
  diffsMetaKey: DIFF_META_KEY,
  aggregatedDiffsMetaKey: DIFFS_AGGREGATED_META_KEY,
}

export type DdlTableContentViewProps = {
  data: DdlContractEntityDetails | undefined
  viewMode: SpecViewMode
  noHeading?: boolean
  entityPackageKey?: Key
  entityVersionKey?: Key
  displayMode?: OperationDisplayMode
  originRawContent?: string
  changedRawContent?: string
  isLoading?: boolean
  isEntityExist?: boolean
  paddingBottom?: string | number
}

export const DdlTableContentView: FC<DdlTableContentViewProps> = memo<DdlTableContentViewProps>((props) => {
  const {
    data,
    viewMode,
    noHeading = false,
    entityPackageKey,
    entityVersionKey,
    displayMode,
    originRawContent,
    changedRawContent,
    isLoading = false,
    isEntityExist = true,
    paddingBottom,
  } = props

  const comparisonMode = displayMode ? isComparisonMode(displayMode) : false

  if (comparisonMode) {
    return (
      <ComparisonModeContent
        data={data}
        displayMode={displayMode!}
        noHeading={noHeading}
        originRawContent={originRawContent}
        changedRawContent={changedRawContent}
        isLoading={isLoading}
        isEntityExist={isEntityExist}
        paddingBottom={paddingBottom}
      />
    )
  }

  return (
    <RegularModeContent
      data={data}
      viewMode={viewMode}
      noHeading={noHeading}
      entityPackageKey={entityPackageKey}
      entityVersionKey={entityVersionKey}
    />
  )
})

type RegularModeContentProps = Readonly<{
  data: DdlContractEntityDetails | undefined
  viewMode: SpecViewMode
  noHeading: boolean
  entityPackageKey: Key | undefined
  entityVersionKey: Key | undefined
}>

const RegularModeContent: FC<RegularModeContentProps> = memo<RegularModeContentProps>(({
  data,
  viewMode,
  noHeading,
  entityPackageKey,
  entityVersionKey,
}) => {
  const { packageId, versionId } = useParams()
  const [refKey] = useRefSearchParam()
  const [packageKind] = usePackageKind()
  const isDashboard = packageKind === DASHBOARD_KIND
  const [resolvedPackageKey, resolvedVersionKey] = usePackageParamsWithRef(data?.packageRef?.key)

  const contentPackageKey = entityPackageKey ?? resolvedPackageKey
  const contentVersionKey = entityVersionKey ?? resolvedVersionKey

  const {
    data: normalizedSource,
    isLoading: isNormalizedSourceLoading,
    error: normalizedSourceError,
  } = useNormalizedDdlContract({
    ddlContract: data,
    packageId: contentPackageKey,
    versionId: contentVersionKey,
  })

  const rawContent = data?.data ?? ''

  const tableKey = useMemo(() => {
    if (!data) {
      return undefined
    }
    return { schemaName: data.schemaName, name: data.name }
  }, [data])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigationLinkBuilder = useCallback((schemaName: string, tableName: string, _column: string) => {
    if (!data || !packageId || !versionId) {
      return '#'
    }
    const ddlEntityId = calculateDdlEntityId(schemaName, DDL_ENTITY_KIND_TABLE, tableName)
    return createPath(getDdlTableLink({
      packageKey: packageId,
      versionKey: versionId,
      ddlEntityId: ddlEntityId,
      ref: isDashboard ? data.packageRef?.key ?? entityPackageKey ?? refKey : undefined,
    }))
  }, [data, entityPackageKey, isDashboard, packageId, refKey, versionId])

  const parseError = normalizedSourceError?.message ?? null

  if (viewMode !== RAW_SPEC_VIEW_MODE && isNormalizedSourceLoading) {
    return (
      <ContentContainer>
        <Skeleton variant="rectangular" height="100%" />
      </ContentContainer>
    )
  }

  return (
    <ContentContainer>
      {viewMode === DOC_SPEC_VIEW_MODE && (
        parseError
          ? <ParseErrorMessage>{parseError}</ParseErrorMessage>
          : tableKey && (
            <DdlTableViewer
              source={normalizedSource}
              tableKey={tableKey}
              navigationLinkBuilder={navigationLinkBuilder}
              navigationLinkComponent={DdlTableNavigationLink}
              displayMode={DETAILED_SCHEMA_VIEW_MODE}
              noHeading={noHeading}
            />
          )
      )}

      {viewMode === SIMPLE_SPEC_VIEW_MODE && (
        parseError
          ? <ParseErrorMessage>{parseError}</ParseErrorMessage>
          : tableKey && (
            <DdlTableViewer
              source={normalizedSource}
              tableKey={tableKey}
              navigationLinkBuilder={navigationLinkBuilder}
              navigationLinkComponent={DdlTableNavigationLink}
              displayMode={SIMPLE_SCHEMA_VIEW_MODE}
              noHeading={noHeading}
            />
          )
      )}

      {viewMode === RAW_SPEC_VIEW_MODE && (
        <RawSpecView
          value={rawContent}
          extension={SQL_FILE_EXTENSION}
          type={DDL_DOCUMENT_TYPE.DDL}
        />
      )}
    </ContentContainer>
  )
})

RegularModeContent.displayName = 'RegularModeContent'

type ComparisonModeContentProps = Readonly<{
  data: DdlContractEntityDetails | undefined
  displayMode: OperationDisplayMode
  noHeading: boolean
  originRawContent: string | undefined
  changedRawContent: string | undefined
  isLoading: boolean
  isEntityExist: boolean
  paddingBottom: string | number | undefined
}>

const ComparisonModeContent: FC<ComparisonModeContentProps> = memo<ComparisonModeContentProps>(({
  data,
  displayMode,
  noHeading,
  originRawContent,
  changedRawContent,
  isLoading,
  isEntityExist,
  paddingBottom,
}) => {
  const { packageId, versionId } = useParams()
  const [refKey] = useRefSearchParam()
  const [packageKind] = usePackageKind()
  const isDashboard = packageKind === DASHBOARD_KIND
  const breadcrumbsData = useBreadcrumbsData()
  const {
    previousDdlContract: originDdlContract,
    currentDdlContract: changedDdlContract,
  } = useComparedDdlContractsPair()

  const defaultViewMode = DEFAULT_VIEW_MODE_MAP_BY_API_TYPE[CONTRACT_TYPE_DDL](true)
  const { mode } = useOperationViewMode(defaultViewMode)
  const isDocViewMode = useIsDocOperationViewMode(mode)
  const isRawViewMode = useIsRawOperationViewMode(mode)
  const [filters] = useSeverityFiltersSearchParam()

  const apiDiffResult = useApiDiffResult()
  const isApiDiffResultLoading = useIsApiDiffResultLoading()
  const setApiDiffResult = useSetApiDiffResult()
  const hasComparisonInternalDocument = useHasComparisonInternalDocument()

  const tableEntity = changedDdlContract ?? originDdlContract ?? data

  const tableKey = useMemo(() => {
    if (!tableEntity) {
      return undefined
    }
    return { schemaName: tableEntity.schemaName, name: tableEntity.name }
  }, [tableEntity])

  const mergedDocument = apiDiffResult?.merged

  useEffect(() => {
    return () => {
      setApiDiffResult(undefined)
    }
  }, [setApiDiffResult])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigationLinkBuilder = useCallback((schemaName: string, tableName: string, _column: string) => {
    if (!tableEntity || !packageId || !versionId) {
      return '#'
    }
    const ddlEntityId = calculateDdlEntityId(schemaName, DDL_ENTITY_KIND_TABLE, tableName)
    return createPath(getDdlTableLink({
      packageKey: packageId,
      versionKey: versionId,
      ddlEntityId: ddlEntityId,
      ref: isDashboard ? tableEntity.packageRef?.key ?? refKey : undefined,
    }))
  }, [isDashboard, packageId, refKey, tableEntity, versionId])

  const noDataForDiffView = isDocViewMode && !mergedDocument
  const noDataForRawView = isRawViewMode && !originRawContent && !changedRawContent

  if (isLoading || (isApiDiffResultLoading && isDocViewMode)) {
    return (
      <ComparisonContentContainer paddingBottom={paddingBottom}>
        <LoadingIndicator />
      </ComparisonContentContainer>
    )
  }

  if (noDataForDiffView || noDataForRawView) {
    const message = !hasComparisonInternalDocument
      ? PLACEHOLDER_MESSAGE_NO_INTERNAL_DOCUMENT
      : 'Please select a table'
    return (
      <ComparisonContentContainer paddingBottom={paddingBottom}>
        <Placeholder
          invisible={false}
          area={CONTENT_PLACEHOLDER_AREA}
          message={message}
        />
      </ComparisonContentContainer>
    )
  }

  if (!isEntityExist) {
    return (
      <ComparisonContentContainer paddingBottom={paddingBottom}>
        <Placeholder
          invisible={false}
          variant={SEARCH_RAINY_DAY_PLACEHOLDER_VARIANT}
          area={CONTENT_PLACEHOLDER_AREA}
          message="No tables"
        />
      </ComparisonContentContainer>
    )
  }

  return (
    <ComparisonContentContainer paddingBottom={paddingBottom}>
      <ComparisonContentInner>
        <OperationsSwapper
          displayMode={displayMode}
          breadcrumbsData={breadcrumbsData}
          actions={undefined}
        />
        {isDocViewMode && !!mergedDocument && tableKey && (
          <DiffViewContainer data-testid="DdlEntityComparisonDiff">
            <DdlTableDiffsViewer
              mergedSource={mergedDocument}
              tableKey={tableKey}
              navigationLinkBuilder={navigationLinkBuilder}
              navigationLinkComponent={DdlTableNavigationLink}
              displayMode={DETAILED_SCHEMA_VIEW_MODE}
              noHeading={noHeading}
              diffMetaKeys={DIFFS_META_KEYS}
              diffTypes={filters}
            />
          </DiffViewContainer>
        )}
        {isRawViewMode && (
          <RawDiffContainer data-testid="DdlEntityComparisonDiff">
            <RawSpecDiffView
              beforeValue={originRawContent ?? ''}
              afterValue={changedRawContent ?? ''}
              extension={SQL_FILE_EXTENSION}
              type={DDL_DOCUMENT_TYPE.DDL}
            />
          </RawDiffContainer>
        )}
      </ComparisonContentInner>
    </ComparisonContentContainer>
  )
})

ComparisonModeContent.displayName = 'ComparisonModeContent'

DdlTableContentView.displayName = 'DdlTableContentView'

const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  padding: theme.spacing(2),
})

type ComparisonContentContainerProps = {
  paddingBottom?: string | number
}

const ComparisonContentContainer = styled(Box)<ComparisonContentContainerProps>(({ paddingBottom }) => ({
  height: '100%',
  overflow: 'hidden',
  paddingBottom: paddingBottom ? paddingBottom : 0,
  position: 'relative',
}))

const ComparisonContentInner = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: 'inherit',
  overflow: 'hidden',
  paddingLeft: 24,
  paddingRight: 16,
})

const DiffViewContainer = styled(Box)({
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'hidden',
})

const RawDiffContainer = styled(Box)({
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'hidden',
})

const ParseErrorMessage = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  padding: theme.spacing(1.5),
  whiteSpace: 'pre-wrap',
}))
