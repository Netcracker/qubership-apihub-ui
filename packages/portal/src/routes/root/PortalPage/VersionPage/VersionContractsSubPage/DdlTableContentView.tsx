import { buildFromDdlInBrowser } from '@apihub/utils/buildFromDdlInBrowser'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { Realm } from '@netcracker/qubership-apihub-ddlapi'
import { type FC, memo, useCallback, useEffect, useMemo, useState } from 'react'

import { DdlTableViewer } from '@netcracker/qubership-apihub-api-doc-viewer'
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
import { theme } from '@netcracker/qubership-apihub-ui-shared/themes/theme'
import { SQL_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
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

  const [normalizedSource, setNormalizedSource] = useState<Realm | undefined>(undefined)
  const [parseError, setParseError] = useState<string | null>(null)

  useEffect(() => {
    if (!content || viewMode === RAW_SPEC_VIEW_MODE) {
      setNormalizedSource(undefined)
      setParseError(null)
      return
    }

    let cancelled = false

    buildFromDdlInBrowser(content, {
      onError: (err) => {
        console.error('[DDL API Normalizing]', err)
      },
    })
      .then((realm) => {
        if (!cancelled) {
          setNormalizedSource(realm)
          setParseError(null)
        }
      })
      .catch((cause: unknown) => {
        if (!cancelled) {
          setNormalizedSource(undefined)
          setParseError(cause instanceof Error ? cause.message : String(cause))
        }
      })

    return () => {
      cancelled = true
    }
  }, [content, viewMode])

  const schema = useMemo(() => {
    if (!normalizedSource) {
      return undefined
    }
    return normalizedSource.schemas[0]
  }, [normalizedSource])

  const table = useMemo(() => {
    if (!schema || !schema.tables) {
      return undefined
    }
    return schema.tables[0]
  }, [schema])

  const tableKey = useMemo(() => {
    if (!schema || !table) {
      return undefined
    }
    return { schemaName: schema.name, name: table.name }
  }, [schema, table])

  const navigationCallback = useCallback(() => {
    if (!schema || !table) {
      return undefined
    }
    return () => alert(`${schema.name}.${table.name}`)
  }, [schema, table])

  return (
    <ContentContainer>
      {viewMode === DOC_SPEC_VIEW_MODE && (
        parseError
          ? <ParseErrorMessage>{parseError}</ParseErrorMessage>
          : (
            <DdlTableViewer
              source={normalizedSource}
              tableKey={tableKey}
              navigationCallback={navigationCallback}
              displayMode={DETAILED_SCHEMA_VIEW_MODE}
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
              navigationCallback={navigationCallback}
              displayMode={SIMPLE_SCHEMA_VIEW_MODE}
              devMode={true}
            />
          )
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
  padding: theme.spacing(2),
})

const ParseErrorMessage = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  padding: theme.spacing(1.5),
  whiteSpace: 'pre-wrap',
}))
