import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getDefaultRouteApiType } from '@apihub/utils/operation-types'
import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import { type ContractType, toRouteApiType } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import { DEFAULT_API_TYPE } from '@netcracker/qubership-apihub-ui-shared/entities/operations'
import { isEmpty } from '@netcracker/qubership-apihub-ui-shared/utils/arrays'

import { usePackageVersionApiTypes, type UsePackageVersionApiTypesOptions } from './usePackageVersionApiTypes'
import { useSetPathParam } from './useSetPathParam'

export function useEnsureValidRouteApiType(options?: UsePackageVersionApiTypesOptions): void {
  const { packageId, versionId, apiType = DEFAULT_API_TYPE } = useParams<{
    packageId: string
    versionId: string
    apiType?: ApiType | ContractType
  }>()
  const routeApiType = toRouteApiType(apiType)
  const { apiTypes, isLoading } = usePackageVersionApiTypes(packageId!, versionId!, options)
  const setPathParam = useSetPathParam()

  useEffect(() => {
    if (isLoading || isEmpty(apiTypes)) {
      return
    }
    if (!apiTypes.includes(routeApiType)) {
      setPathParam(getDefaultRouteApiType(apiTypes))
    }
  }, [apiTypes, isLoading, routeApiType, setPathParam])
}
