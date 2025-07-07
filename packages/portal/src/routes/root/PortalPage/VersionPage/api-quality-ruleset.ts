import type { Key } from '@apihub/entities/keys'

export const RulesetStatuses = {
  INACTIVE: 'inactive',
  ACTIVE: 'active',
} as const
export type RulesetStatus = (typeof RulesetStatuses)[keyof typeof RulesetStatuses]

export type RulesetActivation = {
  activeFrom?: string
  activeTo?: string
}

// Ruleset without activation history

export type RulesetLiteDto = {
  id: string
  name: string
  status: RulesetStatus
}
export type RulesetLite = Omit<RulesetLiteDto, 'id'> & { id: Key }

// Full ruleset

export type RulesetDto = RulesetLiteDto & {
  activationHistory: readonly RulesetActivation[]
}

export type Ruleset = Omit<RulesetDto, 'id'> & { id: Key } 
