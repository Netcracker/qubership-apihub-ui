import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { SendPlaneIcon } from '@netcracker/qubership-apihub-ui-shared/icons/SendPlaneIcon'
import type { FC, KeyboardEvent } from 'react'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { AssistantCircularIconButton } from '../common/AssistantCircularIconButton'

export type ComposerProps = {
  panelOpen: boolean
  chatKey: string
}

export const Composer: FC<ComposerProps> = memo(({ panelOpen, chatKey }) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const [draft, setDraft] = useState('')

  useEffect(() => {
    setDraft('')
  }, [chatKey])

  useEffect(() => {
    if (!panelOpen) {
      return
    }
    const id = window.requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
    return () => window.cancelAnimationFrame(id)
  }, [panelOpen, chatKey])

  const handleComposerKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' || !(event.ctrlKey || event.metaKey)) {
      return
    }
    event.preventDefault()
    // Phase 5: submit when Send is enabled
  }, [])

  return (
    <PillRow onKeyDown={handleComposerKeyDown}>
      <StyledTextField
        inputRef={inputRef}
        multiline
        maxRows={6}
        minRows={1}
        variant="standard"
        placeholder="Type your message..."
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        InputProps={{ disableUnderline: true }}
      />
      <AssistantCircularIconButton variant="contained" aria-label="Send message" disabled>
        <SendPlaneIcon color="inherit" />
      </AssistantCircularIconButton>
    </PillRow>
  )
})

const PillRow = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  margin: theme.spacing(2),
  marginTop: theme.spacing(1),
  padding: theme.spacing(0.75, 1, 0.75, 1.5),
  borderRadius: 25,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.mode === 'dark'
    ? theme.palette.background.default
    : theme.palette.grey[50],
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: '1 1 0',
  minWidth: 0,
  marginTop: 0,
  marginBottom: 0,
  '& .MuiInputBase-root': {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}))
