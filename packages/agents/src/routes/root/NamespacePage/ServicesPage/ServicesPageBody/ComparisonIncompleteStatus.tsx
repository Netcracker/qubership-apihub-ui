import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { FC } from 'react'

import { ErrorIndicator } from '@netcracker/qubership-apihub-ui-shared/components/ErrorIndicators/ErrorIndicator'
import { PUBLICATION_ERROR_MESSAGES } from '@netcracker/qubership-apihub-ui-shared/utils/publicationErrorMessages'

import { COMPARISON_INCOMPLETE_MESSAGE } from './validationMessages'

export const ComparisonIncompleteStatus: FC = () => (
  <StatusContent>
    <ErrorIndicator
      hasProblems
      tooltip={PUBLICATION_ERROR_MESSAGES.packageVersion.changelog}
      fontSize="extra-small"
      data-testid="ComparisonIncompleteIndicator"
    />
    <Typography noWrap variant="inherit">
      {COMPARISON_INCOMPLETE_MESSAGE}
    </Typography>
  </StatusContent>
)

ComparisonIncompleteStatus.displayName = 'ComparisonIncompleteStatus'

const StatusContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))
