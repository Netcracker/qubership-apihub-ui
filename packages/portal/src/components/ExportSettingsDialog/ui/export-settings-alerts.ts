import {
  SHAREABILITY_STATUS_NON_SHAREABLE,
  SHAREABILITY_STATUS_SHAREABLE,
  SHAREABILITY_STATUS_UNKNOWN,
  type ShareabilityStatus,
} from '@netcracker/qubership-apihub-api-processor'
import { ExportSettingsFormFieldOptionScope } from '../entities/export-settings-form-field'
import type { ShareabilitySummary } from '../hooks/useShareabilitySummary'

export type ShareabilityFieldAlert = {
  severity: 'success' | 'warning' | 'error'
  title: string
  message: string
}

export const buildSingleDocumentShareabilityAlert = (
  status?: ShareabilityStatus,
): ShareabilityFieldAlert | null => {
  switch (status) {
    case SHAREABILITY_STATUS_SHAREABLE:
      return {
        severity: 'success',
        title: 'Shareable document',
        message: 'This document is marked as shareable by the package owner.',
      }
    case SHAREABILITY_STATUS_UNKNOWN:
      return {
        severity: 'warning',
        title: 'Unknown shareability',
        message: 'The shareability status of this document is unknown. Contact the package owner to clarify.',
      }
    case SHAREABILITY_STATUS_NON_SHAREABLE:
      return {
        severity: 'error',
        title: 'Non-shareable document',
        message: 'This document is marked as non-shareable by the package owner.',
      }
    default:
      return null
  }
}

export const buildVersionExportShareabilityAlert = (
  scopeValue: ExportSettingsFormFieldOptionScope | undefined,
  summary: ShareabilitySummary,
): ShareabilityFieldAlert | null => {
  if (summary.total === 0) {
    return null
  }

  const isOnlyShareableScope = !scopeValue || scopeValue === ExportSettingsFormFieldOptionScope.ONLY_SHAREABLE

  if (isOnlyShareableScope) {
    // "Only shareable documents" scope
    if (summary.shareable > 0) {
      return {
        severity: 'success',
        title: 'Shareable documents only',
        message: `${summary.shareable} shareable documents out of ${summary.total} will be exported.`,
      }
    }
    if (summary.unknown > 0) {
      return {
        severity: 'warning',
        title: 'No shareable documents found',
        message:
          'No documents are confirmed as shareable in this version. Some documents have unknown shareability status. Contact the package owner to clarify.',
      }
    }
    return {
      severity: 'warning',
      title: 'No shareable documents found',
      message: 'All documents in this version are marked as non-shareable by the package owner.',
    }
  }

  // "All documents" scope
  if (summary.nonShareable === 0 && summary.unknown === 0) {
    return {
      severity: 'success',
      title: 'All shareable',
      message: `All ${summary.total} documents will be exported. All are marked as shareable by the package owner.`,
    }
  }

  if (summary.nonShareable > 0) {
    const parts: string[] = []
    parts.push(`${summary.nonShareable} marked as non-shareable`)
    if (summary.unknown > 0) {
      parts.push(`${summary.unknown} with unknown shareability status`)
    }

    return {
      severity: 'error',
      title: 'Includes restricted documents',
      message: `All ${summary.total} documents will be exported, including ${parts.join(' and ')}.`,
    }
  }

  return {
    severity: 'warning',
    title: 'Unknown shareability',
    message: `${summary.unknown} documents have unknown shareability status. Contact the package owner to clarify.`,
  }
}
