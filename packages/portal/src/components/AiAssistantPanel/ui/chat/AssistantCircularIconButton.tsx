import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

/** Icon-sized circular `Button` (Send / Jump): equal width/height, no default `minWidth: 64`. */
export const AssistantCircularIconButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  minWidth: 0,
  width: theme.spacing(5),
  height: theme.spacing(5),
  padding: 0,
  borderRadius: '50%',
}))
