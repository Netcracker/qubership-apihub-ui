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
  [IssueSeverities.ERROR]: 'Error is a critical issue that violates OpenAPI specification standards and must be fixed. These issues can prevent proper API functionality or cause integration failures.',
  [IssueSeverities.WARNING]: 'Warning is an issue that indicates potential problems or deviations from recommended practices that should be addressed. While these issues don\'t break the API specification, they may cause confusion for API consumers.',
  [IssueSeverities.INFO]: 'Info is a suggestion for improvement that enhances API documentation quality and developer experience. These issues don\'t affect API functionality but provide opportunities to make the API more comprehensive.',
  [IssueSeverities.HINT]: 'Hint is a recommendation for following advanced best practices or optimization opportunities that can further improve API quality. These suggestions help create more robust and maintainable APIs.',
}

const ISSUE_SEVERITY_TOOLTIP_TITLE_MAP: Record<IssueSeverity, string> = {
  [IssueSeverities.ERROR]: 'Error',
  [IssueSeverities.WARNING]: 'Warning',
  [IssueSeverities.INFO]: 'Info',
  [IssueSeverities.HINT]: 'Hint',
}
