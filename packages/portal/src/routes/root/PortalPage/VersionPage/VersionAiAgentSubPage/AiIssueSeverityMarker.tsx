import ErrorIcon from '@mui/icons-material/Error'
import type { FC } from 'react'
import type { AiIssueSeverity } from './types/issue-severities'
import { AiIssueSeverities } from './types/issue-severities'

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const
type Size = typeof Size[keyof typeof Size]

type AiIssueSeverityMarkerProps = {
  severity: AiIssueSeverity
  size?: Size
}

const COLOR_BY_SEVERITY: Record<AiIssueSeverity, string> = {
  [AiIssueSeverities.ERROR]: '#FF5260',
  [AiIssueSeverities.WARNING]: '#FFB02E',
  [AiIssueSeverities.INFO]: '#0068FF',
  [AiIssueSeverities.HINT]: '#B4BFCF',
}

export const AiIssueSeverityMarker: FC<AiIssueSeverityMarkerProps> = ({ severity, size = Size.MEDIUM }) => {
  let sizePx: string
  switch (size) {
    case Size.SMALL:
      sizePx = '12px'
      break
    default:
    case Size.MEDIUM:
      sizePx = '16px'
      break
  }
  return (
    <ErrorIcon
      sx={{
        color: COLOR_BY_SEVERITY[severity],
        width: sizePx,
        height: sizePx,
      }}
    />
  )
}
