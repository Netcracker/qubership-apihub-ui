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
}

export type Issue = IssueDto

export function transformIssuesToMarkers(issues: Issue[]): Editor.IMarkerData[] {
  return issues.map(issue => {
    const { path } = issue
    // TODO 25.08.25 // Provide content and format
    const location = findLocationByPath('', path, 'json')
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
      startLineNumber: location.range.start.line,
      startColumn: location.range.start.character,
      endLineNumber: location.range.end.line,
      endColumn: location.range.end.character,
      message: issue.message,
      severity: severity,
      source: 'spectral',
    }
  }).filter(marker => marker !== null)
}
