import type { RulesetMetadataDto, RulesetMetadata } from './rulesets'
import type { IssueDto, Issue } from './issues'
import type { ValidatedDocumentDto, ValidatedDocument } from './validated-documents'

type ValidationResultDto = {
  linter: string
  ruleset: RulesetMetadataDto
  issues: readonly IssueDto[]
}

type ValidationResult = {
  ruleset: RulesetMetadata
  issues: readonly Issue[]
}

export type ValidationDetailsDto = {
  document: ValidatedDocumentDto
  results: Array<ValidationResultDto>
}

export type ValidationDetails = {
  document: ValidatedDocument
  results: Array<ValidationResult>
}
