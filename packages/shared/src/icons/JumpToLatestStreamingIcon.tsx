import { createSvgIcon } from '@mui/material'

/** Three-dot affordance for jump-to-latest while assistant output is still in progress (Phase 5 wiring). */
export const JumpToLatestStreamingIcon = createSvgIcon(
  <svg viewBox="0 0 24 24">
    <circle cx="5" cy="12" r="2" fill="currentColor" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="19" cy="12" r="2" fill="currentColor" />
  </svg>,
  'JumpToLatestStreaming',
)
