// import { API_LINTER_API_V1 } from '@apihub/api-hooks/ApiQuality/constants'
import type { FileContent } from '@apihub/entities/project-files'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { requestText, STUB_API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { toFormattedJsonString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'
import { useQuery } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'

const QUERY_KEY_AI_ENHANCED_DOCUMENT_RAW_CONTENT = 'ai-enhanced-document-raw-content'

export function useAiEnhancedDocumentRawContent(
  docPackageKey: string | undefined,
  docVersionKey: string | undefined,
  documentSlug: string | undefined,
  enabled: boolean = false,
  transform?: (value: string) => string,
): [FileContent | undefined, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<FileContent, Error, FileContent>({
    queryKey: [QUERY_KEY_AI_ENHANCED_DOCUMENT_RAW_CONTENT, docPackageKey, docVersionKey, documentSlug],
    queryFn: () => (
      docPackageKey && docVersionKey && documentSlug
        ? getAiEnhancedDocumentRawContent(docPackageKey, docVersionKey, documentSlug)
        : Promise.resolve('')
    ),
    enabled: enabled && !!docPackageKey && !!docVersionKey && !!documentSlug,
    select: transform ?? toFormattedJsonString,
  })

  return [data, isLoading, error]
}

function getAiEnhancedDocumentRawContent(docPackageKey: string, docVersionKey: string, docSlug: string): Promise<FileContent> {
  const endpointPattern = '/packages/:packageId/versions/:version/enhancedFiles/:slug/raw'
  const endpoint = generatePath(endpointPattern, {
    packageId: docPackageKey,
    version: docVersionKey,
    slug: docSlug,
  })
  return requestText(
    endpoint,
    { method: 'GET' },
    { basePath: STUB_API_V1 },
  )
}
