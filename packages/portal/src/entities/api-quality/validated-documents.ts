export type ValidatedDocumentDto = {
  slug: string
  specificationType: 'openapi-2-0' | 'openapi-3-0' | 'openapi-3-1'
  documentName: string // E.g. Public API.yaml
}

export type ValidatedDocument = ValidatedDocumentDto
