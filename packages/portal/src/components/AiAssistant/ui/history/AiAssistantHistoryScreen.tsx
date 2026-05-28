import { type FC, memo } from 'react'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { AiAssistantHeader } from '../header/AiAssistantHeader'
import { AI_ASSISTANT_HEADER_MODE } from '../header/aiAssistantHeaderMode'
import { DeleteChatConfirmation } from './DeleteChatDialog'
import { HistoryChatListRow } from './HistoryChatListRow'
import { HistorySearchField } from './HistorySearchField'
import { useAiAssistantHistoryScreen } from './hooks/useAiAssistantHistoryScreen'

export const AiAssistantHistoryScreen: FC = memo(() => {
  const {
    activeChatId,
    activeTurnChatId,
    chatPendingDelete,
    chats,
    chatsQuery,
    clearRowTitleOverride,
    deleteChat,
    handleBack,
    handleCancelDelete,
    handleCancelRename,
    handleConfirmDelete,
    handleListScroll,
    handleOpenChat,
    handlePinToggle,
    handleRenameChat,
    handleRequestDelete,
    handleStartRename,
    isBusy,
    listRef,
    loadedPinnedCount,
    renamingChatId,
    rowTitleOverrideByChatId,
    searchQuery,
    setSearchQuery,
  } = useAiAssistantHistoryScreen()

  const isEmpty = chats.length === 0

  return (
    <HistoryLayout>
      <AiAssistantHeader
        mode={AI_ASSISTANT_HEADER_MODE.history}
        onBack={handleBack}
      />
      <HistorySearchField value={searchQuery} onChange={setSearchQuery} />
      <ListArea
        ref={listRef}
        onScroll={handleListScroll}
        data-testid="AiAssistantHistoryList"
      >
        {isEmpty
          ? (
            <HistoryEmptyListColumn>
              <RecentlyLabel>Recent</RecentlyLabel>
              {!chatsQuery.isLoading && (
                <CenteredState>
                  <Typography color="text.secondary" variant="body2">
                    No chats found.
                  </Typography>
                </CenteredState>
              )}
            </HistoryEmptyListColumn>
          )
          : (
            <HistoryChatListColumn>
              <RecentlyLabel>Recent</RecentlyLabel>
              {chats.map((chat) => (
                <HistoryChatListRow
                  key={chat.chatId}
                  chat={chat}
                  rowTitleOverride={rowTitleOverrideByChatId[chat.chatId]}
                  isActive={activeChatId === chat.chatId}
                  isEditing={renamingChatId === chat.chatId}
                  loadedPinnedCount={loadedPinnedCount}
                  isBusy={isBusy}
                  activeTurnChatId={activeTurnChatId}
                  onOpenChat={handleOpenChat}
                  onStartRename={handleStartRename}
                  onRenameChat={handleRenameChat}
                  onCancelRename={handleCancelRename}
                  onTogglePin={handlePinToggle}
                  onRequestDelete={handleRequestDelete}
                  onReleaseRowTitleOverride={clearRowTitleOverride}
                />
              ))}
            </HistoryChatListColumn>
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

AiAssistantHistoryScreen.displayName = 'AiAssistantHistoryScreen'

const HistoryLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
})

const LIST_FLEX_COLUMN = { display: 'flex', flexDirection: 'column' } as const

const ListArea = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  // Match HistorySearchField horizontal inset so list aligns with search
  padding: theme.spacing(0, 3, 2),
  ...LIST_FLEX_COLUMN,
}))

const HistoryEmptyListColumn = styled(Box)(() => ({
  flex: 1,
  ...LIST_FLEX_COLUMN,
}))

const HistoryChatListColumn = styled(Box)(({ theme }) => ({
  ...LIST_FLEX_COLUMN,
  gap: theme.spacing(0.5),
}))

const RecentlyLabel = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1, 0, 0.5, 1.5),
  color: theme.palette.text.secondary,
  fontSize: 13,
  fontWeight: 500,
}))

const CenteredState = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  minHeight: theme.spacing(20),
  padding: theme.spacing(2),
}))
