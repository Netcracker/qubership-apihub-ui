import type { API_TYPE_GRAPHQL, ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { RulesetBaseDto } from './rulesets'
import type { IssueSeverity } from './issue-severities'
import type { ValidationStatus } from './validation-statuses'

// DTO

export type ApiTypeValidationSummaryDto = {
  apiType: Exclude<ApiType, typeof API_TYPE_GRAPHQL>
  ruleset: RulesetBaseDto | null
  status: ValidationStatus
  issuesSummary: Record<IssueSeverity, number>
}

export type ValidationSummaryDto = ApiTypeValidationSummaryDto[]

// UI

export type ApiTypeValidationSummary = ApiTypeValidationSummaryDto

export type ValidationSummary = ApiTypeValidationSummary[]
