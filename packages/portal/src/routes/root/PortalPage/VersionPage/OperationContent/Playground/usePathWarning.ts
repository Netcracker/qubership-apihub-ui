import { useEffect, useState } from 'react'
import { debounce } from 'lodash'

export function usePathWarning(url: string | undefined, delay = 700): boolean {
    const [showWarning, setShowWarning] = useState(false)

    useEffect(() => {
        if (!url) {
            setShowWarning(false)
            return
        }

        const handler = debounce(() => {
            try {
                const { pathname } = new URL(url)
                const hasPath = pathname === '' || pathname === '/'
                setShowWarning(hasPath)
            } catch {
                setShowWarning(false)
            }
        }, delay)

        handler()

        return () => {
            handler.cancel()
        }
    }, [url, delay])

    return showWarning
}

