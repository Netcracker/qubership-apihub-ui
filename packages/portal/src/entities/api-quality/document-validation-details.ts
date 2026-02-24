import type { Issue, IssueDto } from './issues'
import type { RulesetLinter, RulesetMetadata, RulesetMetadataDto } from './rulesets'
import type { ValidatedDocument, ValidatedDocumentDto } from './validated-documents'

type ValidationResultDto = {
  linter: RulesetLinter
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
