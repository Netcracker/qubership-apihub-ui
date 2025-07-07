import { Box, Typography } from '@mui/material'
import type { FC } from 'react'
import { FileIcon } from '@netcracker/qubership-apihub-ui-shared/icons/FileIcon'
import type { RulesetLite } from '../../types'
import { DownloadIcon } from '@netcracker/qubership-apihub-ui-shared/icons/DownloadIcon'
import { ButtonWithHint } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ButtonWithHint'
import { LinkIcon } from '@netcracker/qubership-apihub-ui-shared/icons/LinkIcon'

type RulesetControlsProps = {
  ruleset: RulesetLite
}

const ICON_COLOR = '#626D82'
const ICON_SIZE = '20px'

export const RulesetControls: FC<RulesetControlsProps> = (props) => {
  const { ruleset } = props
  return (
    <Box display='flex' flexDirection='column' gap={1}>
      <Typography variant='h6' color='black' fontWeight='bold'>
        Spectral Ruleset
      </Typography>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center' gap={1}>
          <FileIcon color='black' />
          <Typography variant='body2'>
            {ruleset.name}
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' gap={1}>
          <ButtonWithHint
            size="small"
            area-label="Download Ruleset"
            hint='Download'
            className="hoverable"
            startIcon={<DownloadIcon color={ICON_COLOR} />}
            sx={{ height: ICON_SIZE }}
            onClick={() => console.log('download')}
          />
          <ButtonWithHint
            size="small"
            area-label="Copy public link to ruleset"
            hint='Copy public URL'
            className="hoverable"
            startIcon={<LinkIcon color={ICON_COLOR} />}
            sx={{ height: ICON_SIZE }}
            onClick={() => console.log('copy public link')}
          />
        </Box>
      </Box>
    </Box>
  )
}
