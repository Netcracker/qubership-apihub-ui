import type { Key } from '@apihub/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import type { ValidatedDocumentDto } from '../types'
import { STUB_API_V1 } from './temp'

const QUERY_KEY_LIST_VALIDATED_DOCUMENTS_BY_PACKAGE_VERSION = 'list-validated-documents-by-package-version'

export function useListValidatedDocumentsByPackageVersion(
  packageId: Key,
  version: Key,
): [ValidatedDocumentDto[], IsLoading, Error | null] {
  const packageKey = encodeURIComponent(packageId)
  const versionKey = encodeURIComponent(version)

  const { data = [], isLoading, error } = useQuery<ValidatedDocumentDto[], Error, ValidatedDocumentDto[]>({
    queryKey: [QUERY_KEY_LIST_VALIDATED_DOCUMENTS_BY_PACKAGE_VERSION, packageKey, versionKey],
    queryFn: () => getListValidatedDocumentsByPackageVersion(packageKey, versionKey),
  })

  return [data, isLoading, error]
}

function getListValidatedDocumentsByPackageVersion(
  packageKey: Key,
  versionKey: Key,
): Promise<ValidatedDocumentDto[]> {
  const pattern = '/packages/:packageId/versions/:version/validation/documents'
  const endpoint = generatePath(pattern, {
    packageId: packageKey,
    version: versionKey,
  })

  return requestJson<ValidatedDocumentDto[]>(
    endpoint,
    { method: 'GET' },
    { basePath: STUB_API_V1 },
  )
}
