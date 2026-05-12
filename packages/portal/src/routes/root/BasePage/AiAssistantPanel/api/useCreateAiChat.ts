import { useMutation } from '@tanstack/react-query'
import type { UseMutationResult } from '@tanstack/react-query'
import { aiChatJson } from './client'
import type { AiChat, AiChatCreateRequest } from './types'

export function useCreateAiChat(): UseMutationResult<AiChat, Error, AiChatCreateRequest | undefined> {
  return useMutation({
    mutationFn: (body: AiChatCreateRequest | undefined) =>
      aiChatJson<AiChat>('/ai-chat/chats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body ?? {}),
      }),
  })
}
