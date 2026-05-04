import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import { type FC, memo, type PropsWithChildren } from 'react'

export const AiAssistantPanelHeader: FC<PropsWithChildren> = memo(({
  children,
}) => (
  <HeaderRoot>
    <HeaderToolbar>{children}</HeaderToolbar>
    <Divider orientation="horizontal" variant="fullWidth" flexItem />
  </HeaderRoot>
))

export const HeaderRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  minHeight: theme.spacing(11),
}))

export const HeaderToolbar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  padding: theme.spacing(3),
  minHeight: theme.spacing(11),
  minWidth: 0,
}))
