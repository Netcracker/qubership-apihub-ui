import type { Key } from '@apihub/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import type { ValidationDetails, ValidationDetailsDto } from '@apihub/entities/api-quality/document-validation-details'
import { API_LINTER_API_V1 } from './constants'
import { toValidatedDocument } from './transformers'

const QUERY_KEY_VALIDATION_DETAILS_BY_DOCUMENT = 'validation-details-by-document'

export function useValidationDetailsByDocument(
  packageId: Key,
  version: Key,
  documentId: Key,
): [ValidationDetails | undefined, IsLoading, Error | null] {
  const packageKey = encodeURIComponent(packageId)
  const versionKey = encodeURIComponent(version)
  const documentKey = encodeURIComponent(documentId)

  const { data, isLoading, error } = useQuery<ValidationDetailsDto, Error, ValidationDetails>({
    queryKey: [QUERY_KEY_VALIDATION_DETAILS_BY_DOCUMENT, packageKey, versionKey, documentKey],
    queryFn: () => getValidationDetailsByDocument(packageKey, versionKey, documentKey),
    select: toValidationDetails,
    enabled: !!packageId && !!version && !!documentId,
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
    { basePath: API_LINTER_API_V1 },
  )
}

function toValidationDetails(dto: ValidationDetailsDto): ValidationDetails {
  return {
    ruleset: dto.ruleset,
    issues: dto.issues,
    document: toValidatedDocument(dto.document),
  }
}
