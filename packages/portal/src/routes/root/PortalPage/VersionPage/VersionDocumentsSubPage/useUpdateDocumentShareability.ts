import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { generatePath } from 'react-router-dom'

import type { ShareabilityStatuses } from '@netcracker/qubership-apihub-api-processor'
import { portalRequestVoid } from '@netcracker/qubership-apihub-ui-portal/src/utils/requests'
import { DOCUMENT_QUERY_KEY } from '../useDocument'
import { DOCUMENTS_QUERY_KEY } from '../useDocuments'

type UseUpdateDocumentShareabilityResult = {
  updateShareability: (status: ShareabilityStatuses) => void
  isPending: boolean
}

export function useUpdateDocumentShareability(
  packageId: string,
  version: string,
  slug: string,
): UseUpdateDocumentShareabilityResult {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation<void, Error, ShareabilityStatuses>({
    mutationFn: (status) => patchShareability(packageId, version, slug, status),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [DOCUMENTS_QUERY_KEY] })
      void queryClient.invalidateQueries({ queryKey: [DOCUMENT_QUERY_KEY, packageId] })
    },
  })

  return {
    updateShareability: useCallback(
    (status: ShareabilityStatuses) => mutate(status),
    [mutate],
    ),
    isPending,
  }
}

async function patchShareability(
  packageId: string,
  version: string,
  slug: string,
  status: ShareabilityStatuses,
): Promise<void> {
  const packageKey = encodeURIComponent(packageId)
  const versionKey = encodeURIComponent(version)
  const docSlug = encodeURIComponent(slug)

  await portalRequestVoid(
    generatePath('/packages/:packageKey/versions/:versionKey/documents/:docSlug/shareability', {
      packageKey,
      versionKey,
      docSlug,
    }),
    {
      method: 'PATCH',
      body: JSON.stringify({ shareabilityStatus: status }),
    },
  )
}
