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

export const DDL_TABLES_EMPTY_MESSAGE = 'No tables'

export function hasDdlContracts(ddl?: DdlContractsSummary): ddl is DdlContractsSummary {
  if (!ddl) {
    return false
  }
  return ddl.tables > 0 || ddl.views > 0
}

export function toDdlTable(dto: DdlTableContractDto): DdlTableContract {
  return dto
}

export function getDdlTableTitle(
  table: Readonly<Pick<DdlTableContractDto, 'tableName' | 'tableId'>>,
): string {
  return table.tableName ?? table.tableId
}

export function getDdlTableSchemaName(
  table: Readonly<Pick<DdlTableContractDto, 'schemaName'>>,
): string | undefined {
  return table.schemaName
}

export function getDdlTableDescription(
  table: Readonly<Pick<DdlTableContractDto, 'metadata'>>,
): string | undefined {
  const description = table.metadata?.description
  if (typeof description !== 'string') {
    return undefined
  }
  const trimmed = description.trim()
  return trimmed === '' ? undefined : trimmed
}
