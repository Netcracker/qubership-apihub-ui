import { useEventBus } from '@apihub/routes/EventBusProvider'
import { Box, Link, Skeleton, Typography } from '@mui/material'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import type { FC } from 'react'
import { memo } from 'react'
import type { RulesetLite } from './types'

type ValidationResultLinkProps = {
  data: RulesetLite | undefined
  loading: IsLoading
}

// First Order Component
export const ValidationResultLink: FC<ValidationResultLinkProps> = memo<ValidationResultLinkProps>(props => {
  const { data, loading } = props

  const { showRulesetInfoDialog } = useEventBus()

  if (loading) {
    return <Skeleton variant="rectangular" width={100} height={20} />
  }

  if (!data) { // Just type guard
    return null
  }

  return <>
    <Box display='flex' gap={1}>
      <Typography variant='body2' component='span'>
        Validated using
      </Typography>
      <Typography variant='body2' onClick={() => showRulesetInfoDialog(data)}>
        <Link>
          {data.name} ({data.status})
        </Link>
      </Typography>
    </Box>
  </>
})
