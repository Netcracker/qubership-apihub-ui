import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import type { Ruleset, RulesetDto } from '@apihub/entities/api-quality-ruleset'
import { portalRequestJson } from '@apihub/utils/requests'
import { API_V1 } from '@netcracker/qubership-apihub-ui-shared/utils/requests'

export const QUERY_KEY_RULESETS = 'rulesets'

export const useRulesets = (): [Ruleset[], IsLoading] => {
  const {
    data,
    isLoading,
  } = useQuery<RulesetDto[], Error>({
    queryKey: [QUERY_KEY_RULESETS],
    queryFn: getRulesets,
  })

  // TODO: remove after BE is implemented
  // Sort rulesets by status (active first), then empty activationHistory, then by creation date (newest first)
  const sortedRulesets = useMemo(() => {
    if (!data) return []

    return [...data].sort((a, b) => {
      // Sort by status first (active before inactive)
      if (a.status === 'active' && b.status !== 'active') return -1
      if (a.status !== 'active' && b.status === 'active') return 1

      // Then sort by empty activationHistory (empty before non-empty)
      const aHasEmptyHistory = a.activationHistory.length === 0
      const bHasEmptyHistory = b.activationHistory.length === 0
      if (aHasEmptyHistory && !bHasEmptyHistory) return -1
      if (!aHasEmptyHistory && bHasEmptyHistory) return 1

      // Finally sort by creation date (newest first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
  }, [data])

  return [sortedRulesets, isLoading]
}

async function getRulesets(): Promise<RulesetDto[]> {
  return await portalRequestJson<RulesetDto[]>(
    '/rulesets',
    { method: 'get' },
    { basePath: API_V1 },
  )
}
