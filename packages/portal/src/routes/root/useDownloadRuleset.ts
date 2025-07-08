import type { Key } from '@apihub/entities/keys'
import { requestBlob } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { useMutation } from '@tanstack/react-query'
import { generatePath } from 'react-router'
import fileDownload from 'js-file-download'
import { optionalSearchParams } from '@netcracker/qubership-apihub-ui-shared/utils/search-params'

const STUB_API_V1 = '/stub/api/v1'

type CallbackOptionsDownloadRuleset = { rulesetId: Key }

type CallbackDownloadRuleset = (options: CallbackOptionsDownloadRuleset) => void

function getEndpoint(rulesetId: Key): string {
  const rulesetKey = encodeURIComponent(rulesetId)
  const pattern = '/rulesets/:rulesetId/download'
  return generatePath(pattern, { rulesetId: rulesetKey })
}

export function getPublicLink(
  host: string,
  protocol: string,
  rulesetId: Key,
): string {
  const endpoint = getEndpoint(rulesetId)
  const searchParams = optionalSearchParams({
    disposition: { value: 'inline' },
  })
  return `${protocol}://${host}${STUB_API_V1}${endpoint}?${searchParams}`
}

export function useDownloadRuleset(): CallbackDownloadRuleset {
  const { mutate } = useMutation<void, Error, CallbackOptionsDownloadRuleset>({
    mutationFn: ({ rulesetId }) => downloadRuleset(rulesetId),
  })

  return mutate
}

async function downloadRuleset(rulesetId: Key): Promise<void> {
  const endpoint = getEndpoint(rulesetId)
  const searchParams = optionalSearchParams({
    disposition: { value: 'attachment' },
  })

  const response = await requestBlob(
    `${endpoint}?${searchParams}`,
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
