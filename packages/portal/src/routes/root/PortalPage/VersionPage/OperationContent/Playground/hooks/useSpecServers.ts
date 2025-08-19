import { transformOas2Operation } from '@netcracker/qubership-apihub-http-spec/oas2'
import { transformOas3Operation } from '@netcracker/qubership-apihub-http-spec/oas3'
import { isObject } from 'lodash'
import type { ServerObject } from 'openapi3-ts'
import * as React from 'react'

interface OperationInfo {
  path: string
  servers: ServerObject[]
}

export function useOperationInfo(document: object | undefined): OperationInfo | null {
  return React.useMemo(() => {
    const operationInfoStoplight = getOperationInfoStoplight(document)
    console.log('operationInfoInHook:', operationInfoStoplight)
    return operationInfoStoplight
  }, [document])
}

function getOperationInfoStoplight(document: unknown): { path: string; servers: Array<{ url: string }> } | null {
  if (!isObject(document)) return null

  // First, try to find any operation in the document
  const paths = 'paths' in document ? document.paths : null
  if (!isObject(paths)) return null

  // Get the first path and its first method
  const [path, pathItem] = Object.entries(paths).find(([, methods]) =>
    isObject(methods) &&
    Object.keys(methods).some(m =>
      ['get', 'post', 'put', 'delete', 'patch', 'options', 'head'].includes(m.toLowerCase()),
    ),
  ) || []

  if (!path || !pathItem) return null

  const method = Object.keys(pathItem).find(m =>
    ['get', 'post', 'put', 'delete', 'patch', 'options', 'head'].includes(m.toLowerCase()),
  )

  if (!method) return null

  // Use Stoplight's transform function to get the operation with resolved servers
  const transformFn = 'swagger' in document ? transformOas2Operation : transformOas3Operation
  const operation = transformFn({ document, path, method })

  return {
    path: path,
    servers: operation.servers || [],
  }
}
