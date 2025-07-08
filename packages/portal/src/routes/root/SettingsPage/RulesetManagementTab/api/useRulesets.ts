import { API_LINTER_API_V1 } from '@netcracker/qubership-apihub-ui-portal/src/api-hooks/ApiQuality/constants'
import type { Ruleset, RulesetDto } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { portalRequestJson } from '@netcracker/qubership-apihub-ui-portal/src/utils/requests'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const QUERY_KEY_RULESETS = 'rulesets'

export const useRulesets = (): [Ruleset[], IsLoading] => {
  const {
    data,
    isLoading,
  } = useQuery<RulesetDto[], Error>({
    queryKey: [QUERY_KEY_RULESETS],
    queryFn: getRulesets,
  })

  return [
    useMemo(() => data ?? [], [data]),
    isLoading,
  ]
}

async function getRulesets(): Promise<RulesetDto[]> {
  return await portalRequestJson<RulesetDto[]>(
    '/rulesets',
    { method: 'get' },
    { basePath: API_LINTER_API_V1 },
  )
}
