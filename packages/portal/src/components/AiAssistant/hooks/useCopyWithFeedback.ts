import { useCallback, useEffect, useRef, useState } from 'react'
import { useCopyToClipboard } from 'react-use'

const DEFAULT_FEEDBACK_MS = 1500

export type UseCopyWithFeedbackOptions = {
  feedbackMs?: number
}

export function useCopyWithFeedback(options: UseCopyWithFeedbackOptions = {}): {
  createCopyHandler: (text: string) => () => void
  copied: boolean
} {
  const { feedbackMs = DEFAULT_FEEDBACK_MS } = options
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [, copyToClipboard] = useCopyToClipboard()

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  const copy = useCallback((text: string) => {
    copyToClipboard(text)
    setCopied(true)
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      setCopied(false)
      timerRef.current = null
    }, feedbackMs)
  }, [copyToClipboard, feedbackMs])

  const createCopyHandler = useCallback((text: string) => {
    return () => copy(text)
  }, [copy])

  return { createCopyHandler, copied }
}
