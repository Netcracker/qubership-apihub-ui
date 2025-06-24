import type { Key } from '@apihub/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import type { ValidationDetailsDto } from '../types'
import { STUB_API_V1 } from './temp'

const QUERY_KEY_VALIDATION_DETAILS_BY_DOCUMENT = 'validation-details-by-document'

export function useValidationDetailsByDocument(
  packageId: Key,
  version: Key,
  documentId: Key,
): [ValidationDetailsDto | undefined, IsLoading, Error | null] {
  const packageKey = encodeURIComponent(packageId)
  const versionKey = encodeURIComponent(version)
  const documentKey = encodeURIComponent(documentId)

  const { data, isLoading, error } = useQuery<ValidationDetailsDto, Error, ValidationDetailsDto>({
    queryKey: [QUERY_KEY_VALIDATION_DETAILS_BY_DOCUMENT, packageKey, versionKey, documentKey],
    queryFn: () => getValidationDetailsByDocument(packageKey, versionKey, documentKey),
  })

  return [data, isLoading, error]
}

function getValidationDetailsByDocument(
  packageKey: Key,
  versionKey: Key,
  documentKey: Key,
): Promise<ValidationDetailsDto> {
  const pattern = '/packages/:packageId/versions/:version/validation/documents/:documentId/details'
  const endpoint = generatePath(pattern, {
    packageId: packageKey,
    version: versionKey,
    documentId: documentKey,
  })

  return requestJson<ValidationDetailsDto>(
    endpoint,
    { method: 'GET' },
    { basePath: STUB_API_V1 },
  )
}
