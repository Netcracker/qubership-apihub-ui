export const PANEL_HEADER_MODE = {
  chat: 'chat',
  history: 'history',
} as const

type PanelHeaderMode = (typeof PANEL_HEADER_MODE)[keyof typeof PANEL_HEADER_MODE]

export const PANEL_HEADER_TITLE: Record<PanelHeaderMode, string> = {
  [PANEL_HEADER_MODE.chat]: 'AI Assistant',
  [PANEL_HEADER_MODE.history]: 'History',
}
