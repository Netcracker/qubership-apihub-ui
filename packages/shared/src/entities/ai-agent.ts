import type { Key } from './keys'

export type RevertChangeInAiEnhancedPackageVersionRequest = {
  packageId: Key
  version: Key
  slug: Key
  content: string
}

export type RevertChangeInAiEnhancedPackageVersionResponse = {
  message: string
}

export type RevertChangeInAiEnhancedPackageVersionMutationFn =
  (request: RevertChangeInAiEnhancedPackageVersionRequest) => void

export type RevertChangeInAiEnhancedPackageVersionMutationState = {
  mutate: RevertChangeInAiEnhancedPackageVersionMutationFn
  isReverting: boolean
}
