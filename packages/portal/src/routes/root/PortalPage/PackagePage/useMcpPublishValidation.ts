import { useEffect, useMemo, useState } from 'react'

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

export function useMcpPublishValidation(
  mcpStagedFileMetaByName: ReadonlyMap<string, McpStagedFileMeta>,
  filesWithLabels: FileLabelsRecord,
): UseMcpPublishValidationResult {
  const [endpointValidations, setEndpointValidations] = useState<ReadonlyMap<string, McpEndpointValidation>>(new Map())
  const [isValidating, setIsValidating] = useState(false)

  const validationRevision = useMemo(
    () => buildValidationRevision(mcpStagedFileMetaByName, filesWithLabels),
    [mcpStagedFileMetaByName, filesWithLabels],
  )

  useEffect(() => {
    let cancelled = false
    if (mcpStagedFileMetaByName.size === 0) {
      setEndpointValidations(new Map())
      setIsValidating(false)
      return
    }

    setIsValidating(true)
    readInitFileContents(mcpStagedFileMetaByName, filesWithLabels).then(initFileContents => {
      if (cancelled) {
        return
      }
      setEndpointValidations(collectMcpEndpointValidations({
        mcpStagedFileMetaByName: mcpStagedFileMetaByName,
        initFileContents: initFileContents,
      }))
      setIsValidating(false)
    })

    return () => {
      cancelled = true
    }
    // validationRevision tracks mcpStagedFileMetaByName/filesWithLabels content; avoid re-running on ref-only changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validationRevision])

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

function buildValidationRevision(
  mcpStagedFileMetaByName: ReadonlyMap<string, McpStagedFileMeta>,
  filesWithLabels: FileLabelsRecord,
): string {
  return [...mcpStagedFileMetaByName.entries()]
    .map(([fileName, meta]) => {
      const file = filesWithLabels[fileName]?.file
      const initContentRevision = meta.documentType === MCP_DOCUMENT_TYPE.MCP_INIT
        ? `:${file?.lastModified ?? 0}:${file?.size ?? 0}`
        : ''
      return `${fileName}:${meta.documentType}:${meta.mcpEndpoint}${initContentRevision}`
    })
    .sort()
    .join('|')
}
