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
  ASYNCAPI_3_0: 'asyncapi-3-0',
} as const
export type RulesetApiType = (typeof RulesetApiTypes)[keyof typeof RulesetApiTypes]
export const RULESET_API_TYPE_TITLE_MAP = {
  [RulesetApiTypes.OAS_2_0]: 'OAS 2.0',
  [RulesetApiTypes.OAS_3_0]: 'OAS 3.0',
  [RulesetApiTypes.OAS_3_1]: 'OAS 3.1',
  [RulesetApiTypes.ASYNCAPI_3_0]: 'AsyncAPI 3.0',
}

export const RulesetLinters = {
  SPECTRAL: 'spectral',
  AI_OAS: 'ai_oas',
  SPECTRAL_ASYNCAPI: 'spectral_asyncapi',
} as const
export type RulesetLinter = (typeof RulesetLinters)[keyof typeof RulesetLinters]
export const RULESET_LINTER_TITLE_MAP = {
  [RulesetLinters.SPECTRAL]: 'Spectral',
  [RulesetLinters.AI_OAS]: 'AI OAS',
  [RulesetLinters.SPECTRAL_ASYNCAPI]: 'Spectral AsyncAPI',
}

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

export type RulesetMetadataDto = Pick<RulesetDto, 'id' | 'name' | 'fileName' | 'status' | 'apiType' | 'linter'>
export type RulesetMetadata = RulesetMetadataDto
