import { Button, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQueryClient } from '@tanstack/react-query'
import type { FC } from 'react'
import { memo, useCallback, useState } from 'react'
import { useShowErrorNotification, useShowInfoNotification } from '../../Notification'
import { aiChatMessagesKey } from '../api/queryKeys'
import type { ChatId } from '../api/types'
import { useAiAssistantContext } from '../state/AiAssistantContext'

/** Seed chat with 120 messages (mock fixtures). See `packages/portal/server/README.md`. */
export const AI_ASSISTANT_DEV_PAGINATION_FIXTURE_CHAT_ID: ChatId = 'fc000001-0000-4000-8000-0000000000b0'

async function drainStreamResponse(chatId: ChatId, content: string): Promise<void> {
  const clientMessageId = crypto.randomUUID()
  const res = await fetch(
    `${API_V1}/ai-chat/chats/${encodeURIComponent(chatId)}/messages/stream`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ content, clientMessageId }),
    },
  )
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `HTTP ${res.status}`)
  }
  const reader = res.body?.getReader()
  if (!reader) {
    return
  }
  let chunk = await reader.read()
  while (!chunk.done) {
    chunk = await reader.read()
  }
}

export const AiAssistantMockTriggerBar: FC = memo(() => {
  const queryClient = useQueryClient()
  const showInfo = useShowInfoNotification()
  const showError = useShowErrorNotification()
  const { activeChatId, openChatScreen } = useAiAssistantContext()
  const [busyKey, setBusyKey] = useState<string | null>(null)

  const effectiveChatId = activeChatId ?? AI_ASSISTANT_DEV_PAGINATION_FIXTURE_CHAT_ID

  const run = useCallback(
    async (key: string, fn: () => Promise<void>): Promise<void> => {
      setBusyKey(key)
      try {
        await fn()
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e)
        showError({ title: 'Mock trigger failed', message: message })
      } finally {
        setBusyKey(null)
      }
    },
    [showError],
  )

  const handleLongThread = useCallback((): void => {
    void run('long', async () => {
      openChatScreen(AI_ASSISTANT_DEV_PAGINATION_FIXTURE_CHAT_ID)
      await queryClient.invalidateQueries({
        queryKey: aiChatMessagesKey(AI_ASSISTANT_DEV_PAGINATION_FIXTURE_CHAT_ID),
      })
      showInfo({
        message: `Loaded fixture chat ${AI_ASSISTANT_DEV_PAGINATION_FIXTURE_CHAT_ID}`,
      })
    })
  }, [openChatScreen, queryClient, run, showInfo])

  const handleStreamLinks = useCallback((): void => {
    void run('links', async () => {
      await drainStreamResponse(effectiveChatId, 'debug:links')
      showInfo({ message: 'Stream debug:links finished' })
    })
  }, [effectiveChatId, run, showInfo])

  const handleStreamAttachment = useCallback((): void => {
    void run('attachment', async () => {
      await drainStreamResponse(effectiveChatId, 'debug:attachment')
      showInfo({ message: 'Stream debug:attachment finished' })
    })
  }, [effectiveChatId, run, showInfo])

  const handleStreamLongMd = useCallback((): void => {
    void run('longmd', async () => {
      await drainStreamResponse(effectiveChatId, 'debug:longmd')
      showInfo({ message: 'Stream debug:longmd finished' })
    })
  }, [effectiveChatId, run, showInfo])

  const handleStreamDefault = useCallback((): void => {
    void run('default', async () => {
      await drainStreamResponse(effectiveChatId, 'hello default scenario')
      showInfo({ message: 'Default stream finished' })
    })
  }, [effectiveChatId, run, showInfo])

  return (
    <DevBarRoot spacing={1}>
      <Typography variant="caption" color="warning.main" component="div">
        Dev-only mock triggers (remove with AiAssistantMockTriggerBar.tsx)
      </Typography>
      <Stack
        direction="row"
        sx={{
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        <Button
          size="small"
          variant="outlined"
          color="warning"
          disabled={busyKey !== null}
          onClick={handleLongThread}
        >
          Long thread (120)
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="warning"
          disabled={busyKey !== null}
          onClick={handleStreamLinks}
        >
          Stream: links
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="warning"
          disabled={busyKey !== null}
          onClick={handleStreamAttachment}
        >
          Stream: file
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="warning"
          disabled={busyKey !== null}
          onClick={handleStreamLongMd}
        >
          Stream: long MD
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="warning"
          disabled={busyKey !== null}
          onClick={handleStreamDefault}
        >
          Stream: default
        </Button>
      </Stack>
    </DevBarRoot>
  )
})

const DevBarRoot = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px dashed ${theme.palette.warning.main}`,
}))
