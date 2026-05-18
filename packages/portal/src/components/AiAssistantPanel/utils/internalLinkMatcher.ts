const PORTAL_INTERNAL_PATH_PREFIX = '/portal/'

const GENERATED_FILES_PATH_PREFIX = '/api/v1/generated-files/'

/** Base URL for resolving relative markdown `href` during render (SSR-safe fallback). */
export function markdownLinkBaseOrigin(): string {
  return typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
}

export function resolveToUrl(href: string, origin: string): URL {
  return new URL(href, origin)
}

export function isGeneratedFileLink(href: string, origin: string): boolean {
  try {
    const url = resolveToUrl(href, origin)
    return url.pathname.startsWith(GENERATED_FILES_PATH_PREFIX)
  } catch {
    return false
  }
}

export function isInternalPortalLink(href: string, origin: string): boolean {
  if (isGeneratedFileLink(href, origin)) {
    return false
  }
  try {
    const url = resolveToUrl(href, origin)
    return url.origin === origin && url.pathname.startsWith(PORTAL_INTERNAL_PATH_PREFIX)
  } catch {
    return false
  }
}
