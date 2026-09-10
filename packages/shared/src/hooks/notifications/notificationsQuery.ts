import { type QueryKey, useQuery, useQueryClient } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'

import type { PackageKey, VersionKey } from '../../entities/keys'
import {
  toVersionNotifications,
  type VersionNotifications,
  type VersionNotificationsDto,
} from '../../entities/version-notifications'
import { SPECIAL_VERSION_KEY } from '../../entities/versions'
import type { InvalidateQuery, IsFetching, IsInitialLoading, IsLoading } from '../../utils/aliases'
import { getPackageRedirectDetails } from '../../utils/redirects'
import { API_V2, requestJson } from '../../utils/requests'

type NotificationsPathPattern = `/${string}/:packageId/${string}/:versionId${'' | `/${string}`}`

const EMPTY_NOTIFICATIONS: VersionNotifications = []

export type NotificationsQueryScope = {
  packageKey: PackageKey
  versionKey: VersionKey
}

export type UseNotificationsQueryOptions = {
  queryKey: QueryKey
  queryFn: (signal?: AbortSignal) => Promise<VersionNotificationsDto>
  packageKey?: PackageKey
  versionKey?: VersionKey
  enabled?: boolean
}

export type VersionNotificationsQueryState = {
  notifications: VersionNotifications
  isLoading: IsLoading
  isInitialLoading: IsInitialLoading
  isFetching: IsFetching
  error: Error | null
  refetch: () => void
}

export function useNotificationsQuery(
  options: UseNotificationsQueryOptions,
): VersionNotificationsQueryState {
  const {
    queryKey,
    queryFn,
    packageKey,
    versionKey,
    enabled = true,
  } = options

  const isQueryEnabled = Boolean(packageKey) &&
    Boolean(versionKey) &&
    versionKey !== SPECIAL_VERSION_KEY &&
    enabled

  const { data, isLoading, isInitialLoading, isFetching, error, refetch } = useQuery<
    VersionNotificationsDto,
    Error,
    VersionNotifications
  >({
    queryKey: queryKey,
    queryFn: ({ signal }) => queryFn(signal),
    enabled: isQueryEnabled,
    select: toVersionNotifications,
  })

  return {
    notifications: data ?? EMPTY_NOTIFICATIONS,
    isLoading: isLoading,
    isInitialLoading: isInitialLoading,
    isFetching: isFetching,
    error: error,
    refetch: refetch,
  }
}

export function useInvalidateNotificationsQuery(
  queryKeyRoot: string,
): InvalidateQuery<NotificationsQueryScope> {
  const client = useQueryClient()
  return ({ packageKey, versionKey }) => {
    client.invalidateQueries({
      queryKey: [queryKeyRoot, packageKey, versionKey],
    })
  }
}

export async function requestNotificationsJson(
  pathPattern: NotificationsPathPattern,
  packageKey: PackageKey,
  versionKey: VersionKey,
  searchParams: URLSearchParams,
  signal?: AbortSignal,
): Promise<VersionNotificationsDto> {
  const packageId = encodeURIComponent(packageKey)
  const versionId = encodeURIComponent(versionKey)

  return await requestJson<VersionNotificationsDto>(
    `${generatePath(pathPattern, { packageId, versionId })}?${searchParams}`,
    { method: 'get' },
    {
      customRedirectHandler: (response) => getPackageRedirectDetails(response, pathPattern),
      basePath: API_V2,
    },
    signal,
  )
}
