import { transformOas2Operation } from '@netcracker/qubership-apihub-http-spec/oas2'
import { transformOas3Operation } from '@netcracker/qubership-apihub-http-spec/oas3'
import { isEmpty, isObject } from 'lodash'
import { useMemo } from 'react'

export const useSpecUrls = (document: object | undefined): string[] => {
  return useMemo(() => {
    if (!isObject(document)) {
      return []
    }

    const servers = extractServersFromDocument(document)
    if (isEmpty(servers)) {
      return []
    }

    const urls = generateAllUrlCombinations(servers)
    return urls.filter(isValidUrl)
  }, [document])
}

export const useCustomUrls = (customServers: { url: string }[] | undefined): string[] => {
  return useMemo(() => {
    if (isEmpty(customServers)) {
      return []
    }

    const urls = customServers!.map(server => server.url)
    return urls.filter(isValidUrl)
  }, [customServers])
}

// Extract ServerObjects from OpenAPI document
function extractServersFromDocument(document: unknown): Array<{
  url: string
  variables?: Record<string, { enum?: (string | number | boolean)[]; default?: string | number | boolean }>
}> {
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

function generateAllUrlCombinations(
  servers: Array<{
    url: string
    variables?: Record<string, { enum?: (string | number | boolean)[]; default?: string | number | boolean }>
  }>,
): string[] {
  return servers.flatMap(server => {
    if (server?.variables) {
      // If server has enum variables, generate all combinations
      return generateUrlCombinationsFromEnumVariables(server.url, server.variables)
    }
    // Otherwise, just apply default values and return single URL
    return [applyDefaultValues(server.url, server.variables)]
  })
}

function generateUrlCombinationsFromEnumVariables(
  url: string,
  variables: Record<string, { enum?: (string | number | boolean)[]; default?: string | number | boolean }>,
): string[] {
  const enumVariables = Object.entries(variables || {})
    .filter(([, variable]) => Array.isArray(variable.enum))
    .map(([key, variable]) => ({ key: key, values: variable.enum! }))

  if (isEmpty(enumVariables)) {
    return [applyDefaultValues(url, variables)]
  }

  const combinations = enumVariables.reduce<Record<string, string>[]>((acc, { key, values }) => {
    return acc.flatMap(combination =>
      values.map((value: string | number | boolean) => ({ ...combination, [key]: String(value) })),
    )
  }, [{}])

  return combinations.map(combination => replacePlaceholders(url, combination))
}

function applyDefaultValues(
  url: string,
  variables?: Record<string, { enum?: (string | number | boolean)[]; default?: string | number | boolean }>,
): string {
  if (!variables) return url

  const defaultValues = Object.fromEntries(
    Object.entries(variables).map(([key, variable]) => [key, String(variable.default ?? '')]),
  )

  if (isEmpty(defaultValues)) {
    return url
  }

  return replacePlaceholders(url, defaultValues)
}

// Replace placeholders in a string with values from an object
function replacePlaceholders(template: string, values: Record<string, string>): string {
  let result = template
  for (const [key, value] of Object.entries(values)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), value)
  }
  return result
}

// Check if URL is absolute HTTP/HTTPS
export function isAbsoluteUrl(url: string | undefined): boolean {
  if (!url) return false
  const trimmedUrl = url.trim()
  return /^https?:\/\//i.test(trimmedUrl)
}

// Validate URL format
function isValidUrl(url: string): boolean {
  const trimmedUrl = url.trim()
  if (!trimmedUrl) return false

  // Block dangerous schemes
  const dangerousSchemes = /^(javascript|data|vbscript|file):/i
  if (dangerousSchemes.test(trimmedUrl)) return false

  // Allow relative URLs
  if (!trimmedUrl.includes('://') && !trimmedUrl.startsWith('//')) {
    return /^[^<>"|\\^`{}\s]*$/.test(trimmedUrl)
  }

  // Protocol-relative URLs
  if (trimmedUrl.startsWith('//')) {
    try {
      new URL(`https:${trimmedUrl}`)
      return true
    } catch {
      return false
    }
  }

  // Absolute URLs
  try {
    const parsedUrl = new URL(trimmedUrl)
    const allowedProtocols = ['http:', 'https:', 'ws:', 'wss:']
    return allowedProtocols.includes(parsedUrl.protocol)
  } catch {
    return false
  }
}
