import type { McpKind } from '@netcracker/qubership-apihub-api-processor'

/** Browse/API collection segment (wire value, also used in URL search params). */
export const MCP_COLLECTION_INIT = 'init'
export const MCP_COLLECTION_TOOLS = 'tools'
export const MCP_COLLECTION_PROMPTS = 'prompts'
export const MCP_COLLECTION_RESOURCES = 'resources'

export const MCP_COLLECTIONS = [
  MCP_COLLECTION_INIT,
  MCP_COLLECTION_TOOLS,
  MCP_COLLECTION_PROMPTS,
  MCP_COLLECTION_RESOURCES,
] as const

export type McpCollection = (typeof MCP_COLLECTIONS)[number]

export const MCP_COLLECTION_LABELS: Record<McpCollection, string> = {
  [MCP_COLLECTION_INIT]: 'Overview',
  [MCP_COLLECTION_TOOLS]: 'Tools',
  [MCP_COLLECTION_PROMPTS]: 'Prompts',
  [MCP_COLLECTION_RESOURCES]: 'Resources',
}

export const MCP_COLLECTION_EMPTY_MESSAGES: Record<McpCollection, string> = {
  [MCP_COLLECTION_INIT]: 'No endpoints',
  [MCP_COLLECTION_TOOLS]: 'No tools',
  [MCP_COLLECTION_PROMPTS]: 'No prompts',
  [MCP_COLLECTION_RESOURCES]: 'No resources',
}

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

export type McpEntity = McpContractDto

export type McpEntityDetails = McpContractDetailsDto

export type McpContractsSummaryDto = Readonly<{
  init: number
  tools: number
  prompts: number
  resources: number
}>

export type McpContractsSummary = Readonly<
  Omit<McpContractsSummaryDto, 'init'> & { endpoints: number }
>

export function parseMcpCollectionParam(value: string | undefined): McpCollection | undefined {
  if (value === undefined) {
    return undefined
  }
  if (value === 'overview') {
    return MCP_COLLECTION_INIT
  }
  return MCP_COLLECTIONS.find(collection => collection === value)
}

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

export function toMcpEntity(dto: McpContractDto): McpEntity {
  return dto
}

export function getMcpEntityDisplayName(entity: Readonly<Pick<McpEntity, 'name' | 'entityId'>>): string {
  return entity.name ?? entity.entityId
}

export function getMcpEntityDescription(entity: Readonly<Pick<McpEntity, 'metadata'>>): string | undefined {
  const description = entity.metadata?.description
  if (typeof description !== 'string') {
    return undefined
  }
  const trimmed = description.trim()
  return trimmed === '' ? undefined : trimmed
}
