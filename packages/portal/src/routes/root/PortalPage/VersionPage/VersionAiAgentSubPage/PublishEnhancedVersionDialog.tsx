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

import { useCurrentPackage } from '@apihub/components/CurrentPackageProvider'
import { SHOW_PUBLISH_AI_ENHANCED_VERSION_DIALOG } from '@apihub/routes/EventBusProvider'
import { useFullMainVersion } from '@apihub/routes/root/PortalPage/FullMainVersionProvider'
import { usePackageVersionConfig } from '@apihub/routes/root/PortalPage/usePackageVersionConfig'
import { usePublicationStatuses } from '@apihub/routes/root/PortalPage/usePublicationStatus'
import { usePackages } from '@apihub/routes/root/usePackages'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import type { VersionFormData } from '@netcracker/qubership-apihub-ui-shared/components/VersionDialogForm'
import {
  getPackageOptions,
  getVersionOptions,
  replaceEmptyPreviousVersion,
  usePreviousVersionOptions,
  VersionDialogForm,
} from '@netcracker/qubership-apihub-ui-shared/components/VersionDialogForm'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { Package } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { DASHBOARD_KIND, PACKAGE_KIND, WORKSPACE_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import type { VersionStatus } from '@netcracker/qubership-apihub-ui-shared/entities/version-status'
import {
  DRAFT_VERSION_STATUS,
  NO_PREVIOUS_RELEASE_VERSION_OPTION,
  RELEASE_VERSION_STATUS,
} from '@netcracker/qubership-apihub-ui-shared/entities/version-status'
import { usePackageVersions } from '@netcracker/qubership-apihub-ui-shared/hooks/versions/usePackageVersions'
import { getSplittedVersionKey, getVersionLabelsMap } from '@netcracker/qubership-apihub-ui-shared/utils/versions'
import type { FC } from 'react'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePublishAiEnhancedPackageVersion } from './api/usePublishEnhancedVersion'

export const PublishAiEnhancedVersionDialog: FC = memo(() => {
  return (
    <PopupDelegate
      type={SHOW_PUBLISH_AI_ENHANCED_VERSION_DIALOG}
      render={props => <PublishAiEnhancedVersionPopup {...props} />}
    />
  )
})

