import type { FC} from 'react'
import { memo, useMemo } from 'react'
import { isEmpty } from 'lodash'
import { List, ListItem, ListSubheader, Typography } from '@mui/material'
import { toDateFormat } from '@netcracker/qubership-apihub-ui-shared/utils/date'
import type { RulesetActivation } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'

type ActivationHistoryTooltipProps = {
  readonly activationHistory: RulesetActivation[]
}

const STYLE_TOOLTIP_LIST = {
  maxHeight: 400,
  overflowY: 'auto',
} as const

const STYLE_TOOLTIP_LIST_SUBHEADER_TEXT = {
  pb: 1,
} as const

export const ActivationHistoryTooltip: FC<ActivationHistoryTooltipProps> = memo(({ activationHistory }) => {
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
