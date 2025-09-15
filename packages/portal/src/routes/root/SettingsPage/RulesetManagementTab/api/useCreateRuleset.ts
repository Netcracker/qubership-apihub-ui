import { API_LINTER_API_V1 } from '@netcracker/qubership-apihub-ui-portal/src/api-hooks/ApiQuality/constants'
import type { RulesetDto } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import {
  useShowSuccessNotification,
} from '@netcracker/qubership-apihub-ui-portal/src/routes/root/BasePage/Notification'
import { portalRequestJson } from '@netcracker/qubership-apihub-ui-portal/src/utils/requests'
import type { IsLoading, IsSuccess } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEY_RULESETS } from './useRulesets'

type CreateRulesetRequest = {
  name: string
  file: File
}

export const useCreateRuleset = (): [
  (request: CreateRulesetRequest) => void,
  IsLoading,
  IsSuccess,
] => {
  const queryClient = useQueryClient()
  const showNotification = useShowSuccessNotification()

  const { mutate, isLoading, isSuccess } = useMutation<RulesetDto, Error, CreateRulesetRequest>({
    mutationFn: ({ name, file }) => createRuleset(name, file),
    onSuccess: async (data) => {
      showNotification({ message: `${data.name} ruleset has been created` })
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_RULESETS] })
    },
  })

  return [mutate, isLoading, isSuccess]
}

async function createRuleset(name: string, file: File): Promise<RulesetDto> {
  const formData = new FormData()
  formData.append('rulesetName', name)
  formData.append('apiType', 'openapi-3-0')
  formData.append('linter', 'spectral')
  formData.append('rulesetFile', file)

  return await portalRequestJson<RulesetDto>(
    '/rulesets',
    {
      method: 'post',
      body: formData,
    },
    { basePath: API_LINTER_API_V1 },
  )
}
