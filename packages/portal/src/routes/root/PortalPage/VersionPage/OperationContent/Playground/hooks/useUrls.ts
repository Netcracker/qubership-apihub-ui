import { isEmpty, isObject } from 'lodash'
import { useMemo } from 'react'
import {
  useProcessedCustomServers,
  useProcessedSpecServers,
  useTransformDocumentToNode,
} from '@netcracker/qubership-apihub-rest-playground/hooks'
import type { PlaygroundServer } from './useCustomServersPackageMap'

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

    return servers.map(server => server.url)
  }, [servers])
}

export const useCustomUrls = (customServers: PlaygroundServer[] | undefined): string[] => {
  const servers = useProcessedCustomServers(customServers)

  return useMemo(() => {
    if (isEmpty(customServers)) {
      return []
    }
    return servers.map(server => server.url)
  }, [customServers, servers])
}
