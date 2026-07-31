import { useMemo } from 'react'

import {
  MCP_COLLECTION_INIT,
  type McpCollection,
  parseMcpCollectionParam,
} from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import { useSetSearchParams } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSetSearchParams'

export const MCP_COLLECTION_SEARCH_PARAM = 'mcpCollection'

type SetMcpCollection = (value: McpCollection | undefined) => void

export function useMcpCollectionSearchParam(): [McpCollection | undefined, SetMcpCollection] {
  const param = useSearchParam<string>(MCP_COLLECTION_SEARCH_PARAM)
  const setSearchParams = useSetSearchParams()

  return useMemo(() => {
    const mcpCollection = parseMcpCollectionParam(param ?? undefined)
    return [
      mcpCollection,
      value => setSearchParams({ [MCP_COLLECTION_SEARCH_PARAM]: value ?? MCP_COLLECTION_INIT }, { replace: true }),
    ]
  }, [param, setSearchParams])
}
