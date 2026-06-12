// TODO(DDL/api-processor): import DDL_ENTITY_KIND_* from api-processor when the DDL plugin ships.
// 'view' is reserved for forward compatibility; v1 emits tables only.
export const DDL_ENTITY_KIND_TABLE = 'table'
export const DDL_ENTITY_KIND_VIEW = 'view'

export type DdlEntityKind = typeof DDL_ENTITY_KIND_TABLE | typeof DDL_ENTITY_KIND_VIEW

export type DdlTableContractDto = Readonly<{
  tableId: string
  kind: DdlEntityKind
  schemaName?: string
  tableName?: string
  documentId?: string
  packageRef?: string
  metadata?: Record<string, unknown>
}>

export type DdlTableContractDetailsDto =
  & DdlTableContractDto
  & Readonly<{
    data?: Record<string, unknown>
  }>

export type DdlContractsSummaryDto = Readonly<{
  tables: number
  views: number
}>

export type DdlTableContract = DdlTableContractDto

export type DdlTableContractDetails = DdlTableContractDetailsDto

export type DdlContractsSummary = DdlContractsSummaryDto

export function hasDdlContracts(ddl?: DdlContractsSummary): ddl is DdlContractsSummary {
  if (!ddl) {
    return false
  }
  return ddl.tables > 0 || ddl.views > 0
}
