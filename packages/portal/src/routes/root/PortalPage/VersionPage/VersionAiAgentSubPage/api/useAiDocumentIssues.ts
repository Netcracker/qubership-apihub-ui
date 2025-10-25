import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'
import type { AiIssue, AiIssueDto } from '../types/issues'

const QUERY_KEY_AI_DOCUMENT_ISSUES = 'ai-document-issues'

const EMPTY_AI_ISSUES: AiIssue[] = []

export function useAiDocumentIssues(
  docPackageKey: string | undefined,
  docVersionKey: string | undefined,
  documentSlug: string | undefined,
  enabled: boolean = false,
): [AiIssue[], IsLoading, Error | null] {
  const { data, isFetching, error } = useQuery<AiIssueDto[], Error, AiIssue[]>({
    queryKey: [QUERY_KEY_AI_DOCUMENT_ISSUES, docPackageKey, docVersionKey, documentSlug],
    queryFn: () => (
      docPackageKey && docVersionKey && documentSlug
        ? getAiDocumentIssues(docPackageKey, docVersionKey, documentSlug)
        : Promise.resolve([])
    ),
    enabled: enabled && !!docPackageKey && !!docVersionKey && !!documentSlug,
  })
  return [data ?? EMPTY_AI_ISSUES, isFetching, error]
}

// eslint-disable-next-line
function getAiDocumentIssues(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<AiIssueDto[]> {
  // return new Promise<AiIssueDto[]>((resolve) => {
  //   setTimeout(() => {
  //     resolve([
  //       {
  //         severity: AiIssueSeverities.ERROR,
  //         text: 'Non-standard media type \'plain/text\' used (should be \'text/plain\') in responses (e.g., GET /api/v2/packages/{packageId}/versions/{version}/files/{slug}/raw and GET /api/v2/sharedFiles/{sharedFileId}).',
  //         category: 'structureImprovements',
  //       },
  //       {
  //         severity: AiIssueSeverities.WARNING,
  //         text: 'Duplicate operationId values: \'getPackagesIdVersionsIdApiTypeOperationsExport\' used for both GET /api/v2/.../export/operations and GET /api/v2/.../export/operations/deprecated.',
  //         category: 'structureImprovements',
  //       },
  //       {
  //         severity: AiIssueSeverities.WARNING,
  //         text: 'Duplicate operationId values: \'getAgentsIdNamespacesIdServicesProxy\' used for GET /agents/{agentId}/namespaces/{name}/services/{serviceId}/proxy/{path} and GET /playground/proxy.',
  //         category: 'structureImprovements',
  //       },
  //       {
  //         severity: AiIssueSeverities.WARNING,
  //         text: 'Inadequate/mistaken description text: /api/v2/packages/{packageId}/versions/{version}/{apiType}/changes has description \'qwerty\' which is not meaningful.',
  //         category: 'missingDescriptions',
  //       },
  //       {
  //         severity: AiIssueSeverities.WARNING,
  //         text: 'Example/type mismatches: components.parameters.builderId has format \'UUID\' but example is \'QS.CloudQSS.CPQ.Q-TMF\' (not a UUID).',
  //         category: 'structureImprovements',
  //       },
  //       {
  //         severity: AiIssueSeverities.INFO,
  //         text: 'Many responses include empty \'examples\': {} or no concrete examples where they would be helpful (e.g., many 401/403/500 responses).',
  //         category: 'missingExamples',
  //       },
  //       {
  //         severity: AiIssueSeverities.INFO,
  //         text: 'Cookie parameter examples include the full \'name=value\' instead of just the cookie value (e.g., \'apihub-refresh-token\' cookie examples).',
  //         category: 'missingExamples',
  //       },
  //     ])
  //   }, 1000)
  // })
  const endpointPattern = '/packages/:packageId/versions/:version/files/:slug/problems'
  const endpoint = generatePath(endpointPattern, {
    packageId: docPackageKey,
    version: docVersionKey,
    slug: documentSlug,
  })
  return requestJson<AiIssueDto[]>(
    endpoint,
    { method: 'GET' },
    { basePath: API_LINTER_API_V1 },
  )
}
