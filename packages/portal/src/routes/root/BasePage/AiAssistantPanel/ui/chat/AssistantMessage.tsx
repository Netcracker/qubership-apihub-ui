import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { FC } from 'react'
import { memo } from 'react'

import { useShowErrorNotification } from '../../../Notification'
import { AssistantMarkdownViewer } from '../common/AssistantMarkdownViewer'
import { CopyIconButton } from '../common/CopyIconButton'
import { useCopyWithFeedback } from '../common/useCopyWithFeedback'

export type AssistantMessageProps = {
  content: string
}

export const AssistantMessage: FC<AssistantMessageProps> = memo(({ content }) => {
  const showError = useShowErrorNotification()
  const { copy, copied } = useCopyWithFeedback({
    onError: (error) =>
      showError({
        title: 'Copy failed',
        message: error instanceof Error ? error.message : 'Clipboard access was denied.',
      }),
  })

  return (
    <AssistantColumn>
      <AssistantMarkdownViewer markdown={content} />
      <CopyAnswerRow>
        <CopyIconButton ariaLabel="Copy answer" copied={copied} onCopy={() => copy(content)} />
      </CopyAnswerRow>
    </AssistantColumn>
  )
})

/** Stretch to message column width so markdown blocks (links, code) use full chat width. */
const AssistantColumn = styled(Box)(({ theme }) => ({
  alignSelf: 'stretch',
  width: '100%',
  minWidth: 0,
  ...theme.typography.body2,
}))

const CopyAnswerRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: theme.spacing(1),
}))
