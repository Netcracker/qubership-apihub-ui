export const RulesetStatuses = {
  INACTIVE: 'inactive',
  ACTIVE: 'active',
} as const
export type RulesetStatus = (typeof RulesetStatuses)[keyof typeof RulesetStatuses]

export type RulesetActivation = {
  activeFrom?: string // Format: date-time
  activeTo?: string // Format: date-time
}

// Full ruleset

export type RulesetDto = Readonly<{
  id: string
  name: string
  fileName: string
  status: RulesetStatus
  activationHistory: RulesetActivation[]
  createdAt: string // Format: date-time
  canBeDeleted: boolean
}>

export type Ruleset = RulesetDto

// The only identifiers

export type RulesetBaseDto = Pick<RulesetDto, 'id' | 'name' | 'fileName' | 'status'>
export type RulesetBase = RulesetBaseDto

// Identifiers with activation history

export type RulesetBaseWithActivationHistoryDto = Pick<RulesetDto, 'id' | 'name' | 'fileName' | 'status' | 'activationHistory'>
export type RulesetBaseWithActivationHistory = RulesetBaseWithActivationHistoryDto
