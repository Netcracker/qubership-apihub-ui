import { DASHBOARD_KIND, PACKAGE_KIND } from '../../entities/packages'
import { getApiProcessorMismatchTooltip, PUBLICATION_ERROR_MESSAGES } from '../../utils/publicationErrorMessages'
import {
  resolveVersionProblemDetails,
  VERSION_PROBLEM_DIALOG_SURFACE,
  VERSION_PROBLEM_KIND,
} from './versionProblemDetails'

describe('resolveVersionProblemDetails', () => {
  it('returns no problems when no flags are set', () => {
    expect(resolveVersionProblemDetails({})).toEqual({
      hasProblems: false,
      isBlocking: false,
    })
  })

  it('prefers processor mismatch over other flags and does not block without a surface', () => {
    const result = resolveVersionProblemDetails({
      versionKey: '1.0.0',
      apiProcessorVersion: '1.0.0',
      appApiProcessorVersion: '2.0.0',
      hasErrors: true,
      changelogHasErrors: true,
      deletedAt: '2024-01-01',
    })

    expect(result).toMatchObject({
      hasProblems: true,
      isBlocking: false,
      activeProblemKind: VERSION_PROBLEM_KIND.PROCESSOR_MISMATCH,
      tooltip: getApiProcessorMismatchTooltip('1.0.0'),
    })
    expect(result.formHelperText).toBeUndefined()
  })

  it('suppresses processor mismatch during migration', () => {
    expect(resolveVersionProblemDetails({
      migrationInProgress: true,
      hasErrors: true,
    })).toMatchObject({
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: PUBLICATION_ERROR_MESSAGES.packageVersion.version,
      isBlocking: false,
    })
  })

  it.each([
    [PACKAGE_KIND, PUBLICATION_ERROR_MESSAGES.reference.packageMissing] as const,
    [DASHBOARD_KIND, PUBLICATION_ERROR_MESSAGES.reference.dashboardMissing] as const,
  ])('uses deleted reference tooltip for kind=%s', (kind, tooltip) => {
    expect(resolveVersionProblemDetails({
      deletedAt: '2024-01-01',
      kind: kind,
    })).toEqual({
      hasProblems: true,
      isBlocking: false,
      activeProblemKind: VERSION_PROBLEM_KIND.DELETED_REFERENCE,
      tooltip: tooltip,
    })
  })

  it.each([
    [
      { hasErrors: true },
      VERSION_PROBLEM_KIND.BUILD_ERRORS,
      PUBLICATION_ERROR_MESSAGES.packageVersion.version,
    ],
    [
      { changelogHasErrors: true },
      VERSION_PROBLEM_KIND.COMPARISON_ERRORS,
      PUBLICATION_ERROR_MESSAGES.packageVersion.changelog,
    ],
    [
      { hasErrors: true, changelogHasErrors: true },
      VERSION_PROBLEM_KIND.BUILD_ERRORS,
      PUBLICATION_ERROR_MESSAGES.packageVersion.versionChangelog,
    ],
  ])('resolves package tooltips when surface is omitted', (params, activeProblemKind, tooltip) => {
    expect(resolveVersionProblemDetails(params)).toEqual({
      hasProblems: true,
      isBlocking: false,
      activeProblemKind: activeProblemKind,
      tooltip: tooltip,
    })
  })

  it('uses the dashboard composite tooltip when both flags are set', () => {
    expect(resolveVersionProblemDetails({
      hasErrors: true,
      changelogHasErrors: true,
      kind: DASHBOARD_KIND,
    })).toEqual({
      hasProblems: true,
      isBlocking: false,
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: PUBLICATION_ERROR_MESSAGES.dashboardVersion.versionChangelog,
    })
  })
})

describe('resolveVersionProblemDetails with surface', () => {
  it('blocks processor mismatch and reuses the tooltip as helper text', () => {
    const result = resolveVersionProblemDetails({
      versionKey: '1.0.0',
      apiProcessorVersion: '1.0.0',
      appApiProcessorVersion: '2.0.0',
      surface: VERSION_PROBLEM_DIALOG_SURFACE.COMPARE,
    })

    expect(result).toMatchObject({
      isBlocking: true,
      activeProblemKind: VERSION_PROBLEM_KIND.PROCESSOR_MISMATCH,
    })
    expect(result.formHelperText).toBe(result.tooltip)
  })

  it('does not block build errors on the compare surface', () => {
    const result = resolveVersionProblemDetails({
      hasErrors: true,
      surface: VERSION_PROBLEM_DIALOG_SURFACE.COMPARE,
    })

    expect(result).toMatchObject({
      isBlocking: false,
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
    })
    expect(result.formHelperText).toBeUndefined()
  })

  it('does not block deleted references when a surface is set', () => {
    expect(resolveVersionProblemDetails({
      deletedAt: '2024-01-01',
      kind: PACKAGE_KIND,
      surface: VERSION_PROBLEM_DIALOG_SURFACE.ADD_TO_DASHBOARD,
    })).toMatchObject({
      isBlocking: false,
      activeProblemKind: VERSION_PROBLEM_KIND.DELETED_REFERENCE,
    })
  })

  it.each(
    [
      [
        VERSION_PROBLEM_DIALOG_SURFACE.COMPARE_PREVIOUS,
        PUBLICATION_ERROR_MESSAGES.dialog.previousVersionUnsound,
      ],
      [
        VERSION_PROBLEM_DIALOG_SURFACE.COMPARE_PREVIOUS_REVISION,
        PUBLICATION_ERROR_MESSAGES.dialog.previousRevisionUnsound,
      ],
      [
        VERSION_PROBLEM_DIALOG_SURFACE.COPY,
        PUBLICATION_ERROR_MESSAGES.dialog.sourceVersionUnsound,
      ],
      [
        VERSION_PROBLEM_DIALOG_SURFACE.ADD_TO_DASHBOARD,
        PUBLICATION_ERROR_MESSAGES.dialog.dashboardAddUnsound,
      ],
    ] as const,
  )('blocks build errors on %s with surface-specific helper text', (surface, expectedMessage) => {
    expect(resolveVersionProblemDetails({
      hasErrors: true,
      surface: surface,
    })).toMatchObject({
      isBlocking: true,
      formHelperText: expectedMessage,
    })
  })

  it('blocks dialog surface when version has comparison errors (unsound version)', () => {
    expect(resolveVersionProblemDetails({
      changelogHasErrors: true,
      surface: VERSION_PROBLEM_DIALOG_SURFACE.PUBLISH_PREVIOUS,
    })).toMatchObject({
      isBlocking: true,
      activeProblemKind: VERSION_PROBLEM_KIND.COMPARISON_ERRORS,
      formHelperText: PUBLICATION_ERROR_MESSAGES.dialog.previousVersionUnsound,
    })
  })

  it.each([
    { hasErrors: true },
    { changelogHasErrors: true },
  ])('blocks edit-status when the version is unsound', (params) => {
    expect(resolveVersionProblemDetails({
      ...params,
      surface: VERSION_PROBLEM_DIALOG_SURFACE.EDIT_STATUS,
    })).toMatchObject({
      isBlocking: true,
      formHelperText: PUBLICATION_ERROR_MESSAGES.dialog.releasePromotionRefused,
    })
  })
})
