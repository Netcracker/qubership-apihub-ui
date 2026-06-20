import { groupBy, isString } from 'lodash-es'

import type { FileLabelsRecord } from '@netcracker/qubership-apihub-ui-shared/components/FileTableUpload/FileTableUpload'
import { compareMcpDocumentTypes } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import {
  calculateSpecType,
  getFileExtension,
  JSON_FILE_EXTENSION,
} from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { isObject } from '@netcracker/qubership-apihub-ui-shared/utils/objects'
import {
  isMcpDocumentSpecType,
  MCP_DOCUMENT_TYPE,
  type McpDocumentType,
  type SpecType,
} from '@netcracker/qubership-apihub-ui-shared/utils/specs'

import type { PackageVersionConfig } from '@apihub/entities/package-version-config'
import { createFilesRecord } from '@apihub/routes/root/PortalPage/PackagePage/files'

export type McpStagedFileMeta = Readonly<{
  documentType: McpDocumentType
  mcpEndpoint: string
}>

type McpFilesByEndpointGroup = Readonly<{
  mcpEndpoint: string
  files: ReadonlyArray<Readonly<{ fileName: string; meta: McpStagedFileMeta }>>
}>

export function groupMcpFilesByEndpoint(
  mcpFiles: ReadonlyMap<string, McpStagedFileMeta>,
  orderedEndpoints: ReadonlyArray<string>,
): ReadonlyArray<McpFilesByEndpointGroup> {
  const entries = [...mcpFiles.entries()].map(([fileName, meta]) => ({
    fileName: fileName,
    meta: meta,
    mcpEndpoint: meta.mcpEndpoint,
  }))
  const grouped = groupBy(entries, entry => entry.mcpEndpoint)

  const endpointOrder = orderedEndpoints.filter(endpoint => grouped[endpoint]?.length)
  for (const endpoint of Object.keys(grouped)) {
    if (!endpointOrder.includes(endpoint)) {
      endpointOrder.push(endpoint)
    }
  }

  return endpointOrder.map(mcpEndpoint => ({
    mcpEndpoint: mcpEndpoint,
    files: (grouped[mcpEndpoint] ?? [])
      .map(({ fileName, meta }) => ({ fileName: fileName, meta: meta }))
      .sort(compareMcpStagedFiles),
  })).filter(group => group.files.length > 0)
}

export function pruneMcpEndpoint(
  endpoints: string[],
  mcpFiles: ReadonlyMap<string, McpStagedFileMeta>,
  endpoint: string,
): string[] {
  const stillUsed = [...mcpFiles.values()].some(meta => meta.mcpEndpoint === endpoint)
  return stillUsed ? endpoints : endpoints.filter(item => item !== endpoint)
}

export async function buildFileTypesAndLabels(
  files: File[],
): Promise<Readonly<{ fileTypesMap: Map<string, SpecType>; filesWithLabels: FileLabelsRecord }>> {
  const fileTypesMap = await buildFileTypesMap(files)
  return {
    fileTypesMap: fileTypesMap,
    filesWithLabels: createFilesRecord(files, {}),
  }
}

export async function buildInitFileState(
  files: File[],
  config?: PackageVersionConfig | null,
): Promise<
  Readonly<{
    fileTypesMap: Map<string, SpecType>
    filesWithLabels: FileLabelsRecord
    mcpFiles: Map<string, McpStagedFileMeta>
    mcpEndpoints: string[]
  }>
