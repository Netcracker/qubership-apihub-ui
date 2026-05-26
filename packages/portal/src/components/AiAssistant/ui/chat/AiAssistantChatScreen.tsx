import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { type FC, memo } from 'react'

import { useAiChatMessages } from '../../api/useAiChatMessages'
import { useAiAssistantPanel } from '../../state/AiAssistantContext'
import { AiAssistantHeader } from '../header/AiAssistantHeader'
import { AI_ASSISTANT_HEADER_MODE } from '../header/aiAssistantHeaderMode'
import { AiAssistantComposer } from './AiAssistantComposer'
import { AiAssistantPlaceholder } from './AiAssistantPlaceholder'
import { ChatStreamingBody } from './ChatStreamingBody'
import { isChatScreenWelcome } from './hooks/useChatScreenMessages'

export const AiAssistantChatScreen: FC = memo(() => {
  const { open, activeChatId } = useAiAssistantPanel()
  const messagesQuery = useAiChatMessages(activeChatId)

  const showWelcome = isChatScreenWelcome(
    activeChatId,
    messagesQuery.data?.pages,
    messagesQuery.isSuccess,
  )

  return (
    <ChatLayout>
      <AiAssistantHeader mode={AI_ASSISTANT_HEADER_MODE.chat} />
      <Body>
        {showWelcome
          ? <AiAssistantPlaceholder />
          : activeChatId && (
            <ChatStreamingBody
              activeChatId={activeChatId}
              messagePages={messagesQuery.data?.pages}
              messagesLoaded={messagesQuery.isSuccess}
              hasNextPage={Boolean(messagesQuery.hasNextPage)}
              isFetchingNextPage={messagesQuery.isFetchingNextPage}
              fetchNextPage={messagesQuery.fetchNextPage}
            />
          )}
      </Body>
      <AiAssistantComposer panelOpen={open} chatKey={activeChatId ?? 'none'} />
    </ChatLayout>
  )
})

AiAssistantChatScreen.displayName = 'AiAssistantChatScreen'

const ChatLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
})

const Body = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
})
