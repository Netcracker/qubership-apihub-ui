import { isEmpty, isObject } from 'lodash'
import { useMemo } from 'react'
import {
  useProcessedCustomServers,
  useProcessedSpecServers,
  useTransformDocumentToNode,
} from '@netcracker/qubership-apihub-rest-playground/utils'
import type { PlaygroundServer } from '../useCustomServersPackageMap'

export const useSpecUrls = (document: object | undefined): string[] => {
  const documentString = useMemo(() => {
    return isObject(document) ? JSON.stringify(document) : ''
  }, [document])

  const httpOperation = useTransformDocumentToNode(documentString)
  const servers = useProcessedSpecServers(httpOperation?.servers, true)

  return useMemo(() => {
    if (isEmpty(servers)) {
      return []
    }

    console.log('httpOperation:', httpOperation)
    console.log('servers from useSpecUrls:', servers)

    return servers.map(server => server.url)
  }, [servers, httpOperation])
}

export const useCustomUrls = (customServers: PlaygroundServer[] | undefined): string[] => {
  const servers = useProcessedCustomServers(customServers)

  return useMemo(() => {
    if (isEmpty(customServers)) {
      return []
    }
    console.log('servers from useCustomUrls:', servers)
    return servers.map(server => server.url)
  }, [customServers, servers])
}
