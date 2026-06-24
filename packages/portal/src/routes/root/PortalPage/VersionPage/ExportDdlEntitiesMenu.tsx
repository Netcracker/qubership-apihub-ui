import { type FC, memo } from 'react'
import { useParams } from 'react-router-dom'

import { ExportMenuButton } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ExportMenuButton'

import { useFullMainVersion } from '../FullMainVersionProvider'
import { useDownloadDdlEntitiesAsExcel } from './useDownloadDdlEntitiesAsExcel'

export type ExportDdlEntitiesMenuProps = Readonly<{
  textFilter?: string
  refPackageId?: string
  disabled?: boolean
}>

export const ExportDdlEntitiesMenu: FC<ExportDdlEntitiesMenuProps> = memo<ExportDdlEntitiesMenuProps>(({
  textFilter,
  refPackageId,
  disabled,
}) => {
  const { packageId } = useParams()
  const fullVersion = useFullMainVersion()
  const [downloadDdlEntitiesAsExcel] = useDownloadDdlEntitiesAsExcel()

  const onDownloadAll = (): void => {
    downloadDdlEntitiesAsExcel({
      packageKey: packageId!,
      version: fullVersion!,
      refPackageId: refPackageId,
    })
  }

  const onDownloadFiltered = (): void => {
    downloadDdlEntitiesAsExcel({
      packageKey: packageId!,
      version: fullVersion!,
      textFilter: textFilter,
      refPackageId: refPackageId,
    })
  }

  return (
    <ExportMenuButton
      title="Export"
      disabled={disabled}
      allDownloadText="All entities"
      filteredDownloadText="Filtered entities"
      downloadAll={onDownloadAll}
      downloadFiltered={onDownloadFiltered}
    />
  )
})

ExportDdlEntitiesMenu.displayName = 'ExportDdlEntitiesMenu'
