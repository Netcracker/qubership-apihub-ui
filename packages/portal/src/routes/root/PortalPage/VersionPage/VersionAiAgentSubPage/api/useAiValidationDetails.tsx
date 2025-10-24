import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery } from '@tanstack/react-query'
import type { AiValidationDetails, AiValidationDetailsDto } from '../types/document-validation-details'
import { AiIssueSeverities } from '../types/issue-severities'

const QUERY_KEY_AI_VALIDATION_DETAILS = 'ai-validation-details'

export function useAiValidationDetails(
  docPackageKey: string,
  docVersionKey: string,
  documentSlug: string,
): [AiValidationDetails | undefined, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<AiValidationDetailsDto, Error, AiValidationDetails>({
    queryKey: [QUERY_KEY_AI_VALIDATION_DETAILS, docPackageKey, docVersionKey, documentSlug],
    queryFn: () => getAiValidationDetails(docPackageKey, docVersionKey, documentSlug),
  })

  return [data, isLoading, error]
}

// eslint-disable-next-line
function getAiValidationDetails(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<AiValidationDetailsDto> {
  return new Promise<AiValidationDetailsDto>((resolve) => {
    setTimeout(() => {
      resolve({
        document: {
          fileId: documentSlug.toUpperCase(),
          slug: documentSlug,
          title: 'document-title',
          type: 'openapi',
          format: 'json',
          operations: [],
        },
        issues: [
          {
            severity: AiIssueSeverities.ERROR,
            message: 'Non-standard media type \'plain/text\' used (should be \'text/plain\') in responses (e.g., GET /api/v2/packages/{packageId}/versions/{version}/files/{slug}/raw and GET /api/v2/sharedFiles/{sharedFileId}).',
          },
          {
            severity: AiIssueSeverities.WARNING,
            message: 'Duplicate operationId values: \'getPackagesIdVersionsIdApiTypeOperationsExport\' used for both GET /api/v2/.../export/operations and GET /api/v2/.../export/operations/deprecated.',
          },
          {
            severity: AiIssueSeverities.WARNING,
            message: 'Duplicate operationId values: \'getAgentsIdNamespacesIdServicesProxy\' used for GET /agents/{agentId}/namespaces/{name}/services/{serviceId}/proxy/{path} and GET /playground/proxy.',
          },
          {
            severity: AiIssueSeverities.WARNING,
            message: 'Inadequate/mistaken description text: /api/v2/packages/{packageId}/versions/{version}/{apiType}/changes has description \'qwerty\' which is not meaningful.',
          },
          {
            severity: AiIssueSeverities.WARNING,
            message: 'Example/type mismatches: components.parameters.builderId has format \'UUID\' but example is \'QS.CloudQSS.CPQ.Q-TMF\' (not a UUID).',
          },
          {
            severity: AiIssueSeverities.INFO,
            message: 'Many responses include empty \'examples\': {} or no concrete examples where they would be helpful (e.g., many 401/403/500 responses).',
          },
          {
            severity: AiIssueSeverities.INFO,
            message: 'Cookie parameter examples include the full \'name=value\' instead of just the cookie value (e.g., \'apihub-refresh-token\' cookie examples).',
          },
        ],
      })
    }, 1000)
  })
}
