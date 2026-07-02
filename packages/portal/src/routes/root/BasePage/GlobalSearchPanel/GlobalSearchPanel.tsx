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

import { type FC, memo, useState } from 'react'
import { Box, Divider, Drawer, Typography, styled } from '@mui/material'
import { useEvent } from 'react-use'

import { HIDE_GLOBAL_SEARCH_PANEL, SHOW_GLOBAL_SEARCH_PANEL } from '@apihub/routes/EventBusProvider'
import { FILTERS_COLUMN_WIDTH, RESULTS_COLUMN_WIDTH } from './globalSearchConstants'
import { GlobalSearchTextProvider } from './GlobalSearchTextProvider'
import { SearchFilters } from './SearchFilters'
import { SearchResults } from './SearchResults'

export const GlobalSearchPanel: FC = memo(() => {
  const [open, setOpen] = useState(false)

  useEvent(SHOW_GLOBAL_SEARCH_PANEL, (): void => {
    setOpen(true)
  })

  // TODO: Add close listener
  useEvent(HIDE_GLOBAL_SEARCH_PANEL, (): void => {
    setOpen(false)
  })

  return (
    <Drawer
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
    >
      <GlobalSearchPanelRoot data-testid="GlobalSearchPanel">
        <GlobalSearchTextProvider>
          <GlobalSearchFiltersColumn>
            <SearchFilters enabledFilters={open}/>
          </GlobalSearchFiltersColumn>
          <GlobalSearchPanelDivider orientation="vertical"/>
          <GlobalSearchResultsColumn>
            <GlobalSearchTitle variant="h3">Global Search</GlobalSearchTitle>
            <SearchResults/>
          </GlobalSearchResultsColumn>
        </GlobalSearchTextProvider>
      </GlobalSearchPanelRoot>
    </Drawer>
  )
})

GlobalSearchPanel.displayName = 'GlobalSearchPanel'

const GlobalSearchPanelRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  height: '100%',
}))

const GlobalSearchFiltersColumn = styled(Box)({
  width: FILTERS_COLUMN_WIDTH,
})

const GlobalSearchPanelDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(-2),
}))

const GlobalSearchResultsColumn = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  width: RESULTS_COLUMN_WIDTH,
}))

const GlobalSearchTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(1),
}))
