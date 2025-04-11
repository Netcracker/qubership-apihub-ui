import { styled } from '@mui/material/styles'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import type { SvgIconProps } from '@mui/material'
import type { TestableProps } from '../components/Testable'

type CommonInfoIconProps = SvgIconProps & TestableProps

export const CommonInfoIcon = styled(InfoOutlinedIcon)<CommonInfoIconProps>``

CommonInfoIcon.defaultProps = {
  fontSize: 'small',
  color: 'text-secondary',
  'data-testid': 'InfoIcon',
}

CommonInfoIcon.displayName = 'CommonInfoIcon'
