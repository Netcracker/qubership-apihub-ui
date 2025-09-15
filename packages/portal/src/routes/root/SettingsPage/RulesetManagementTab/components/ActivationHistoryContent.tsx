import { Box, Tooltip, Typography } from '@mui/material'
import type { Ruleset } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { InfoContextIcon } from '@netcracker/qubership-apihub-ui-shared/icons/InfoContextIcon'
import { toDateFormat } from '@netcracker/qubership-apihub-ui-shared/utils/date'
import { type FC, memo, useMemo } from 'react'
import { useRulesetActivationHistory } from '@apihub/api-hooks/ApiQuality/useRulesetActivationHistory'
import { isEmpty } from 'lodash'
import {
  ActivationHistoryTooltip,
} from './ActivationHistoryTooltip'

const PLACEHOLDER_DATE = '...'

type ActivationHistoryContentProps = {
  readonly ruleset: Ruleset
}

export const ActivationHistoryContent: FC<ActivationHistoryContentProps> = memo(({ ruleset }) => {
  const [data] = useRulesetActivationHistory(ruleset.id)
  const activationHistory = data?.activationHistory
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
