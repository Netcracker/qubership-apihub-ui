import type { ExportSettingsPopupDetail } from '@apihub/routes/EventBusProvider'
import { useShowErrorNotification } from '@apihub/routes/root/BasePage/Notification'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import type { FC } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useExportConfig } from '../../../routes/root/PortalPage/useExportConfig'
import { isGraphQlSpecType } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { useDownloadPublishedDocument } from '../../../routes/root/PortalPage/VersionPage/useDownloadPublishedDocument'
import type { IRequestDataExport} from '../api/useExport'
import { ExportedEntityKind, useExport, useRemoveExportResult } from '../api/useExport'
import { useExportStatus } from '../api/useExportStatus'
import { ExportSettingsForm } from './ExportSettingsForm'

export const ExportSettingsPopup: FC<PopupProps> = ({ open, setOpen, detail }) => {
  const {
    exportedEntity,
    packageId,
    version,
    documentId,
    groupName,
    shareabilityStatus,
    specType,
  } = detail as ExportSettingsPopupDetail

  const showErrorNotification = useShowErrorNotification()

  const [exportConfig, isLoadingExportConfig] = useExportConfig(packageId)

  // Initialize state used for request data export
  const [requestDataExport, setRequestDataExport] = useState<IRequestDataExport | undefined>(undefined)
  const [exportTask, isStartingExport, exportStartingError] = useExport(requestDataExport)
  const removeExportResult = useRemoveExportResult(requestDataExport?.exportedEntity, requestDataExport?.packageId, requestDataExport?.version)
  const isGraphQlExport = exportedEntity === ExportedEntityKind.REST_DOCUMENT && isGraphQlSpecType(specType)
  const [downloadPublishedDocument, isDownloadingPublishedDocument] = useDownloadPublishedDocument({
    packageKey: packageId,
    versionKey: version,
    slug: documentId!,
  })

  const [exporting, setExporting] = useState(false)
  const [needToGetExportStatus, setNeedToGetExportStatus] = useState(false)

  useEffect(() => {
    if (exportTask) {
      setExporting(true)
      setNeedToGetExportStatus(true)
    }
  }, [exportTask])

  useEffect(() => {
    if (exportStartingError) {
      showErrorNotification({
        title: 'Starting export failed',
        message: exportStartingError.message,
      })
    }
  }, [exportStartingError, showErrorNotification])

  const completeExport = useCallback(() => {
    removeExportResult()
    setExporting(false)
    setOpen(false)
    setNeedToGetExportStatus(false)
  }, [removeExportResult, setOpen])

  const onDownloadPublishedDocument = useCallback(() => {
    if (documentId) {
      downloadPublishedDocument()
      setOpen(false)
    }
  }, [documentId, downloadPublishedDocument, setOpen])

  useExportStatus(exportTask?.exportId, needToGetExportStatus, completeExport, completeExport)

  return (
    <ExportSettingsForm
      open={open}
      onClose={() => setOpen(false)}
      exportConfig={exportConfig}
      exportedEntity={exportedEntity}
      packageId={packageId}
      version={version}
      documentId={documentId}
      groupName={groupName}
      shareabilityStatus={shareabilityStatus}
      exporting={exporting}
      isLoadingExportConfig={isLoadingExportConfig}
      isStartingExport={isStartingExport || (isGraphQlExport && isDownloadingPublishedDocument)}
      onDownloadPublishedDocument={isGraphQlExport ? onDownloadPublishedDocument : undefined}
      setRequestDataExport={setRequestDataExport}
      specType={specType}
    />
  )
}
