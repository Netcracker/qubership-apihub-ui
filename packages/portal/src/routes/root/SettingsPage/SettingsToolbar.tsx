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
import { memo, useCallback, useMemo } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useBackwardLocationContext } from '@apihub/routes/BackwardLocationProvider'
import { LARGE_TOOLBAR_SIZE, Toolbar } from '@netcracker/qubership-apihub-ui-shared/components/Toolbar'
import { ToolbarTitle } from '@netcracker/qubership-apihub-ui-shared/components/ToolbarTitle'
import { ExitIcon } from '@netcracker/qubership-apihub-ui-shared/icons/ExitIcon'

export const SettingsToolbar: FC = memo(() => {
  const navigate = useNavigate()
  const backwardLocation = useBackwardLocationContext()

  const previousPageLocation = useMemo(() => {
    return backwardLocation.fromPackageSettings ?? { pathname: '/portal' }
  }, [backwardLocation])

  const navigateToPrevPage = useCallback(() => {
    navigate(previousPageLocation)
  }, [previousPageLocation, navigate])

  return (
    <Toolbar
      header={<ToolbarTitle value="APIHUB Portal Settings"/>}
      size={LARGE_TOOLBAR_SIZE}
      action={(
        <Button
          startIcon={<ExitIcon/>}
          variant="outlined"
          onClick={navigateToPrevPage}
        >
          Exit
        </Button>
      )}
    />
  )
})
