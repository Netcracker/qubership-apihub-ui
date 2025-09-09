import type { OriginalDocumentFileFormat } from '@apihub/routes/root/PortalPage/VersionPage/VersionApiQualitySubPage/types'
import type { IssuePath } from './issue-paths'
import type { IssueSeverity } from './issue-severities'
import { IssueSeverities } from './issue-severities'

import { findLocationByPath } from '@netcracker/qubership-apihub-ui-shared/utils/specifications.v2'
import type { editor as Editor } from 'monaco-editor'
import { MarkerSeverity } from 'monaco-editor'

export type IssueDto = {
  path: IssuePath
  severity: IssueSeverity
  message: string
  code: string
}

export type Issue = IssueDto

// TODO 26.08.25 // Move it somewhere else
export function transformIssuesToMarkers(
  content: string,
  format: OriginalDocumentFileFormat,
  issues: readonly Issue[],
): Editor.IMarkerData[] {
  const notFilteredMarkers: (Editor.IMarkerData | null)[] = issues
    .map(issue => {
      const { path } = issue
      const location = findLocationByPath(content, path, format)
      if (!location) {
        return null
      }
      let severity: MarkerSeverity
      switch (issue.severity) {
        case IssueSeverities.ERROR:
          severity = MarkerSeverity.Error
          break
        case IssueSeverities.WARNING:
          severity = MarkerSeverity.Warning
          break
        case IssueSeverities.INFO:
          severity = MarkerSeverity.Info
          break
        case IssueSeverities.HINT:
          severity = MarkerSeverity.Hint
          break
      }
      return {
        startLineNumber: location.range.start.line + 1,
        startColumn: location.range.start.character,
        endLineNumber: location.range.end.line + 1,
        endColumn: location.range.end.character,
        message: issue.message,
        severity: severity,
        source: `spectral (${issue.code})`,
      }
    })
  return notFilteredMarkers.filter((marker): marker is Editor.IMarkerData => marker !== null)
}
