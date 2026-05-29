import type { AiChatStreamEvent, ChatId, ClientMessageId } from '../../api/types'

export type RunStreamingTurnHandler = (
  chatId: ChatId,
  trimmed: string,
  clientMessageId: ClientMessageId,
) => Promise<void>

export type ProcessStreamingTurnSseBatchHandler = (
  chatId: ChatId,
  batch: readonly AiChatStreamEvent[],
) => void
