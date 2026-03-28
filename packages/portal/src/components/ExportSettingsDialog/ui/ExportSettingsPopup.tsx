import { type FC, useCallback, useEffect, useMemo, useState } from 'react'

import type { ExportSettingsPopupDetail } from '@apihub/routes/EventBusProvider'
import { useShowErrorNotification } from '@apihub/routes/root/BasePage/Notification'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { isExportableSpecType } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { useExportConfig } from '../../../routes/root/PortalPage/useExportConfig'
import { useDocuments } from '../../../routes/root/PortalPage/VersionPage/useDocuments'
import { useDownloadPublishedDocument } from '../../../routes/root/PortalPage/VersionPage/useDownloadPublishedDocument'
import { ExportedEntityKind, type IRequestDataExport, useExport, useRemoveExportResult } from '../api/useExport'
import { useExportStatus } from '../api/useExportStatus'
import { useShareabilitySummary } from '../hooks/useShareabilitySummary'
import { ExportSettingsForm } from './ExportSettingsForm'

export const ExportSettingsPopup: FC<PopupProps> = ({ open, setOpen, detail }) => {
  const {
    exportedEntity,
    packageId,
    version,
    documentId,
    groupName,
    shareabilityStatus,
    hasRestApi,
    specType,
  } = detail as ExportSettingsPopupDetail

  const showErrorNotification = useShowErrorNotification()

  const [exportConfig, isLoadingExportConfig] = useExportConfig(packageId)

  // Fetch documents for version export
  const isVersionExport = exportedEntity === ExportedEntityKind.VERSION
  const { documents, isLoading: isLoadingDocuments } = useDocuments({
    packageKey: packageId,
    versionKey: version,
    enabled: isVersionExport,
  })

  const shareabilitySummary = useShareabilitySummary(isVersionExport ? documents : [])

  // Version with exactly 1 document -> single-doc export behavior
  const effective = useMemo(() => {
    if (isVersionExport && !isLoadingDocuments && documents.length === 1) {
      const [doc] = documents
      return {
        exportedEntity: ExportedEntityKind.REST_DOCUMENT as const,
        documentId: doc.slug,
        specType: doc.type,
        shareabilityStatus: doc.shareabilityStatus,
      }
    }
    return { exportedEntity, documentId, specType, shareabilityStatus }
  }, [isVersionExport, isLoadingDocuments, documents, exportedEntity, documentId, specType, shareabilityStatus])

  const isDownloadOnly = effective.exportedEntity === ExportedEntityKind.REST_DOCUMENT
    && !!effective.documentId
    && !isExportableSpecType(effective.specType)

  const [downloadPublishedDocument, isDownloadingDocument] = useDownloadPublishedDocument({
    packageKey: packageId,
    versionKey: version,
    slug: effective.documentId!,
  })

  // Initialize state used for request data export
  const [requestDataExport, setRequestDataExport] = useState<IRequestDataExport | undefined>(undefined)
  const [exportTask, isStartingExport, exportStartingError] = useExport(requestDataExport)
  const removeExportResult = useRemoveExportResult(
    requestDataExport?.exportedEntity,
    requestDataExport?.packageId,
    requestDataExport?.version,
  )

  const isStartingAnyExport = isStartingExport || (isDownloadingDocument && isDownloadOnly)

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
    if (effective.documentId) {
      downloadPublishedDocument()
      setOpen(false)
    }
  }, [effective.documentId, downloadPublishedDocument, setOpen])

  useExportStatus(exportTask?.exportId, needToGetExportStatus, completeExport, completeExport)

  return (
    <ExportSettingsForm
      open={open}
      onClose={() => setOpen(false)}
      exportConfig={exportConfig}
      exportedEntity={effective.exportedEntity}
      packageId={packageId}
      version={version}
      documentId={effective.documentId}
      groupName={groupName}
      exporting={exporting}
      isLoadingExportConfig={isLoadingExportConfig || (isVersionExport && isLoadingDocuments)}
      isStartingExport={isStartingAnyExport}
      setRequestDataExport={setRequestDataExport}
      hasRestApi={hasRestApi}
      specType={effective.specType}
      shareabilityStatus={effective.shareabilityStatus}
      shareabilitySummary={shareabilitySummary}
      onDownloadPublishedDocument={isDownloadOnly ? onDownloadPublishedDocument : undefined}
    />
  )
}
