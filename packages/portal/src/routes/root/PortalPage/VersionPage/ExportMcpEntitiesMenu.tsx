import { type FC, memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { ExportMenuButton } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ExportMenuButton'
import {
  type ExportableMcpCollection,
  MCP_COLLECTION_LABELS,
} from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'

import { useFullMainVersion } from '../FullMainVersionProvider'
import { useDownloadMcpEntitiesAsExcel } from './useDownloadMcpEntitiesAsExcel'

type ExportMcpEntitiesMenuProps = Readonly<{
  collection: ExportableMcpCollection
  textFilter?: string
  refPackageId?: string
  disabled?: boolean
}>

export const ExportMcpEntitiesMenu: FC<ExportMcpEntitiesMenuProps> = memo(({
  collection,
  textFilter,
  refPackageId,
  disabled,
}) => {
  const { packageId } = useParams()
  const fullVersion = useFullMainVersion()
  const [downloadMcpEntitiesAsExcel] = useDownloadMcpEntitiesAsExcel()

  const collectionLabel = MCP_COLLECTION_LABELS[collection]
  const collectionLabelLower = collectionLabel.toLowerCase()

  const { title, allDownloadText, filteredDownloadText } = useMemo(() => ({
    title: `Export ${collectionLabel} to Excel`,
    allDownloadText: `All ${collectionLabelLower}`,
    filteredDownloadText: `Filtered ${collectionLabelLower}`,
  }), [collectionLabel, collectionLabelLower])

  const onDownloadAll = (): void => {
    downloadMcpEntitiesAsExcel({
      packageKey: packageId!,
      version: fullVersion!,
      collection: collection,
      refPackageId: refPackageId,
    })
  }

  const onDownloadFiltered = (): void => {
    downloadMcpEntitiesAsExcel({
      packageKey: packageId!,
      version: fullVersion!,
      collection: collection,
      textFilter: textFilter,
      refPackageId: refPackageId,
    })
  }

  return (
    <ExportMenuButton
      title={title}
      disabled={disabled}
      allDownloadText={allDownloadText}
      filteredDownloadText={filteredDownloadText}
      downloadAll={onDownloadAll}
      downloadFiltered={onDownloadFiltered}
    />
  )
})

ExportMcpEntitiesMenu.displayName = 'ExportMcpEntitiesMenu'
