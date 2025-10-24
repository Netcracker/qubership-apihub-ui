
export type DocumentScoringDto = {
  overallScore: string
  missingSummary: string
  missingOperationId: string
  completenessOfDescription: string
  operationWithoutTag: string
  numberOfUnusedComponents: number
  tagsWithoutOperation: string
}
export type DocumentScoring = DocumentScoringDto
