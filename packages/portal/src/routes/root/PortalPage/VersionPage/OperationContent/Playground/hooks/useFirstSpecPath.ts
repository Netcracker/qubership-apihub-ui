import { useCallback, useEffect, useState } from 'react'
import type { ServerObject } from 'openapi3-ts'
import { isAbsoluteUrl } from './useServerProcessing'

export const useFirstSpecPath = (allSpecServers: ServerObject[] | undefined): string => {
  const [specPath, setSpecPath] = useState<string>('')

  const getFirstSpecPath = useCallback((): string => {
    if (!allSpecServers || allSpecServers.length === 0) return ''

    for (const s of allSpecServers) {
      const url = s?.url
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

      // TODO: move this filtration into the useProcessedSpecServers and maybe remove leading ./ or ../ segments
      // relative URL candidates (already normalized by processor: lowercased, no trailing slash)
      if (url.startsWith('?') || url.startsWith('#')) {
        continue
      }

      return url
    }

    return ''
  }, [allSpecServers])

  useEffect(() => {
    setSpecPath(getFirstSpecPath())
  }, [allSpecServers, getFirstSpecPath])

  return specPath
}
