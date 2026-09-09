import { DASHBOARD_KIND, PACKAGE_KIND } from '../../entities/packages'
import {
  resolveVersionProblemDetails,
  VERSION_ADD_TO_DASHBOARD_FORM_HELPER,
  VERSION_BUILD_AND_COMPARISON_ERRORS_TOOLTIP,
  VERSION_BUILD_ERRORS_TOOLTIP,
  VERSION_COMPARISON_ERRORS_TOOLTIP,
  VERSION_COPY_FORM_HELPER,
  VERSION_DELETED_DASHBOARD_REFERENCE_TOOLTIP,
  VERSION_DELETED_PACKAGE_REFERENCE_TOOLTIP,
  VERSION_PROBLEM_DIALOG_SURFACE,
  VERSION_PROBLEM_KIND,
  VERSION_PUBLISH_PREVIOUS_FORM_HELPER,
} from './versionProblemDetails'

describe('resolveVersionProblemDetails', () => {
  it('returns no problems when no flags are set', () => {
    expect(resolveVersionProblemDetails({})).toEqual({
      hasProblems: false,
      isBlocking: false,
    })
  })

  it('treats processor mismatch as above other flags and does not block without a surface', () => {
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
    })
    expect(result.tooltip).toContain('1.0.0')
    expect(result.formHelperText).toBeUndefined()
  })

  it('suppresses processor mismatch during migration', () => {
    expect(resolveVersionProblemDetails({
      migrationInProgress: true,
      hasErrors: true,
    })).toMatchObject({
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: VERSION_BUILD_ERRORS_TOOLTIP,
      isBlocking: false,
    })
  })

  it.each([
    [PACKAGE_KIND, VERSION_DELETED_PACKAGE_REFERENCE_TOOLTIP] as const,
    [DASHBOARD_KIND, VERSION_DELETED_DASHBOARD_REFERENCE_TOOLTIP] as const,
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
      VERSION_BUILD_ERRORS_TOOLTIP,
    ],
    [
      { changelogHasErrors: true },
      VERSION_PROBLEM_KIND.COMPARISON_ERRORS,
      VERSION_COMPARISON_ERRORS_TOOLTIP,
    ],
    [
      { hasErrors: true, changelogHasErrors: true },
      VERSION_PROBLEM_KIND.BUILD_ERRORS,
      VERSION_BUILD_AND_COMPARISON_ERRORS_TOOLTIP,
    ],
  ])('resolves %j to kind %s without blocking when surface is omitted', (params, activeProblemKind, tooltip) => {
    expect(resolveVersionProblemDetails(params)).toEqual({
      hasProblems: true,
      isBlocking: false,
      activeProblemKind: activeProblemKind,
      tooltip: tooltip,
    })
  })
})

describe('resolveVersionProblemDetails with surface', () => {
  it('blocks processor mismatch on a dialog surface and reuses the tooltip as helper text', () => {
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

  it('does not block deleted references even when a surface is set', () => {
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
        VERSION_PROBLEM_DIALOG_SURFACE.PUBLISH_PREVIOUS,
        VERSION_PUBLISH_PREVIOUS_FORM_HELPER,
      ],
      [
        VERSION_PROBLEM_DIALOG_SURFACE.COPY,
        VERSION_COPY_FORM_HELPER,
      ],
      [
        VERSION_PROBLEM_DIALOG_SURFACE.ADD_TO_DASHBOARD,
        VERSION_ADD_TO_DASHBOARD_FORM_HELPER,
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

  it('does not show a form helper for comparison errors on a dialog surface', () => {
    expect(resolveVersionProblemDetails({
      changelogHasErrors: true,
      surface: VERSION_PROBLEM_DIALOG_SURFACE.PUBLISH_PREVIOUS,
    })).toMatchObject({
      isBlocking: false,
      activeProblemKind: VERSION_PROBLEM_KIND.COMPARISON_ERRORS,
    })
  })
})
