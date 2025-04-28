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
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePackage } from '../../usePackage'
import { useParams } from 'react-router-dom'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { SHOW_PUBLISH_PACKAGE_VERSION_DIALOG } from '@apihub/routes/EventBusProvider'
import { SPECIAL_VERSION_KEY } from '@netcracker/qubership-apihub-ui-shared/entities/versions'
import { type Package, WORKSPACE_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { getVersionLabelsMap } from '@netcracker/qubership-apihub-ui-shared/utils/versions'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { VersionStatus } from '@netcracker/qubership-apihub-ui-shared/entities/version-status'
import {
  DRAFT_VERSION_STATUS,
  NO_PREVIOUS_RELEASE_VERSION_OPTION,
  RELEASE_VERSION_STATUS,
} from '@netcracker/qubership-apihub-ui-shared/entities/version-status'
import type { VersionFormData} from '@netcracker/qubership-apihub-ui-shared/components/VersionDialogForm'
import {getVersionOptions} from '@netcracker/qubership-apihub-ui-shared/components/VersionDialogForm'
import {
  replaceEmptyPreviousVersion,
  usePreviousVersionOptions,
  VersionDialogForm,
} from '@netcracker/qubership-apihub-ui-shared/components/VersionDialogForm'
import { useDashboardVersionFromCSVPublicationStatuses } from '@apihub/routes/root/PortalPage/usePublicationStatus'
import { usePublishDashboardVersionFromCSV } from '@apihub/routes/root/PortalPage/usePublishDashboardVersionFromCSV'
import { usePackages } from '@apihub/routes/root/usePackages'
import { usePackageVersions } from '@netcracker/qubership-apihub-ui-shared/hooks/versions/usePackageVersions'
import { useCurrentPackage } from '@apihub/components/CurrentPackageProvider'
import {usePackageVersionConfig} from '@apihub/routes/root/PortalPage/usePackageVersionConfig'

export const PublishDashboardVersionFromCSVDialog: FC = memo(() => {
  return (
    <PopupDelegate
      type={SHOW_PUBLISH_PACKAGE_VERSION_DIALOG}
      render={props => <PublishDashboardVersionFromCSVPopup {...props} open/>}
    />
  )
})

const PublishDashboardVersionFromCSVPopup: FC<PopupProps> = memo<PopupProps>(({ open, setOpen }) => {
  const { versionId: currentVersionId } = useParams()
  const currentPackage = useCurrentPackage()
  const [packageObj, isPackageLoading] = usePackage()
  const packagePermissions = useMemo(() => packageObj?.permissions ?? [], [packageObj])
  const releaseVersionPattern = useMemo(() => packageObj?.releaseVersionPattern, [packageObj])
  const isEditingVersion = !!currentVersionId && currentVersionId !== SPECIAL_VERSION_KEY

  const [currentVersionConfig] = usePackageVersionConfig(currentPackage?.key, currentVersionId)
  const [targetWorkspace, setTargetWorkspace] = useState<Package | null>(currentPackage?.parents?.[0] ?? null)
  const [workspacesFilter, setWorkspacesFilter] = useState('')
  const [targetVersion, setTargetVersion] = useState<Key>(isEditingVersion ? currentVersionId ?? '' : '')
  const [versionsFilter, setVersionsFilter] = useState('')
  const [targetStatus, setTargetStatus] = useState(DRAFT_VERSION_STATUS as VersionStatus)
  const [targetLabels, setTargetLabels] = useState([] as string[])

  const [workspaces, areWorkspacesLoading] = usePackages({
    kind: WORKSPACE_KIND,
    textFilter: workspacesFilter,
  })
  const {versions: filteredVersions, areVersionsLoading: areFilteredVersionsLoading} = usePackageVersions({
    textFilter: versionsFilter,
  })
  const { versions: targetPreviousVersions } = usePackageVersions({
    status: RELEASE_VERSION_STATUS,
  })
  const previousVersionOptions = usePreviousVersionOptions(targetPreviousVersions)
  const versionLabelsMap = useMemo(() => getVersionLabelsMap(filteredVersions), [filteredVersions])
  const versions = useMemo(() => getVersionOptions(versionLabelsMap, targetVersion), [targetVersion, versionLabelsMap])
  const defaultValues: VersionFormData = useMemo(() => {
    return {
      workspace: targetWorkspace,
      version: targetVersion,
      status: targetStatus,
      labels: targetLabels,
      previousVersion: NO_PREVIOUS_RELEASE_VERSION_OPTION,
    }
  }, [targetWorkspace, targetVersion, targetStatus, targetLabels])
  const { handleSubmit, control, setValue, formState, reset } = useForm<VersionFormData>({ defaultValues })
  const { publishId, publish, isPublishStarting, isPublishStartedSuccessfully } = usePublishDashboardVersionFromCSV()
  const [isPublishing, isPublished, isPublishError] = useDashboardVersionFromCSVPublicationStatuses(packageObj?.key ?? '', publishId ?? '', targetVersion)

  const onVersionsFilter = useCallback((value: Key) => setVersionsFilter(value), [setVersionsFilter])
  const getVersionLabels = useCallback((version: Key) => versionLabelsMap[version] ?? [], [versionLabelsMap])
  const onSetTargetVersion = useCallback((version: string) => setTargetVersion(version), [])
  const onSetTargetStatus = useCallback((status: VersionStatus) => setTargetStatus(status), [])
  const onSetTargetLabels = useCallback((labels: string[]) => setTargetLabels(labels), [])
  const onWorkspacesFilter = useCallback((value: Key) => setWorkspacesFilter(value), [setWorkspacesFilter])
  const onSetWorkspace = useCallback((workspace: Package | null) => setTargetWorkspace(workspace), [])

  const isPublishInProgress =
    isPublishStarting ||
    isPublishStartedSuccessfully && !isPublished && !isPublishError ||
    isPublishing

  useEffect(() => { isPublishStartedSuccessfully && isPublished && setOpen(false) }, [isPublishStartedSuccessfully, isPublished, setOpen])
  useEffect(() => { defaultValues && reset(defaultValues) }, [defaultValues, reset])
  useEffect(() => {reset(defaultValues)}, [defaultValues, reset])
  useEffect(() => {
    if (currentVersionConfig) {
      setTargetStatus(currentVersionConfig.status as VersionStatus || DRAFT_VERSION_STATUS)
      setTargetLabels(currentVersionConfig.metaData?.versionLabels ?? [])
    }
  }, [currentVersionConfig])

  const onPublish = useCallback(async ({
    version,
    status,
    labels,
    previousVersion,
    workspace,
    file,
  }: PublishInfo): Promise<void> => {
    setTargetVersion(version)

    publish({
      packageKey: packageObj!.key,
      value: {
        versionLabels: labels,
        csvFile: file!,
        servicesWorkspaceId: workspace!.key,
        version: version,
        status: status,
        previousVersion: replaceEmptyPreviousVersion(previousVersion),
      },
    })
  }, [packageObj, publish])

  return (
    <VersionDialogForm
      open={open}
      title="Publish Dashboard Version"
      setOpen={setOpen}
      onSubmit={handleSubmit(onPublish)}
      control={control}
      setValue={setValue}
      formState={formState}
      workspaces={workspaces}
      onSetWorkspace={onSetWorkspace}
      onWorkspacesFilter={onWorkspacesFilter}
      areWorkspacesLoading={areWorkspacesLoading}
      versions={versions}
      onVersionsFilter={onVersionsFilter}
      areVersionsLoading={areFilteredVersionsLoading}
      previousVersions={previousVersionOptions}
      getVersionLabels={getVersionLabels}
      onSetTargetVersion={onSetTargetVersion}
      onSetTargetStatus={onSetTargetStatus}
      onSetTargetLabels={onSetTargetLabels}
      packagePermissions={packagePermissions}
      releaseVersionPattern={releaseVersionPattern}
      isPublishing={isPublishInProgress}
      hideCSVRelatedFields={false}
      hideDescriptorField
      hideCopyPackageFields
      hideDescriptorVersionField
      hideSaveMessageField
      publishButtonDisabled={isPackageLoading}
    />
  )
})

type PublishInfo = Readonly<{
  version: Key
  status: VersionStatus
  labels: string[]
  file?: File
  previousVersion: Key
  workspace?: Package | null
}>
