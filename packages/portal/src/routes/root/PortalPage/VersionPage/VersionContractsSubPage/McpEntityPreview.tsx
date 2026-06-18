import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { FC } from 'react'
import { memo } from 'react'

import { ContractPreviewPanel } from '@netcracker/qubership-apihub-ui-shared/components/ContractPreviewPanel'
import { McpEntityTitleWithMeta } from '@netcracker/qubership-apihub-ui-shared/components/Mcp/McpEntityTitleWithMeta'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { RawSpecView } from '@netcracker/qubership-apihub-ui-shared/components/SpecificationDialog/RawSpecView'
import type { McpEntity, McpEntityDetails } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import { JSON_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { JSON_SCHEMA_SPEC_TYPE } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { toFormattedJsonString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'

export type McpEntityPreviewProps = {
  entity: McpEntity | undefined
  entityDetails: McpEntityDetails | undefined
  isLoading: boolean
  maxWidthHeaderToolbar?: number
}

export const McpEntityPreview: FC<McpEntityPreviewProps> = memo<McpEntityPreviewProps>(({
  entity,
  entityDetails,
  isLoading,
  maxWidthHeaderToolbar,
}) => {
  const rawContent = entityDetails?.data
    ? toFormattedJsonString(entityDetails.data)
    : ''

  return (
    <ContractPreviewPanel
      title={entity && <McpEntityTitleWithMeta onlyTitle entity={entity} />}
      isLoading={isLoading}
      hasContent={!!entity}
      maxWidthHeaderToolbar={maxWidthHeaderToolbar}
      data-testid="McpEntityPreview"
    >
      <Placeholder
        invisible={!!rawContent}
        area={CONTENT_PLACEHOLDER_AREA}
        message="No content"
        data-testid="NoContentPlaceholder"
      >
        <RawViewBox>
          <RawSpecView
            value={rawContent}
            extension={JSON_FILE_EXTENSION}
            type={JSON_SCHEMA_SPEC_TYPE}
          />
        </RawViewBox>
      </Placeholder>
    </ContractPreviewPanel>
  )
})

McpEntityPreview.displayName = 'McpEntityPreview'

const RawViewBox = styled(Box)({
  height: '100%',
  minHeight: 0,
  overflow: 'hidden',
})
