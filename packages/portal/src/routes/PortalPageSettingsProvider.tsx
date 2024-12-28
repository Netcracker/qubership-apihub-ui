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

import type { FC, PropsWithChildren } from 'react'
import { createContext, memo, useContext } from 'react'
import { usePortalPageSettings } from '@apihub/routes/usePortalPageSettings'
import type { ExtendedPageSettingsState } from '@netcracker/qubership-apihub-ui-shared/hooks/storages/usePageSettingsState'

export const PortalPageSettingsProvider: FC<PropsWithChildren> = memo<PropsWithChildren>(({ children }) => {
  const content = usePortalPageSettings()

  return (
    <PortalPageSettings.Provider value={content}>
      {children}
    </PortalPageSettings.Provider>
  )
})

export function usePortalPageSettingsContext(): ExtendedPageSettingsState {
  return useContext(PortalPageSettings)
}

const PortalPageSettings = createContext<ExtendedPageSettingsState>()