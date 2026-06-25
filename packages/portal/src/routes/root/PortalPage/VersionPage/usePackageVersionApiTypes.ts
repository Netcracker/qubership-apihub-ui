import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import {
  CONTRACT_TYPE_DDL,
  CONTRACT_TYPE_MCP,
  type ContractType,
} from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import { hasDdlContracts } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import { hasMcpContracts } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'

import { usePackageVersionContent } from '../../usePackageVersionContent'

export function usePackageVersionApiTypes(
  packageKey: string,
  versionKey: string,
): {
  apiTypes: Array<ApiType | ContractType>
  isLoading: IsLoading
} {
  const { versionContent, isLoading } = usePackageVersionContent({
    packageKey: packageKey,
    versionKey: versionKey,
    includeSummary: true,
  })

  const apiTypes: Array<ApiType | ContractType> = []

  if (versionContent?.operationTypes) {
    apiTypes.push(...Object.keys(versionContent.operationTypes) as ApiType[])
  }
  if (hasMcpContracts(versionContent?.contractsSummary?.mcp)) {
    apiTypes.push(CONTRACT_TYPE_MCP)
  }
  if (hasDdlContracts(versionContent?.contractsSummary?.ddl)) {
    apiTypes.push(CONTRACT_TYPE_DDL)
  }

  return {
    apiTypes: apiTypes,
    isLoading: isLoading,
  }
}
