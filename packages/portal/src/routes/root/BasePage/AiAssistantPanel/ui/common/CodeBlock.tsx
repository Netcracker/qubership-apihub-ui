import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'

import { useShowErrorNotification } from '../../../Notification'
import { CopyIconButton } from './CopyIconButton'
import { useCopyWithFeedback } from './useCopyWithFeedback'

export type CodeBlockProps = {
  className?: string
  rawText: string
  children?: ReactNode
}

export const CodeBlock: FC<CodeBlockProps> = memo(({ className, rawText, children }) => {
  const showError = useShowErrorNotification()
  const { createCopyHandler, copied } = useCopyWithFeedback({
    onError: (error) =>
      showError({
        title: 'Copy failed',
        message: error instanceof Error ? error.message : 'Clipboard access was denied.',
      }),
  })

  const languageLabel = languageLabelFromClassName(className)

  return (
    <CodeBlockRoot>
      <CodeBlockHeader>
        <Stack direction="row" alignItems="center" spacing={0.75}>
          <BracketTypography variant="caption" color="text.secondary">
            {'</>'}
          </BracketTypography>
          <LanguageTypography variant="caption" color="text.secondary">
            {languageLabel}
          </LanguageTypography>
        </Stack>
        <CopyIconButton ariaLabel="Copy code" copied={copied} onCopy={createCopyHandler(rawText)} />
      </CodeBlockHeader>
      <CodeBlockPre>
        <CodeBlockCode className={className}>{children}</CodeBlockCode>
      </CodeBlockPre>
    </CodeBlockRoot>
  )
})

function languageLabelFromClassName(className: string | undefined): string {
  if (!className) {
    return 'code'
  }
  const match = /language-([\w-]+)/.exec(className)
  if (!match) {
    return 'code'
  }
  const id = match[1].toLowerCase()
  if (id === 'json') return 'JSON'
  if (id === 'yaml' || id === 'yml') return 'YAML'
  return id
}

const CodeBlockRoot = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  margin: theme.spacing(0.75, 0),
  backgroundColor: theme.palette.background.paper,
}))

const CodeBlockHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0.5, 0.5, 0.5, 1.25),
  backgroundColor: theme.palette.action.hover,
  borderBottom: `1px solid ${theme.palette.divider}`,
}))

const BracketTypography = styled(Typography)({
  fontFamily: 'monospace',
  userSelect: 'none',
  lineHeight: 1,
})

const LanguageTypography = styled(Typography)({
  fontFamily: 'monospace',
  userSelect: 'none',
  lineHeight: 1,
})

const CodeBlockPre = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(1.5),
  overflow: 'auto',
  maxHeight: 320,
  lineHeight: 1.6,
  '& .hljs': {
    backgroundColor: 'transparent',
  },
}))

const CodeBlockCode = styled('code')(({ theme }) => ({
  fontFamily: 'monospace',
  fontSize: theme.typography.caption.fontSize,
  display: 'block',
  background: 'none',
  padding: 0,
  whiteSpace: 'pre',
}))
