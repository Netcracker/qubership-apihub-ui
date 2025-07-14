import { RulesetStatuses, type RulesetBase } from '@apihub/entities/api-quality/rulesets'
import { useEventBus } from '@apihub/routes/EventBusProvider'
import { Box, Link, Skeleton, Typography } from '@mui/material'
import { CustomChip } from '@netcracker/qubership-apihub-ui-shared/components/CustomChip'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import type { FC } from 'react'
import { memo } from 'react'

type ValidationRulesetLinkProps = {
  data: RulesetBase | undefined
  loading: IsLoading
  noLabel?: boolean
}

// First Order Component
export const ValidationRulesettLink: FC<ValidationRulesetLinkProps> = memo<ValidationRulesetLinkProps>(props => {
  const { data, loading, noLabel = false } = props

  const { showRulesetInfoDialog } = useEventBus()

  if (loading) {
    return <Skeleton variant="rectangular" width={100} height={20} />
  }

  if (!data) { // Just type guard
    return null
  }

  let linkElement = (
    <Typography variant='body2' onClick={() => showRulesetInfoDialog(data)}>
      <Link>
        {data.name}
      </Link>
    </Typography>
  )

  if (data.status === RulesetStatuses.INACTIVE) {
    linkElement = (
      <Box display='flex' alignItems='center' gap={1}>
        {linkElement}
        <CustomChip value='secondary' sx={{ m: 0 }} label={data.status} />
      </Box>
    )
  }

  if (noLabel) {
    return linkElement
  }

  return <>
    <Box display='flex' gap={1}>
      <Typography variant='body2' component='span'>
        Validated using
      </Typography>
      {linkElement}
    </Box>
  </>
})
