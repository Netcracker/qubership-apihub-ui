import { ISSUE_SEVERITY_COLOR_MAP, IssueSeverities, type IssueSeverity } from '@apihub/entities/api-quality/issue-severities'
import { MarkerTooltip } from '@netcracker/qubership-apihub-ui-shared/components/MarkerTooltip'
import type { FC, PropsWithChildren } from 'react'
import { memo } from 'react'

export type ValidationIssuesTooltipProps = PropsWithChildren<{
  issueSeverity: IssueSeverity
  disableHoverListener?: boolean
}>

export const ValidationIssuesTooltip: FC<ValidationIssuesTooltipProps> = memo<ValidationIssuesTooltipProps>(props => {
  const {
    children,
    issueSeverity,
    disableHoverListener = false,
  } = props

  return (
    <MarkerTooltip<IssueSeverity>
      disableHoverListener={disableHoverListener}
      variant={issueSeverity}
      variantToDescription={ISSUE_SEVERITY_DESCRIPTION_MAP}
      variantToTooltipTitle={ISSUE_SEVERITY_TOOLTIP_TITLE_MAP}
      variantToColor={ISSUE_SEVERITY_COLOR_MAP}
    >
      {children}
    </MarkerTooltip>
  )
})

const ISSUE_SEVERITY_DESCRIPTION_MAP: Record<IssueSeverity, string> = {
  [IssueSeverities.ERROR]: 'Error description',
  [IssueSeverities.WARNING]: 'Warning description',
  [IssueSeverities.INFO]: 'Info description',
  [IssueSeverities.HINT]: 'Hint description',
}

const ISSUE_SEVERITY_TOOLTIP_TITLE_MAP: Record<IssueSeverity, string> = {
  [IssueSeverities.ERROR]: 'Error',
  [IssueSeverities.WARNING]: 'Warning',
  [IssueSeverities.INFO]: 'Info',
  [IssueSeverities.HINT]: 'Hint',
}
