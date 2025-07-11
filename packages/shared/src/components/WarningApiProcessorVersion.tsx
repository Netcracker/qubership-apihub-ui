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
import { memo, useEffect, useState } from 'react'
import { useVersionInfo } from '../hooks/frontend-version/useVersionInfo'
import { useSystemInfo } from '../features/system-info'
import { useApiProcessorVersion } from '../hooks/package-version-content/usePackageVersionContent'
import { compareVersions } from 'compare-versions'
import { ButtonWithHint } from './Buttons/ButtonWithHint'
import { RedWarningIcon } from '../icons/WarningIcon'
import { Box, Typography } from '@mui/material'

export const WARNING_API_PROCESSOR_TOOLTIP = 'TooltipWarning'
export const WARNING_API_PROCESSOR_TEXT = 'TextWarning'

export type WARNING_API_PROCESSOR_TOOLTIP_TYPE = 'TooltipWarning'
export type WARNING_API_PROCESSOR_TEXT_TYPE = 'TextWarning'
export type WarningApiProcessorVersionProps = {
  packageKey?: string | undefined
  versionKey?: string | undefined
  type?: WARNING_API_PROCESSOR_TOOLTIP_TYPE | WARNING_API_PROCESSOR_TEXT_TYPE
  onWarningTextChange?: (text: string) => void
  hidden?: boolean
}

export const WarningApiProcessorVersion: FC<WarningApiProcessorVersionProps> = memo<WarningApiProcessorVersionProps>(({
  versionKey,
  packageKey,
  type = WARNING_API_PROCESSOR_TOOLTIP,
  onWarningTextChange,
  hidden = false,
}) => {
  const { apiProcessorVersion: apiProcessorVersionApp } = useVersionInfo()
  const { migrationInProgress } = useSystemInfo()
  const apiProcessorVersion = useApiProcessorVersion({
    versionKey: versionKey,
    packageKey: packageKey,
  })

  const [textHintState, setTextHintState] = useState('')
  const createTextHint = (): void => {
    if (migrationInProgress) {
      setTextHintState('')
      return
    }
    if (apiProcessorVersion && apiProcessorVersionApp) {
      const calculateMatchVersion: number = compareVersions(apiProcessorVersion, apiProcessorVersionApp)
      if (calculateMatchVersion > 0) {
        setTextHintState(`The data in the version '${versionKey}' may be incorrect, please contact the system administrators`)
      } else if (calculateMatchVersion < 0) {
        setTextHintState(`The data in the version '${versionKey}' may be incorrect, as the data has not been processed according to the latest system rules. Please republish the version and if this does not help, contact the system administrators.`)
      }
    }
  }

  useEffect(() => {
    createTextHint()
    return () => {
      setTextHintState('')
    }
  }, [apiProcessorVersion, apiProcessorVersionApp])

  useEffect(() => {
    if (textHintState && onWarningTextChange) {
      onWarningTextChange(textHintState)
    }
  }, [textHintState, onWarningTextChange])

  return !hidden && apiProcessorVersion && apiProcessorVersion !== apiProcessorVersionApp && !migrationInProgress
    ? type === WARNING_API_PROCESSOR_TOOLTIP
      ? <ButtonWithHint
        hint={textHintState}
        color="inherit"
        size="small"
        disabled={true}
        tooltipMaxWidth={668}
        startIcon={<RedWarningIcon/>}
        data-testid="WarningApiProcessorVersion"
      />
      : <Box display="flex">
        <RedWarningIcon/>
        <Typography marginLeft="4px" data-testid="WarningApiProcessorTypography"
                    variant="body2">{textHintState}</Typography>
      </Box>
    : null

})
