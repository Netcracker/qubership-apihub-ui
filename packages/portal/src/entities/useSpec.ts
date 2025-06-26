// import { portalRequestJson } from '@apihub/utils/requests'
import { useQuery } from '@tanstack/react-query'
import type { OpenAPIV3 } from 'openapi-types'


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSpec = (packageId: string) => {
  return useQuery<OpenAPIV3.Document>({
    queryKey: ['packageSpec', packageId],
    enabled: !!packageId,
  })
}
