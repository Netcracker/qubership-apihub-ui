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

import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import { useSetSearchParams } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSetSearchParams'
import { useMemo } from 'react'
import type { SettingsTab } from './ProjectEditorSidebar/SettingsTabPanel'

export function useSettingSearchParam(): [SettingsTab | undefined, SetSettingSearchParam] {
  const setting = useSearchParam<SettingsTab>('setting')
  const setSetting = useSetSearchParams()

  return useMemo(
    () => [setting, value => setSetting({ setting: value ?? '' }, { replace: true })],
    [setting, setSetting],
  )
}

type SetSettingSearchParam = (value: SettingsTab | undefined) => void
