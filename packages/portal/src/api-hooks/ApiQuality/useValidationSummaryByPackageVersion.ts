import type { ValidationSummary, ValidationSummaryDto } from '@apihub/entities/api-quality/package-version-validation-summary'
import type { Key } from '@apihub/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import { API_LINTER_API_V1 } from './constants'

const QUERY_KEY_VALIDATION_SUMMARY_FOR_PACKAGE_VERSION = 'validation-summary-for-package-version'

export type RefetchValidationSummary = () => void

export type ValidationSummaryQueryState = {
  data: ValidationSummary | undefined
  isLoading: IsLoading
  error: Error | null
  refetch: RefetchValidationSummary
}

export function useValidationSummaryByPackageVersion(
  linterEnabled: boolean,
  packageId: Key,
  version: Key,
): ValidationSummaryQueryState {
  const packageKey = encodeURIComponent(packageId)
  const versionKey = encodeURIComponent(version)

  const { data, isLoading, error, refetch } = useQuery<ValidationSummaryDto, Error, ValidationSummary>({
    queryKey: [QUERY_KEY_VALIDATION_SUMMARY_FOR_PACKAGE_VERSION, packageKey, versionKey],
    queryFn: () => getValidationSummaryByPackageVersion(packageKey, versionKey),
    enabled: linterEnabled,
    retry: (failureCount) => {
      return failureCount < 5
    },
    retryDelay: 1000,
  })

  return { data, isLoading, error, refetch }
}

function getValidationSummaryByPackageVersion(
  packageKey: Key,
  versionKey: Key,
): Promise<ValidationSummaryDto> {
  const pattern = '/packages/:packageId/versions/:version/validation/summary'
  const endpoint = generatePath(pattern, {
    packageId: packageKey,
    version: versionKey,
  })

  return requestJson<ValidationSummaryDto>(
    endpoint,
    { method: 'GET' },
    {
      basePath: API_LINTER_API_V1,
      customErrorHandler: (response) => {
        throw new Error(`Request failed with status ${response.status}`)
      },
    },
  )
}
