export const AiIssueSeverities = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  HINT: 'hint',
} as const
export type AiIssueSeverity = (typeof AiIssueSeverities)[keyof typeof AiIssueSeverities]
export const AI_ISSUE_SEVERITIES_LIST = [
  AiIssueSeverities.ERROR,
  AiIssueSeverities.WARNING,
  AiIssueSeverities.INFO,
  AiIssueSeverities.HINT,
] as const

// TODO 24.10.25 // [Tech Debt] Extract all colors to constants and/or CSS variables, then map MUI custom variants to colors
export const AI_ISSUE_SEVERITY_COLOR_MAP: Record<AiIssueSeverity, string> = {
  [AiIssueSeverities.INFO]: 'information.main', // because 'info' is already taken by MUI
  [AiIssueSeverities.WARNING]: 'warning.main',
  [AiIssueSeverities.ERROR]: 'error.main',
  [AiIssueSeverities.HINT]: 'hint.main',
}
