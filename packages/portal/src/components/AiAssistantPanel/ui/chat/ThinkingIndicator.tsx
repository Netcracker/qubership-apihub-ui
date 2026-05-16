import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { type FC, memo } from 'react'

export type ThinkingIndicatorProps = {
  visible: boolean
}

export const ThinkingIndicator: FC<ThinkingIndicatorProps> = memo(({ visible }) => {
  if (!visible) {
    return null
  }
  return (
    <ThinkingIndicatorTypography variant="body2" data-testid="ThinkingIndicator">
      Thinking
    </ThinkingIndicatorTypography>
  )
})

const ThinkingIndicatorTypography = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1, 3, 2, 3),
  color: theme.palette.text.secondary,
}))

ThinkingIndicator.displayName = 'ThinkingIndicator'
