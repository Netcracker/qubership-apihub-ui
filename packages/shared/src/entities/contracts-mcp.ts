import type { McpKind } from '@netcracker/qubership-apihub-api-processor'

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

export type McpContractsSummaryDto = Readonly<{
  init: number
  tools: number
  prompts: number
  resources: number
}>

export type McpContract = McpContractDto

export type McpContractDetails = McpContractDetailsDto

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
