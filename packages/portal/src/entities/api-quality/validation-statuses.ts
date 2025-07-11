export const ValidationStatuses = {
  SUCCESS: 'success',
  IN_PROGRESS: 'inProgress',
  NOT_VALIDATED: 'notValidated',
  FAILED: 'failed',
} as const

export type ValidationStatus = (typeof ValidationStatuses)[keyof typeof ValidationStatuses]
