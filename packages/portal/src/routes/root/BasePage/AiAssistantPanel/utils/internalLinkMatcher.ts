/** Same-origin portal routes under this prefix use client-side navigation in markdown. */
export const PORTAL_INTERNAL_PATH_PREFIX = '/portal/'

const GENERATED_FILES_PATH_PREFIX = '/api/v1/generated-files/'

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

export function isOperationPath(pathname: string): boolean {
  return pathname.includes('/operations/')
}

export function isPackageVersionRootPath(pathname: string): boolean {
  return /^\/portal\/packages\/[^/]+\/[^/]+$/.test(pathname)
}
