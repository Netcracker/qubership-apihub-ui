import type { ComparisonNotificationsQuery, VersionNotificationsQuery } from '../../entities/version-notifications'
import { optionalSearchParams, type SearchParam } from '../../utils/search-params'

export function toVersionNotificationsSearchParams(
  query?: VersionNotificationsQuery,
): URLSearchParams {
  return optionalSearchParams(toSharedNotificationSearchParamRecord(query))
}

export function toComparisonNotificationsSearchParams(
  query?: ComparisonNotificationsQuery,
): URLSearchParams {
  return optionalSearchParams({
    previousVersion: { value: query?.previousVersion },
    previousVersionPackageId: { value: query?.previousVersionPackageId },
    ...toSharedNotificationSearchParamRecord(query),
  })
}

export const toNotificationFiltersQueryKey = (
  query: VersionNotificationsQuery,
): readonly unknown[] => [
  query.documentId,
  toCanonicalNotificationCsvParam(query.severity),
  toCanonicalNotificationCsvParam(query.category),
  query.limit,
  query.page,
]

function toSharedNotificationSearchParamRecord(
  query?: VersionNotificationsQuery,
): Record<string, SearchParam> {
  return {
    documentId: { value: query?.documentId },
    severity: {
      value: query?.severity,
      toStringValue: stringifyArrayParam,
    },
    category: {
      value: query?.category,
      toStringValue: stringifyArrayParam,
    },
    limit: { value: query?.limit },
    page: { value: query?.page },
  }
}

function stringifyArrayParam(value: object | string | number): string {
  if (!Array.isArray(value)) {
    return String(value)
  }
  return toCanonicalNotificationCsvParam(value.map(String)) ?? ''
}

function toCanonicalNotificationCsvParam(
  values?: ReadonlyArray<string>,
): string | undefined {
  if (!values?.length) {
    return undefined
  }
  return [...values].sort().join(',')
}
