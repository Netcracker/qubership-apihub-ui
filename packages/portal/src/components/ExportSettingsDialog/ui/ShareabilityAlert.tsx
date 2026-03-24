import { Alert, AlertTitle, styled } from '@mui/material'
import type { PaletteColor, Theme } from '@mui/material/styles'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import { CheckCircleIcon } from '@netcracker/qubership-apihub-ui-shared/icons/CheckCircleIcon'
import { ErrorIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ErrorIcon'
import { WarningIconMui } from '@netcracker/qubership-apihub-ui-shared/icons/WarningIconMui'
import { type FC, memo } from 'react'

type ShareabilityAlertSeverity = 'success' | 'warning' | 'error'

export type ShareabilityAlertProps = {
  severity: ShareabilityAlertSeverity
  title: string
  message: string
  className?: string
}

type ShareabilityAlertConfig = {
  icon: FC<SvgIconProps>
  color: (theme: Theme) => PaletteColor
}

const shareabilityAlertConfig: Record<ShareabilityAlertSeverity, ShareabilityAlertConfig> = {
  success: {
    icon: CheckCircleIcon,
    color: (theme) => theme.palette.secondary,
  },
  warning: {
    icon: WarningIconMui,
    color: (theme) => theme.palette.warning,
  },
  error: {
    icon: ErrorIcon,
    color: (theme) => theme.palette.error,
  },
}

const ShareabilityAlertBase = styled(Alert)<{ severity: ShareabilityAlertSeverity }>(({ theme, severity }) => {
  const color = shareabilityAlertConfig[severity].color(theme)

  return {
    borderRadius: theme.spacing(0.75),
    backgroundColor: color.light,
    '& .MuiAlert-icon': {
      color: color.main,
      marginRight: theme.spacing(0.75),
    },
    '& .MuiSvgIcon-root': {
      fontSize: theme.typography.pxToRem(20),
    },
    '& .MuiAlertTitle-root': {
      ...theme.typography.subtitle1,
    },
    '& .MuiAlert-message': {
      ...theme.typography.body2,
    },
  }
})

export const ShareabilityAlert: FC<ShareabilityAlertProps> = memo(({ severity, title, message, className }) => {
  const { icon: Icon } = shareabilityAlertConfig[severity]

  return (
    <ShareabilityAlertBase
      severity={severity}
      data-testid="ShareabilityAlert"
      className={className}
      icon={<Icon />}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </ShareabilityAlertBase>
  )
})

export const ShareabilityExportVersionAlert = styled(ShareabilityAlert)(({ theme }) => ({
  marginTop: theme.spacing(-2),
}))

export const ShareabilitySingleDocAlert = styled(ShareabilityAlert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}))
