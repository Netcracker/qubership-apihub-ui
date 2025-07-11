import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { IsLoading, IsSuccess } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useShowSuccessNotification } from '@apihub/routes/root/BasePage/Notification'
import type { RulesetDto } from '@apihub/entities/api-quality-ruleset'
import { portalRequestJson } from '@apihub/utils/requests'
import { API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { QUERY_KEY_RULESETS } from './useRulesets'

type CreateRulesetRequest = {
  name: string
  file: File
}

export const useCreateRuleset = (): [
  (request: CreateRulesetRequest) => void,
  IsLoading,
  IsSuccess,
  () => void,
] => {
  const queryClient = useQueryClient()
  const showNotification = useShowSuccessNotification()

  const { mutate, isLoading, isSuccess, reset } = useMutation<RulesetDto, Error, CreateRulesetRequest>({
    mutationFn: ({ name, file }) => createRuleset(name, file),
    onSuccess: async (data) => {
      showNotification({ message: `${data.name} ruleset has been created` })
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_RULESETS] })
    },
  })

  return [mutate, isLoading, isSuccess, reset]
}

async function createRuleset(name: string, file: File): Promise<RulesetDto> {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('file', file)

  return await portalRequestJson<RulesetDto>(
    '/rulesets',
    {
      method: 'post',
      body: formData,
    },
    { basePath: API_V1 },
  )
}
