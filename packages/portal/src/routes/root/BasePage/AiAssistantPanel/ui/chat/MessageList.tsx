import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import { JumpToLatestArrowIcon } from '@netcracker/qubership-apihub-ui-shared/icons/JumpToLatestArrowIcon'
import { JumpToLatestStreamingIcon } from '@netcracker/qubership-apihub-ui-shared/icons/JumpToLatestStreamingIcon'
import type { FetchNextPageOptions } from '@tanstack/react-query'
import type { FC } from 'react'
import { memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { AiChatMessage, ChatId } from '../../api/types'
import { AssistantCircularIconButton } from '../common/AssistantCircularIconButton'
import { MessageBubble } from './MessageBubble'

const NEAR_BOTTOM_THRESHOLD_PX = 40
const LOAD_OLDER_SCROLL_TOP_PX = 72

export type MessageListProps = {
  chatId: ChatId
  messages: AiChatMessage[]
  hasNextPage: boolean
  isFetchingNextPage: boolean
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<unknown>
  /** Phase 5: use `active` while assistant stream is pending or started. */
  jumpButtonStreamPhase: 'idle' | 'active'
}

export const MessageList: FC<MessageListProps> = memo(
  ({
    chatId,
    messages,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    jumpButtonStreamPhase,
  }) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const anchorRef = useRef<{ scrollHeight: number; scrollTop: number } | null>(null)
    const [nearBottom, setNearBottom] = useState(true)
    const didInitialScrollRef = useRef(false)

    useLayoutEffect(() => {
      didInitialScrollRef.current = false
    }, [chatId])

    useLayoutEffect(() => {
      const el = scrollRef.current
      if (!el || messages.length === 0) {
        return
      }
      if (!didInitialScrollRef.current) {
        el.scrollTop = el.scrollHeight
        didInitialScrollRef.current = true
        setNearBottom(true)
      }
    }, [chatId, messages])

    useLayoutEffect(() => {
      const el = scrollRef.current
      const anchor = anchorRef.current
      if (!el || !anchor || isFetchingNextPage) {
        return
      }
      anchorRef.current = null
      const delta = el.scrollHeight - anchor.scrollHeight
      el.scrollTop = anchor.scrollTop + delta
    }, [isFetchingNextPage, messages.length])

    const handleScroll = useCallback(() => {
      const el = scrollRef.current
      if (!el) {
        return
      }
      const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
      setNearBottom(distanceFromBottom < NEAR_BOTTOM_THRESHOLD_PX)

      if (
        didInitialScrollRef.current &&
        el.scrollTop < LOAD_OLDER_SCROLL_TOP_PX &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        anchorRef.current = { scrollHeight: el.scrollHeight, scrollTop: el.scrollTop }
        void fetchNextPage()
      }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])

    const scrollToBottom = useCallback(() => {
      const el = scrollRef.current
      if (!el) {
        return
      }
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }, [])

    const showJumpButton = useMemo(() => !nearBottom && messages.length > 0, [nearBottom, messages.length])

    const jumpIcon = jumpButtonStreamPhase === 'active'
      ? <JumpToLatestStreamingIcon />
      : <JumpToLatestArrowIcon />

    return (
      <ListRoot>
        <ListScrollArea ref={scrollRef} onScroll={handleScroll} data-testid="AiAssistantMessageList">
          {isFetchingNextPage
            ? (
              <TopLoader>
                <CircularProgress size={20} />
              </TopLoader>
            )
            : null}
          <MessagesColumn>
            {messages.map((message) => <MessageBubble key={message.messageId} message={message} />)}
          </MessagesColumn>
        </ListScrollArea>
        {showJumpButton
          ? (
            <JumpFabWrap>
              <AssistantCircularIconButton
                aria-label="Jump to latest messages"
                data-testid="AiAssistantJumpToLatestButton"
                onClick={scrollToBottom}
              >
                {jumpIcon}
              </AssistantCircularIconButton>
            </JumpFabWrap>
          )
          : null}
      </ListRoot>
    )
  },
)

const ListRoot = styled(Box)({
  position: 'relative',
  flex: 1,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
})

const ListScrollArea = styled(Box)(({ theme }) => ({
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(0, 2),
}))

const TopLoader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(1, 0),
}))

const MessagesColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  paddingBottom: theme.spacing(1),
}))

const JumpFabWrap = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  zIndex: 1,
}))
