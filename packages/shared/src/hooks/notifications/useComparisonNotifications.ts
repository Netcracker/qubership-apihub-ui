import type { PackageKey, VersionKey } from '../../entities/keys'
import { type ComparisonNotificationsQuery, type VersionNotificationsDto } from '../../entities/version-notifications'
import type { InvalidateQuery } from '../../utils/aliases'
import { toComparisonNotificationsSearchParams, toNotificationFiltersQueryKey } from './notificationQueryParams'
import {
  type NotificationsQueryScope,
  requestNotificationsJson,
  useInvalidateNotificationsQuery,
  useNotificationsQuery,
  type VersionNotificationsQueryState,
} from './notificationsQuery'

export const COMPARISON_NOTIFICATIONS_QUERY_KEY = 'comparison-notifications-query-key'

export type UseComparisonNotificationsOptions = ComparisonNotificationsQuery & Partial<NotificationsQueryScope> & {
  enabled?: boolean
}

export type ComparisonNotificationsQueryState = VersionNotificationsQueryState

export function useComparisonNotifications(
  options: UseComparisonNotificationsOptions,
): ComparisonNotificationsQueryState {
  const {
    packageKey,
    versionKey,
    previousVersion,
    previousVersionPackageId,
    documentId,
    severity,
    category,
    limit,
    page,
    enabled = true,
  } = options

  const query: ComparisonNotificationsQuery = {
    previousVersion,
    previousVersionPackageId,
    documentId,
    severity,
    category,
    limit,
    page,
  }
  const queryKey = [
    COMPARISON_NOTIFICATIONS_QUERY_KEY,
    packageKey,
    versionKey,
    previousVersion,
    previousVersionPackageId,
    ...toNotificationFiltersQueryKey(query),
  ]
  const queryFn = (signal?: AbortSignal): Promise<VersionNotificationsDto> =>
    getComparisonNotifications(packageKey!, versionKey!, query, signal)

  return useNotificationsQuery({
    queryKey,
    queryFn,
    packageKey,
    versionKey,
    enabled,
  })
}

export function useInvalidateComparisonNotifications(): InvalidateQuery<NotificationsQueryScope> {
  return useInvalidateNotificationsQuery(COMPARISON_NOTIFICATIONS_QUERY_KEY)
}

export async function getComparisonNotifications(
  packageKey: PackageKey,
  versionKey: VersionKey,
  query?: ComparisonNotificationsQuery,
  signal?: AbortSignal,
): Promise<VersionNotificationsDto> {
  return await requestNotificationsJson(
    '/packages/:packageId/versions/:versionId/changes/notifications',
    packageKey,
    versionKey,
    toComparisonNotificationsSearchParams(query),
    signal,
  )
}
