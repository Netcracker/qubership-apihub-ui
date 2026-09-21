import { bypass, http, HttpResponse, passthrough } from 'msw'

import {
  API_TYPE_ASYNCAPI,
  API_TYPE_GRAPHQL,
  API_TYPE_REST,
} from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { CONTRACT_TYPE_DDL, CONTRACT_TYPE_MCP } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import type { DocumentsDto } from '@netcracker/qubership-apihub-ui-shared/entities/documents'
import { isSpecTypeForApiType } from '@netcracker/qubership-apihub-ui-shared/utils/specs'

export const documentHandlers = [
  http.get('*/api/v2/packages/:packageKey/versions/:versionKey/documents', async ({ request, params }) => {
    const versionKey = String(params.versionKey)
    if (!versionKey.includes('errors-api-types')) {
      return passthrough()
    }

    const originalResponse = await fetch(bypass(request))
    if (!originalResponse.ok) {
      return originalResponse
    }

    const affectedTypes = versionKey.includes('-after')
      ? [API_TYPE_REST, API_TYPE_ASYNCAPI, CONTRACT_TYPE_DDL, CONTRACT_TYPE_MCP]
      : [API_TYPE_GRAPHQL]

    const data: DocumentsDto = await originalResponse.json()
    return HttpResponse.json<DocumentsDto>({
      ...data,
      documents: data.documents.map(document => (
        affectedTypes.some(apiType => isSpecTypeForApiType(document.type, apiType))
          ? { ...document, hasErrors: true }
          : document
      )),
    })
  }),
]
