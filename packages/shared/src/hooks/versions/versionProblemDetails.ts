import { compareVersions } from 'compare-versions'

import type { PackageKey, VersionKey } from '../../entities/keys'
import { PACKAGE_KIND } from '../../entities/packages'
import type { ReferenceKind } from '../../entities/version-references'

export const VERSION_PROBLEM_KIND = {
  PROCESSOR_MISMATCH: 'processor-mismatch',
  DELETED_REFERENCE: 'deleted-reference',
  BUILD_ERRORS: 'build-errors',
  COMPARISON_ERRORS: 'comparison-errors',
} as const

export type VersionProblemKind = typeof VERSION_PROBLEM_KIND[keyof typeof VERSION_PROBLEM_KIND]

export type UseVersionProblemDetailsParams = {
  packageKey?: PackageKey
  versionKey?: VersionKey
  hasErrors?: boolean
  changelogHasErrors?: boolean
  deletedAt?: string
  kind?: ReferenceKind
  apiProcessorVersion?: string
}

export type VersionProblemDetails = {
  hasProblems: boolean
  isBlocking: boolean
  activeProblemKind?: VersionProblemKind
  tooltip?: string
  formHelperText?: string
}

type ResolveVersionProblemDetailsParams = UseVersionProblemDetailsParams & {
  appApiProcessorVersion?: string
  migrationInProgress?: boolean
}

export const VERSION_BUILD_ERRORS_TOOLTIP =
  'This version has documents that failed to process. Open the Documents tab to see them.'
export const VERSION_BUILD_ERRORS_FORM_HELPER =
  'The selected previous version has errors and cannot be used for comparison. Select another version.'
export const VERSION_COMPARISON_ERRORS_TOOLTIP =
  'The comparison against the previous version could not be calculated reliably, so the list of changes may be incomplete. The documents of this version are not affected.'
export const VERSION_BUILD_AND_COMPARISON_ERRORS_TOOLTIP =
  'This version has documents that failed to process and the comparison against the previous version could not be calculated reliably, so the list of changes may be incomplete. Open the Documents tab to see them.'
export const VERSION_DELETED_PACKAGE_REFERENCE_TOOLTIP = 'The included package version no longer exists'
export const VERSION_DELETED_DASHBOARD_REFERENCE_TOOLTIP = 'The included dashboard version no longer exists'

const NO_VERSION_PROBLEMS: VersionProblemDetails = {
  hasProblems: false,
  isBlocking: false,
}

export function resolveVersionProblemDetails(
  params: ResolveVersionProblemDetailsParams,
): VersionProblemDetails {
  const processorProblem = resolveProcessorMismatch(params)
  if (processorProblem) {
    return processorProblem
  }

  if (params.deletedAt) {
    return {
      hasProblems: true,
      isBlocking: false,
      activeProblemKind: VERSION_PROBLEM_KIND.DELETED_REFERENCE,
      tooltip: params.kind === PACKAGE_KIND
        ? VERSION_DELETED_PACKAGE_REFERENCE_TOOLTIP
        : VERSION_DELETED_DASHBOARD_REFERENCE_TOOLTIP,
    }
  }

  const buildAndComparisonProblem = resolveBuildAndComparisonProblems(params)
  if (buildAndComparisonProblem) {
    return buildAndComparisonProblem
  }

  return NO_VERSION_PROBLEMS
}

function resolveBuildAndComparisonProblems(
  params: ResolveVersionProblemDetailsParams,
): VersionProblemDetails | undefined {
  const hasErrors = params.hasErrors ?? false
  const changelogHasErrors = params.changelogHasErrors ?? false

  if (!hasErrors && !changelogHasErrors) {
    return undefined
  }

  if (hasErrors && changelogHasErrors) {
    return {
      hasProblems: true,
      isBlocking: true,
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: VERSION_BUILD_AND_COMPARISON_ERRORS_TOOLTIP,
      formHelperText: VERSION_BUILD_ERRORS_FORM_HELPER,
    }
  }

  if (hasErrors) {
    return {
      hasProblems: true,
      isBlocking: true,
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: VERSION_BUILD_ERRORS_TOOLTIP,
      formHelperText: VERSION_BUILD_ERRORS_FORM_HELPER,
    }
  }

  return {
    hasProblems: true,
    isBlocking: false,
    activeProblemKind: VERSION_PROBLEM_KIND.COMPARISON_ERRORS,
    tooltip: VERSION_COMPARISON_ERRORS_TOOLTIP,
  }
}

function resolveProcessorMismatch(
  params: ResolveVersionProblemDetailsParams,
): VersionProblemDetails | undefined {
  const {
    apiProcessorVersion,
    appApiProcessorVersion,
    migrationInProgress,
    versionKey,
  } = params

  if (migrationInProgress) {
    return undefined
  }

  if (!apiProcessorVersion || !appApiProcessorVersion) {
    return undefined
  }

  if (apiProcessorVersion === appApiProcessorVersion) {
    return undefined
  }

  const comparison = compareVersions(apiProcessorVersion, appApiProcessorVersion)
  if (comparison === 0) {
    return undefined
  }

  const tooltip = comparison > 0
    ? `The data in the version '${versionKey}' may be incorrect, please contact the system administrators`
    : `The data in the version '${versionKey}' may be incorrect, as the data has not been processed according to the latest system rules. Please republish the version and if this does not help, contact the system administrators.`

  return {
    hasProblems: true,
    isBlocking: true,
    activeProblemKind: VERSION_PROBLEM_KIND.PROCESSOR_MISMATCH,
    tooltip: tooltip,
    formHelperText: tooltip,
  }
}
