import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { FC } from 'react'
import { memo } from 'react'

export type AssistantMessageProps = {
  content: string
}

export const AssistantMessage: FC<AssistantMessageProps> = memo(({ content }) => {
  return (
    <AssistantBubble>
      <AssistantPre>{content}</AssistantPre>
    </AssistantBubble>
  )
})

const AssistantBubble = styled(Box)(({ theme }) => ({
  alignSelf: 'flex-start',
  maxWidth: '100%',
  padding: theme.spacing(1.25, 1.5),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.action.hover,
  ...theme.typography.body2,
}))

const AssistantPre = styled('pre')(({ theme }) => ({
  margin: 0,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  color: theme.palette.text.primary,
}))
