export const AiEnhancementStatuses = {
  NOT_STARTED: 'not_started',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  ERROR: 'error',
} as const
export type AiEnhancementStatus = (typeof AiEnhancementStatuses)[keyof typeof AiEnhancementStatuses]

export type AiEnhancementStatusDto = {
  status: AiEnhancementStatus
}
