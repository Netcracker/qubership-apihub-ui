import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { type FC, memo, useMemo } from 'react'

import { useShowErrorNotification } from '@netcracker/qubership-apihub-ui-portal/src/routes/root/BasePage/Notification'
import { useCopyWithFeedback } from '../../hooks/useCopyWithFeedback'
import { useQueuedStreamingMarkdown } from '../../hooks/useQueuedStreamingMarkdown'
import { normalizeStreamingMarkdown } from '../../utils/normalizeStreamingMarkdown'
import { AssistantMarkdownViewer } from '../markdown/AssistantMarkdownViewer'
import { CopyIconButton } from '../markdown/CopyIconButton'

export type AssistantMessageProps = {
  content: string
  /** Live bubble: markdown is queued so parse/highlight runs once per paint wave. */
  isStreaming?: boolean
}

export const AssistantMessage: FC<AssistantMessageProps> = memo(({ content, isStreaming = false }) => {
  const showError = useShowErrorNotification()
  const { createCopyHandler, copied } = useCopyWithFeedback({
    onError: (error) =>
      showError({
        title: 'Copy failed',
        message: error instanceof Error ? error.message : 'Clipboard access was denied.',
      }),
  })

  const normalizedLive = useMemo(
    () => (isStreaming ? normalizeStreamingMarkdown(content) : content),
    [content, isStreaming],
  )
  const queuedMarkdown = useQueuedStreamingMarkdown(normalizedLive, isStreaming)
  const markdownForViewer = isStreaming ? queuedMarkdown : content

  return (
    <AssistantColumn>
      <AssistantMarkdownViewer markdown={markdownForViewer} />
      {!isStreaming
        ? (
          <CopyAnswerRow>
            <CopyIconButton ariaLabel="Copy answer" copied={copied} onCopy={createCopyHandler(content)} />
          </CopyAnswerRow>
        )
        : null}
    </AssistantColumn>
  )
})

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
