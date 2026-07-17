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

import type { FC } from 'react'
import { memo, useCallback, useState } from 'react'
import { Box, Divider, IconButton, Typography } from '@mui/material'
import { useEvent } from 'react-use'
import { SearchFilters } from './SearchFilters'
import { SearchResults } from './SearchResults'
import { GlobalSearchTextProvider } from './GlobalSearchTextProvider'
import { HIDE_GLOBAL_SEARCH_PANEL, SHOW_GLOBAL_SEARCH_PANEL, useEventBus } from '@apihub/routes/EventBusProvider'
import { CloseIcon } from '@netcracker/qubership-apihub-ui-shared/icons/CloseIcon'
import { SidePanelDrawer } from '@netcracker/qubership-apihub-ui-shared/components/SidePanelDrawer'

export const GlobalSearchPanel: FC = memo(() => {
  const [open, setOpen] = useState(false)
  const { hideGlobalSearchPanel } = useEventBus()

  useEvent(SHOW_GLOBAL_SEARCH_PANEL, (): void => setOpen(true))
  useEvent(HIDE_GLOBAL_SEARCH_PANEL, (): void => setOpen(false))

  const handleClose = useCallback((): void => {
    setOpen(false)
    hideGlobalSearchPanel()
  }, [hideGlobalSearchPanel])

  return (
    <SidePanelDrawer
      open={open}
      onClose={handleClose}
      keepMounted={true}
    >
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'row', overflow: 'hidden', height: '100%' }}
           data-testid="GlobalSearchPanel">
        <GlobalSearchTextProvider>
          <Box sx={{ width: '330px' }}>
            <SearchFilters enabledFilters={open}/>
          </Box>
          <Divider sx={{ mt: -2, mb: -2 }} orientation="vertical"/>
          <Box sx={{ pl: 3, width: '500px' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ mb: 1, mt: 1 }} variant="h3">Global Search</Typography>
              <IconButton
                aria-label="Close Global Search"
                data-testid="CloseButton"
                sx={{ ml: 'auto' }}
                onClick={handleClose}
                color="inherit"
              >
                <CloseIcon fontSize="small"/>
              </IconButton>
            </Box>
            <SearchResults/>
          </Box>
        </GlobalSearchTextProvider>
      </Box>
    </SidePanelDrawer>
  )
})

export const CONTENT_WIDTH = '460px'
