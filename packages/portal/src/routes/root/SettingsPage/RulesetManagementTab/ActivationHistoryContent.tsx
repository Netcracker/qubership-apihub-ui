import { Box, List, ListItem, ListSubheader, Tooltip, Typography } from '@mui/material'
import type {
  Ruleset,
  RulesetActivation,
} from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { InfoContextIcon } from '@netcracker/qubership-apihub-ui-shared/icons/InfoContextIcon'
import { isEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'
import { toDateFormat } from '@netcracker/qubership-apihub-ui-shared/utils/date'
import { type FC, memo, useMemo } from 'react'

const PLACEHOLDER_DATE = '...'

const STYLE_TOOLTIP_LIST = {
  maxHeight: 400,
  overflowY: 'auto',
} as const

const STYLE_TOOLTIP_LIST_SUBHEADER_TEXT = {
  pb: 1,
} as const

type ActivationHistoryContentProps = {
  readonly ruleset: Ruleset
}

type ActivationHistoryTooltipProps = {
  readonly activationHistory: RulesetActivation[]
}

const ActivationHistoryTooltip: FC<ActivationHistoryTooltipProps> = memo(({ activationHistory }) => {
  const historicalActivations = useMemo(
    () => activationHistory.slice(1),
    [activationHistory],
  )

  if (isEmpty(historicalActivations)) {
    return null
  }

  return (
    <List sx={STYLE_TOOLTIP_LIST}>
      <ListSubheader>
        <Typography variant="subtitle1" sx={STYLE_TOOLTIP_LIST_SUBHEADER_TEXT}>
          Activation History
        </Typography>
      </ListSubheader>
      {historicalActivations.map(({ activeFrom, activeTo }) => {
        const key = `${activeFrom}-${activeTo}`
        return (
          <ListItem key={key}>
            <Typography variant="body2">
              {toDateFormat(activeFrom)} - {toDateFormat(activeTo)}
            </Typography>
          </ListItem>
        )
      })}
    </List>
  )
})

ActivationHistoryTooltip.displayName = 'ActivationHistoryTooltip'

export const ActivationHistoryContent: FC<ActivationHistoryContentProps> = memo(({ ruleset }) => {
  const { activationHistory } = ruleset
  const [lastActivation] = activationHistory
  const lastActiveFrom = lastActivation?.activeFrom
  const lastActiveTo = lastActivation?.activeTo
  const hasMultipleActivations = activationHistory.length > 1

  const formattedDateRange = useMemo(() => {
    if (isEmpty(activationHistory)) {
      return null
    }

    const fromDate = lastActiveFrom ? toDateFormat(lastActiveFrom) : PLACEHOLDER_DATE
    const toDate = lastActiveTo ? toDateFormat(lastActiveTo) : PLACEHOLDER_DATE
    return `${fromDate} - ${toDate}`
  }, [activationHistory, lastActiveFrom, lastActiveTo])

  const tooltipContent = useMemo(() => {
    return hasMultipleActivations ? <ActivationHistoryTooltip activationHistory={activationHistory} /> : null
  }, [hasMultipleActivations, activationHistory])

  if (isEmpty(activationHistory)) {
    return null
  }

  return (
    <Box
      display="flex"
      gap={1}
      alignItems="center"
    >
      <Typography variant="body2" component="span">
        {formattedDateRange}
      </Typography>
      {hasMultipleActivations && (
        <Tooltip
          title={tooltipContent}
        >
          <InfoContextIcon color="action" fontSize="extra-small" />
        </Tooltip>
      )}
    </Box>
  )
})

ActivationHistoryContent.displayName = 'ActivationHistoryContent'
