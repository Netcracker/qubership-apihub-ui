import type { IssuePath } from './issue-paths'
import type { IssueSeverity } from './issue-severities'

export type IssueDto = {
  jsonPath: IssuePath
  severity: IssueSeverity
  message: string
}

export type Issue = {
  jsonPath: IssuePath
  severity: IssueSeverity
  message: string
}
