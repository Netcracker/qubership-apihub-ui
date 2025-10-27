type ScoringParameter = string
type ScoringParameterValue = string

export type AiDocumentScoringDto = {
  overallScore: string
  details: Array<{
    name: ScoringParameter
    value: ScoringParameterValue
  }>
}
export type AiDocumentScoring = AiDocumentScoringDto