const PublishAiEnhancedVersionPopup: FC<PopupProps> = memo<PopupProps>(({ open, setOpen }) => {
  const currentVersionId = useFullMainVersion()
  const currentPackage = useCurrentPackage()

  const packageKind = currentPackage?.kind
  const isPackage = packageKind === PACKAGE_KIND
  const kindTitle = isPackage ? 'Package' : 'Dashboard'

  const [currentVersionConfig, isCurrentVersionLoading] = usePackageVersionConfig(currentPackage?.key, currentVersionId)
  const [currentWorkspace] = useState(currentPackage?.parents?.[0] ?? null)

  const [targetWorkspace, setTargetWorkspace] = useState<Package | null>(currentWorkspace)
  const [workspacesFilter, setWorkspacesFilter] = useState('')
  const [targetPackage, setTargetPackage] = useState<Package | null>(null)
  const [packagesFilter, setPackagesFilter] = useState('')
  const versionId = useMemo(() => getSplittedVersionKey(currentVersionId).versionKey, [currentVersionId])

  const [targetVersion, setTargetVersion] = useState<Key>(versionId)
  const [versionsFilter, setVersionsFilter] = useState('')

  const [workspaces, areWorkspacesLoading] = usePackages({
    kind: WORKSPACE_KIND,
    textFilter: workspacesFilter,
  })
  const [packages, arePackagesLoading] = usePackages({
    kind: isPackage ? PACKAGE_KIND : DASHBOARD_KIND,
    parentId: targetWorkspace?.key,
    showAllDescendants: true,
    textFilter: packagesFilter,
  })
  const { versions: filteredVersions, areVersionsLoading: areFilteredVersionsLoading } = usePackageVersions({
    packageKey: targetPackage?.key,
    enabled: !!targetPackage,
    textFilter: versionsFilter,
  })
  const { versions: targetPreviousVersions } = usePackageVersions({
    packageKey: targetPackage?.key,
    enabled: !!targetPackage,
    status: RELEASE_VERSION_STATUS,
  })

  const targetPreviousVersionOptions = usePreviousVersionOptions(targetPreviousVersions)
  const {
    mutationFn: publishAiEnhancedPackageVersion,
    publicationId,
    isLoading: isPublicationStarting,
    isSuccess: isPublicationStartedSuccessfully,
  } = usePublishAiEnhancedPackageVersion()
  const [isPublishing, isPublished] = usePublicationStatuses(targetPackage?.key ?? '', publicationId, targetVersion, 'The AI-enhanced package version was published')

  const targetPackagePermissions = useMemo(() => targetPackage?.permissions ?? [], [targetPackage?.permissions])
  const targetReleaseVersionPattern = useMemo(() => targetPackage?.releaseVersionPattern, [targetPackage?.releaseVersionPattern])
  const versionLabelsMap = useMemo(() => getVersionLabelsMap(filteredVersions), [filteredVersions])
  const versionOptions = useMemo(() => getVersionOptions(versionLabelsMap, targetVersion), [targetVersion, versionLabelsMap])
  const packageOptions = useMemo(() => getPackageOptions(packages, targetPackage, !!packagesFilter), [packages, packagesFilter, targetPackage])
  const workspaceOptions = useMemo(() => getPackageOptions(workspaces, targetWorkspace, !!workspacesFilter), [targetWorkspace, workspaces, workspacesFilter])

  const defaultValues: VersionFormData = useMemo(() => {
    return {
      package: null,
      workspace: currentWorkspace,
      version: versionId,
      status: DRAFT_VERSION_STATUS,
      labels: [],
      previousVersion: NO_PREVIOUS_RELEASE_VERSION_OPTION,
    }
  }, [currentWorkspace, versionId])

  const { handleSubmit, control, reset, setValue, formState } = useForm<VersionFormData>({ defaultValues })
  const onVersionsFilter = useCallback((value: Key) => setVersionsFilter(value), [setVersionsFilter])
  const onPackagesFilter = useCallback((value: Key) => setPackagesFilter(value), [setPackagesFilter])
  const onWorkspacesFilter = useCallback((value: Key) => setWorkspacesFilter(value), [setWorkspacesFilter])
  const onSetWorkspace = useCallback((workspace: Package | null) => setTargetWorkspace(workspace), [])
  const onSetTargetPackage = useCallback((pack: Package | null) => setTargetPackage(pack), [])
  const onSetTargetVersion = useCallback((version: string) => setTargetVersion(version), [])
  const getVersionLabels = useCallback((version: Key) => versionLabelsMap[version] ?? [], [versionLabelsMap])

  useEffect(() => {
    const workspace = currentPackage?.parents?.find(pack => pack.kind === WORKSPACE_KIND)
    setTargetWorkspace(workspace ?? null)
  }, [currentPackage?.parents])
  useEffect(
    () => { isPublicationStartedSuccessfully && isPublished && setOpen(false) },
    [setOpen, isPublicationStartedSuccessfully, isPublished],
  )
  useEffect(() => { reset(defaultValues) }, [defaultValues, reset])
  useEffect(() => {
    if (!targetWorkspace) {
      setTargetPackage(null)
      setValue('package', null)
    }
  }, [targetWorkspace, setValue])
  useEffect(() => {
    if (currentVersionConfig) {
      setValue('status', currentVersionConfig.status as VersionStatus || DRAFT_VERSION_STATUS)
      setValue('labels', currentVersionConfig.metaData?.versionLabels ?? [])
    }
  }, [currentVersionConfig, setValue])

  const onPublishEnhancedVersion = useCallback(async (data: CopyInfo): Promise<void> => {
    const { package: targetPackage, version, status, labels, previousVersion } = data
    if (!targetPackage) {
      throw Error('Incorrect parameters for publishing enhanced version: targetPackage is empty')
    }
    const targetPreviousVersion = replaceEmptyPreviousVersion(previousVersion)
    setTargetVersion(version)

    // TODO 25.10.25 // Publish enhanced version via new BE API
    publishAiEnhancedPackageVersion({
      packageKey: currentPackage?.key ?? '',
      versionKey: currentVersionId!,
      targetPackageParameters: {
        packageKey: targetPackage.key,
        version: version,
        status: status,
        previousVersion: targetPreviousVersion,
        labels: labels,
      },
    })
  }, [currentPackage?.key, currentVersionId, publishAiEnhancedPackageVersion])

  return (
    <VersionDialogForm
      title={`Publish Enhanced ${kindTitle} Version`}
      open={open}
      setOpen={setOpen}
      onSubmit={handleSubmit(onPublishEnhancedVersion)}
      control={control}
      setValue={setValue}
      formState={formState}
      selectedWorkspace={targetWorkspace}
      workspaces={workspaceOptions}
      onSetWorkspace={onSetWorkspace}
      onWorkspacesFilter={onWorkspacesFilter}
      areWorkspacesLoading={areWorkspacesLoading}
      packages={packageOptions}
      onVersionsFilter={onVersionsFilter}
      onPackagesFilter={onPackagesFilter}
      areVersionsLoading={areFilteredVersionsLoading}
      arePackagesLoading={arePackagesLoading}
      onSetTargetPackage={onSetTargetPackage}
      onSetTargetVersion={onSetTargetVersion}
      packagesTitle={kindTitle}
      versions={versionOptions}
      previousVersions={targetPreviousVersionOptions}
      getVersionLabels={getVersionLabels}
      packagePermissions={targetPackagePermissions}
      releaseVersionPattern={targetReleaseVersionPattern}
      isPublishing={isPublicationStarting || isPublishing}
      submitButtonTittle="Publish"
      hideDescriptorField
      hideDescriptorVersionField
      hideSaveMessageField
      publishButtonDisabled={!currentPackage}
      publishFieldsDisabled={isCurrentVersionLoading}
    />
  )
})

type CopyInfo = {
  package?: Package | null
  version: Key
  status: VersionStatus
  labels: string[]
  previousVersion: Key
}
