import type { Key } from '@apihub/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import type { ValidationSummary, ValidationSummaryDto } from '@apihub/entities/api-quality/package-version-validation-summary'
import { STUB_API_V1 } from './temp'

const QUERY_KEY_VALIDATION_SUMMARY_FOR_PACKAGE_VERSION = 'validation-summary-for-package-version'

export function useValidationSummaryByPackageVersion(
  packageId: Key,
  version: Key,
): [ValidationSummary | undefined, IsLoading, Error | null] {
  const packageKey = encodeURIComponent(packageId)
  const versionKey = encodeURIComponent(version)

  const { data, isLoading, error } = useQuery<ValidationSummaryDto, Error, ValidationSummary>({
    queryKey: [QUERY_KEY_VALIDATION_SUMMARY_FOR_PACKAGE_VERSION, packageKey, versionKey],
    queryFn: () => getValidationSummaryByPackageVersion(packageKey, versionKey),
  })

  return [data, isLoading, error]
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
    { basePath: STUB_API_V1 },
  )
}
