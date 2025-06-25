import type { Key } from '@apihub/entities/keys'
import { requestBlob } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import { STUB_API_V1 } from './temp'
import fileDownload from 'js-file-download'

type CallbackOptionsDownloadRuleset = { rulesetId: Key }

type CallbackDownloadRuleset = (options: CallbackOptionsDownloadRuleset) => void

export function useDownloadRuleset(): CallbackDownloadRuleset {
  const { mutate } = useMutation<void, Error, CallbackOptionsDownloadRuleset>({
    mutationFn: ({ rulesetId }) => downloadRuleset(rulesetId),
  })

  return mutate
}

async function downloadRuleset(rulesetId: Key): Promise<void> {
  const rulesetKey = encodeURIComponent(rulesetId)

  const pattern = '/rulesets/:rulesetId/download'
  const endpoint = generatePath(pattern, { rulesetId: rulesetKey })

  const response = await requestBlob(
    endpoint,
    { method: 'GET' },
    { basePath: STUB_API_V1 },
  )

  const data = await response.text()

  const [filename] = response
    .headers
    .get('content-disposition')!
    .split('filename=')[1]
    .split(';')

  fileDownload(data, filename)
}
