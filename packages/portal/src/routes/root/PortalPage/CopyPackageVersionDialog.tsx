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
import { usePackageVersions } from '@netcracker/qubership-apihub-ui-shared/hooks/versions/usePackageVersions'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { SHOW_COPY_PACKAGE_VERSION_DIALOG } from '@apihub/routes/EventBusProvider'
import type { Package } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { DASHBOARD_KIND, PACKAGE_KIND, WORKSPACE_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import {
  getSplittedVersionKey,
  getVersionLabelsMap,
} from '@netcracker/qubership-apihub-ui-shared/utils/versions'
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
import { usePackages } from '@apihub/routes/root/usePackages'
import { useCopyPackageVersion } from '@apihub/routes/root/PortalPage/useCopyPackageVersion'
import { usePublicationStatuses } from '@apihub/routes/root/PortalPage/usePublicationStatus'
import { useFullMainVersion } from '@apihub/routes/root/PortalPage/FullMainVersionProvider'
import { useCurrentPackage } from '@apihub/components/CurrentPackageProvider'
import {usePackageVersionConfig} from '@apihub/routes/root/PortalPage/usePackageVersionConfig'

export const CopyPackageVersionDialog: FC = memo(() => {
  return (
    <PopupDelegate
      type={SHOW_COPY_PACKAGE_VERSION_DIALOG}
      render={props => <CopyPackageVersionPopup {...props}/>}
    />
  )
})

const CopyPackageVersionPopup: FC<PopupProps> = memo<PopupProps>(({ open, setOpen }) => {
  const currentVersionId = useFullMainVersion()
  const currentPackage = useCurrentPackage()

  const packageKind = currentPackage?.kind
  const isPackage = packageKind === PACKAGE_KIND
  const kindTitle = isPackage ? 'Package' : 'Dashboard'

  const [currentVersionConfig] = usePackageVersionConfig(currentPackage?.key, currentVersionId)
  const [targetWorkspace, setTargetWorkspace] = useState<Package | null>(currentPackage?.parents?.[0] ?? null)
  const [workspacesFilter, setWorkspacesFilter] = useState('')
  const [targetPackage, setTargetPackage] = useState<Package | null>(null)
  const [packagesFilter, setPackagesFilter] = useState('')
  const [versionId] = useState(getSplittedVersionKey(currentVersionId).versionKey)
  const [targetVersion, setTargetVersion] = useState<Key>(versionId)
  const [versionsFilter, setVersionsFilter] = useState('')
  const [targetStatus, setTargetStatus] = useState(DRAFT_VERSION_STATUS as VersionStatus)
  const [targetLabels, setTargetLabels] = useState([] as string[])

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
  const {versions: filteredVersions, areVersionsLoading: areFilteredVersionsLoading} = usePackageVersions({
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
  const [copyPackage, publishId, isCopyStarting, isCopyingStartedSuccessfully] = useCopyPackageVersion()
  const [isPublishing, isPublished] = usePublicationStatuses(targetPackage?.key ?? '', publishId, targetVersion)
  
  const targetPackagePermissions = useMemo(() => targetPackage?.permissions ?? [], [targetPackage?.permissions])
  const targetReleaseVersionPattern = useMemo(() => targetPackage?.releaseVersionPattern, [targetPackage?.releaseVersionPattern])
  const versionLabelsMap = useMemo(() => getVersionLabelsMap(filteredVersions), [filteredVersions])
  const versions = useMemo(() => getVersionOptions(versionLabelsMap, targetVersion), [targetVersion, versionLabelsMap])
  const defaultValues: VersionFormData = useMemo(() => {
    return {
      package: targetPackage,
      workspace: targetWorkspace,
      version: targetVersion,
      status: targetStatus,
      labels: targetLabels,
      previousVersion: NO_PREVIOUS_RELEASE_VERSION_OPTION,
    }
  }, [targetPackage, targetWorkspace, targetVersion, targetStatus, targetLabels])

  const { handleSubmit, control, reset, setValue, formState } = useForm<VersionFormData>({ defaultValues })

  const onVersionsFilter = useCallback((value: Key) => setVersionsFilter(value), [setVersionsFilter])
  const onPackagesFilter = useCallback((value: Key) => setPackagesFilter(value), [setPackagesFilter])
  const onWorkspacesFilter = useCallback((value: Key) => setWorkspacesFilter(value), [setWorkspacesFilter])
  const onSetWorkspace = useCallback((workspace: Package | null) => setTargetWorkspace(workspace), [])
  const onSetTargetPackage = useCallback((pack: Package | null) => setTargetPackage(pack), [])
  const onSetTargetVersion = useCallback((version: string) => setTargetVersion(version), [])
  const onSetTargetStatus = useCallback((status: VersionStatus) => setTargetStatus(status), [])
  const onSetTargetLabels = useCallback((labels: string[]) => setTargetLabels(labels), [])
  const getVersionLabels = useCallback((version: Key) => versionLabelsMap[version] ?? [], [versionLabelsMap])

  useEffect(() => {
    const workspace = currentPackage?.parents?.find(pack => pack.kind === WORKSPACE_KIND)
    setTargetWorkspace(workspace ?? null)
  }, [currentPackage?.parents])
  useEffect(() => {isCopyingStartedSuccessfully && isPublished && setOpen(false)}, [setOpen, isCopyingStartedSuccessfully, isPublished])
  useEffect(() => {reset(defaultValues)}, [defaultValues, reset])
  useEffect(() =>{
    if(!targetWorkspace){
      setTargetPackage(null)
      setValue('package', null)
    }
  }, [targetWorkspace, setValue])
  useEffect(() => {
    if (currentVersionConfig) {
      setTargetStatus(currentVersionConfig.status as VersionStatus || DRAFT_VERSION_STATUS)
      setTargetLabels(currentVersionConfig.metaData?.versionLabels ?? [])
    }
  }, [currentVersionConfig])

  const onCopy = useCallback(async (data: CopyInfo): Promise<void> => {
    const { package: targetPackage, version, status, labels, previousVersion } = data
    if (!targetPackage) {
      throw Error('Incorrect parameters for copy: targetPackage is empty')
    }
    const targetPreviousVersion = replaceEmptyPreviousVersion(previousVersion)
    setTargetVersion(version)

    copyPackage({
      packageKey: currentPackage?.key ?? '',
      versionKey: currentVersionId!,
      value: {
        packageKey: targetPackage.key,
        version: version,
        status: status,
        previousVersion: targetPreviousVersion,
        labels: labels,
      },
    })
  }, [copyPackage, currentPackage?.key, currentVersionId])

  return (
    <VersionDialogForm
      title={`Copy ${kindTitle} Version`}
      open={open}
      setOpen={setOpen}
      onSubmit={handleSubmit(onCopy)}
      control={control}
      setValue={setValue}
      formState={formState}
      selectedWorkspace={targetWorkspace}
      workspaces={workspaces}
      onSetWorkspace={onSetWorkspace}
      onWorkspacesFilter={onWorkspacesFilter}
      areWorkspacesLoading={areWorkspacesLoading}
      packages={packages}
      onVersionsFilter={onVersionsFilter}
      onPackagesFilter={onPackagesFilter}
      areVersionsLoading={areFilteredVersionsLoading}
      arePackagesLoading={arePackagesLoading}
      onSetTargetPackage={onSetTargetPackage}
      onSetTargetVersion={onSetTargetVersion}
      onSetTargetStatus={onSetTargetStatus}
      onSetTargetLabels={onSetTargetLabels}
      packagesTitle={kindTitle}
      versions={versions}
      previousVersions={targetPreviousVersionOptions}
      getVersionLabels={getVersionLabels}
      packagePermissions={targetPackagePermissions}
      releaseVersionPattern={targetReleaseVersionPattern}
      isPublishing={isCopyStarting || isPublishing}
      submitButtonTittle="Copy"
      hideDescriptorField
      hideDescriptorVersionField
      hideSaveMessageField
      publishButtonDisabled={!currentPackage}
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
