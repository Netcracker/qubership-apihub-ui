import 'github-markdown-css/github-markdown-light.css'
import 'highlight.js/styles/github.css'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { toText } from 'hast-util-to-text'
import json from 'highlight.js/lib/languages/json.js'
import yaml from 'highlight.js/lib/languages/yaml.js'
import type { ComponentPropsWithoutRef, FC } from 'react'
import { memo, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import type { CodeProps } from 'react-markdown/lib/ast-to-react'
import type { ReactMarkdownProps } from 'react-markdown/lib/complex-types'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import type { PluggableList } from 'unified'

import { isGeneratedFileLink, isInternalPortalLink } from '../../utils/internalLinkMatcher'
import { FileDownloadLink } from '../chat/FileDownloadLink'
import { CodeBlock } from './CodeBlock'
import { InternalPortalLinkRow } from './InternalPortalLinkRow'

const highlightLanguages = { json, yaml }

export type AssistantMarkdownViewerProps = {
  markdown: string
  normalizeMarkdown?: (markdown: string) => string
}

export const AssistantMarkdownViewer: FC<AssistantMarkdownViewerProps> = memo(({ markdown, normalizeMarkdown }) => {
  const source = normalizeMarkdown ? normalizeMarkdown(markdown) : markdown

  const remarkPlugins = useMemo<PluggableList>(
    () => [[remarkGfm, { singleTilde: false }]],
    [],
  )

  const rehypePlugins = useMemo<PluggableList>(
    () => [
      [rehypeHighlight, { detect: false, languages: highlightLanguages, aliases: { yml: 'yaml' } }],
    ],
    [],
  )

  const components = useMemo(
    () => ({
      pre: MarkdownPre,
      code: MarkdownCode,
      a: MarkdownAnchor,
      p: MarkdownParagraph,
    }),
    [],
  )

  return (
    <AssistantMarkdownSurface>
      <ReactMarkdown
        className="markdown-body"
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
        components={components}
      >
        {source}
      </ReactMarkdown>
    </AssistantMarkdownSurface>
  )
})

const MarkdownPre: FC<ComponentPropsWithoutRef<'pre'> & ReactMarkdownProps> = ({ children }) => <>{children}</>

const MarkdownCode: FC<CodeProps> = ({ inline, className, children, node, ...rest }) => {
  if (inline) {
    return (
      <code className={className} {...rest}>
        {children}
      </code>
    )
  }
  const rawText = toText(node as never)
  return (
    <CodeBlock className={className} rawText={rawText}>
      {children}
    </CodeBlock>
  )
}

const MarkdownAnchor: FC<ComponentPropsWithoutRef<'a'> & ReactMarkdownProps> = memo(({ href = '', children }) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
  if (isGeneratedFileLink(href, origin)) {
    return <FileDownloadLink href={href}>{children}</FileDownloadLink>
  }
  if (isInternalPortalLink(href, origin)) {
    return <InternalPortalLinkRow href={href}>{children}</InternalPortalLinkRow>
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
})

/** `p` as block `div` so link/file rows (div) stay valid; spacing matches `.markdown-body p` (github-markdown-css). */
const MarkdownParagraph: FC<ComponentPropsWithoutRef<'p'> & ReactMarkdownProps> = ({ children }) => (
  <Box className="assistant-md-paragraph" component="div">
    {children}
  </Box>
)

const AssistantMarkdownSurface = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  wordBreak: 'break-word',
  '& .markdown-body': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
  },
  '& .markdown-body .assistant-md-paragraph': {
    display: 'block',
    width: '100%',
    marginTop: 0,
    marginBottom: theme.spacing(2),
  },
  '& .markdown-body .assistant-md-paragraph:last-child': {
    marginBottom: 0,
  },
}))
