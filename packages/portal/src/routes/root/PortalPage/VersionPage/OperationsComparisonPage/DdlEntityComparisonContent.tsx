import type { OperationDisplayMode } from '@apihub/routes/root/PortalPage/VersionPage/OperationContent/OperationView/OperationDisplayMode'
import { DdlTableContentView } from '@apihub/routes/root/PortalPage/VersionPage/VersionContractsSubPage/DdlTableContentView'
import { DOC_SPEC_VIEW_MODE } from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import { type FC, memo } from 'react'

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
  return (
    <DdlTableContentView
      data={undefined}
      viewMode={DOC_SPEC_VIEW_MODE}
      displayMode={displayMode}
      originRawContent={originTableDetailsData}
      changedRawContent={changedTableDetailsData}
      isLoading={isLoading}
      isEntityExist={isEntityExist}
      paddingBottom={paddingBottom}
    />
  )
})

DdlEntityComparisonContent.displayName = 'DdlEntityComparisonContent'
