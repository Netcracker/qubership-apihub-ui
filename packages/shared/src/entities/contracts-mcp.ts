import { MCP_KIND, type McpKind } from '@netcracker/qubership-apihub-api-processor'

export const MCP_ARTIFACT_OVERVIEW = 'overview'
export const MCP_ARTIFACT_TOOLS = 'tools'
export const MCP_ARTIFACT_PROMPTS = 'prompts'
export const MCP_ARTIFACT_RESOURCES = 'resources'

export const MCP_ARTIFACTS = [
  MCP_ARTIFACT_OVERVIEW,
  MCP_ARTIFACT_TOOLS,
  MCP_ARTIFACT_PROMPTS,
  MCP_ARTIFACT_RESOURCES,
] as const

export type McpArtifact = (typeof MCP_ARTIFACTS)[number]

export const MCP_ENTITY_KIND_OVERVIEW = MCP_ARTIFACT_OVERVIEW
export const MCP_ENTITY_KIND_TOOL = MCP_KIND.TOOL
export const MCP_ENTITY_KIND_PROMPT = MCP_KIND.PROMPT
export const MCP_ENTITY_KIND_RESOURCE = MCP_KIND.RESOURCE

export const MCP_ENTITY_KINDS = [
  MCP_ENTITY_KIND_OVERVIEW,
  MCP_ENTITY_KIND_TOOL,
  MCP_ENTITY_KIND_PROMPT,
  MCP_ENTITY_KIND_RESOURCE,
] as const

export type McpEntityKind = (typeof MCP_ENTITY_KINDS)[number]

export type McpContractDto = Readonly<{
  entityId: string
  kind: McpKind
  mcpEndpoint: string
  name?: string
  documentId?: string
  packageRef?: string
  metadata?: Record<string, unknown>
}>

export type McpContractDetailsDto =
  & McpContractDto
  & Readonly<{
    data?: Record<string, unknown>
  }>

export type McpEntity = Readonly<Omit<McpContractDto, 'kind'> & { kind: McpEntityKind }>

export type McpEntityDetails = Readonly<Omit<McpContractDetailsDto, 'kind'> & { kind: McpEntityKind }>

export type McpContractsSummaryDto = Readonly<{
  init: number
  tools: number
  prompts: number
  resources: number
}>

export type McpContractsSummary = Readonly<
  Omit<McpContractsSummaryDto, 'init'> & { endpoints: number }
>

export function toMcpContractsSummary(dto: McpContractsSummaryDto): McpContractsSummary {
  const { init, ...counts } = dto
  return { endpoints: init, ...counts }
}

export function hasMcpContracts(mcp?: McpContractsSummary): mcp is McpContractsSummary {
  if (!mcp) {
    return false
  }
  return mcp.endpoints > 0
}
