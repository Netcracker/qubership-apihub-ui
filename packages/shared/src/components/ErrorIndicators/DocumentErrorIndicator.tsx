import { type FC, memo } from 'react'

import { PUBLICATION_ERROR_MESSAGES } from '../../utils/publicationErrorMessages'
import type { TestableProps } from '../Testable'
import { ErrorIndicator, type ErrorIndicatorViewProps } from './ErrorIndicator'

export type DocumentErrorIndicatorProps = TestableProps & ErrorIndicatorViewProps & {
  hasErrors?: boolean
}

export const DocumentErrorIndicator: FC<DocumentErrorIndicatorProps> = memo<DocumentErrorIndicatorProps>(({
  hasErrors = false,
  tooltip,
  showTooltip = true,
  tooltipPlacement = 'bottom',
  fontSize = 'small',
  tabIndex,
  className,
  'data-testid': dataTestId = 'DocumentErrorIndicator',
}) => {
  if (!hasErrors) {
    return null
  }

  return (
    <ErrorIndicator
      hasProblems={hasErrors}
      tooltip={tooltip ?? PUBLICATION_ERROR_MESSAGES.document.itemError}
      showTooltip={showTooltip}
      tooltipPlacement={tooltipPlacement}
      fontSize={fontSize}
      tabIndex={tabIndex}
      className={className}
      data-testid={dataTestId}
    />
  )
})

DocumentErrorIndicator.displayName = 'DocumentErrorIndicator'
