type ScoringParameter = string
type ScoringParameterValue = string

export type DocumentScoringDto = {
  overallScore: string
  details: Array<{
    name: ScoringParameter
    value: ScoringParameterValue
  }>
}
export type DocumentScoring = DocumentScoringDto
