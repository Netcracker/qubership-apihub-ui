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
import { memo, useState, useCallback, useRef, useEffect } from 'react'
import { Box, Drawer, IconButton, TextField, Typography, Paper, CircularProgress, Button } from '@mui/material'
import { useEvent } from 'react-use'
import { Resizable } from 're-resizable'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import { HIDE_AI_ASSISTANT_CHAT, SHOW_AI_ASSISTANT_CHAT } from '@apihub/routes/EventBusProvider'
import { ChatMarkdown } from './ChatMarkdown'

const CHAT_DEFAULT_WIDTH = 420
const CHAT_MIN_WIDTH = 300
const CHAT_MAX_WIDTH = 800

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

type ChatSession = {
  id: string
  title: string
  messages: Message[]
}

export const AIAssistantChat: FC = memo(() => {
  const [open, setOpen] = useState(false)
  const [sessions, setSessions] = useState<ChatSession[]>([
    { id: '1', title: 'New Chat', messages: [] },
  ])
  const [currentSessionId, setCurrentSessionId] = useState<string>('1')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [chatWidth, setChatWidth] = useState(CHAT_DEFAULT_WIDTH)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const currentSession = sessions.find(s => s.id === currentSessionId) || sessions[0]

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [currentSession.messages, scrollToBottom])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    }

    const newInput = ''
    setInput(newInput)
    setIsLoading(true)

    // Add user message
    setSessions(prev => prev.map(session => (
      session.id === currentSessionId
        ? { ...session, messages: [...session.messages, userMessage] }
        : session
    )))

    try {
      // Create temporary assistant message for streaming
      const assistantMessageId = (Date.now() + 1).toString()
      const tempAssistantMessage: Message = {
        id: assistantMessageId,
        role: 'assistant',
        content: '',
      }

      // Add empty assistant message for streaming
      setSessions(prev => prev.map(session => (
        session.id === currentSessionId
          ? { ...session, messages: [...session.messages, tempAssistantMessage] }
          : session
      )))

      const response = await fetch('/api/v1/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...currentSession.messages, userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
          stream: true, // Enable streaming for better UX
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const contentType = response.headers.get('content-type') || ''

      // Check if response is streaming (text/event-stream or application/json with chunks)
      if (contentType.includes('text/event-stream') || contentType.includes('application/x-ndjson')) {
        // Handle streaming
        const reader = response.body?.getReader()
        const decoder = new TextDecoder()
        let accumulatedContent = ''

        if (reader) {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value, { stream: true })
            const lines = chunk.split('\n')

            for (const line of lines) {
              if (line.trim() === '') continue

              try {
                // Expect ChatStreamChunk format: { delta, done, usage? }
                const data = JSON.parse(line.replace(/^data: /, ''))

                if (data.delta) {
                  accumulatedContent += data.delta
                  // Update message as chunks arrive
                  setSessions(prev => prev.map(session => (
                    session.id === currentSessionId
                      ? {
                        ...session,
                        messages: session.messages.map(msg => (
                          msg.id === assistantMessageId
                            ? { ...msg, content: accumulatedContent }
                            : msg
                        )),
                      }
                      : session
                  )))
                }

                if (data.done) {
                  break
                }
              } catch (e) {
                // Ignore parsing errors for individual lines
                console.warn('Failed to parse chunk:', line, e)
              }
            }
          }
        }

        // Final message update
        setSessions(prev => prev.map(session => (
          session.id === currentSessionId
            ? {
              ...session,
              messages: session.messages.map(msg => (
                msg.id === assistantMessageId
                  ? { ...msg, content: accumulatedContent || 'Failed to get response' }
                  : msg
              )),
            }
            : session
        )))
      } else {
        // Regular JSON response (ChatResponse)
        const data = await response.json()
        const finalContent = data.message?.content || 'Failed to get response'

        setSessions(prev => prev.map(session => (
          session.id === currentSessionId
            ? {
              ...session,
              messages: session.messages.map(msg => (
                msg.id === assistantMessageId
                  ? { ...msg, content: finalContent }
                  : msg
              )),
            }
            : session
        )))
      }

      // Update session title if this is the first message
      setSessions(prev => {
        const session = prev.find(s => s.id === currentSessionId)
        const finalMessage = session?.messages.find(m => m.id === assistantMessageId)

        if (currentSession.messages.length === 0 && finalMessage?.content) {
          const title = finalMessage.content.slice(0, 30) + (finalMessage.content.length > 30 ? '...' : '')
          return prev.map(s => (
            s.id === currentSessionId
              ? { ...s, title }
              : s
          ))
        }
        return prev
      })
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'An error occurred while sending the message. Please try again.',
      }
      setSessions(prev => prev.map(session => (
        session.id === currentSessionId
          ? { ...session, messages: [...session.messages, errorMessage] }
          : session
      )))
    } finally {
      setIsLoading(false)
    }
  }, [input, currentSessionId, currentSession.messages])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      if (input.trim() && !isLoading) {
        handleSubmit(e as any)
      }
    }
  }, [input, isLoading, handleSubmit])

  const handleNewSession = useCallback(() => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
    }
    setSessions(prev => [...prev, newSession])
    setCurrentSessionId(newSession.id)
    setInput('')
  }, [])

  const handleSelectSession = useCallback((sessionId: string) => {
    setCurrentSessionId(sessionId)
    setInput('')
  }, [])

  useEvent(SHOW_AI_ASSISTANT_CHAT, (): void => {
    setOpen(true)
  })

  useEvent(HIDE_AI_ASSISTANT_CHAT, (): void => {
    setOpen(false)
  })

  return (
    <Drawer
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          width: `${chatWidth}px`,
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          marginLeft: 'auto',
          marginRight: 0,
        },
      }}
    >
      <Resizable
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        minWidth={CHAT_MIN_WIDTH}
        maxWidth={CHAT_MAX_WIDTH}
        boundsByDirection={true}
        size={{ width: chatWidth, height: '100%' }}
        onResize={(e, direction, ref, d) => {
          const newWidth = chatWidth + d.width
          if (newWidth >= CHAT_MIN_WIDTH && newWidth <= CHAT_MAX_WIDTH) {
            setChatWidth(newWidth)
          }
        }}
        onResizeStop={(e, direction, ref, d) => {
          const newWidth = chatWidth + d.width
          if (newWidth >= CHAT_MIN_WIDTH && newWidth <= CHAT_MAX_WIDTH) {
            setChatWidth(newWidth)
          }
        }}
        handleStyles={{
          left: {
            cursor: 'ew-resize',
            width: '4px',
            left: 0,
            zIndex: 1,
          },
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            width: '100%',
          }}
          data-testid="AIAssistantChat"
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              borderBottom: 1,
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SmartToyIcon color="primary" />
              <Typography variant="h6">APIHUB AI Assistant</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton
                size="small"
                onClick={handleNewSession}
                title="New Chat"
                data-testid="AIAssistantChatNewButton"
              >
                <AddIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => setOpen(false)}
                data-testid="AIAssistantChatCloseButton"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Sessions List */}
          {sessions.length > 1 && (
            <>
              <Box
                sx={{
                  p: 1,
                  borderBottom: 1,
                  borderColor: 'divider',
                  overflowX: 'auto',
                  display: 'flex',
                  gap: 0.5,
                }}
              >
                {sessions.map(session => (
                  <Button
                    key={session.id}
                    size="small"
                    variant={session.id === currentSessionId ? 'contained' : 'outlined'}
                    onClick={() => handleSelectSession(session.id)}
                    sx={{
                      minWidth: 'auto',
                      px: 1.5,
                      textTransform: 'none',
                      fontSize: '0.75rem',
                    }}
                  >
                    {session.title}
                  </Button>
                ))}
              </Box>
            </>
          )}

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {currentSession.messages.length === 0 && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                  color: 'text.secondary',
                  gap: 1,
                }}
              >
                <SmartToyIcon sx={{ fontSize: 48, opacity: 0.5 }} />
                <Typography variant="body2">
                  Ask a question and I'll help you with API Hub
                </Typography>
                <Typography variant="caption" sx={{ mt: 1 }}>
                  Press Ctrl+Enter to send
                </Typography>
              </Box>
            )}
            {currentSession.messages.map((message) => (
              <Box
                key={message.id}
                sx={{
                  display: 'flex',
                  gap: 1,
                  flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                    maxWidth: '80%',
                  }}
                >
                  {message.role === 'assistant' ? (
                    <SmartToyIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                  ) : (
                    <PersonIcon sx={{ color: 'text.secondary', mt: 0.5 }} />
                  )}
                  <Paper
                    elevation={1}
                    sx={{
                      p: message.role === 'assistant' ? 0 : 1.5,
                      bgcolor: message.role === 'user' ? 'primary.light' : 'transparent',
                      color: message.role === 'user' ? 'primary.contrastText' : 'text.primary',
                      boxShadow: message.role === 'assistant' ? 'none' : 1,
                    }}
                  >
                    {message.role === 'assistant' ? (
                      <Box sx={{ p: 1.5 }}>
                        <ChatMarkdown content={message.content} />
                      </Box>
                    ) : (
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                        {message.content}
                      </Typography>
                    )}
                  </Paper>
                </Box>
              </Box>
            ))}
            {isLoading && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <SmartToyIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                <Paper elevation={1} sx={{ p: 1.5, bgcolor: 'grey.100' }}>
                  <CircularProgress size={16} />
                </Paper>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 2,
              borderTop: 1,
              borderColor: 'divider',
              display: 'flex',
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Enter a message... (Ctrl+Enter to send)"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              multiline
              maxRows={4}
              sx={{ flex: 1 }}
            />
            <IconButton
              type="submit"
              disabled={isLoading || !input.trim()}
              color="primary"
              sx={{ alignSelf: 'flex-end' }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Resizable>
    </Drawer>
  )
})

