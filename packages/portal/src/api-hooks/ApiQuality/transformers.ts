import type { ValidatedDocument, ValidatedDocumentDto } from '@apihub/entities/api-quality/validated-documents'

export function toValidatedDocument(dto: ValidatedDocumentDto): ValidatedDocument {
  const { documentId, ...dtoPart } = dto
  return { id: documentId, ...dtoPart }
}

export function toValidatedDocuments(dtos: readonly ValidatedDocumentDto[]): readonly ValidatedDocument[] {
  return dtos.map(toValidatedDocument)
}
