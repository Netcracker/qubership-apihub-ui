import type { AiIssueSeverity } from './issue-severities'

export type AiIssueDto = {
  severity: AiIssueSeverity
  message: string
}

export type AiIssue = AiIssueDto
