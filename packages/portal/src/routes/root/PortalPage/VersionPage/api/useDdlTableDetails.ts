import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { generatePath } from 'react-router-dom'

import type {
  DdlTableContractDetails,
  DdlTableContractDetailsDto,
} from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import type { IsInitialLoading, IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { API_V1, requestJson } from '@netcracker/qubership-apihub-ui-shared/utils/requests'

import { useVersionWithRevision } from '../../../useVersionWithRevision'

export const DDL_TABLE_DETAILS_QUERY_KEY = 'ddl-table-details-query-key'

type DdlTableDetailsQueryState = {
  data: DdlTableContractDetails | undefined
  isLoading: IsLoading
  isInitialLoading: IsInitialLoading
}

type UseDdlTableDetailsOptions = Readonly<{
  packageKey?: Key
  versionKey?: Key
  tableId?: Key
  enabled?: boolean
}>

export function useDdlTableDetails(options: UseDdlTableDetailsOptions): DdlTableDetailsQueryState {
  const {
    packageKey,
    versionKey,
    tableId,
    enabled = true,
  } = options

  const { fullVersion } = useVersionWithRevision(versionKey, packageKey)

  const { data, isLoading, isInitialLoading } = useQuery<DdlTableContractDetailsDto, Error, DdlTableContractDetails>({
    queryKey: [DDL_TABLE_DETAILS_QUERY_KEY, packageKey, fullVersion, tableId],
    queryFn: () => getDdlTableDetails(packageKey!, fullVersion!, tableId!),
    enabled: !!packageKey && !!fullVersion && !!tableId && enabled,
    keepPreviousData: true,
  })

  return useMemo(() => ({
    data,
    isLoading,
    isInitialLoading,
  }), [data, isInitialLoading, isLoading])
}

async function getDdlTableDetails(
  packageKey: Key,
  versionKey: Key,
  tableId: Key,
): Promise<DdlTableContractDetailsDto> {
  const packageId = encodeURIComponent(packageKey)
  const versionId = encodeURIComponent(versionKey)
  const encodedTableId = encodeURIComponent(tableId)

  const pathPattern = '/packages/:packageId/versions/:versionId/ddl/tables/:tableId'
  return requestJson<DdlTableContractDetailsDto>(
    generatePath(pathPattern, { packageId: packageId, versionId: versionId, tableId: encodedTableId }),
    { method: 'get' },
    { basePath: API_V1 },
  )
}
