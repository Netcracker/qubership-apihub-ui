import { isEmpty } from 'lodash'
import { useMemo } from 'react'
import type { ServerObject } from 'openapi3-ts'

export const useProcessedSpecServers = (
  specServers: ServerObject[] | undefined,
  withRelativeUrls = false,
): ServerObject[] => {
  return useMemo(() => {
    console.log(`📋 Spec servers: Processing ${specServers!.length} servers`)

    if (isEmpty(specServers)) {
      return []
    }

    const validServers = filterValidServers(specServers!)
    const filteredServers = withRelativeUrls ? specServers! : specServers!.filter(server => isAbsoluteUrl(server.url))
    const expandedServers = expandSpecServersWithEnumVariables(filteredServers)
    const processedServers = processServers(expandedServers)

    console.log(`📋 Spec servers: Result ${validServers.length} servers`)
    return processedServers
  }, [specServers, withRelativeUrls])
}

export const useProcessedCustomServers = (customServers: ServerObject[] | undefined): ServerObject[] => {
  return useMemo(() => {
    console.log(`🔧 Custom servers: Processing ${customServers!.length} servers`)

    if (isEmpty(customServers)) {
      return []
    }

    const validServers = filterValidServers(customServers!)
    const processedServers = processServers(validServers)

    console.log(`🔧 Custom servers: Result ${processedServers.length} servers`)
    return processedServers
  }, [customServers])
}

export const useCombinedServers = (
  processedSpecServers: ServerObject[],
  processedCustomServers: ServerObject[],
): ServerObject[] => {
  return useMemo(() => {
    const combinedServers = processedCustomServers.length > 0
      ? [...processedSpecServers, ...processedCustomServers]
      : processedSpecServers

    const finalServers = [...combinedServers]

    console.log(`📋 Final servers: ${finalServers.length} total`)
    return finalServers
  }, [processedSpecServers, processedCustomServers])
}

// Helper functions

/**
 * Checks if a URL is an absolute HTTP/HTTPS URL.
 * Only allows secure web protocols suitable for API servers.
 *
 * @param url - The URL string to validate
 * @returns `true` if the URL is an absolute HTTP/HTTPS URL, `false` otherwise
 */
export function isAbsoluteUrl(url: string | undefined): boolean {
  if (!url) {
    return false
  }
  const trimmedUrl = url.trim()
  return /^https?:\/\//i.test(trimmedUrl)
}

/**
 * Expands servers that have enum variables into multiple server entries.
 * Each combination of enum values creates a separate server entry.
 *
 * @param specServers - Array of servers from OpenAPI specification
 * @returns Array of expanded servers with all enum variable combinations
 */
function expandSpecServersWithEnumVariables(specServers: ServerObject[]): ServerObject[] {
  return specServers?.flatMap(specServer => {
    if (specServer?.variables) {
      const formattedUrls = generateUrlCombinationsFromEnumVariables(specServer.url, specServer.variables)
      return formattedUrls.map(formattedUrl => ({
        ...specServer,
        url: formattedUrl,
      }))
    }
    return [specServer]
  }) ?? []
}

/**
 * Generates all possible URL combinations from enum variables
 * @param url - Template URL with variable placeholders (e.g., 'https://{env}.{region}.api.com')
 * @param variables - Object containing variable definitions with enum values
 * @returns Array of URLs with all possible variable combinations
 */
function generateUrlCombinationsFromEnumVariables(
  url: string,
  variables: { [key: string]: { enum?: (string | number | boolean)[]; default?: string | number | boolean } },
): string[] {
  const enumVariables = Object.entries(variables || {})
    .filter(([, variable]) => Array.isArray(variable.enum))
    .map(([key, variable]) => ({ key: key, values: variable.enum! }))

  if (isEmpty(enumVariables)) {
    return [url]
  }

  const combinations = enumVariables.reduce<{ [key: string]: string }[]>((acc, { key, values }) => {
    return acc.flatMap(combination =>
      values.map((value: string | number | boolean) => ({ ...combination, [key]: String(value) })),
    )
  }, [{}])

  return combinations.map(combination => replacePlaceholders(url, combination))
}

