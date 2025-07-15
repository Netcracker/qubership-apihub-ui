import type { Key } from '@apihub/entities/keys'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { API_V1, requestVoid } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router-dom'

type ManualRunApiQualityValidation = (options: ManualRunApiQualityValidationOptions) => void

type ManualRunApiQualityValidationOptions = {
  packageId: Key
  versionId: Key
}

export function useManualRunApiQualityValidation(): [ManualRunApiQualityValidation, IsLoading] {
  const { mutate, isLoading } = useMutation<void, Error, ManualRunApiQualityValidationOptions>({
    mutationFn: ({ packageId, versionId }) => manualRunApiQualityValidation(packageId, versionId),
  })

  return [mutate, isLoading]
}

function manualRunApiQualityValidation(packageId: Key, versionId: Key): Promise<void> {
  const packageKey = encodeURIComponent(packageId)
  const versionKey = encodeURIComponent(versionId)

  const pattern = '/packages/:packageId/versions/:versionId/validation/run'
  const endpoint = generatePath(pattern, { packageId: packageKey, versionId: versionKey })

  return requestVoid(
    endpoint,
    { method: 'POST' },
    { basePath: `/stub${API_V1}` }, // TODO 15.07.25 // Remove stub
  )
}
