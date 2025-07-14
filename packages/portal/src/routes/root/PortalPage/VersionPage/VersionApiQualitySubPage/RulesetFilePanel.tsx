import { ValidationRulesetFileControls } from '@apihub/components/ApiQuality/ValidationRulesetFileControls'
import type { RulesetBase } from '@apihub/entities/api-quality/rulesets'
import { Box, Typography } from '@mui/material'
import { FileIcon } from '@netcracker/qubership-apihub-ui-shared/icons/FileIcon'
import type { FC } from 'react'

type RulesetFilePanelProps = {
  ruleset: RulesetBase
}

export const RulesetFilePanel: FC<RulesetFilePanelProps> = (props) => {
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
          <ValidationRulesetFileControls rulesetId={ruleset.id} />
        </Box>
      </Box>
    </Box>
  )
}
