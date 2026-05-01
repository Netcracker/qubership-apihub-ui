import {
  applyStreamingSseEvent,
  peekPartialBeforeErrorInBatch,
  streamingTurnReducer,
  type StreamingTurnState,
} from '../state/streamingTurnReducer'

const pending: Extract<StreamingTurnState, { status: 'pending' }> = {
  status: 'pending',
  chatId: 'c1',
  optimisticUserMessageId: 'opt-1',
  clientMessageId: 'client-1',
  submittedContent: 'hi',
}

describe('streamingTurnReducer', () => {
  it('applies turn.requested', () => {
    const next = streamingTurnReducer({ status: 'idle' }, {
      type: 'turn.requested',
      chatId: 'c1',
      clientMessageId: 'client-1',
      optimisticUserMessageId: 'opt-1',
      submittedContent: 'hi',
    })
    expect(next).toEqual(pending)
  })

  it('folds sseBatch deltas without dropping intermediate buffer', () => {
    let s: StreamingTurnState = pending
    s = applyStreamingSseEvent(s, {
      type: 'message.assistant.start',
      messageId: 'asst-1',
    })
    const batch = [
      { type: 'message.assistant.delta', delta: 'a' } as const,
      { type: 'message.assistant.delta', delta: 'b' } as const,
      { type: 'message.assistant.delta', delta: 'c' } as const,
    ]
    const folded = streamingTurnReducer(s, { type: 'sseBatch', events: batch })
    expect(folded.status).toBe('started')
    if (folded.status === 'started') {
      expect(folded.buffer).toBe('abc')
    }
  })

  it('peekPartialBeforeErrorInBatch captures buffer before error clears state', () => {
    let s: StreamingTurnState = pending
    s = applyStreamingSseEvent(s, { type: 'message.assistant.start', messageId: 'asst-1' })
    s = applyStreamingSseEvent(s, { type: 'message.assistant.delta', delta: 'partial' })
    const peek = peekPartialBeforeErrorInBatch(s, [
      { type: 'message.assistant.delta', delta: '!' },
      { type: 'error', code: 'APIHUB-AI-5001', message: 'fail' },
    ])
    expect(peek?.buffer).toBe('partial!')
  })

  it('ignores tool frames', () => {
    let s: StreamingTurnState = pending
    s = applyStreamingSseEvent(s, { type: 'message.assistant.start', messageId: 'asst-1' })
    const next = applyStreamingSseEvent(s, {
      type: 'tool.started',
      toolCallId: 't1',
      name: 'x',
    } as { type: string })
    expect(next).toEqual(s)
  })
})
