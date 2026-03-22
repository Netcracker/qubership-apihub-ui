import { Alert, AlertTitle } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'

export type ShareabilityAlertProps = {
  severity: 'success' | 'warning' | 'error'
  title?: string
  message: string
}

export const ShareabilityAlert: FC<ShareabilityAlertProps> = memo(({ severity, title, message }) => (
  <Alert severity={severity} sx={{ mb: 1 }} data-testid="ShareabilityAlert">
    {title && <AlertTitle>{title}</AlertTitle>}
    {message}
  </Alert>
))
