import { Alert } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'

export type ShareabilityAlertProps = {
  severity: 'success' | 'warning' | 'error'
  message: string
}

export const ShareabilityAlert: FC<ShareabilityAlertProps> = memo(({ severity, message }) => (
  <Alert severity={severity} sx={{ mb: 1 }} data-testid="ShareabilityAlert">
    {message}
  </Alert>
))
