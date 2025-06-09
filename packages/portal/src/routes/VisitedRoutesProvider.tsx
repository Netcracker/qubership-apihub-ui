// VisitedRoutesProvider.js
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const VisitedRoutesContext = createContext()
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const VisitedRoutesProvider = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    localStorage.removeItem('visitedRoutes')
  }, [])

  const [visitedRoutes, setVisitedRoutes] = useState([])

  useEffect(() => {
    const currentPath = location.pathname
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!visitedRoutes.includes(currentPath)) {
      const updated = [...visitedRoutes, currentPath]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setVisitedRoutes(updated)
      localStorage.setItem('visitedRoutes', JSON.stringify(updated))
    }
  }, [location.pathname])

  return (
    <VisitedRoutesContext.Provider value={{ visitedRoutes }}>
      {children}
    </VisitedRoutesContext.Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useVisitedRoutes = () => useContext(VisitedRoutesContext)
