import type { FileFormat, MD_FILE_FORMAT, UNKNOWN_FILE_FORMAT } from '@apihub/entities/file-formats'

export const RulesetStatuses = {
  INACTIVE: 'inactive',
  ACTIVE: 'active',
} as const
export type RulesetStatus = typeof RulesetStatuses[keyof typeof RulesetStatuses]

export type RulesetActivation = {
  activeFrom?: string
  activeTo?: string
}

export type Ruleset = {
  id: string
  name: string
  status: RulesetStatus
  activationHistory: readonly RulesetActivation[]
}

type ProhibitedFileFormat =
  | typeof MD_FILE_FORMAT
  | typeof UNKNOWN_FILE_FORMAT
export type OriginalDocumentFileFormat = Exclude<FileFormat, ProhibitedFileFormat>
