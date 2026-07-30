import { Box, Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { type FC, memo, useCallback, useMemo } from 'react'
import { createPath, useParams } from 'react-router-dom'

import { RawSpecView } from '@netcracker/qubership-apihub-ui-shared/components/SpecificationDialog/RawSpecView'
import {
  DOC_SPEC_VIEW_MODE,
  RAW_SPEC_VIEW_MODE,
  SIMPLE_SPEC_VIEW_MODE,
  type SpecViewMode,
} from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import type { DdlContractEntityDetails } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import { DDL_ENTITY_KIND_TABLE } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import {
  DETAILED_SCHEMA_VIEW_MODE,
  SIMPLE_SCHEMA_VIEW_MODE,
} from '@netcracker/qubership-apihub-ui-shared/entities/schema-view-mode'
import { theme } from '@netcracker/qubership-apihub-ui-shared/themes/theme'
import { SQL_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { DDL_DOCUMENT_TYPE } from '@netcracker/qubership-apihub-ui-shared/utils/specs'

import { useNormalizedDdlContract } from '@apihub/api-hooks/InternalDocuments/useNormalizedDdlContract'
import { DdlTableViewer } from '@netcracker/qubership-apihub-api-doc-viewer'
import { calculateDdlEntityId } from '@netcracker/qubership-apihub-api-processor'
import { usePackageKind } from '../../usePackageKind'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useRefSearchParam } from '../../useRefSearchParam'
import { getDdlTableLink } from '../useNavigateToOperation'
import { DdlTableNavigationLink } from './DdlTableNavigationLink'

export type DdlTableContentViewProps = {
  data: DdlContractEntityDetails | undefined
  viewMode: SpecViewMode
  noHeading?: boolean
  entityPackageKey?: Key
  entityVersionKey?: Key
}

export const DdlTableContentView: FC<DdlTableContentViewProps> = memo<DdlTableContentViewProps>((props) => {
  const {
    data,
    viewMode,
    noHeading = false,
    entityPackageKey,
    entityVersionKey,
  } = props

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
          : (
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
          : (
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

DdlTableContentView.displayName = 'DdlTableContentView'

const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'auto',
  padding: theme.spacing(2),
})

const ParseErrorMessage = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  padding: theme.spacing(1.5),
  whiteSpace: 'pre-wrap',
}))
