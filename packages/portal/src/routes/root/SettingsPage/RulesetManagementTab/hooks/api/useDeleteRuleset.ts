import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { IsLoading, IsSuccess } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useShowSuccessNotification } from '@apihub/routes/root/BasePage/Notification'
import type { Ruleset } from '@apihub/entities/api-quality-ruleset'
import { portalRequestVoid } from '@apihub/utils/requests'
import { API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { generatePath } from 'react-router-dom'
import { QUERY_KEY_RULESETS } from './useRulesets'

export const useDeleteRuleset = (): [
  (ruleset: Ruleset) => void,
  IsLoading,
  IsSuccess,
] => {
  const queryClient = useQueryClient()
  const showNotification = useShowSuccessNotification()

  const { mutate, isLoading, isSuccess } = useMutation<void, Error, Ruleset>({
    mutationFn: ( ruleset ) => deleteRuleset(ruleset.id),
    onSuccess: async (_, variables) => {
      showNotification({ message: `${variables.name} ruleset has been deleted` })
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY_RULESETS] })
    },
  })

  return [mutate, isLoading, isSuccess]
}

async function deleteRuleset(rulesetId: string): Promise<void> {
  const id = encodeURIComponent(rulesetId)
  const pattern = '/rulesets/:id'
  const endpoint = generatePath(pattern, { id })
  await portalRequestVoid(
    endpoint,
    { method: 'delete' },
    { basePath: API_V1 },
  )
}
