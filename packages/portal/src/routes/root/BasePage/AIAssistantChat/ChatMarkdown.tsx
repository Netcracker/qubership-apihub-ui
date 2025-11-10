/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { FC } from 'react'
import { memo, useState, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DownloadIcon from '@mui/icons-material/Download'
import CheckIcon from '@mui/icons-material/Check'
import fileDownload from 'js-file-download'
import 'highlight.js/styles/github-dark.css'

type ChatMarkdownProps = {
  content: string
}

export const ChatMarkdown: FC<ChatMarkdownProps> = memo<ChatMarkdownProps>(({ content }) => {
  const [copiedCodeBlocks, setCopiedCodeBlocks] = useState<Set<string>>(new Set())

  const handleCopyCode = useCallback((code: string, blockId: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCodeBlocks(prev => new Set(prev).add(blockId))
      setTimeout(() => {
        setCopiedCodeBlocks(prev => {
          const newSet = new Set(prev)
          newSet.delete(blockId)
          return newSet
        })
      }, 2000)
    })
  }, [])

  const handleDownloadFile = useCallback((code: string, filename: string) => {
    fileDownload(code, filename)
  }, [])

  // Extract files from markdown (code blocks with file metadata)
  const extractFileInfo = useCallback((code: string, language?: string, meta?: string): { filename: string; extension: string } | null => {
    // Check metadata in format ```language:filename or ```filename
    if (meta) {
      // Format: typescript:src/index.ts or just filename.ts
      const metaParts = meta.split(':')
      if (metaParts.length > 1) {
        const filename = metaParts.slice(1).join(':')
        if (filename.includes('.')) {
          return {
            filename,
            extension: filename.split('.').pop() || 'txt',
          }
        }
      } else if (metaParts[0].includes('.')) {
        return {
          filename: metaParts[0],
          extension: metaParts[0].split('.').pop() || 'txt',
        }
      }
    }
    
    // Check patterns in code itself (comments with file paths)
    const fileCommentPattern = /^\/\/\s*File:\s*(.+)$/m
    const fileCommentMatch = code.match(fileCommentPattern)
    if (fileCommentMatch) {
      const filename = fileCommentMatch[1].trim()
      return {
        filename,
        extension: filename.split('.').pop() || 'txt',
      }
    }
    
    // If language is specified, use it as extension for file generation
    if (language && code.length > 50) {
      // Only for sufficiently large code blocks
      return {
        filename: `file.${language}`,
        extension: language,
      }
    }
    
    return null
  }, [])

  return (
    <Box
      sx={{
        '& .markdown-body': {
          fontSize: '14px',
          lineHeight: 1.6,
          color: 'text.primary',
          '& pre': {
            position: 'relative',
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            padding: '12px',
            margin: '8px 0',
            overflow: 'auto',
            '& code': {
              backgroundColor: 'transparent',
              padding: 0,
              fontSize: '13px',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
            },
          },
          '& code': {
            backgroundColor: 'rgba(175, 184, 193, 0.2)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '13px',
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          },
          '& pre code': {
            backgroundColor: 'transparent',
            padding: 0,
          },
          '& p': {
            margin: '8px 0',
          },
          '& ul, & ol': {
            margin: '8px 0',
            paddingLeft: '24px',
          },
          '& li': {
            margin: '4px 0',
          },
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            marginTop: '16px',
            marginBottom: '8px',
            fontWeight: 600,
          },
          '& table': {
            borderCollapse: 'collapse',
            margin: '12px 0',
            width: '100%',
            '& th, & td': {
              border: '1px solid',
              borderColor: 'divider',
              padding: '8px 12px',
              textAlign: 'left',
            },
            '& th': {
              backgroundColor: 'action.hover',
              fontWeight: 600,
            },
          },
          '& blockquote': {
            borderLeft: '4px solid',
            borderColor: 'primary.main',
            paddingLeft: '16px',
            margin: '12px 0',
            color: 'text.secondary',
            fontStyle: 'italic',
          },
          '& a': {
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight] as any}
        components={{
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : ''
            const meta = (node?.data?.meta as string) || (props as any).meta
            const codeString = String(children).replace(/\n$/, '')
            const blockId = `code-${Date.now()}-${Math.random()}`
            const fileInfo = !inline ? extractFileInfo(codeString, language, meta) : null
            const isCopied = copiedCodeBlocks.has(blockId)

            if (inline) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }

            return (
              <Box sx={{ position: 'relative', margin: '12px 0' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    display: 'flex',
                    gap: 0.5,
                    zIndex: 1,
                  }}
                >
                  {fileInfo && (
                    <Tooltip title="Download file">
                      <IconButton
                        size="small"
                        onClick={() => handleDownloadFile(codeString, fileInfo.filename)}
                        sx={{
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          },
                        }}
                      >
                        <DownloadIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  )}
                  <Tooltip title={isCopied ? 'Copied!' : 'Copy code'}>
                    <IconButton
                      size="small"
                      onClick={() => handleCopyCode(codeString, blockId)}
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        },
                      }}
                    >
                      {isCopied ? (
                        <CheckIcon fontSize="small" />
                      ) : (
                        <ContentCopyIcon fontSize="small" />
                      )}
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: '#1e1e1e',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    '& pre': {
                      margin: 0,
                      padding: '12px',
                      backgroundColor: 'transparent',
                      overflow: 'auto',
                      maxHeight: '400px',
                    },
                  }}
                >
                  {fileInfo && (
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      <DownloadIcon sx={{ fontSize: 14 }} />
                      <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
                        {fileInfo.filename}
                      </Typography>
                    </Box>
                  )}
                  <pre
                    className={className}
                    style={{
                      margin: 0,
                      padding: '12px',
                      backgroundColor: 'transparent',
                      overflow: 'auto',
                    }}
                    {...props}
                  >
                    <code className={className}>{children}</code>
                  </pre>
                </Box>
              </Box>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
})

