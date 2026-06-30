import { useContext } from 'react'

import { type VersionTabsApiTypesState } from '@apihub/utils/versionTabApiTypesState'
import { VersionTabApiTypesContext } from './VersionTabApiTypesProvider'

export function useVersionTabApiTypes(): VersionTabsApiTypesState {
  const versionTabApiTypesState = useContext(VersionTabApiTypesContext)
  if (versionTabApiTypesState === undefined) {
    throw new Error('useVersionTabApiTypes must be used within VersionTabApiTypesProvider')
  }
  return versionTabApiTypesState
}
