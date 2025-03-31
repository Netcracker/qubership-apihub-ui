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

import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppPlaceholder } from '@netcracker/qubership-apihub-ui-shared/components/AppPlaceholder'
import { useInitializeAuth } from '@netcracker/qubership-apihub-ui-shared/hooks/authorization'
import { theme } from '@netcracker/qubership-apihub-ui-shared/themes/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { FC } from 'react'
import { memo, StrictMode } from 'react'
import { Router } from './routes/Router'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
})

export const App: FC = memo(() => {
  const [auth, isLoginPage] = useInitializeAuth()

  return (
    <StrictMode>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          {auth || isLoginPage
            ? <>
              <CssBaseline />
              <Router />
            </>
            : <AppPlaceholder />}
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
})
