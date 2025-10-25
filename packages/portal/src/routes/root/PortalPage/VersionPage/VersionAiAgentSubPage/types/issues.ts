import type { AiIssueSeverity } from './issue-severities'

export type AiIssueDto = {
  severity: AiIssueSeverity
  text: string
  category: string
}

export type AiIssue = AiIssueDto