> {
  const fileTypesMap = await buildFileTypesMap(files)
  const mcpFiles = new Map<string, McpStagedFileMeta>()
  const mcpEndpoints: string[] = []

  if (config) {
    for (const file of files) {
      const configFile = config.files?.find(f => f.fileKey === file.name)
      const mcpEndpoint = configFile?.metadata?.mcpEndpoint?.trim()
      const documentType = fileTypesMap.get(file.name)
      if (mcpEndpoint && documentType && isMcpDocumentSpecType(documentType)) {
        mcpFiles.set(file.name, {
          documentType: documentType,
          mcpEndpoint: mcpEndpoint,
        })
        if (!mcpEndpoints.includes(mcpEndpoint)) {
          mcpEndpoints.push(mcpEndpoint)
        }
      }
    }
  }

  const filesWithLabels = config
    ? files.reduce((acc, file) => {
      const fileLabels = config.files?.find(f => f.fileKey === file.name)?.labels ?? []
      acc[file.name] = {
        file: file,
        labels: fileLabels,
      }
      return acc
    }, {} as FileLabelsRecord)
    : {}

  return {
    fileTypesMap: fileTypesMap,
    filesWithLabels: filesWithLabels,
    mcpFiles: mcpFiles,
    mcpEndpoints: mcpEndpoints,
  }
}

export async function partitionFilesByMcp(files: File[]): Promise<
  Readonly<{
    regularFiles: File[]
    mcpCandidates: ReadonlyArray<Readonly<{ file: File; documentType: McpDocumentType }>>
  }>
> {
  const regularFiles: File[] = []
  const mcpCandidates: Array<Readonly<{ file: File; documentType: McpDocumentType }>> = []

  await Promise.all(files.map(async file => {
    const documentType = await readMcpDocumentTypeFromFile(file)
    if (documentType) {
      mcpCandidates.push({ file: file, documentType: documentType })
    } else {
      regularFiles.push(file)
    }
  }))

  return { regularFiles: regularFiles, mcpCandidates: mcpCandidates }
}

function unwrapJsonRpc(parsed: Record<string, unknown>): Record<string, unknown> {
  return isString(parsed.jsonrpc) && isObject(parsed.result) ? parsed.result : parsed
}

function detectMcpDocumentType(obj: Record<string, unknown>): McpDocumentType | undefined {
  if (isObject(obj.capabilities) && isObject(obj.serverInfo)) {
    return MCP_DOCUMENT_TYPE.MCP_INIT
  }
  if (Array.isArray(obj.tools)) {
    return MCP_DOCUMENT_TYPE.MCP_TOOLS
  }
  if (Array.isArray(obj.resources)) {
    return MCP_DOCUMENT_TYPE.MCP_RESOURCES
  }
  if (Array.isArray(obj.prompts)) {
    return MCP_DOCUMENT_TYPE.MCP_PROMPTS
  }
  return undefined
}

function detectMcpDocumentTypeFromJson(json: unknown): McpDocumentType | undefined {
  if (!isObject(json)) {
    return undefined
  }
  return detectMcpDocumentType(unwrapJsonRpc(json))
}

async function readMcpDocumentTypeFromFile(file: File): Promise<McpDocumentType | undefined> {
  if (!isJsonUploadCandidate(file.name)) {
    return undefined
  }
  try {
    return detectMcpDocumentTypeFromJson(JSON.parse(await file.text()))
  } catch {
    return undefined
  }
}

async function buildFileTypesMap(files: File[]): Promise<Map<string, SpecType>> {
  const entries = await Promise.all(files.map(async file => {
    const mcpType = await readMcpDocumentTypeFromFile(file)
    if (mcpType) {
      return [file.name, mcpType] as [string, SpecType]
    }
    const extension = getFileExtension(file.name)
    const content = await file.text()
    return [file.name, calculateSpecType(extension, content)] as [string, SpecType]
  }))
  return new Map(entries)
}

function compareMcpStagedFiles(
  fileA: Readonly<{ fileName: string; meta: McpStagedFileMeta }>,
  fileB: Readonly<{ fileName: string; meta: McpStagedFileMeta }>,
): number {
  const typeCompare = compareMcpDocumentTypes(fileA.meta.documentType, fileB.meta.documentType)
  if (typeCompare !== 0) {
    return typeCompare
  }
  return fileA.fileName.localeCompare(fileB.fileName)
}

function isJsonUploadCandidate(fileName: string): boolean {
  const lastDotIndex = fileName.lastIndexOf('.')
  if (lastDotIndex === -1) {
    return true
  }
  return getFileExtension(fileName) === JSON_FILE_EXTENSION
}
