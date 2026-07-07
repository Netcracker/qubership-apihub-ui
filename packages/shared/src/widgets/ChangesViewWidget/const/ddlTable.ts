import type { DdlEntityChangeEntry } from '../../../entities/contracts-ddl-changelog'
import type { ColumnModel } from '../../../hooks/table-resizing/useColumnResizing'
import { CHANGES_COLUMN_ID } from './table'

export const DDL_TABLE_COLUMN_ID = 'ddl-table-column'

export type DdlChangesViewTableData = Readonly<{
  change: DdlEntityChangeEntry
  canExpand: boolean
}>

export const DDL_CHANGES_COLUMNS_MODELS: ColumnModel[] = [
  { name: DDL_TABLE_COLUMN_ID },
  { name: CHANGES_COLUMN_ID, fixedWidth: 218 },
]
