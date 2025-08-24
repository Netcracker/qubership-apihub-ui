import { transformOas2Operation } from '@netcracker/qubership-apihub-http-spec/oas2'
import { transformOas3Operation } from '@netcracker/qubership-apihub-http-spec/oas3'
import { isObject } from 'lodash'
import type { ServerObject } from 'openapi3-ts'
import { useMemo } from 'react'

export function useSpecServers(document: object | undefined): ServerObject[] {
  return useMemo(() => {
    return getSpecServers(document)
  }, [document])
}

function getSpecServers(document: unknown): ServerObject[] {
  if (!isObject(document)) return []

  // First, try to find any operation in the document
  const paths = 'paths' in document ? document.paths : null
  if (!isObject(paths)) return []

  // Get the first path and its first method
  const [path, pathItem] = Object.entries(paths).find(([, methods]) =>
    isObject(methods) &&
    Object.keys(methods).some(m =>
      ['get', 'post', 'put', 'delete', 'patch', 'options', 'head'].includes(m.toLowerCase()),
    ),
  ) || []

  if (!path || !pathItem) return []

  const method = Object.keys(pathItem).find(m =>
    ['get', 'post', 'put', 'delete', 'patch', 'options', 'head'].includes(m.toLowerCase()),
  )

  if (!method) return []

  // Use Stoplight's transform function to get the operation with resolved servers
  const transformFn = 'swagger' in document ? transformOas2Operation : transformOas3Operation
  const operation = transformFn({ document, path, method })

  return operation.servers || []
}
