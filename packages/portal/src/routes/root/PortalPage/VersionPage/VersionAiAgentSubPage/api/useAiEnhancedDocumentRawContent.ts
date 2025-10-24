import type { FileContent } from '@apihub/entities/project-files'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { toFormattedJsonString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'
import { useQuery } from '@tanstack/react-query'

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

// eslint-disable-next-line
function getAiEnhancedDocumentRawContent(docPackageKey: string, docVersionKey: string, documentSlug: string): Promise<FileContent> {
  return new Promise<FileContent>((resolve) => {
    setTimeout(() => {
      resolve(`openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /test:
    get:
      summary: Test endpoint
      responses:
        '200':
          content:
            'application/json':
              schema:
                type: object
                properties:
                  message:
                    type: string
`)
    }, 1000)
  })
}
