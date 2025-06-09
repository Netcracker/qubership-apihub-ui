import type { ReactNode } from 'react'
import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  FAVORITE_PAGE_REFERER,
  SHARED_PAGE_REFERER,
  WORKSPACES_PAGE_REFERER,
} from '@apihub/entities/referer-pages-names'
import { PACKAGES_QUERY_KEY, useRefetchPackages } from '@apihub/routes/root/usePackages'
import type { InvalidateQuery } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'

interface VisitedRoutesContextType {
  visitedRoutes: string[]
}

export const ROUTE_PAGE_REFERER = {
  [SHARED_PAGE_REFERER]: '/portal/shared',
  [WORKSPACES_PAGE_REFERER]: '/portal/workspaces',
  [FAVORITE_PAGE_REFERER]: '/portal/favorite',
}
const VisitedRoutesContext = createContext<VisitedRoutesContextType | undefined>(undefined)

interface VisitedRoutesProviderProps {
  children: ReactNode
}

export const VisitedRoutesProvider: React.FC<VisitedRoutesProviderProps> = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    localStorage.removeItem('visitedRoutes')
  }, [])

  const [visitedRoutes, setVisitedRoutes] = useState<string[]>([])

  const allowedPaths = Object.values(ROUTE_PAGE_REFERER)

  useEffect(() => {
    const currentPath = location.pathname

    if (allowedPaths.includes(currentPath) && !visitedRoutes.includes(currentPath)) {
      const updated = [...visitedRoutes, currentPath]
      setVisitedRoutes(updated)
      localStorage.setItem('visitedRoutes', JSON.stringify(updated))
    }
  }, [location.pathname, visitedRoutes])

  return (
    <VisitedRoutesContext.Provider value={{ visitedRoutes }}>
      {children}
    </VisitedRoutesContext.Provider>
  )
}

export function calculateRefererReload(): InvalidateQuery<void>[] {
  const visitedRoutes: string[] = JSON.parse(localStorage.getItem('visitedRoutes') || '[]')

  return visitedRoutes
    .map((path) => {
      const entry = Object.entries(ROUTE_PAGE_REFERER).find(([_, value]) => value === path)
      const key = entry?.[0] as string | undefined
      return key ? useRefetchPackages({ queryKey: [PACKAGES_QUERY_KEY, key] }) : null
    })
    .filter((result): result is InvalidateQuery<void> => result !== null)
}
