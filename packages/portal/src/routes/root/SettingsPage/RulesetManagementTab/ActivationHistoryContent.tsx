import type { FC } from 'react'
import { memo } from 'react'
import type { Ruleset, RulesetActivation } from '@apihub/entities/api-quality-ruleset'
import { Box, List, ListItem, ListSubheader, Tooltip, Typography } from '@mui/material'
import { toDateFormat } from '@netcracker/qubership-apihub-ui-shared/utils/date'
import { isEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

export interface ActivationHistoryContentProps {
  ruleset: Ruleset
}

interface ActivationHistoryTooltipProps {
  activationHistory: RulesetActivation[]
}

const ActivationHistoryTooltip: FC<ActivationHistoryTooltipProps> = memo(({ activationHistory }) => {
  const historicalActivations = activationHistory.slice(1)

  return (
    <List sx={{ maxHeight: 400, overflowY: 'auto' }}>
      <ListSubheader>
        <Typography variant="subtitle1" sx={{ pb: 1 }}>
          Activation History
        </Typography>
      </ListSubheader>
      {historicalActivations.map(({ activeFrom, activeTo }, index) => (
        <ListItem key={index}>
          <Typography variant="body2">
            {toDateFormat(activeFrom)} - {toDateFormat(activeTo)}
          </Typography>
        </ListItem>
      ))}
    </List>
  )
})

ActivationHistoryTooltip.displayName = 'ActivationHistoryTooltip'

export const ActivationHistoryContent: FC<ActivationHistoryContentProps> = memo(({ ruleset }) => {
  const { activationHistory } = ruleset
  const [lastActivation] = activationHistory

  if (isEmpty(activationHistory)) {
    return null
  }

  const lastActiveFrom = lastActivation?.activeFrom
  const lastActiveTo = lastActivation?.activeTo

  return (
    <Tooltip
      arrow={false}
      title={activationHistory.length > 1 && <ActivationHistoryTooltip activationHistory={activationHistory} />}
    >
      <Box display="flex" gap={1} alignItems="center">
        <Typography variant="body2">
          {lastActiveFrom ? toDateFormat(lastActiveFrom) : '...'}
          {' - '}
          {lastActiveTo ? toDateFormat(lastActiveTo) : '...'}
        </Typography>
        {activationHistory.length > 1 && <ExpandMoreRoundedIcon color="muted" fontSize="extra-small" />}
      </Box>
    </Tooltip>
  )
})

ActivationHistoryContent.displayName = 'ActivationHistoryContent'
