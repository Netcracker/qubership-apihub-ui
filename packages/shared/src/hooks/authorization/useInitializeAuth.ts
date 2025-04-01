import { useEffect, useState } from 'react'
import { useLocation } from 'react-use'
import { useSystemConfiguration } from './useSystemConfiguration'
import { useUser } from './useUser'
import { SESSION_STORAGE_KEY_SYSTEM_CONFIGURATION } from '../../utils/constants'

type IsAuthenticated = boolean
type IsLoginPage = boolean

export function useInitializeAuth(): [IsAuthenticated, IsLoginPage] {
  const [auth, setAuth] = useState<boolean>(false)

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

  const location = useLocation()
  const isLoginPage = location.pathname?.startsWith('/login') ?? false // This is done for new routing approach, refactor it

  return [auth, isLoginPage]
}
