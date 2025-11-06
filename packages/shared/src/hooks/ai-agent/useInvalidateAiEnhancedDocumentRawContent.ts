import { useQueryClient } from '@tanstack/react-query'

export const QUERY_KEY_AI_ENHANCED_DOCUMENT_RAW_CONTENT = 'ai-enhanced-document-raw-content'

export function useInvalidateAiEnhancedDocumentRawContent(): () => Promise<void> {
  const queryClient = useQueryClient()
  return () => queryClient.invalidateQueries({ 
    queryKey: [QUERY_KEY_AI_ENHANCED_DOCUMENT_RAW_CONTENT],
  })
}
