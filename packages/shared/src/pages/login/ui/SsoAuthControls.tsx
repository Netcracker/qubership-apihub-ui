import { Box, Button } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'
import type { SsoAuthKind } from '../../../types/system-configuration'
import { redirectTo } from '../../../utils/redirects'

type SsoAuthControlsProps = {
  kinds: SsoAuthKind[]
}

export const SsoAuthControls: FC<SsoAuthControlsProps> = memo(({ kinds }) => {
  return (
    <Box display='flex' gap={10} marginLeft={24}>
      {kinds.map(kind => {
        const id = `${kind.displayName.replaceAll(' ', '')}SignInButton`
        return (
          <Button
            key={id}
            data-testid={id}
            variant="contained"
            endIcon={
              <Box
                display='flex'
                width={24}
                height={24}
                sx={{
                  backgroundImage: kind.imageUrl,
                  backgroundSize: '24px 24px',
                }}
              />
            }
            onClick={() => redirectTo(kind.url)}
          >
            {kind.displayName}
          </Button>
        )
      })}
    </Box>
  )
})
