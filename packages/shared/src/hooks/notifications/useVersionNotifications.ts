import type { PackageKey, VersionKey } from '../../entities/keys'
import { type VersionNotificationsDto, type VersionNotificationsQuery } from '../../entities/version-notifications'
import type { InvalidateQuery } from '../../utils/aliases'
import { toNotificationFiltersQueryKey, toVersionNotificationsSearchParams } from './notificationQueryParams'
import {
  type NotificationsQueryScope,
  requestNotificationsJson,
  useInvalidateNotificationsQuery,
  useNotificationsQuery,
  type VersionNotificationsQueryState,
} from './notificationsQuery'

export const VERSION_NOTIFICATIONS_QUERY_KEY = 'version-notifications-query-key'

export type UseVersionNotificationsOptions = VersionNotificationsQuery & Partial<NotificationsQueryScope> & {
  enabled?: boolean
}

export type { VersionNotificationsQueryState }

export function useVersionNotifications(
  options: UseVersionNotificationsOptions,
): VersionNotificationsQueryState {
  const {
    packageKey,
    versionKey,
    documentId,
    severity,
    category,
    limit,
    page,
    enabled = true,
  } = options

  const query: VersionNotificationsQuery = {
    documentId,
    severity,
    category,
    limit,
    page,
  }
  const queryKey = [
    VERSION_NOTIFICATIONS_QUERY_KEY,
    packageKey,
    versionKey,
    ...toNotificationFiltersQueryKey(query),
  ]
  const queryFn = (signal?: AbortSignal): Promise<VersionNotificationsDto> =>
    getVersionNotifications(packageKey!, versionKey!, query, signal)

  return useNotificationsQuery({
    queryKey,
    queryFn,
    packageKey,
    versionKey,
    enabled,
  })
}

export function useInvalidateVersionNotifications(): InvalidateQuery<NotificationsQueryScope> {
  return useInvalidateNotificationsQuery(VERSION_NOTIFICATIONS_QUERY_KEY)
}

export async function getVersionNotifications(
  packageKey: PackageKey,
  versionKey: VersionKey,
  query?: VersionNotificationsQuery,
  signal?: AbortSignal,
): Promise<VersionNotificationsDto> {
  return await requestNotificationsJson(
    '/packages/:packageId/versions/:versionId/notifications',
    packageKey,
    versionKey,
    toVersionNotificationsSearchParams(query),
    signal,
  )
}
