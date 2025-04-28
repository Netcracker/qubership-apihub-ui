import { Box, Button } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'
import type { ExternalIdentityProvider } from '../../../types/system-configuration'
import { redirectTo } from '../../../utils/redirects'

type ExternalAuthControlsProps = {
  providers: ExternalIdentityProvider[]
}

export const ExternalAuthControls: FC<ExternalAuthControlsProps> = memo(({ providers }) => {
  return (
    <Box display='flex' gap={2}>
      {providers.map(idp => {
        const id = `${idp.displayName.replaceAll(' ', '')}SignInButton`
        return (
          <Button
            key={id}
            data-testid={id}
            variant='outlined'
            startIcon={
              idp.imageSvg && (
                <Box
                  display='flex'
                  width={24}
                  height={24}
                  sx={{
                    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(idp.imageSvg)}")`,
                    backgroundSize: '24px 24px',
                  }}
                />
              )
            }
            onClick={() => idp.loginStartEndpoint && redirectTo(idp.loginStartEndpoint)}
          >
            {idp.displayName}
          </Button>
        )
      })}
    </Box>
  )
})
