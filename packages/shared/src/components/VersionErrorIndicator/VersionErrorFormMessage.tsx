import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { type FC, memo } from 'react'

import { RedWarningIcon } from '../../icons/WarningIcon'
import type { TestableProps } from '../Testable'

type VersionErrorFormMessageProps = TestableProps & {
  message?: string
}

export const VersionErrorFormMessage: FC<VersionErrorFormMessageProps> = memo(({
  message,
  'data-testid': dataTestId = 'VersionErrorFormMessage',
}) => {
  if (!message) {
    return null
  }

  return (
    <FormMessageRoot>
      <RedWarningIcon />
      <FormMessageText variant="body2" data-testid={dataTestId}>
        {message}
      </FormMessageText>
    </FormMessageRoot>
  )
})

VersionErrorFormMessage.displayName = 'VersionErrorFormMessage'

const FormMessageRoot = styled(Box)({
  display: 'flex',
})

const FormMessageText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
}))
