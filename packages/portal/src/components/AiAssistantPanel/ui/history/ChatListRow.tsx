import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { type FC, type KeyboardEvent, memo, useCallback, useEffect, useState } from 'react'

import { PinIcon } from '@netcracker/qubership-apihub-ui-shared/icons/PinIcon'
import type { AiChat } from '../../api/types'
import { ChatRowActionsMenu } from './ChatRowActionsMenu'
import { InlineRenameField } from './InlineRenameField'

export type ChatListRowProps = {
  chat: AiChat
  isActive: boolean
  isEditing: boolean
  isPinDisabled: boolean
  isDeleteDisabled: boolean
  onOpen: () => void
  onStartRename: () => void
  onRename: (title: string) => void
  onCancelRename: () => void
  onTogglePin: (nextPinned: boolean) => void
  onDelete: () => void
}

export const ChatListRow: FC<ChatListRowProps> = memo(({
  chat,
  isActive,
  isEditing,
  isPinDisabled,
  isDeleteDisabled,
  onOpen,
  onStartRename,
  onRename,
  onCancelRename,
  onTogglePin,
  onDelete,
}) => {
  const displayedTitle = chat.title.trim() || 'Untitled chat'
  const [actionsMenuOpen, setActionsMenuOpen] = useState(false)

  useEffect(() => {
    if (isEditing) {
      setActionsMenuOpen(false)
    }
  }, [isEditing])

  const handleOpen = useCallback(() => {
    if (isEditing) {
      return
    }
    onOpen()
  }, [isEditing, onOpen])

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (isEditing) {
      return
    }
    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }
    event.preventDefault()
    onOpen()
  }, [isEditing, onOpen])

  return (
    <RowRoot
      role={isEditing ? undefined : 'button'}
      tabIndex={isEditing ? -1 : 0}
      active={isActive}
      editing={isEditing}
      actionsMenuOpen={actionsMenuOpen}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      data-testid="AiAssistantHistoryChatRow"
      aria-label={isEditing ? undefined : displayedTitle}
    >
      <TitleSlot>
        {isEditing
          ? (
            <InlineRenameField
              initialTitle={chat.title}
              onSave={onRename}
              onCancel={onCancelRename}
            />
          )
          : <RowTitle>{displayedTitle}</RowTitle>}
      </TitleSlot>
      {!isEditing
        ? (
          <ActionsSlot>
            {chat.pinned ? <PinIcon aria-hidden fontSize="small" /> : null}
            <ChatRowActionsMenu
              pinned={Boolean(chat.pinned)}
              pinDisabled={isPinDisabled}
              deleteDisabled={isDeleteDisabled}
              onRename={onStartRename}
              onTogglePin={onTogglePin}
              onDelete={onDelete}
              onMenuOpenChange={setActionsMenuOpen}
            />
          </ActionsSlot>
        )
        : null}
    </RowRoot>
  )
})

const RowRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'editing' && prop !== 'actionsMenuOpen',
})<{ active: boolean; editing: boolean; actionsMenuOpen: boolean }>(({
  theme,
  active,
  editing,
  actionsMenuOpen,
}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  minWidth: 0,
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${editing ? theme.palette.primary.main : 'transparent'}`,
  backgroundColor: editing
    ? theme.palette.background.paper
    : active
    ? theme.palette.action.selected
    : theme.palette.background.paper,
  cursor: editing ? 'default' : 'pointer',
  ...(actionsMenuOpen && !editing
    ? {
      backgroundColor: active ? theme.palette.action.selected : theme.palette.action.hover,
    }
    : {}),
  '&:hover': editing
    ? undefined
    : {
      backgroundColor: theme.palette.action.hover,
    },
  '&:active': editing
    ? undefined
    : {
      backgroundColor: theme.palette.action.selected,
    },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 1,
  },
}))

const TitleSlot = styled(Box)({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
})

const RowTitle = styled(Typography)(({ theme }) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: theme.palette.text.primary,
  fontSize: 13,
  lineHeight: '20px',
  letterSpacing: '-0.0325px',
  fontWeight: 500,
}))

const ActionsSlot = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
})
