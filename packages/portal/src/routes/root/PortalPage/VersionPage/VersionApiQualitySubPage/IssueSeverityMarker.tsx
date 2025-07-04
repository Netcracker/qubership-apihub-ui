import type { FC } from 'react'
import { IssueSeverities, type IssueSeverity } from './types'
import ErrorIcon from '@mui/icons-material/Error'

type IssueSeverityMarkerProps = {
  severity: IssueSeverity
}

const COLOR_BY_SEVERITY: Record<IssueSeverity, string> = {
  [IssueSeverities.ERROR]: '#FF5260',
  [IssueSeverities.WARNING]: '#FFB02E',
  [IssueSeverities.INFO]: '#0068FF',
}

export const IssueSeverityMarker: FC<IssueSeverityMarkerProps> = ({ severity }) => {
  return <ErrorIcon fontSize="small" sx={{ color: COLOR_BY_SEVERITY[severity] }} />
}
