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

import { useQuery } from '@tanstack/react-query'
import { useInvalidateSnapshotPublicationInfo } from '../../useSnapshotPublicationInfo'
import { useCreateSnapshotPublicationOptions } from '../ServicesPageProvider/ServicesPublicationOptionsProvider'
import { useInvalidateSnapshots, useSnapshots } from '../../useSnapshots'
import { useMemo } from 'react'
import { EMPTY_ALL_PUBLISH_DETAILS, getPublishDetails } from '@agents/entities/publish-details'
import {
  COMPLETE_PUBLISH_STATUS,
  ERROR_PUBLISH_STATUS,
  NONE_PUBLISH_STATUS,
  RUNNING_PUBLISH_STATUS,
} from '@agents/entities/statuses'
import type { PublishDetails, PublishDetailsDto, PublishStatus } from '@netcracker/qubership-apihub-ui-shared/utils/packages-builder'
import type { PublishConfig } from '@agents/entities/publish-config'
import { STATUS_REFETCH_INTERVAL } from '@netcracker/qubership-apihub-ui-shared/utils/requests'

const ALL_PUBLISH_DETAILS_QUERY_KEY = 'all-publish-details-query-key'
const BUILD_CREATION_TIMEOUT = 15 * 60 * 1000 // fifteen minutes

export function useAllPublicationDetails(options?: Partial<{
  config: PublishConfig
}>): [PublishDetails[]] {
  const { config } = options ?? {}
  const [snapshots, isLoading] = useSnapshots()
  const { createSnapshotPublicationOptions } = useCreateSnapshotPublicationOptions()
  const invalidateSnapshotPublishInfo = useInvalidateSnapshotPublicationInfo()
  const invalidateSnapshots = useInvalidateSnapshots()

  const startedAt = useMemo(() => config && Date.now(), [config])

  const { data } = useQuery<PublishDetailsDto[], Error, PublishDetails[]>({
    queryKey: [ALL_PUBLISH_DETAILS_QUERY_KEY, config],
    queryFn: async () => {
      const publishIds = [...config!.serviceConfigs.map(({ publishId }) => publishId)]

      const snapshotPublishId = config!.snapshotConfig?.publishId

      snapshotPublishId && publishIds.push(snapshotPublishId)

      // Agents-backend returns publish ids before it creates the builds, so apihub
      // omits the builds that do not exist yet, or answers 404 when none exists
      const found = await getPublishDetails(snapshots.packageKey, publishIds).catch((error: unknown) => {
        // A 404 rejects with no reason; any other error keeps its previous handling
        if (error === undefined) {
          return []
        }
        throw error
      })
      const foundById = new Map(found.map(details => [details.publishId, details]))
      const isTimedOut = Date.now() - startedAt! > BUILD_CREATION_TIMEOUT
      return publishIds.map(publishId => foundById.get(publishId) ?? {
        publishId,
        status: isTimedOut ? ERROR_PUBLISH_STATUS : RUNNING_PUBLISH_STATUS,
      })
    },
    refetchInterval: data => {
      if (data?.find(publishDetails => publishDetails.status === RUNNING_PUBLISH_STATUS || publishDetails.status === NONE_PUBLISH_STATUS)) {
        return STATUS_REFETCH_INTERVAL
      }
      return false
    },
    onSuccess: data => {
      if (data?.every(publishDetails => publishDetails.status === COMPLETE_PUBLISH_STATUS)) {
        invalidateSnapshotPublishInfo({ snapshotPublicationName: createSnapshotPublicationOptions.name })
        invalidateSnapshots()
      }
    },
    enabled: !!config && !isLoading,
  })

  return [
    data ?? EMPTY_ALL_PUBLISH_DETAILS,
  ]
}

export function useAllPublishDetailsStatus(options?: Partial<{
  config: PublishConfig
}>): PublishStatus {
  const { config } = options ?? {}
  const [allPublishDetails] = useAllPublicationDetails({ config })

  const isRunning = useMemo(
    () => allPublishDetails?.find(({ status }) => status === RUNNING_PUBLISH_STATUS),
    [allPublishDetails],
  )
  const isSuccess = useMemo(
    () => allPublishDetails?.every(({ status }) => status === COMPLETE_PUBLISH_STATUS),
    [allPublishDetails],
  )
  const isFailed = useMemo(
    () => allPublishDetails?.find(({ status }) => status === ERROR_PUBLISH_STATUS),
    [allPublishDetails],
  )

  if (isRunning) {
    return RUNNING_PUBLISH_STATUS
  }
  if (isSuccess) {
    return COMPLETE_PUBLISH_STATUS
  }
  if (isFailed) {
    return ERROR_PUBLISH_STATUS
  }
  // A build queued for a server builder, such as the dashboard, is still in progress
  if (config && allPublishDetails.some(({ status }) => status === NONE_PUBLISH_STATUS)) {
    return RUNNING_PUBLISH_STATUS
  }

  return NONE_PUBLISH_STATUS
}
