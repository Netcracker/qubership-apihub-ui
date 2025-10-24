import type { Document, DocumentDto } from '@apihub/entities/documents'
import type { AiIssue, AiIssueDto } from './issues'

export type AiValidationDetailsDto = {
  issues: readonly AiIssueDto[]
  document: DocumentDto
}

export type AiValidationDetails = {
  issues: readonly AiIssue[]
  document: Document
}
