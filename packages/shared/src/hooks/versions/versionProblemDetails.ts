import type { PackageKey, VersionKey } from '../../entities/keys'
import { DASHBOARD_KIND, PACKAGE_KIND, type PackageKind } from '../../entities/packages'
import { getApiProcessorMismatchTooltip, PUBLICATION_ERROR_MESSAGES } from '../../utils/publicationErrorMessages'

export const VERSION_PROBLEM_KIND = {
  PROCESSOR_MISMATCH: 'processor-mismatch',
  DELETED_REFERENCE: 'deleted-reference',
  BUILD_ERRORS: 'build-errors',
  COMPARISON_ERRORS: 'comparison-errors',
} as const

export type VersionProblemKind = typeof VERSION_PROBLEM_KIND[keyof typeof VERSION_PROBLEM_KIND]

export const VERSION_PROBLEM_DIALOG_SURFACE = {
  COMPARE: 'compare',
  COMPARE_PREVIOUS: 'compare-previous',
  COMPARE_PREVIOUS_REVISION: 'compare-previous-revision',
  PUBLISH_PREVIOUS: 'publish-previous',
  COPY: 'copy',
  ADD_TO_DASHBOARD: 'add-to-dashboard',
  EDIT_STATUS: 'edit-status',
} as const

export type VersionProblemDialogSurface =
  typeof VERSION_PROBLEM_DIALOG_SURFACE[keyof typeof VERSION_PROBLEM_DIALOG_SURFACE]

export type UseVersionProblemDetailsParams = {
  packageKey?: PackageKey
  versionKey?: VersionKey
  hasErrors?: boolean
  changelogHasErrors?: boolean
  deletedAt?: string
  kind?: PackageKind
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

type VersionProblemCopySet = {
  build: string
  comparison: string
  buildAndComparison: string
}

const PACKAGE_ERROR_COPY: VersionProblemCopySet = {
  build: PUBLICATION_ERROR_MESSAGES.packageVersion.version,
  comparison: PUBLICATION_ERROR_MESSAGES.packageVersion.changelog,
  buildAndComparison: PUBLICATION_ERROR_MESSAGES.packageVersion.versionChangelog,
}

const DASHBOARD_ERROR_COPY: VersionProblemCopySet = {
  build: PUBLICATION_ERROR_MESSAGES.dashboardVersion.version,
  comparison: PUBLICATION_ERROR_MESSAGES.dashboardVersion.changelog,
  buildAndComparison: PUBLICATION_ERROR_MESSAGES.dashboardVersion.versionChangelog,
}

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
        ? PUBLICATION_ERROR_MESSAGES.reference.packageMissing
        : PUBLICATION_ERROR_MESSAGES.reference.dashboardMissing,
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

  if (
    activeProblemKind === VERSION_PROBLEM_KIND.BUILD_ERRORS ||
    activeProblemKind === VERSION_PROBLEM_KIND.COMPARISON_ERRORS
  ) {
    return resolveUnsoundVersionDialogView(surface)
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

  const versionErrorCopySet = params.kind === DASHBOARD_KIND ? DASHBOARD_ERROR_COPY : PACKAGE_ERROR_COPY

  if (hasErrors && changelogHasErrors) {
    return {
      hasProblems: true,
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: versionErrorCopySet.buildAndComparison,
    }
  }

  if (hasErrors) {
    return {
      hasProblems: true,
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: versionErrorCopySet.build,
    }
  }

  return {
    hasProblems: true,
    activeProblemKind: VERSION_PROBLEM_KIND.COMPARISON_ERRORS,
    tooltip: versionErrorCopySet.comparison,
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

  return {
    hasProblems: true,
    activeProblemKind: VERSION_PROBLEM_KIND.PROCESSOR_MISMATCH,
    tooltip: getApiProcessorMismatchTooltip(versionKey),
  }
}

function resolveUnsoundVersionDialogView(
  surface: VersionProblemDialogSurface,
): VersionProblemDialogView {
  switch (surface) {
    case VERSION_PROBLEM_DIALOG_SURFACE.COMPARE:
      return NO_DIALOG_PROBLEM_VIEW
    case VERSION_PROBLEM_DIALOG_SURFACE.COMPARE_PREVIOUS:
    case VERSION_PROBLEM_DIALOG_SURFACE.PUBLISH_PREVIOUS:
      return {
        isBlocking: true,
        formHelperText: PUBLICATION_ERROR_MESSAGES.dialog.previousVersionUnsound,
      }
    case VERSION_PROBLEM_DIALOG_SURFACE.COMPARE_PREVIOUS_REVISION:
      return {
        isBlocking: true,
        formHelperText: PUBLICATION_ERROR_MESSAGES.dialog.previousRevisionUnsound,
      }
    case VERSION_PROBLEM_DIALOG_SURFACE.COPY:
      return {
        isBlocking: true,
        formHelperText: PUBLICATION_ERROR_MESSAGES.dialog.sourceVersionUnsound,
      }
    case VERSION_PROBLEM_DIALOG_SURFACE.ADD_TO_DASHBOARD:
      return {
        isBlocking: true,
        formHelperText: PUBLICATION_ERROR_MESSAGES.dialog.dashboardAddUnsound,
      }
    case VERSION_PROBLEM_DIALOG_SURFACE.EDIT_STATUS:
      return {
        isBlocking: true,
        formHelperText: PUBLICATION_ERROR_MESSAGES.dialog.releasePromotionRefused,
      }
    default: {
      const exhaustiveCheck: never = surface
      return exhaustiveCheck
    }
  }
}
