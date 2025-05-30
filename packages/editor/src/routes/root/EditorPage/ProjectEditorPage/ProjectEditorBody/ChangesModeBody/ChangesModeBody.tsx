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

import type { CommitKey } from '@apihub/entities/commits'
import { DRAFT_COMMIT_KEY, NONE_COMMIT_KEY } from '@apihub/entities/commits'
import type { AfterSpecContent, BeforeSpecContent } from '@apihub/entities/specs'
import { Alert, AlertTitle } from '@mui/material'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { RawSpecDiffView } from '@netcracker/qubership-apihub-ui-shared/components/RawSpecDiffView'
import { useSpecItemUriHashParam } from '@netcracker/qubership-apihub-ui-shared/hooks/hashparams/useSpecItemUriHashParam'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { getFileExtension } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { isOpenApiSpecType } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import type { FC } from 'react'
import { memo } from 'react'
import { useChangeSearchParam } from '../../../../useChangeSearchParam'
import { useSpecType } from '../../../../useSpecType'
import { useSelectedConflictedBlobKey } from '../../ConflictedBlobKeyProvider'
import { useBranchChanges } from '../../useBranchChanges'
import { useProjectFileContent } from '../../useProjectFileContent'
import { useProjectFileContentByBlobId } from '../../useProjectFileContentByBlobId'
import { useConfigChangeSelected, useSelectedChange } from '../../useSelectedChange'
import { useRawBranchConfig } from './useRawBranchConfig'

export const ChangesModeBody: FC = memo(() => {
  const [selectedChangeKey] = useChangeSearchParam()
  const selectedChange = useSelectedChange()
  const selectedConflictedBlobKey = useSelectedConflictedBlobKey()
  const [specItemUri] = useSpecItemUriHashParam()

  const [before, after, isLoading] = useDifferences(selectedConflictedBlobKey)
  const specType = useSpecType(selectedChange?.name, after)
  const extension = getFileExtension(selectedChange?.name ?? '')

  return (
    <Placeholder
      invisible={!!selectedChangeKey}
      area={CONTENT_PLACEHOLDER_AREA}
      message="No change to show"
    >
      <BodyCard
        header={`${selectedChange?.name} ${selectedConflictedBlobKey ? '(conflict)' : ''}`}
        subheader={`${selectedChange?.path} ${selectedChange?.oldPath ? `moved from ${selectedChange?.oldPath}` : ''}`}
        body={isLoading
          ? <LoadingIndicator />
          : before === after
          ? (
            <Alert severity="success">
              <AlertTitle>No Difference</AlertTitle>
              Files are equal
            </Alert>
          )
          : (
            <RawSpecDiffView
              beforeValue={before}
              afterValue={after}
              selectedUri={specItemUri}
              type={specType}
              extension={extension}
            />
          )}
      />
    </Placeholder>
  )
})

function useDifferences(
  selectedConflictedBlobKey: CommitKey | null,
): [BeforeSpecContent, AfterSpecContent, IsLoading, IsCodeViewAvailable] {
  const [selectedChangeKey] = useChangeSearchParam()

  const [changes] = useBranchChanges()

  const configChangeSelected = useConfigChangeSelected()

  const [beforeBranchGitConfig, isBeforeBranchGitConfigLoading] = useRawBranchConfig(
    true,
    configChangeSelected,
  )
  const [afterBranchGitConfig, isAfterBranchGitConfigLoading] = useRawBranchConfig(
    false,
    configChangeSelected,
  )

  const selectedChange = changes.find(({ fileId }) => fileId === selectedChangeKey)
  const [beforeFileContent, isBeforeFileContentLoading] = useProjectFileContentByBlobId(
    selectedConflictedBlobKey ?? selectedChange?.blobId ?? NONE_COMMIT_KEY,
  )
  const [afterFileContent, isAfterFileContentLoading] = useProjectFileContent(
    selectedChangeKey ?? '',
    DRAFT_COMMIT_KEY,
  )

  const afterSpecType = useSpecType(selectedChangeKey, afterFileContent)

  const beforeContent = beforeFileContent
    ? beforeFileContent
    : selectedChange?.movedFrom
    ? afterFileContent ?? ''
    : ''

  return configChangeSelected
    ? [
      beforeBranchGitConfig,
      afterBranchGitConfig,
      isBeforeBranchGitConfigLoading || isAfterBranchGitConfigLoading,
      isOpenApiSpecType(afterSpecType),
    ]
    : [
      beforeContent,
      afterFileContent ?? '',
      isBeforeFileContentLoading || isAfterFileContentLoading,
      isOpenApiSpecType(afterSpecType),
    ]
}

type IsCodeViewAvailable = boolean
