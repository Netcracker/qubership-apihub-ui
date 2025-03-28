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

import { ErrorHandler } from '@apihub/components/ErrorHandler'
import { EventBusProvider } from '@apihub/routes/EventBusProvider'
import { router } from '@apihub/routes/Router'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useSystemInfo } from '@netcracker/qubership-apihub-ui-shared/features/system-info'
import { useSystemConfiguration } from '@netcracker/qubership-apihub-ui-shared/hooks/authorization/useSystemConfiguration'
import { theme } from '@netcracker/qubership-apihub-ui-shared/themes/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { FC } from 'react'
import { memo, StrictMode, useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useLocation } from 'react-use'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export const App: FC = memo(() => {
  const [auth, setAuth] = useState<boolean>(false)

  // first, load config
  const [systemConfiguration] = useSystemConfiguration()
  // second, try to access protected API
  const systemInfo = useSystemInfo(!!systemConfiguration)

  // when protected API is fetched, set auth === true
  useEffect(() => {
    setAuth(!!systemInfo)
  }, [systemInfo])

  const location = useLocation()
  const isLoginPage = location.pathname?.startsWith('/login') // This is done for new routing approach, refactor it

  return (
    <StrictMode>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <ErrorHandler>
            <EventBusProvider>
              {auth || isLoginPage ? <RouterProvider router={router}/> : (
                <div style={{ padding: 20, fontSize: 14 }}>
                  Please, wait...
                </div>
              )}
            </EventBusProvider>
          </ErrorHandler>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </StrictMode>
  )
})
