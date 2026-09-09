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

export const VERSION_PROBLEM_DIALOG_SURFACE = {
  COMPARE: 'compare',
  PUBLISH_PREVIOUS: 'publish-previous',
  COPY: 'copy',
  ADD_TO_DASHBOARD: 'add-to-dashboard',
} as const

export type VersionProblemDialogSurface =
  typeof VERSION_PROBLEM_DIALOG_SURFACE[keyof typeof VERSION_PROBLEM_DIALOG_SURFACE]

export type UseVersionProblemDetailsParams = {
  packageKey?: PackageKey
  versionKey?: VersionKey
  hasErrors?: boolean
  changelogHasErrors?: boolean
  deletedAt?: string
  kind?: ReferenceKind
  apiProcessorVersion?: string
  surface?: VersionProblemDialogSurface
}

export type VersionProblemDetails = {
  hasProblems: boolean
  activeProblemKind?: VersionProblemKind
  tooltip?: string
  isBlocking: boolean
  formHelperText?: string
}

type ResolveVersionProblemDetailsParams = UseVersionProblemDetailsParams & {
  appApiProcessorVersion?: string
  migrationInProgress?: boolean
}

type VersionProblemCore = {
  hasProblems: boolean
  activeProblemKind?: VersionProblemKind
  tooltip?: string
}

type VersionProblemDialogView = {
  isBlocking: boolean
  formHelperText?: string
}

export const VERSION_BUILD_ERRORS_TOOLTIP =
  'This version has documents that failed to process. Open the Documents tab to see them.'
export const VERSION_COMPARISON_ERRORS_TOOLTIP =
  'The comparison against the previous version could not be calculated reliably, so the list of changes may be incomplete. The documents of this version are not affected.'
export const VERSION_BUILD_AND_COMPARISON_ERRORS_TOOLTIP =
  'This version has documents that failed to process and the comparison against the previous version could not be calculated reliably, so the list of changes may be incomplete. Open the Documents tab to see them.'
export const VERSION_DELETED_PACKAGE_REFERENCE_TOOLTIP = 'The included package version no longer exists'
export const VERSION_DELETED_DASHBOARD_REFERENCE_TOOLTIP = 'The included dashboard version no longer exists'
export const VERSION_PUBLISH_PREVIOUS_FORM_HELPER =
  'The selected previous version contains documents that failed to process and cannot be used for comparison. Select another version.'
export const VERSION_COPY_FORM_HELPER = 'This version contains documents that failed to process and cannot be copied.'
export const VERSION_ADD_TO_DASHBOARD_FORM_HELPER =
  'This version has errors and cannot be added to the dashboard. Select another version.'

const NO_VERSION_PROBLEMS: VersionProblemCore = {
  hasProblems: false,
}

const NO_DIALOG_PROBLEM_VIEW: VersionProblemDialogView = {
  isBlocking: false,
}

export function resolveVersionProblemDetails(
  params: ResolveVersionProblemDetailsParams,
): VersionProblemDetails {
  const problem = resolveVersionProblemCore(params)
  const dialogView = params.surface
    ? toVersionProblemDialogView(problem, params.surface)
    : NO_DIALOG_PROBLEM_VIEW

  return {
    ...problem,
    ...dialogView,
  }
}

function resolveVersionProblemCore(
  params: ResolveVersionProblemDetailsParams,
): VersionProblemCore {
  const processorProblem = resolveProcessorMismatch(params)
  if (processorProblem) {
    return processorProblem
  }

  if (params.deletedAt) {
    return {
      hasProblems: true,
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

function toVersionProblemDialogView(
  problem: VersionProblemCore,
  surface: VersionProblemDialogSurface,
): VersionProblemDialogView {
  const { activeProblemKind, tooltip } = problem

  if (activeProblemKind === VERSION_PROBLEM_KIND.PROCESSOR_MISMATCH) {
    return {
      isBlocking: true,
      formHelperText: tooltip,
    }
  }

  if (activeProblemKind === VERSION_PROBLEM_KIND.BUILD_ERRORS) {
    return resolveBuildErrorsDialogView(surface)
  }

  return NO_DIALOG_PROBLEM_VIEW
}

function resolveBuildAndComparisonProblems(
  params: ResolveVersionProblemDetailsParams,
): VersionProblemCore | undefined {
  const hasErrors = params.hasErrors ?? false
  const changelogHasErrors = params.changelogHasErrors ?? false

  if (!hasErrors && !changelogHasErrors) {
    return undefined
  }

  if (hasErrors && changelogHasErrors) {
    return {
      hasProblems: true,
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: VERSION_BUILD_AND_COMPARISON_ERRORS_TOOLTIP,
    }
  }

  if (hasErrors) {
    return {
      hasProblems: true,
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: VERSION_BUILD_ERRORS_TOOLTIP,
    }
  }

  return {
    hasProblems: true,
    activeProblemKind: VERSION_PROBLEM_KIND.COMPARISON_ERRORS,
    tooltip: VERSION_COMPARISON_ERRORS_TOOLTIP,
  }
}

function resolveProcessorMismatch(
  params: ResolveVersionProblemDetailsParams,
): VersionProblemCore | undefined {
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
    activeProblemKind: VERSION_PROBLEM_KIND.PROCESSOR_MISMATCH,
    tooltip: tooltip,
  }
}

function resolveBuildErrorsDialogView(
  surface: VersionProblemDialogSurface,
): VersionProblemDialogView {
  switch (surface) {
    case VERSION_PROBLEM_DIALOG_SURFACE.COMPARE:
      return NO_DIALOG_PROBLEM_VIEW
    case VERSION_PROBLEM_DIALOG_SURFACE.PUBLISH_PREVIOUS:
      return {
        isBlocking: true,
        formHelperText: VERSION_PUBLISH_PREVIOUS_FORM_HELPER,
      }
    case VERSION_PROBLEM_DIALOG_SURFACE.COPY:
      return {
        isBlocking: true,
        formHelperText: VERSION_COPY_FORM_HELPER,
      }
    case VERSION_PROBLEM_DIALOG_SURFACE.ADD_TO_DASHBOARD:
      return {
        isBlocking: true,
        formHelperText: VERSION_ADD_TO_DASHBOARD_FORM_HELPER,
      }
  }
}
