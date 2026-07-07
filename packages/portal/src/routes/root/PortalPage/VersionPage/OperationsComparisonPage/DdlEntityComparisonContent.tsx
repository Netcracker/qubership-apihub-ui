import { useBreadcrumbsData } from '@apihub/routes/root/PortalPage/VersionPage/ComparedPackagesBreadcrumbsProvider'
import { OperationsSwapper } from '@apihub/routes/root/PortalPage/VersionPage/OperationContent/OperationsSwapper'
import type { OperationDisplayMode } from '@apihub/routes/root/PortalPage/VersionPage/OperationContent/OperationView/OperationDisplayMode'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import {
  CONTENT_PLACEHOLDER_AREA,
  Placeholder,
  SEARCH_RAINY_DAY_PLACEHOLDER_VARIANT,
} from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { RawSpecDiffView } from '@netcracker/qubership-apihub-ui-shared/components/RawSpecDiffView'
import { CONTRACT_TYPE_DDL } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import { DEFAULT_VIEW_MODE_MAP_BY_API_TYPE } from '@netcracker/qubership-apihub-ui-shared/entities/operation-view-mode'
import {
  useIsDocOperationViewMode,
  useIsRawOperationViewMode,
} from '@netcracker/qubership-apihub-ui-shared/hooks/operations/useOperationMode'
import { SQL_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { DDL_DOCUMENT_TYPE } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { type FC, memo } from 'react'

import { useOperationViewMode } from '../useOperationViewMode'

const DDL_DOC_COMPARE_PLACEHOLDER = 'Documentation comparison is not available yet'

export type DdlEntityComparisonContentProps = {
  originTableDetailsData?: string
  changedTableDetailsData?: string
  isEntityExist: boolean
  isLoading: boolean
  displayMode: OperationDisplayMode
  paddingBottom?: string | number
}

export const DdlEntityComparisonContent: FC<DdlEntityComparisonContentProps> = memo<DdlEntityComparisonContentProps>(({
  originTableDetailsData,
  changedTableDetailsData,
  isEntityExist,
  isLoading,
  displayMode,
  paddingBottom,
}) => {
  const breadcrumbsData = useBreadcrumbsData()
  const defaultViewMode = DEFAULT_VIEW_MODE_MAP_BY_API_TYPE[CONTRACT_TYPE_DDL](true)
  const { mode } = useOperationViewMode(defaultViewMode)
  const isDocViewMode = useIsDocOperationViewMode(mode)
  const isRawViewMode = useIsRawOperationViewMode(mode)

  if (isLoading) {
    return (
      <ComparisonContentContainer paddingBottom={paddingBottom}>
        <LoadingIndicator />
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
        {
          /* TODO(DDL/doc-compare): when DOC_OPERATION_VIEW_MODE is added to DDL_COMPARE_VIEW_MODES,
            replace Placeholder with doc diff view; remove DDL_DOC_COMPARE_PLACEHOLDER. */
        }
        {isDocViewMode && (
          <Placeholder
            invisible={false}
            area={CONTENT_PLACEHOLDER_AREA}
            message={DDL_DOC_COMPARE_PLACEHOLDER}
          />
        )}
        {isRawViewMode && (
          <RawDiffContainer data-testid="DdlEntityComparisonDiff">
            <RawSpecDiffView
              beforeValue={originTableDetailsData ?? ''}
              afterValue={changedTableDetailsData ?? ''}
              extension={SQL_FILE_EXTENSION}
              type={DDL_DOCUMENT_TYPE.DDL}
            />
          </RawDiffContainer>
        )}
      </ComparisonContentInner>
    </ComparisonContentContainer>
  )
})

DdlEntityComparisonContent.displayName = 'DdlEntityComparisonContent'

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

const RawDiffContainer = styled(Box)({
  flex: '1 1 auto',
  minHeight: 0,
  overflow: 'hidden',
})
