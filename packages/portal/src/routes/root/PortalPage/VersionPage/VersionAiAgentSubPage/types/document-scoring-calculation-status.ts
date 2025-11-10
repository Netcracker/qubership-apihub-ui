export const AiScoringCalculationStatuses = {
  NOT_STARTED: 'not_started',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  ERROR: 'error',
} as const
export type AiScoringCalculationStatus = (typeof AiScoringCalculationStatuses)[keyof typeof AiScoringCalculationStatuses]

export type AiScoringCalculationStatusDetails = {
  status: AiScoringCalculationStatus
  details: string
}
