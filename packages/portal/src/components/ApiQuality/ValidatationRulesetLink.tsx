import { RULESET_API_TYPE_TITLE_MAP, RulesetStatuses, type RulesetMetadata } from '@apihub/entities/api-quality/rulesets'
import { useEventBus } from '@apihub/routes/EventBusProvider'
import { Box, Link, Skeleton, Typography } from '@mui/material'
import { CustomChip } from '@netcracker/qubership-apihub-ui-shared/components/CustomChip'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import capitalize from 'lodash-es/capitalize'
import type { FC } from 'react'
import { memo, useCallback } from 'react'

type ValidationRulesetLinkProps = {
  data: RulesetMetadata | undefined
  loading: IsLoading
}

// First Order Component
export const ValidationRulesetLink: FC<ValidationRulesetLinkProps> = memo<ValidationRulesetLinkProps>(props => {
  const { data, loading } = props

  const { showRulesetInfoDialog } = useEventBus()

  const onClickRulesetName = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation()
      event.preventDefault()
      data && showRulesetInfoDialog(data)
    },
    [data, showRulesetInfoDialog],
  )

  if (loading) {
    return <Skeleton variant="rectangular" width={100} height={20} />
  }

  if (!data) { // Just type guard
    return null
  }

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center' gap={1} width='100%'>
      <Box display='flex' gap={1}>
        <Typography
          key='validation-ruleset-link-linter'
          variant='body2'
        >
          {data.linter}
        </Typography>
        <Typography
          key='validation-ruleset-link-name'
          variant='body2'
          onClick={onClickRulesetName}
        >
          <Link data-testid="ValidationRulesetLinkName">
            {data.name}
          </Link>
        </Typography>
      </Box>
      <Box display='flex' gap={1}>
        <CustomChip
          key={`validation-ruleset-link-api-type-${data.apiType}`}
          value='rulesetSpecType'
          sx={{ m: 0 }}
          label={RULESET_API_TYPE_TITLE_MAP[data.apiType]}
          data-testid="ValidationRulesetApiTypeChip"
        />
        <CustomChip
          key='validation-ruleset-link-status'
          value={data.status === RulesetStatuses.ACTIVE ? 'rulesetActive' : 'rulesetInactive'}
          sx={{ m: 0 }}
          label={capitalize(data.status)}
          data-testid="ValidationRulesetStatusChip"
        />
      </Box>
    </Box>
  )
})
