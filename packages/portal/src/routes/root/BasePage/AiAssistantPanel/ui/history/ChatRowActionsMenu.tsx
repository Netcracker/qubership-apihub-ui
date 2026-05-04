import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import type { FC, MouseEvent } from 'react'
import { memo, useCallback, useState } from 'react'

import { ActionsIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ActionsIcon'

export type ChatRowActionsMenuProps = {
  pinned: boolean
  pinDisabled: boolean
  deleteDisabled: boolean
  onRename: () => void
  onTogglePin: (nextPinned: boolean) => void
  onDelete: () => void
  onMenuOpenChange?: (open: boolean) => void
}

export const ChatRowActionsMenu: FC<ChatRowActionsMenuProps> = memo(({
  pinned,
  pinDisabled,
  deleteDisabled,
  onRename,
  onTogglePin,
  onDelete,
  onMenuOpenChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const closeMenu = useCallback(() => {
    setAnchorEl(null)
    onMenuOpenChange?.(false)
  }, [onMenuOpenChange])

  const handleOpen = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
    onMenuOpenChange?.(true)
  }, [onMenuOpenChange])

  const handleRename = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    closeMenu()
    onRename()
  }, [closeMenu, onRename])

  const handlePin = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    closeMenu()
    onTogglePin(!pinned)
  }, [closeMenu, onTogglePin, pinned])

  const handleDelete = useCallback((event: MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    closeMenu()
    onDelete()
  }, [closeMenu, onDelete])

  return (
    <>
      <ActionsMenuIconButton
        size="small"
        color="inherit"
        aria-label="Chat actions"
        aria-expanded={open}
        aria-haspopup="true"
        data-testid="AiAssistantHistoryChatActionsButton"
        onClick={handleOpen}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <ActionsIcon fontSize="small" />
      </ActionsMenuIconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        onClick={(event) => event.stopPropagation()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleRename}>
          Rename
        </MenuItem>
        <MenuItem
          disabled={pinDisabled}
          onClick={handlePin}
        >
          {pinned ? 'Unpin' : 'Pin'}
        </MenuItem>
        <MenuItem
          disabled={deleteDisabled}
          onClick={handleDelete}
        >
          Delete
        </MenuItem>
      </Menu>
    </>
  )
})

const ActionsMenuIconButton = styled(IconButton)(({ theme }) => ({
  height: 20,
  '&:hover, &[aria-expanded="true"]': {
    backgroundColor: theme.palette.action.hover,
  },
}))
