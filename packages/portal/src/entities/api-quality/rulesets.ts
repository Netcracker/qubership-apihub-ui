import type { Key } from '../keys'

export const RulesetStatuses = {
  INACTIVE: 'inactive',
  ACTIVE: 'active',
} as const
export type RulesetStatus = (typeof RulesetStatuses)[keyof typeof RulesetStatuses]

export type RulesetActivation = {
  activeFrom: string // Format: date-time
  activeTo?: string // Format: date-time
}

export type RulesetActivationHistory = {
  rulesetId: Key
  activationHistory: RulesetActivation[]
}

export const RulesetApiTypes = {
  OAS_2_0: 'openapi-2-0',
  OAS_3_0: 'openapi-3-0',
  OAS_3_1: 'openapi-3-1',
} as const
export type RulesetApiType = (typeof RulesetApiTypes)[keyof typeof RulesetApiTypes]

export const RulesetLinters = {
  SPECTRAL: 'spectral',
} as const
export type RulesetLinter = (typeof RulesetLinters)[keyof typeof RulesetLinters]

// Full ruleset

export type RulesetDto = Readonly<{
  id: string
  name: string
  fileName: string
  status: RulesetStatus
  apiType: RulesetApiType
  linter: RulesetLinter
  createdAt: string // Format: date-time
  canBeDeleted: boolean
}>

export type Ruleset = RulesetDto

// The only main data of ruleset

export type RulesetMetadataDto = Pick<RulesetDto, 'id' | 'name' | 'fileName' | 'status'>
export type RulesetMetadata = RulesetMetadataDto
