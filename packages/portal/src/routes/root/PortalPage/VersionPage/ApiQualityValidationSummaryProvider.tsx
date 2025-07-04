import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import type { ValidationSummary } from './VersionApiQualitySubPage/types'

export const ApiQualityValidationSummaryContext = createContext<ValidationSummary | undefined>(undefined)

type ApiQualityValidationSummaryProviderProps = PropsWithChildren & {
  value: ValidationSummary | undefined
}

export function useApiQualityValidationSummary(): ValidationSummary | undefined {
  return useContext(ApiQualityValidationSummaryContext)
}

export const ApiQualityValidationSummaryProvider: FC<ApiQualityValidationSummaryProviderProps> = ({ children, value }) => {
  return (
    <ApiQualityValidationSummaryContext.Provider value={value}>
      {children}
    </ApiQualityValidationSummaryContext.Provider>
  )
}
