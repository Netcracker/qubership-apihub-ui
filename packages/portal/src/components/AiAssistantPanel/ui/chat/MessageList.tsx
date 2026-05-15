import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import type { FetchNextPageOptions } from '@tanstack/react-query'
import { type FC, memo, useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { JumpToLatestArrowIcon } from '@netcracker/qubership-apihub-ui-shared/icons/JumpToLatestArrowIcon'
import { JumpToLatestStreamingIcon } from '@netcracker/qubership-apihub-ui-shared/icons/JumpToLatestStreamingIcon'

import type { AiChatMessage, ChatId, MessageId } from '../../api/types'
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
  /** When set, that assistant row uses streaming markdown pipeline. */
  streamingAssistantMessageId: MessageId | null
}

export const MessageList: FC<MessageListProps> = memo(
  ({
    chatId,
    messages,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    jumpButtonStreamPhase,
    streamingAssistantMessageId,
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

    useLayoutEffect(() => {
      const el = scrollRef.current
      if (!el || !nearBottom || messages.length === 0) {
        return
      }
      el.scrollTop = el.scrollHeight
    }, [messages, nearBottom])

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
            {messages.map((message) => (
              <MessageBubble
                key={message.messageId}
                message={message}
                isStreamingAssistant={streamingAssistantMessageId !== null &&
                  message.messageId === streamingAssistantMessageId}
              />
            ))}
          </MessagesColumn>
        </ListScrollArea>
        {showJumpButton
          ? (
            <JumpFabWrap>
              <JumpToLatestButton
                aria-label="Jump to latest messages"
                data-testid="AiAssistantJumpToLatestButton"
                onClick={scrollToBottom}
              >
                {jumpIcon}
              </JumpToLatestButton>
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
  padding: theme.spacing(3),
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
  left: '50%',
  bottom: theme.spacing(2),
  transform: 'translateX(-50%)',
  zIndex: 1,
}))

/** Floating chip: light surface + shadow (Figma jump control). */
const JumpToLatestButton = styled(IconButton)(({ theme }) => ({
  flexShrink: 0,
  minWidth: 0,
  width: theme.spacing(4),
  height: theme.spacing(4),
  padding: 0,
  borderRadius: '50%',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  '& .MuiSvgIcon-root': {
    fontSize: theme.typography.pxToRem(18),
  },
}))
