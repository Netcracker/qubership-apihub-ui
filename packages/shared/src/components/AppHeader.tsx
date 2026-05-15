/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import type { TestableProps } from './Testable'
import { APP_HEADER_HEIGHT } from '../themes/components'

type AppHeaderLink = {
  name: string
  pathname: string
  active?: boolean
} & TestableProps

export type AppHeaderProps = Partial<{
  logo: ReactNode
  title: ReactNode
  links: AppHeaderLink[]
  action: ReactNode
}>

export const AppHeader: FC<AppHeaderProps> = memo<AppHeaderProps>(({ logo, title, links, action }) => {
  return (
    <Box data-testid="AppHeader" flexGrow={1}>
      <AppBar position="static" sx={{ height: APP_HEADER_HEIGHT }}>
        <AppHeaderToolbar>
          {logo && (
            <Logo>
              {logo}
            </Logo>
          )}
          {title && (
            <Typography sx={{ mr: 3 }} variant="h2" component="div">
              {title}
            </Typography>
          )}
          {links && links.map(({ name, pathname, active, 'data-testid': dataTestId }) => (
            <Box
              key={pathname}
              sx={active ? { ...APP_HEADER_LINK_STYLES, ...APP_HEADER_LINK_STYLES_SELECTED } : APP_HEADER_LINK_STYLES}
              onClick={event => {
                const target = event.ctrlKey || event.metaKey ? '_blank' : '_self'
                window.open(`${pathname}`, target)
              }}
              onAuxClick={event => {
                if (event.button === 1) {
                  return window.open(`${pathname}`, '_blank')
                }
              }}
              data-testid={dataTestId}
            >
              <Typography variant="h2">
                {name}
              </Typography>
            </Box>
          ))}
          {action && (
            <Box alignItems="center" display="flex" ml="auto">
              {action}
            </Box>
          )}
        </AppHeaderToolbar>
      </AppBar>
    </Box>
  )
})

const APP_HEADER_LINK_STYLES = {
  backgroundColor: '#0068FF',
  cursor: 'pointer',
  padding: '13px 16px',
  '&:hover': {
    backgroundColor: '#0052EE',
  },
}

const APP_HEADER_LINK_STYLES_SELECTED = {
  backgroundColor: '#0052EE',
  boxShadow: 'inset 0px -3px 0px #002B80',
}

// TODO: 14.05.16 temporary solution for the header. Not doing a global
// button rebalancing yet, because we need to verify compatibility across
// the whole project.
const AppHeaderToolbar = styled(Toolbar)(({ theme }) => ({
  '& .MuiIconButton-root, & .AppHeaderIconButton': {
    width: APP_HEADER_HEIGHT,
    height: APP_HEADER_HEIGHT,
  },
  '& .MuiButton-root, & .MuiIconButton-root, & .AppHeaderIconButton': {
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}))

const Logo = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(3.5),
  flexShrink: 0,
}))
