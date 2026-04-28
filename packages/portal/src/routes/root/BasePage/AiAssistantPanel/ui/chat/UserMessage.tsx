import Box from '@mui/material/Box'
import { alpha, styled } from '@mui/material/styles'
import type { FC } from 'react'
import { memo } from 'react'

export type UserMessageProps = {
  content: string
}

export const UserMessage: FC<UserMessageProps> = memo(({ content }) => {
  return <UserBubble>{content}</UserBubble>
})

const UserBubble = styled(Box)(({ theme }) => ({
  alignSelf: 'flex-end',
  maxWidth: '85%',
  padding: theme.spacing(1.25, 1.5),
  borderRadius: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.28 : 0.14),
  color: theme.palette.text.primary,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  ...theme.typography.body2,
}))
