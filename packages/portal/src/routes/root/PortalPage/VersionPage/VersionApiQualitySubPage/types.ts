import type { FileFormat, MD_FILE_FORMAT, UNKNOWN_FILE_FORMAT } from '@apihub/entities/file-formats'
import type { Key } from '@apihub/entities/keys'
import type { API_TYPE_GRAPHQL, ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'

export const RulesetStatuses = {
  INACTIVE: 'inactive',
  ACTIVE: 'active',
} as const
export type RulesetStatus = typeof RulesetStatuses[keyof typeof RulesetStatuses]

export type RulesetActivation = {
  activeFrom?: string
  activeTo?: string
}

export type RulesetDto = {
  id: string
  name: string
  status: RulesetStatus
  activationHistory: readonly RulesetActivation[]
}

export type Ruleset = Omit<RulesetDto, 'id'> & { id: Key }

export type ValidatedDocumentDto = {
  documentId: string
  specificationType: 'openapi-2-0' | 'openapi-3-0' | 'openapi-3-1'
  title: string
}

export type ValidatedDocument = Omit<ValidatedDocumentDto, 'documentId'> & { id: Key }

export const IssueSeverities = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const
export type IssueSeverity = typeof IssueSeverities[keyof typeof IssueSeverities]

export type IssueDto = {
  jsonPath: string
  severity: IssueSeverity
  message: string
}

export type Issue = {
  jsonPath: string // TODO 25.06.25 // How to parse it?
  severity: IssueSeverity
  message: string
}

export const ValidationStatuses = {
  SUCCESS: 'success',
  IN_PROGRESS: 'inProgress',
  NOT_VALIDATED: 'notValidated',
} as const
export type ValidationStatus = typeof ValidationStatuses[keyof typeof ValidationStatuses]

export type ValidationSummaryDto = {
  apiType: Exclude<ApiType, typeof API_TYPE_GRAPHQL>
  ruleset: RulesetDto | null
  status: ValidationStatus
  issuesSummary: Record<IssueSeverity, number>
}

export type ValidationSummary = Omit<ValidationSummaryDto, 'ruleset'> & {
  ruleset: Ruleset | null
}

export type ValidationDetailsDto = {
  ruleset: RulesetDto // TODO 24.06.25 // Why not null?
  issues: readonly IssueDto[]
  document: ValidatedDocumentDto
}

export type ValidationDetails = {
  ruleset: Ruleset | null
  issues: readonly Issue[]
  document: ValidatedDocument
}

type ProhibitedFileFormat =
  | typeof MD_FILE_FORMAT
  | typeof UNKNOWN_FILE_FORMAT
export type OriginalDocumentFileFormat = Exclude<FileFormat, ProhibitedFileFormat>
