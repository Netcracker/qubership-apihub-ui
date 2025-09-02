import { useCallback, useEffect, useState } from 'react'
import { isAbsoluteUrl } from './useUrls'

export const useFirstSpecPath = (specUrls: string[] | undefined): string => {
  const [specPath, setSpecPath] = useState<string>('')

  const getFirstSpecPath = useCallback((): string => {
    if (!specUrls || specUrls.length === 0) return ''

    for (const url of specUrls) {
      if (!url) continue

      if (isAbsoluteUrl(url)) {
        try {
          const { pathname } = new URL(url)
          if (pathname && pathname !== '/') return pathname
          continue
        } catch {
          continue
        }
      }

      // TODO: move this filtration into the useSpecUrls (Allow relative URLs section) and maybe remove leading ./ or ../ segments
      // Relative URL candidates (already normalized: lowercased, no trailing slash)
      if (url.startsWith('?') || url.startsWith('#')) {
        continue
      }

      return url
    }

    return ''
  }, [specUrls])

  useEffect(() => {
    setSpecPath(getFirstSpecPath())
  }, [specUrls, getFirstSpecPath])

  return specPath
}
