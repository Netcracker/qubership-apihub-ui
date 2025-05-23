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

import { Box, Tooltip, Typography } from '@mui/material'
import React, { type FC, memo, useCallback } from 'react'
import type { PackageSettingsTabProps } from '../package-settings'
import { EditGrouppingPrefixDialog } from './EditGrouppingPrefixDialog'
import { useEventBus } from '@apihub/routes/EventBusProvider'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { transformStringValue } from '@netcracker/qubership-apihub-ui-shared/utils/strings'
import { GROUP_TYPE_REST_PATH_PREFIX } from '@netcracker/qubership-apihub-ui-shared/entities/operation-groups'
import { SettingsEditableParameter } from '../SettingsEditableParameter/SettingsEditableParameter'
import { OverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/OverflowTooltip'
import { InfoContextIcon } from '@netcracker/qubership-apihub-ui-shared/icons/InfoContextIcon'

export const SpecificConfigurationPackageSettingsTab: FC<PackageSettingsTabProps> = memo<PackageSettingsTabProps>(({ packageObject }) => {
  const { showEditPackagePrefixDialog } = useEventBus()

  const onEditPackagePrefix = useCallback(() => {
    showEditPackagePrefixDialog({
      packageKey: packageObject?.key,
      existingPrefix: packageObject?.restGroupingPrefix ?? '',
    })
  }, [packageObject, showEditPackagePrefixDialog])

  const restGroupingPrefix = transformStringValue(packageObject?.restGroupingPrefix)

  return (
    <Box height="100%">
      <BodyCard
        header="API Specific Configuration"
        body={
          <Box marginTop="8px" marginBottom="16px" overflow="hidden" height="100%">
            <Box width="268px" display="flex" gap={1}>
              <SettingsEditableParameter
                title={`${GROUP_TYPE_REST_PATH_PREFIX} for Grouping by Version`}
                packageObject={packageObject}
                onEdit={onEditPackagePrefix}
                data-testid="PrefixContent"
              >
                <OverflowTooltip title={restGroupingPrefix}>
                  <Typography variant="body2" textOverflow="ellipsis" overflow="hidden" noWrap>
                    {restGroupingPrefix}
                  </Typography>
                </OverflowTooltip>
              </SettingsEditableParameter>
              <Tooltip
                disableHoverListener={false}
                title="The parameter allows you to define custom regular expression, which will be applied to the paths of REST operations. This expression must begin and end with a / character and contain the {group} keyword. For example: /api/{group}/. The system will look for the {group} entry in the REST operation paths during the publication of the package version. All found matches will form a list of groups that will include the corresponding operations."
                placement="right"
              >
                <InfoContextIcon fontSize="extra-small"/>
              </Tooltip>
            </Box>
          </Box>
        }
      />
      <EditGrouppingPrefixDialog/>
    </Box>
  )
})
