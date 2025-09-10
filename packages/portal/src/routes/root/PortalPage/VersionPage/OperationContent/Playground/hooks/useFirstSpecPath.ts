import { useCallback, useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import { isAbsoluteHttpUrl } from '@netcracker/qubership-apihub-ui-shared/utils/urls'

export const useFirstSpecPath = (specUrls: string[] | undefined): string => {
  const [specPath, setSpecPath] = useState<string>('')

  const getFirstSpecPath = useCallback((): string => {
    if (isEmpty(specUrls)) return ''

    for (const url of specUrls!) {
      if (!url) continue

      if (isAbsoluteHttpUrl(url)) {
        try {
          const { pathname } = new URL(url)
          if (pathname && pathname !== '/') return pathname
          continue
        } catch {
          continue
        }
      }

      // Exclude Query-only and Fragment-only paths from relative URLs
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
