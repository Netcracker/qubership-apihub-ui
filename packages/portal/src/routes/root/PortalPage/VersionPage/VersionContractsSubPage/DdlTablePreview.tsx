import type { FC } from 'react'
import { memo } from 'react'

import { ContractPreviewPanel } from '@netcracker/qubership-apihub-ui-shared/components/ContractPreviewPanel'
import { DdlTableTitleWithMeta } from '@netcracker/qubership-apihub-ui-shared/components/Ddl/DdlTableTitleWithMeta'
import type {
  DdlTableContract,
  DdlTableContractDetails,
} from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'

import { DdlTableContentView } from './DdlTableContentView'

export type DdlTablePreviewProps = {
  table: DdlTableContract | undefined
  tableDetails: DdlTableContractDetails | undefined
  isLoading: boolean
  maxWidthHeaderToolbar?: number
}

export const DdlTablePreview: FC<DdlTablePreviewProps> = memo<DdlTablePreviewProps>(({
  table,
  tableDetails,
  isLoading,
  maxWidthHeaderToolbar,
}) => (
  <ContractPreviewPanel
    title={table && <DdlTableTitleWithMeta onlyTitle table={table} />}
    isLoading={isLoading}
    hasContent={!!table}
    maxWidthHeaderToolbar={maxWidthHeaderToolbar}
    data-testid="DdlTablePreview"
  >
    <DdlTableContentView data={tableDetails?.data} />
  </ContractPreviewPanel>
))

DdlTablePreview.displayName = 'DdlTablePreview'
