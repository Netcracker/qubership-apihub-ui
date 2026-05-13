export const AI_ASSISTANT_PANEL_MIN_WIDTH = 400
export const AI_ASSISTANT_PANEL_MAX_WIDTH = 820

export function getAiAssistantPanelMaxWidth(): number {
  if (typeof document === 'undefined') {
    return AI_ASSISTANT_PANEL_MAX_WIDTH
  }
  const half = Math.floor(document.documentElement.clientWidth * 0.5)
  return Math.max(
    AI_ASSISTANT_PANEL_MIN_WIDTH,
    Math.min(AI_ASSISTANT_PANEL_MAX_WIDTH, half),
  )
}

export function subscribeViewportForAiPanel(onViewportChange: () => void): () => void {
  if (typeof document === 'undefined') {
    return () => undefined
  }
  const ro = new ResizeObserver(() => {
    onViewportChange()
  })
  ro.observe(document.documentElement)
  return () => {
    ro.disconnect()
  }
}
