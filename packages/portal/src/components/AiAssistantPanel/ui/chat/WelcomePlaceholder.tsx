import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { type FC, memo } from 'react'

import {
  CONTENT_PLACEHOLDER_AREA,
  Placeholder,
  ROBOT_PLACEHOLDER_VARIANT,
} from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'

export const WelcomePlaceholder: FC = memo(() => {
  return (
    <WelcomeRoot data-testid="AiAssistantWelcomePlaceholder">
      <Placeholder
        invisible={false}
        area={CONTENT_PLACEHOLDER_AREA}
        variant={ROBOT_PLACEHOLDER_VARIANT}
        message={
          <WelcomeCopy>
            <WelcomePrimary variant="h5">
              Describe your task or ask a question
            </WelcomePrimary>
            <WelcomeSecondary variant="body2">
              Design, document, and integrate APIs faster
            </WelcomeSecondary>
          </WelcomeCopy>
        }
      />
    </WelcomeRoot>
  )
})

const WelcomeRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  minHeight: 0,
  padding: theme.spacing(2),
}))

const WelcomeCopy = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'center',
  maxWidth: 320,
}))

const WelcomePrimary = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
}))

const WelcomeSecondary = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
