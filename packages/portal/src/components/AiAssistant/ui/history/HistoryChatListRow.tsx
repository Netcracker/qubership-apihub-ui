import { type FC, memo, useCallback } from 'react'

import { type AiChat, type ChatId, MAX_PINNED_PER_USER } from '../../api/types'
import { ChatListRow } from './ChatListRow'

const PIN_LIMIT_TOOLTIP = `The maximum of ${MAX_PINNED_PER_USER} pinned chats is reached. Unpin one to pin another.`

type HistoryChatListRowProps = {
  chat: AiChat
  rowTitleOverride?: string
  isActive: boolean
  isEditing: boolean
  loadedPinnedCount: number
  isBusy: boolean
  activeTurnChatId: ChatId | null
  onOpenChat: (chatId: ChatId) => void
  onStartRename: (chatId: ChatId) => void
  onRenameChat: (chatId: ChatId, title: string) => void
  onCancelRename: () => void
  onTogglePin: (chatId: ChatId, nextPinned: boolean) => void
  onRequestDelete: (chat: AiChat) => void
  onReleaseRowTitleOverride: (chatId: ChatId) => void
}

export const HistoryChatListRow: FC<HistoryChatListRowProps> = memo(({
  chat,
  rowTitleOverride,
  isActive,
  isEditing,
  loadedPinnedCount,
  isBusy,
  activeTurnChatId,
  onOpenChat,
  onStartRename,
  onRenameChat,
  onCancelRename,
  onTogglePin,
  onRequestDelete,
  onReleaseRowTitleOverride,
}) => {
  const {chatId} = chat
  const pinDisabled = !chat.pinned && loadedPinnedCount >= MAX_PINNED_PER_USER
  const deleteDisabled = isBusy && activeTurnChatId === chatId

  const handleOpen = useCallback(() => {
    onOpenChat(chatId)
  }, [chatId, onOpenChat])

  const handleStartRename = useCallback(() => {
    onStartRename(chatId)
  }, [chatId, onStartRename])

  const handleRename = useCallback((title: string) => {
    onRenameChat(chatId, title)
  }, [chatId, onRenameChat])

  const handleTogglePin = useCallback((nextPinned: boolean) => {
    onTogglePin(chatId, nextPinned)
  }, [chatId, onTogglePin])

  const handleDelete = useCallback(() => {
    onRequestDelete(chat)
  }, [chat, onRequestDelete])

  return (
    <ChatListRow
      chat={chat}
      rowTitleOverride={rowTitleOverride}
      isActive={isActive}
      isEditing={isEditing}
      isPinDisabled={pinDisabled}
      pinDisabledTooltip={pinDisabled ? PIN_LIMIT_TOOLTIP : undefined}
      isDeleteDisabled={deleteDisabled}
      onOpen={handleOpen}
      onStartRename={handleStartRename}
      onRename={handleRename}
      onCancelRename={onCancelRename}
      onTogglePin={handleTogglePin}
      onDelete={handleDelete}
      onReleaseRowTitleOverride={onReleaseRowTitleOverride}
    />
  )
})

HistoryChatListRow.displayName = 'HistoryChatListRow'
