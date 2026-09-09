import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import Tooltip, { tooltipClasses, type TooltipProps } from '@mui/material/Tooltip'
import { type FC, memo, type ReactNode, type SyntheticEvent } from 'react'

import { useVersionProblemDetails } from '../../hooks/versions/useVersionProblemDetails'
import type { UseVersionProblemDetailsParams } from '../../hooks/versions/versionProblemDetails'
import { ErrorIcon } from '../../icons/ErrorIcon'
import type { TestableProps } from '../Testable'

type VersionErrorIndicatorProps = Omit<UseVersionProblemDetailsParams, 'surface'> & TestableProps & {
  tooltip?: ReactNode
  tooltipPlacement?: TooltipProps['placement']
  fontSize?: SvgIconProps['fontSize']
  onClick?: (event: SyntheticEvent) => void
}

export const VersionErrorIndicator: FC<VersionErrorIndicatorProps> = memo<VersionErrorIndicatorProps>(({
  tooltip: customTooltip,
  tooltipPlacement = 'bottom',
  fontSize = 'small',
  onClick,
  'data-testid': dataTestId = 'VersionErrorIndicator',
  ...problemParams
}) => {
  const { hasProblems, tooltip: resolvedTooltip } = useVersionProblemDetails(problemParams)

  if (!hasProblems) {
    return null
  }

  const tooltipContent = customTooltip ?? resolvedTooltip

  const content = onClick
    ? (
      <IconButton
        onClick={onClick}
        size="small"
        aria-label={resolvedTooltip}
        data-testid={dataTestId}
      >
        <ErrorIcon color="error" fontSize={fontSize} />
      </IconButton>
    )
    : (
      <ErrorIcon
        color="error"
        fontSize={fontSize}
        data-testid={dataTestId}
      />
    )

  const wrappedContent = (
    <IndicatorRoot
      tabIndex={onClick ? undefined : 0}
      aria-label={resolvedTooltip}
    >
      {content}
    </IndicatorRoot>
  )

  if (!tooltipContent) {
    return wrappedContent
  }

  return (
    <IndicatorTooltip
      title={tooltipContent}
      placement={tooltipPlacement}
    >
      {wrappedContent}
    </IndicatorTooltip>
  )
})

VersionErrorIndicator.displayName = 'VersionErrorIndicator'

const IndicatorRoot = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
})

const IndicatorTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 668,
  },
})
