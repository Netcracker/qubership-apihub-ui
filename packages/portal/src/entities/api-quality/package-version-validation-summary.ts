import type { IssueSeverity } from './issue-severities'
import type { RulesetMetadataDto } from './rulesets'
import type { ValidationStatus } from './validation-statuses'

// DTO

export type DocumentValidationSummaryDto = {
  slug: string
  documentName: string
  // TODO 05.09.25 // Extract common type for validation API Quality feature
  apiType: 'openapi-2-0' | 'openapi-3-0' | 'openapi-3-1'
  rulesetId?: RulesetMetadataDto['id']
  issuesSummary?: Record<IssueSeverity, number>
  // TODO 05.09.25 // Change it
  status: 'failed' | 'passed' | 'in-progress'
  // TODO 05.09.25 // Change it
  details?: Record<PropertyKey, unknown>
}

export type ValidationSummaryDto = {
  status: ValidationStatus
  rulesets: RulesetMetadataDto[]
  documents: DocumentValidationSummaryDto[]
}

// UI

export type ValidationSummary = ValidationSummaryDto
