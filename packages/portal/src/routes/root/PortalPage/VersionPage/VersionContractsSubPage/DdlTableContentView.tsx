import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { FC } from 'react'
import { memo, useMemo, useState } from 'react'

import { JsonSchemaSpecViewer } from '@netcracker/qubership-apihub-ui-shared/components/SpecificationDialog/JsonSchemaSpecViewer'
import { RawSpecView } from '@netcracker/qubership-apihub-ui-shared/components/SpecificationDialog/RawSpecView'
import type { SpecViewMode } from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import {
  DOC_SPEC_VIEW_MODE,
  RAW_SPEC_VIEW_MODE,
  SIMPLE_SPEC_VIEW_MODE,
} from '@netcracker/qubership-apihub-ui-shared/components/SpecViewToggler'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import type { Spec } from '@netcracker/qubership-apihub-ui-shared/entities/specs'
import { JSON_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { JSON_SCHEMA_SPEC_TYPE } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { toFormattedJsonString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'

const DDL_VIEW_MODES: ReadonlyArray<SpecViewMode> = [
  DOC_SPEC_VIEW_MODE,
  SIMPLE_SPEC_VIEW_MODE,
  RAW_SPEC_VIEW_MODE,
]

const DDL_SPEC: Spec = {
  key: 'ddl-table',
  name: 'ddl-table',
  extension: JSON_FILE_EXTENSION,
  type: JSON_SCHEMA_SPEC_TYPE,
}

export type DdlTableContentViewProps = {
  data: string | Record<string, unknown> | undefined
  viewModeSelector?: boolean
}

export const DdlTableContentView: FC<DdlTableContentViewProps> = memo<DdlTableContentViewProps>(({
  data,
  viewModeSelector = true,
}) => {
  const [viewMode, setViewMode] = useState<SpecViewMode>(DOC_SPEC_VIEW_MODE)

  const formattedContent = useMemo(() => {
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
      {viewModeSelector && (
        <ViewModeRow>
          <Toggler<SpecViewMode>
            mode={viewMode}
            modes={[...DDL_VIEW_MODES]}
            onChange={setViewMode}
          />
        </ViewModeRow>
      )}

      {viewMode === DOC_SPEC_VIEW_MODE && (
        <JsonSchemaSpecViewer
          view={DOC_SPEC_VIEW_MODE}
          spec={DDL_SPEC}
          value={formattedContent}
        />
      )}

      {viewMode === SIMPLE_SPEC_VIEW_MODE && (
        <SimpleViewText variant="body2">
          {formattedContent}
        </SimpleViewText>
      )}

      {viewMode === RAW_SPEC_VIEW_MODE && (
        <RawSpecView
          value={formattedContent}
          extension={JSON_FILE_EXTENSION}
          type={JSON_SCHEMA_SPEC_TYPE}
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

const ViewModeRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: theme.spacing(1, 2),
  flexShrink: 0,
}))

const SimpleViewText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(2),
  overflow: 'auto',
  height: '100%',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontFamily: 'monospace',
}))
