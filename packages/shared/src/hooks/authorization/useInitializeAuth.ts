import { useEffect, useState } from 'react'
import { useSystemConfiguration } from './useSystemConfiguration'
import { useSystemInfo } from '../../features/system-info'
import { useLocation } from 'react-use'

type IsAuthenticated = boolean
type IsLoginPage = boolean

export function useInitializeAuth(): [IsAuthenticated, IsLoginPage] {
  const [auth, setAuth] = useState<boolean>(false)

  // first, load config
  const [systemConfiguration] = useSystemConfiguration()
  // second, try to access protected API
  const systemInfo = useSystemInfo(!!systemConfiguration)

  // when protected API is fetched, set auth === true
  useEffect(() => {
    setAuth(!!systemInfo)
  }, [systemInfo])

  const location = useLocation()
  const isLoginPage = location.pathname?.startsWith('/login') ?? false // This is done for new routing approach, refactor it

  return [auth, isLoginPage]
}
