import type { FileFormat, MD_FILE_FORMAT, UNKNOWN_FILE_FORMAT } from '@apihub/entities/file-formats'
import type { Key } from '@apihub/entities/keys'
import type { API_TYPE_GRAPHQL, ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import type { RulesetBase, RulesetBaseDto } from '@apihub/entities/api-quality-ruleset'

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

export type IssuePathItem = string | number
export type IssuePath = IssuePathItem[]

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

export const ValidationStatuses = {
  SUCCESS: 'success',
  IN_PROGRESS: 'inProgress',
  NOT_VALIDATED: 'notValidated',
} as const
export type ValidationStatus = typeof ValidationStatuses[keyof typeof ValidationStatuses]

export type ValidationSummaryRecordDto = {
  apiType: Exclude<ApiType, typeof API_TYPE_GRAPHQL>
  ruleset: RulesetBaseDto | null
  status: ValidationStatus
  issuesSummary: Record<IssueSeverity, number>
}

export type ValidationSummaryDto = ValidationSummaryRecordDto[]

export type ValidationSummaryRecord = Omit<ValidationSummaryRecordDto, 'ruleset'> & {
  ruleset: RulesetBase | null
}

export type ValidationSummary = ValidationSummaryRecord[]

export type ValidationDetailsDto = {
  ruleset: RulesetBaseDto
  issues: readonly IssueDto[]
  document: ValidatedDocumentDto
}

export type ValidationDetails = {
  ruleset: RulesetBase
  issues: readonly Issue[]
  document: ValidatedDocument
}

type ProhibitedFileFormat =
  | typeof MD_FILE_FORMAT
  | typeof UNKNOWN_FILE_FORMAT
export type OriginalDocumentFileFormat = Exclude<FileFormat, ProhibitedFileFormat>
