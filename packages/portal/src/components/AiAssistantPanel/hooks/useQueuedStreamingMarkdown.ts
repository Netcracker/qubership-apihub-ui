import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/**
 * While `isStreaming` is true, passes `liveContent` to markdown only after the
 * previous string has been committed (layout). New deltas that arrive during a
 * parse are merged into the next update, so ReactMarkdown + highlight run once
 * per "wave" instead of on every token.
 */
export function useQueuedStreamingMarkdown(liveContent: string, isStreaming: boolean): string {
  const latestRef = useRef(liveContent)
  latestRef.current = liveContent

  const [displayed, setDisplayed] = useState(() => (isStreaming ? '' : liveContent))

  useEffect(() => {
    if (!isStreaming) {
      setDisplayed(liveContent)
    }
  }, [isStreaming, liveContent])

  useLayoutEffect(() => {
    if (!isStreaming) {
      return
    }
    const latest = latestRef.current
    if (latest.length > 0 && displayed.length === 0) {
      setDisplayed(latest)
      return
    }
    if (latest !== displayed) {
      const id = window.requestAnimationFrame(() => {
        setDisplayed(latestRef.current)
      })
      return () => window.cancelAnimationFrame(id)
    }
  }, [displayed, isStreaming, liveContent])

  return displayed
}
