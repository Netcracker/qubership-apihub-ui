import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { type FC, memo, useCallback, useMemo, useRef, useState } from 'react'

import { type AiChat, type ChatId, MAX_PINNED_PER_USER } from '../../api/types'
import { useAiChats } from '../../api/useAiChats'
import { useDeleteAiChat } from '../../api/useDeleteAiChat'
import { useUpdateAiChat } from '../../api/useUpdateAiChat'
import { useAiAssistantContext } from '../../state/AiAssistantContext'
import { ChatListRow } from './ChatListRow'
import { DeleteChatConfirmation } from './DeleteChatConfirmation'
import { HistoryScreenHeader } from './HistoryScreenHeader'
import { HistorySearchField } from './HistorySearchField'

const LOAD_NEXT_PAGE_THRESHOLD_PX = 120

export const HistoryScreen: FC = memo(() => {
  const { activeChatId, closePanel, openChatScreen, openHistory, resetActiveChat, streaming } = useAiAssistantContext()
  const updateChat = useUpdateAiChat()
  const deleteChat = useDeleteAiChat()

  const [searchQuery, setSearchQuery] = useState('')
  const [renamingChatId, setRenamingChatId] = useState<ChatId | null>(null)
  const [chatPendingDelete, setChatPendingDelete] = useState<AiChat | null>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const chatsQuery = useAiChats(searchQuery)

  const chats = useMemo<AiChat[]>(() => {
    return chatsQuery.data?.pages.flatMap((page) => page.chats) ?? []
  }, [chatsQuery.data?.pages])
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = chatsQuery

  const isUnfiltered = searchQuery === ''
  const loadedPinnedCount = useMemo(
    () => (isUnfiltered ? chats.filter((chat) => chat.pinned === true).length : 0),
    [chats, isUnfiltered],
  )

  const handleBack = useCallback(() => {
    openChatScreen(activeChatId)
  }, [activeChatId, openChatScreen])

  const handleOpenChat = useCallback((chatId: ChatId) => {
    setRenamingChatId(null)
    openChatScreen(chatId)
  }, [openChatScreen])

  const handleRenameChat = useCallback((chatId: ChatId, title: string) => {
    setRenamingChatId(null)
    updateChat.mutate({ chatId: chatId, patch: { title: title } })
  }, [updateChat])

  const handlePinToggle = useCallback((chatId: ChatId, nextPinned: boolean) => {
    updateChat.mutate({ chatId: chatId, patch: { pinned: nextPinned } })
  }, [updateChat])

  const handleConfirmDelete = useCallback(() => {
    if (!chatPendingDelete) {
      return
    }
    const chatToDelete = chatPendingDelete.chatId
    setChatPendingDelete(null)
    setRenamingChatId((current) => (current === chatToDelete ? null : current))
    deleteChat.mutate(chatToDelete)
  }, [chatPendingDelete, deleteChat])

  const handleCancelDelete = useCallback(() => {
    setChatPendingDelete(null)
  }, [])

  const handleListScroll = useCallback(() => {
    const element = listRef.current
    if (!element || !hasNextPage || isFetchingNextPage) {
      return
    }
    const distanceFromBottom = element.scrollHeight - element.scrollTop - element.clientHeight
    if (distanceFromBottom > LOAD_NEXT_PAGE_THRESHOLD_PX) {
      return
    }
    void fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  const handleNewChat = useCallback((): void => {
    streaming.abort()
    streaming.reset()
    resetActiveChat()
  }, [resetActiveChat, streaming])

  return (
    <HistoryLayout>
      <HistoryScreenHeader
        newChatDisabled={false}
        onBack={handleBack}
        onNewChat={handleNewChat}
        onClose={closePanel}
        onHistory={openHistory}
      />
      <HistorySearchField value={searchQuery} onChange={setSearchQuery} />
      <ListArea
        ref={listRef}
        onScroll={handleListScroll}
        data-testid="AiAssistantHistoryList"
      >
        {chatsQuery.isLoading
          ? (
            <CenteredState>
              <CircularProgress size={28} />
            </CenteredState>
          )
          : chatsQuery.isError
          ? (
            <CenteredState>
              <Typography color="error" variant="body2">
                Could not load chat history.
              </Typography>
            </CenteredState>
          )
          : chats.length === 0
          ? (
            <CenteredState>
              <Typography color="text.secondary" variant="body2">
                No chats found.
              </Typography>
            </CenteredState>
          )
          : (
            <RowsColumn>
              {isUnfiltered ? <RecentlyLabel>Recent</RecentlyLabel> : null}
              {chats.map((chat) => {
                const isPinned = chat.pinned === true
                const pinnedOthersCount = loadedPinnedCount - (isPinned ? 1 : 0)
                const pinDisabled = !isPinned && isUnfiltered && pinnedOthersCount >= MAX_PINNED_PER_USER
                const deleteDisabled = streaming.isBusy &&
                  streaming.activeTurnChatId !== null &&
                  streaming.activeTurnChatId === chat.chatId

                return (
                  <ChatListRow
                    key={chat.chatId}
                    chat={chat}
                    isActive={activeChatId === chat.chatId}
                    isEditing={renamingChatId === chat.chatId}
                    isPinDisabled={pinDisabled}
                    isDeleteDisabled={deleteDisabled}
                    onOpen={() => handleOpenChat(chat.chatId)}
                    onStartRename={() => setRenamingChatId(chat.chatId)}
                    onRename={(title) => handleRenameChat(chat.chatId, title)}
                    onCancelRename={() => setRenamingChatId(null)}
                    onTogglePin={(nextPinned) => handlePinToggle(chat.chatId, nextPinned)}
                    onDelete={() => setChatPendingDelete(chat)}
                  />
                )
              })}
              {chatsQuery.isFetchingNextPage
                ? (
                  <NextPageLoader>
                    <CircularProgress size={20} />
                  </NextPageLoader>
                )
                : null}
            </RowsColumn>
          )}
      </ListArea>
      <DeleteChatConfirmation
        open={chatPendingDelete !== null}
        loading={deleteChat.isPending}
        chatTitle={chatPendingDelete?.title}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </HistoryLayout>
  )
})

const HistoryLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
})

const ListArea = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  // Match HistorySearchField horizontal inset (Figma px-24) so list aligns with search
  padding: theme.spacing(0, 3, 2),
}))

const RowsColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}))

const RecentlyLabel = styled(Typography)(({ theme }) => ({
  // Figma: UI/13 Medium, text secondary, pl-12 inside 24px content gutter
  padding: theme.spacing(1, 0, 0.5, 1.5),
  color: theme.palette.text.secondary,
  fontSize: 13,
  fontWeight: 500,
  lineHeight: '20px',
  letterSpacing: '-0.0325px',
}))

const CenteredState = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  minHeight: theme.spacing(20),
  padding: theme.spacing(2),
}))

const NextPageLoader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(1, 0, 0),
}))
