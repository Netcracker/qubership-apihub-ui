export type ValidatedDocumentDto = {
  documentId: string
  specificationType: 'openapi-2-0' | 'openapi-3-0' | 'openapi-3-1'
  title: string
}

export type ValidatedDocument = ValidatedDocumentDto
