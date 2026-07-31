import { useEffect, useMemo, useRef, useState } from 'react'

import type { FileLabelsRecord } from '@netcracker/qubership-apihub-ui-shared/components/FileTableUpload/FileTableUpload'
import { MCP_DOCUMENT_TYPE } from '@netcracker/qubership-apihub-ui-shared/utils/specs'

import type { McpStagedFileMeta } from '@apihub/routes/root/PortalPage/PackagePage/mcpPublish'
import {
  collectMcpEndpointValidations,
  getPublishDisabledHint,
  hasBlockingMcpValidations,
  type McpEndpointValidation,
} from '@apihub/routes/root/PortalPage/PackagePage/mcpValidation'

export type UseMcpPublishValidationResult = Readonly<{
  endpointValidations: ReadonlyMap<string, McpEndpointValidation>
  isValidating: boolean
  hasBlockingIssues: boolean
  publishDisabledHint: string | undefined
}>

type McpValidationSources = Readonly<{
  mcpStagedFileMetaByName: ReadonlyMap<string, McpStagedFileMeta>
  filesWithLabels: FileLabelsRecord
}>

export function useMcpPublishValidation(
  mcpStagedFileMetaByName: ReadonlyMap<string, McpStagedFileMeta>,
  filesWithLabels: FileLabelsRecord,
): UseMcpPublishValidationResult {
  const [endpointValidations, setEndpointValidations] = useState<ReadonlyMap<string, McpEndpointValidation>>(new Map())
  const [isValidating, setIsValidating] = useState(false)

  const sourcesRef = useRef<McpValidationSources>({ mcpStagedFileMetaByName, filesWithLabels })
  sourcesRef.current = { mcpStagedFileMetaByName, filesWithLabels }

  // Content fingerprint: re-validate only when MCP-relevant data changes, not on Map/record identity churn.
  const validationContentKey = useMemo(
    () => buildValidationContentKey(mcpStagedFileMetaByName, filesWithLabels),
    [mcpStagedFileMetaByName, filesWithLabels],
  )

  useEffect(() => {
    let cancelled = false
    const { mcpStagedFileMetaByName, filesWithLabels } = sourcesRef.current

    if (mcpStagedFileMetaByName.size === 0) {
      setEndpointValidations(new Map())
      setIsValidating(false)
      return
    }

    setIsValidating(true)
    void readInitFileContents(mcpStagedFileMetaByName, filesWithLabels)
      .then(initFileContents => {
        if (cancelled) {
          return
        }
        setEndpointValidations(collectMcpEndpointValidations({
          mcpStagedFileMetaByName,
          initFileContents,
        }))
      })
      .finally(() => {
        if (!cancelled) {
          setIsValidating(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [validationContentKey])

  return useMemo(() => ({
    endpointValidations: endpointValidations,
    isValidating: isValidating,
    hasBlockingIssues: hasBlockingMcpValidations(endpointValidations),
    publishDisabledHint: getPublishDisabledHint(endpointValidations),
  }), [endpointValidations, isValidating])
}

async function readInitFileContents(
  mcpStagedFileMetaByName: ReadonlyMap<string, McpStagedFileMeta>,
  filesWithLabels: FileLabelsRecord,
): Promise<ReadonlyMap<string, string>> {
  const entries = await Promise.all(
    [...mcpStagedFileMetaByName.entries()]
      .filter(([, meta]) => meta.documentType === MCP_DOCUMENT_TYPE.MCP_INIT)
      .map(async ([fileName]) => {
        const file = filesWithLabels[fileName]?.file
        if (!file) {
          return [fileName, ''] as const
        }
        return [fileName, await file.text()] as const
      }),
  )
  return new Map(entries)
}

function buildValidationContentKey(
  mcpStagedFileMetaByName: ReadonlyMap<string, McpStagedFileMeta>,
  filesWithLabels: FileLabelsRecord,
): string {
  return [...mcpStagedFileMetaByName.entries()]
    .map(([fileName, meta]) => {
      const file = filesWithLabels[fileName]?.file
      const initContentKey = meta.documentType === MCP_DOCUMENT_TYPE.MCP_INIT
        ? `:${file?.lastModified ?? 0}:${file?.size ?? 0}`
        : ''
      return `${fileName}:${meta.documentType}:${meta.mcpEndpoint}${initContentKey}`
    })
    .sort()
    .join('|')
}
