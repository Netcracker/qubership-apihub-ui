import { Box, Link, Skeleton, Typography } from '@mui/material'
import type { Ruleset } from './types'
import type { FC } from 'react'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'

type ValidationResultLinkProps = {
  data: Ruleset | null
  loading: IsLoading
}

// First Order Component
export const ValidationResultLink: FC<ValidationResultLinkProps> = memo<ValidationResultLinkProps>(props => {
  const { data, loading } = props

  if (loading) {
    return <Skeleton variant="rectangular" width={100} height={20} />
  }

  return (
    <Box display='flex' gap={1}>
      <Typography variant='body2' component='span'>
        Validated using
      </Typography>
      <Link component={NavLink} variant='body2' to={{ pathname: '/placeholder-for-ruleset' }}>
        {data?.name} ({data?.status})
      </Link>
    </Box>
  )
})
