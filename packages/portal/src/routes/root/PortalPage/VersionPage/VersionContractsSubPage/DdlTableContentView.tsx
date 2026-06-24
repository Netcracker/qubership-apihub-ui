import { DocSpecView } from '@apihub/components/DocSpecView'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { type FC, memo, useMemo } from 'react'

import { RawSpecView } from '@netcracker/qubership-apihub-ui-shared/components/SpecificationDialog/RawSpecView'
import type { SpecViewMode } from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import {
  DOC_SPEC_VIEW_MODE,
  RAW_SPEC_VIEW_MODE,
  SIMPLE_SPEC_VIEW_MODE,
} from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import {
  DETAILED_SCHEMA_VIEW_MODE,
  SIMPLE_SCHEMA_VIEW_MODE,
} from '@netcracker/qubership-apihub-ui-shared/entities/schema-view-mode'
import { SQL_FILE_EXTENSION, SQL_FILE_FORMAT } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { DDL_DOCUMENT_TYPE } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { toFormattedJsonString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'

export type DdlTableContentViewProps = {
  data: string | Record<string, unknown> | undefined
  viewMode: SpecViewMode
}

export const DdlTableContentView: FC<DdlTableContentViewProps> = memo<DdlTableContentViewProps>(({
  data,
  viewMode,
}) => {
  const content = useMemo(() => {
    if (!data) {
      return ''
    }
    if (typeof data === 'string') {
      return data
    }
    return toFormattedJsonString(data)
  }, [data])

  return (
    <ContentContainer>
      {/* TODO: replace DocSpecView with DdlTableViewer from api-doc-viewer when the DDL doc viewer ships in the UI dependency. */}
      {viewMode === DOC_SPEC_VIEW_MODE && (
        <DocSpecView
          value={content}
          type={DDL_DOCUMENT_TYPE.DDL}
          format={SQL_FILE_FORMAT}
          schemaViewMode={DETAILED_SCHEMA_VIEW_MODE}
        />
      )}

      {viewMode === SIMPLE_SPEC_VIEW_MODE && (
        <DocSpecView
          value={content}
          type={DDL_DOCUMENT_TYPE.DDL}
          format={SQL_FILE_FORMAT}
          schemaViewMode={SIMPLE_SCHEMA_VIEW_MODE}
        />
      )}

      {viewMode === RAW_SPEC_VIEW_MODE && (
        <RawSpecView
          value={content}
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
  overflow: 'hidden',
})