function processServers(servers: ServerObject[]): ServerObject[] {
  return servers.map((server) => {
    return {
      ...server,
      url: removeTrailingSlash(getServerUrlWithDefaultValues(server)).toLowerCase(),
    }
  })
}

/**
 * Replaces variable placeholders in server URL with their default values.
 *
 * @param server - Server object containing URL and variable definitions
 * @returns Normalized URL with default values substituted
 */
function getServerUrlWithDefaultValues(server: ServerObject): string {
  const defaultValues = Object.fromEntries(
    Object.entries(server.variables ?? {}).map(([key, variable]) => [key, String(variable.default ?? '')]),
  )

  if (isEmpty(defaultValues)) {
    return server.url
  }

  return replacePlaceholders(server.url, defaultValues)
}

function removeTrailingSlash(url: string): string {
  return url.replace(/\/$/, '')
}

/**
 * Filters servers to only include those with valid URLs.
 * This function helps protect against malicious URLs by filtering out null/empty URLs
 * and using isProperUrl which validates URL format and prevents dangerous schemes.
 *
 * @param servers - Array of servers to validate
 * @returns Array of servers with valid URLs only
 */
function filterValidServers(servers: ServerObject[]): ServerObject[] {
  return servers.filter(isValidServer)
}

/**
 * Type guard to check if a server has a valid URL.
 *
 * @param server - Server object to validate
 * @returns `true` if server has a non-null, properly formatted URL
 */
function isValidServer(server: ServerObject): server is ServerObject {
  return server.url !== null && isProperUrl(server.url)
}

/**
 * Validates URLs for OpenAPI server specifications.
 * Supports both absolute and relative URLs as per OpenAPI 3.0+ specification.
 *
 * **Allowed formats:**
 * - Absolute URLs: `https://api.example.com`, `http://localhost:3000`
 * - Protocol-relative URLs: `//api.example.com`
 * - Relative paths: `/api/v1`, `../api`, `api/endpoint`
 * - Root paths: `/`
 * - Query-only: `?param=value`
 * - Fragment-only: `#section`
 * - Templated URLs: `https://{server}.example.com/{basePath}`
 *
 * **Security checks:**
 * - Blocks `javascript:`, `data:`, `vbscript:` schemes (XSS prevention)
 * - Blocks `file:` scheme (local file access prevention)
 * - Trims whitespace and validates non-empty input
 * - Validates URL structure using native URL constructor for absolute URLs
 *
 * @param url - The URL string to validate
 * @returns `true` if the URL is valid for OpenAPI server usage, `false` otherwise
 */
function isProperUrl(url: string): boolean {
  // Trim whitespace and check for empty string
  const trimmedUrl = url.trim()
  if (!trimmedUrl) {
    return false
  }

  // Block dangerous schemes (XSS and file access prevention)
  const dangerousSchemes = /^(javascript|data|vbscript|file):/i
  if (dangerousSchemes.test(trimmedUrl)) {
    return false
  }

  // Fast path: relative URLs (most common in OpenAPI)
  // Covers: /path, ../path, path, ?query, #fragment
  if (!trimmedUrl.includes('://') && !trimmedUrl.startsWith('//')) {
    // Allow any relative path, query, or fragment
    // OpenAPI allows templated relative paths like {basePath}/endpoint
    return /^[^<>"|\\^`{}\s]*$/.test(trimmedUrl)
  }

  // Protocol-relative URLs: //example.com
  if (trimmedUrl.startsWith('//')) {
    try {
      // Validate by prepending https: and using URL constructor
      new URL(`https:${trimmedUrl}`)
      return true
    } catch {
      return false
    }
  }

  // Absolute URLs: validate using URL constructor
  try {
    const parsedUrl = new URL(trimmedUrl)

    // Only allow web-safe protocols for absolute URLs
    const allowedProtocols = ['http:', 'https:', 'ws:', 'wss:']
    return allowedProtocols.includes(parsedUrl.protocol)
  } catch {
    return false
  }
}

/**
 * Replaces placeholders in a string with values from an object
 * @param template - String with placeholders like "{key}"
 * @param values - Object with key-value pairs for replacement
 * @returns String with placeholders replaced by values
 */
function replacePlaceholders(template: string, values: { [key: string]: string }): string {
  let result = template
  for (const [key, value] of Object.entries(values)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), value)
  }
  return result
}
