import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import {
  type FC,
  type KeyboardEvent,
  memo,
  type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { SendIcon } from '@netcracker/qubership-apihub-ui-shared/icons/SendIcon'
import { StopIcon } from '@netcracker/qubership-apihub-ui-shared/icons/StopIcon'
import { useAiAssistantContext } from '../../state/AiAssistantContext'
import { AssistantCircularIconButton } from './AssistantCircularIconButton'

export type ComposerProps = {
  panelOpen: boolean
  chatKey: string
  /** Dev bar: insert scenario text into the draft without lifting state. */
  insertDraftSnippetRef?: MutableRefObject<((text: string) => void) | null>
}

export const Composer: FC<ComposerProps> = memo(({ panelOpen, chatKey, insertDraftSnippetRef }) => {
  const { activeChatId, streaming } = useAiAssistantContext()
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const [draft, setDraft] = useState('')

  useEffect(() => {
    setDraft('')
  }, [chatKey])

  useEffect(() => {
    if (!insertDraftSnippetRef) {
      return
    }
    insertDraftSnippetRef.current = (text: string): void => {
      setDraft(text)
      window.requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    }
    return () => {
      insertDraftSnippetRef.current = null
    }
  }, [insertDraftSnippetRef])

  useEffect(() => {
    if (!panelOpen) {
      return
    }
    const id = window.requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
    return () => window.cancelAnimationFrame(id)
  }, [panelOpen, chatKey])

  const busy = streaming.isBusy
  const trimmedDraft = draft.trim()
  const canSend = !busy && trimmedDraft.length > 0

  const handleSubmit = useCallback((): void => {
    if (!canSend) {
      return
    }
    const text = draft.trim()
    setDraft('')
    void streaming.submit(activeChatId, text)
  }, [activeChatId, canSend, draft, streaming])

  const handleComposerKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' || !(event.ctrlKey || event.metaKey)) {
      return
    }
    event.preventDefault()
    handleSubmit()
  }, [handleSubmit])

  return (
    <PillRow onKeyDown={handleComposerKeyDown}>
      <ComposerInputWrap>
        <StyledTextField
          inputRef={inputRef}
          multiline
          maxRows={10}
          minRows={1}
          variant="standard"
          placeholder="Type your message..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          InputProps={{ disableUnderline: true }}
          disabled={busy}
        />
      </ComposerInputWrap>
      {busy
        ? (
          <AssistantCircularIconButton
            variant="contained"
            aria-label="Stop generation"
            onClick={() => streaming.abort()}
          >
            <StopIcon fontSize="small" />
          </AssistantCircularIconButton>
        )
        : (
          <AssistantCircularIconButton
            variant="contained"
            aria-label="Send message"
            onClick={() => {
              if (trimmedDraft.length === 0) {
                return
              }
              handleSubmit()
            }}
          >
            <SendIcon color="inherit" />
          </AssistantCircularIconButton>
        )}
    </PillRow>
  )
})

const PillRow = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'flex-end',
  gap: theme.spacing(1),
  margin: theme.spacing(2),
  marginTop: theme.spacing(1),
  padding: theme.spacing(0.5, 1, 0.5, 1.25),
  borderRadius: 25,
  boxSizing: 'border-box',
  border: `1px solid ${theme.palette.divider}`,
  '&:focus-within': {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}))

/** Keeps the textarea column full-width; scrollbar stays at the right edge of this column only. */
const ComposerInputWrap = styled(Box)({
  flex: '1 1 0',
  minWidth: 0,
})

const StyledTextField = styled(TextField)(({ theme }) => {
  return {
    flex: '1 1 auto',
    width: '100%',
    minWidth: 0,
    marginTop: 0,
    marginBottom: 0,
    '& .MuiInputBase-root': {
      minHeight: theme.spacing(5),
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
      paddingLeft: theme.spacing(0.25),
      paddingRight: 0,
    },
    '& .MuiInputBase-input': {
      ...theme.typography.body2,
      lineHeight: 1.35,
      padding: 0,
      resize: 'none',
      overflowY: 'auto',
    },
    '& .MuiInputBase-input::-webkit-scrollbar': {
      width: 4,
    },
    // '& .MuiInputBase-input::-webkit-scrollbar-thumb': {
    //   background: theme.palette.grey[300],
    // },
  }
})
