import { Alert, AlertTitle, styled } from '@mui/material'
import { type FC, memo } from 'react'

export type ShareabilityAlertProps = {
  severity: 'success' | 'warning' | 'error'
  title?: string
  message: string
  className?: string
}

export const ShareabilityAlert: FC<ShareabilityAlertProps> = memo(({ severity, title, message, className }) => (
  <Alert severity={severity} data-testid="ShareabilityAlert" className={className}>
    {title && <AlertTitle>{title}</AlertTitle>}
    {message}
  </Alert>
))

export const ShareabilityExportVersionAlert = styled(ShareabilityAlert)(({ theme }) => ({
  marginTop: theme.spacing(-2),
}))

export const ShareabilitySingleDocAlert = styled(ShareabilityAlert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))
