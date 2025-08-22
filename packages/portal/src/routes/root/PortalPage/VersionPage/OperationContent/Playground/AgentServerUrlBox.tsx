import { Box, Typography } from '@mui/material'
import type { FC } from 'react'

interface AgentServerUrlBoxProps {
  agentProxyUrl?: string
}

export const AgentServerUrlBox: FC<AgentServerUrlBoxProps> = ({ agentProxyUrl }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', my: 1 }}>
    <Typography variant="subtitle2">Server URL:</Typography>
    <Typography
      variant="body2"
      sx={{ wordBreak: 'break-word' }}
    >
      {/*Break at "/" by inserting a zero‑width space*/}
      {agentProxyUrl?.replace(/\//g, '/\u200B')}
    </Typography>
  </Box>
)

AgentServerUrlBox.displayName = 'AgentServerUrlBox'
