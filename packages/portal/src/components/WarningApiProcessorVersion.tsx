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

import type { FC} from 'react'
import { memo, useEffect, useState } from 'react'
import { RedWarningIcon } from '@netcracker/qubership-apihub-ui-shared/icons/WarningIcon'
import { useVersionInfo } from '@netcracker/qubership-apihub-ui-shared/hooks/frontend-version/useVersionInfo'
import { useSystemInfo } from '@netcracker/qubership-apihub-ui-shared/features/system-info'
import { ButtonWithHint } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ButtonWithHint'
import { compareVersions } from 'compare-versions'
import { usePackageVersionContent } from '@apihub/routes/root/usePackageVersionContent'

export type WarningApiProcessorVersionProps = {
  packageKey?: string | undefined
  versionKey?: string | undefined
}

export const WarningApiProcessorVersion: FC<WarningApiProcessorVersionProps> = memo<WarningApiProcessorVersionProps>(({
  versionKey,
  packageKey,
}) => {
  const { apiProcessorVersion: apiProcessorVersionApp } = useVersionInfo()
  const { migrationInProgress } = useSystemInfo()
  const { versionContent } = usePackageVersionContent({
    versionKey: versionKey,
    packageKey: packageKey,
  })
  const { apiProcessorVersion } = versionContent ?? {}
  const [textHintState, setTextHintState] = useState('')
  const createTextHint = (): void => {
    if (apiProcessorVersion && apiProcessorVersionApp) {
      const calculateMatchVersion: number = compareVersions(apiProcessorVersion, apiProcessorVersionApp)
      if (calculateMatchVersion > 0) {
        setTextHintState(`The data in the version ${apiProcessorVersion} may be incorrect, please contact the system administrators`)
      } else if (calculateMatchVersion < 0) {
        setTextHintState(`The data in the version ${apiProcessorVersion} may be incorrect, as the data has not been processed according to the latest system rules. Please republish the version and if this does not help, contact the system administrators.`)
      }
    }
  }

  useEffect(() => {
    createTextHint()
  }, [apiProcessorVersion, apiProcessorVersionApp])

  return apiProcessorVersion && apiProcessorVersion !== apiProcessorVersionApp && !migrationInProgress
    ? <ButtonWithHint
      hint={textHintState}
      color="inherit"
      size="small"
      disabled={true}
      tooltipMaxWidth={668}
      startIcon={<RedWarningIcon/>}
      data-testid="WarningApiProcessorVersion"
    />
    : ''

})
