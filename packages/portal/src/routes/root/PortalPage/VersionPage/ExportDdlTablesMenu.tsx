import type { FC } from 'react'
import { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { ExportMenuButton } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ExportMenuButton'
import type { DdlContractEntity } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import { toFormattedJsonString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'

export type ExportDdlTablesMenuProps = {
  tables: ReadonlyArray<DdlContractEntity>
  textFilter?: string
  disabled?: boolean
}

export const ExportDdlTablesMenu: FC<ExportDdlTablesMenuProps> = memo<ExportDdlTablesMenuProps>(({
  tables,
  textFilter,
  disabled,
}) => {
  const { packageId, versionId } = useParams()

  const downloadJson = useCallback((data: ReadonlyArray<DdlContractEntity>, filename: string) => {
    const blob = new Blob([toFormattedJsonString(data as object)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    URL.revokeObjectURL(url)
  }, [])

  const onDownloadAll = useCallback(() => {
    downloadJson(tables, `ddl-tables-${packageId}-${versionId}.json`)
  }, [downloadJson, packageId, tables, versionId])

  const onDownloadFiltered = useCallback(() => {
    const filtered = textFilter
      ? tables.filter(table => {
        const name = [table.schemaName, table.name, table.ddlEntityId].filter(Boolean).join('.')
        return name.toLowerCase().includes(textFilter.toLowerCase())
      })
      : tables
    downloadJson(filtered, `ddl-tables-filtered-${packageId}-${versionId}.json`)
  }, [downloadJson, packageId, tables, textFilter, versionId])

  return (
    <ExportMenuButton
      title="Export"
      disabled={disabled}
      allDownloadText="Download all tables"
      filteredDownloadText="Download filtered tables"
      downloadAll={onDownloadAll}
      downloadFiltered={onDownloadFiltered}
    />
  )
})

ExportDdlTablesMenu.displayName = 'ExportDdlTablesMenu'
