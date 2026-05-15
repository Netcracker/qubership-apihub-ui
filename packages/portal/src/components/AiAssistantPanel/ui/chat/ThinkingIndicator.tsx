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
    <Root variant="body2" color="text.secondary" data-testid="AiAssistantThinkingIndicator">
      Thinking
    </Root>
  )
})

const Root = styled(Typography)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(0.5),
}))
