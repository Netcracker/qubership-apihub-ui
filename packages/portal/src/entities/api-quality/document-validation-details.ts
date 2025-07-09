import type { RulesetBaseDto, RulesetBase } from './rulesets'
import type { IssueDto, Issue } from './issues'
import type { ValidatedDocumentDto, ValidatedDocument } from './validated-documents'

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
