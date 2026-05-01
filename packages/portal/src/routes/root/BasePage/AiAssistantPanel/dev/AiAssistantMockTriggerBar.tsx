import { Button, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useQueryClient } from '@tanstack/react-query'
import type { FC } from 'react'
import { memo, useCallback, useState } from 'react'
import { useShowErrorNotification } from '../../Notification'
import { aiChatMessagesKey } from '../api/queryKeys'
import type { ChatId } from '../api/types'
import { useAiAssistantContext } from '../state/AiAssistantContext'

/** Seed chat with 120 messages (mock fixtures). See `packages/portal/server/README.md`. */
export const AI_ASSISTANT_DEV_PAGINATION_FIXTURE_CHAT_ID: ChatId = 'fc000001-0000-4000-8000-0000000000b0'

/** Substrings matched by `pickScenario` in the mock (before default). */
const MOCK_SCENARIO_SNIPPETS: readonly { label: string; text: string }[] = [
  { label: 'default', text: 'default' },
  { label: 'debug:json', text: 'debug:json' },
  { label: 'debug:links', text: 'debug:links' },
  { label: 'debug:longmd', text: 'debug:longmd' },
  { label: 'debug:attachment', text: 'debug:attachment' },
  { label: 'debug:error', text: 'debug:error' },
  { label: 'debug:offtopic', text: 'debug:offtopic' },
]

export type AiAssistantMockTriggerBarProps = {
  onInsertSnippet: (text: string) => void
}

export const AiAssistantMockTriggerBar: FC<AiAssistantMockTriggerBarProps> = memo(({
  onInsertSnippet,
}) => {
  const queryClient = useQueryClient()
  const showError = useShowErrorNotification()
  const { openChatScreen } = useAiAssistantContext()
  const [busyKey, setBusyKey] = useState<string | null>(null)

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
      console.debug(
        '[AiAssistant mock] Loaded fixture chat',
        AI_ASSISTANT_DEV_PAGINATION_FIXTURE_CHAT_ID,
      )
    })
  }, [openChatScreen, queryClient, run])

  return (
    <DevBarRoot spacing={1}>
      <Typography variant="caption" color="warning.main" component="div">
        Dev-only: insert mock scenario text, then Send. Long thread loads the 120-msg fixture chat.
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
          Long thread
        </Button>
        {MOCK_SCENARIO_SNIPPETS.map(({ label, text }) => (
          <Button
            key={label}
            size="small"
            variant="outlined"
            color="warning"
            disabled={busyKey !== null}
            onClick={() => onInsertSnippet(text)}
          >
            {label}
          </Button>
        ))}
      </Stack>
    </DevBarRoot>
  )
})

const DevBarRoot = styled(Stack)(({ theme }) => ({
  flexShrink: 0,
  padding: theme.spacing(1, 2, 2),
  borderTop: `1px dashed ${theme.palette.warning.main}`,
}))
