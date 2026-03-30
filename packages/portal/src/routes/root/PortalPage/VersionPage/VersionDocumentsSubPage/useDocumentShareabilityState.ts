import { useIsFetching } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDebounce } from 'react-use'

import type { ShareabilityStatus } from '@netcracker/qubership-apihub-api-processor'
import { DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION } from '@netcracker/qubership-apihub-ui-shared/entities/package-permissions'
import { DEFAULT_DEBOUNCE } from '@netcracker/qubership-apihub-ui-shared/utils/constants'
import { usePackage } from '../../../usePackage'
import { useVersionWithRevision } from '../../../useVersionWithRevision'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { DOCUMENT_QUERY_KEY } from '../useDocument'
import { DOCUMENTS_QUERY_KEY } from '../useDocuments'
import { useUpdateDocumentShareability } from './useUpdateDocumentShareability'

type UseDocumentShareabilityStateResult = {
  hasPermission: boolean
  packageKey: string | undefined
  fullVersion: string
  isShareabilityStatusLoading: boolean
  handleChange: (value: ShareabilityStatus) => void
}

export function useDocumentShareabilityState(slug: string): UseDocumentShareabilityStateResult {
  const [packageKey, packageVersion] = usePackageParamsWithRef()
  const [targetPackage] = usePackage({
    packageKey: packageKey,
    showParents: false,
    hideError: true,
  })

  const hasPermission = useMemo(
    () => !!targetPackage?.permissions?.includes(DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION),
    [targetPackage?.permissions],
  )
  const { fullVersion } = useVersionWithRevision(packageVersion, packageKey)

  const isDocumentsListRefetching = useIsFetching({
    queryKey: [DOCUMENTS_QUERY_KEY, packageKey, fullVersion],
    exact: false,
  }) > 0

  const isDocumentRefetching = useIsFetching({
    queryKey: [DOCUMENT_QUERY_KEY, packageKey, fullVersion, slug],
    exact: true,
  }) > 0

  const { updateShareability, isPending: isShareabilityUpdating } = useUpdateDocumentShareability(
    packageKey!,
    fullVersion,
    slug,
  )

  const isShareabilityStatusUpdating = isShareabilityUpdating ||
    isDocumentsListRefetching ||
    isDocumentRefetching

  const [isShareabilityStatusLoading, setShareabilityStatusLoading] = useState(false)

  useDebounce(
    () => {
      setShareabilityStatusLoading(isShareabilityStatusUpdating)
    },
    DEFAULT_DEBOUNCE,
    [isShareabilityStatusUpdating],
  )

  useEffect(() => {
    if (!isShareabilityStatusUpdating) {
      setShareabilityStatusLoading(false)
    }
  }, [isShareabilityStatusUpdating])

  const handleChange = useCallback(
    (value: ShareabilityStatus) => updateShareability(value),
    [updateShareability],
  )

  return {
    hasPermission,
    packageKey,
    fullVersion,
    isShareabilityStatusLoading,
    handleChange,
  }
}
