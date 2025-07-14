export const IssueSeverities = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  HINT: 'hint',
} as const
export type IssueSeverity = (typeof IssueSeverities)[keyof typeof IssueSeverities]
export const ISSUE_SEVERITIES_LIST = [
  IssueSeverities.ERROR,
  IssueSeverities.WARNING,
  IssueSeverities.INFO,
  IssueSeverities.HINT,
] as const

export const ISSUE_SEVERITY_COLOR_MAP: Record<IssueSeverity, string> = {
  [IssueSeverities.INFO]: '#61AAF2',
  [IssueSeverities.WARNING]: '#FFB02E',
  [IssueSeverities.ERROR]: '#ED4A54',
  [IssueSeverities.HINT]: '#626D82',
}
