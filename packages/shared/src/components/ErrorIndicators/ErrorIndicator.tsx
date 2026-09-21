import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import Tooltip, { tooltipClasses, type TooltipProps } from '@mui/material/Tooltip'
import { type FC, memo, type ReactNode } from 'react'

import { ErrorIcon } from '../../icons/ErrorIcon'
import type { TestableProps } from '../Testable'

export type ErrorIndicatorViewProps = {
  tooltip?: ReactNode
  showTooltip?: boolean
  tooltipPlacement?: TooltipProps['placement']
  fontSize?: SvgIconProps['fontSize']
  tabIndex?: number
}

export type ErrorIndicatorProps = TestableProps & ErrorIndicatorViewProps & {
  hasProblems?: boolean
  ariaLabel?: string
}

export const ErrorIndicator: FC<ErrorIndicatorProps> = memo<ErrorIndicatorProps>(({
  hasProblems = false,
  tooltip,
  showTooltip = true,
  tooltipPlacement = 'bottom',
  fontSize = 'small',
  ariaLabel,
  tabIndex: propTabIndex,
  'data-testid': dataTestId = 'ErrorIndicator',
}) => {
  if (!hasProblems) {
    return null
  }

  const resolvedAriaLabel = ariaLabel ?? (typeof tooltip === 'string' ? tooltip : 'Publication error')
  const tooltipContent = showTooltip ? tooltip : undefined
  const resolvedTabIndex = propTabIndex ?? (showTooltip && tooltipContent ? 0 : undefined)

  const wrappedContent = (
    <IndicatorRoot
      role="img"
      tabIndex={resolvedTabIndex}
      aria-label={resolvedAriaLabel}
    >
      <ErrorIcon
        color="error"
        fontSize={fontSize}
        data-testid={dataTestId}
      />
    </IndicatorRoot>
  )

  if (!tooltipContent) {
    return wrappedContent
  }

  return (
    <IndicatorTooltip
      title={tooltipContent}
      placement={tooltipPlacement}
      disableInteractive
    >
      {wrappedContent}
    </IndicatorTooltip>
  )
})

ErrorIndicator.displayName = 'ErrorIndicator'

const IndicatorRoot = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'center',
  flexShrink: 0,
  cursor: 'default',
  userSelect: 'none',
  lineHeight: 0,
  verticalAlign: 'middle',
})

const IndicatorTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 668,
  },
})
