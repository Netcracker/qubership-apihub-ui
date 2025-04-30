import { useEffect, useState } from 'react'
import { SESSION_STORAGE_KEY_SYSTEM_CONFIGURATION } from '../../utils/constants'
import { useSystemConfiguration } from './useSystemConfiguration'
import { useUser } from './useUser'

export function useInitializeAuth(): void {
  const [, setAuth] = useState<boolean>(false)

  // first, load config
  const [systemConfiguration] = useSystemConfiguration()

  useEffect(() => {
    if (systemConfiguration) {
      sessionStorage.setItem(SESSION_STORAGE_KEY_SYSTEM_CONFIGURATION, JSON.stringify(systemConfiguration))
    } else {
      sessionStorage.removeItem(SESSION_STORAGE_KEY_SYSTEM_CONFIGURATION)
    }
  }, [systemConfiguration])

  // second, try to access protected API
  const user = useUser(!!systemConfiguration)

  // when protected API is fetched, set auth === true
  useEffect(() => {
    setAuth(!!user)
  }, [user])
}
