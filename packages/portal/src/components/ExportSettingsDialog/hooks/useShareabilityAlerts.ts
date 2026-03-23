import { useMemo } from 'react'

import type { ShareabilityStatus } from '@netcracker/qubership-apihub-api-processor'
import { ExportedEntityKind } from '../api/useExport'
import { ExportSettingsFormFieldOptionScope } from '../entities/export-settings-form-field'
import {
  buildSingleDocumentShareabilityAlert,
  buildVersionExportShareabilityAlert,
  type ShareabilityFieldAlert,
} from '../ui/export-settings-alerts'
import type { ShareabilitySummary } from './useShareabilitySummary'

export type ShareabilityAlerts = {
  versionExportAlert: ShareabilityFieldAlert | null
  singleDocExportAlert: ShareabilityFieldAlert | null
  versionExportDisabled: boolean
}

type UseShareabilityAlertsParams = {
  exportedEntity: ExportedEntityKind
  scopeValue?: ExportSettingsFormFieldOptionScope
  shareabilityStatus?: ShareabilityStatus
  summary: ShareabilitySummary
}

export function useShareabilityAlerts({
  exportedEntity,
  scopeValue,
  shareabilityStatus,
  summary,
}: UseShareabilityAlertsParams): ShareabilityAlerts {
  const isVersionExport = exportedEntity === ExportedEntityKind.VERSION
  const isSingleDocExport = exportedEntity === ExportedEntityKind.REST_DOCUMENT
  const isOnlyShareableScope = isVersionExport
    && (!scopeValue || scopeValue === ExportSettingsFormFieldOptionScope.ONLY_SHAREABLE)

  return useMemo(
    () => ({
      versionExportAlert: isVersionExport ? buildVersionExportShareabilityAlert(scopeValue, summary) : null,
      singleDocExportAlert: isSingleDocExport ? buildSingleDocumentShareabilityAlert(shareabilityStatus) : null,
      versionExportDisabled: isOnlyShareableScope && summary.shareable === 0 && summary.total > 0,
    }),
    [isOnlyShareableScope, isSingleDocExport, scopeValue, shareabilityStatus, summary, isVersionExport],
  )
}
