import { Box, Link, Typography } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'

type ValidationResultLinkProps = {
  rulesetName: string
  status: string
}

// First Order Component
export const ValidationResultLink: FC<ValidationResultLinkProps> = memo<ValidationResultLinkProps>(props => {
  const { rulesetName, status } = props
  return (
    <Box display='flex' gap={1}>
      <Typography variant='body2' component='span'>
        Validated using
      </Typography>
      <Link component={NavLink} variant='body2' to={{ pathname: '/placeholder-for-ruleset' }}>
        {rulesetName} ({status})
      </Link>
    </Box>
  )
})
