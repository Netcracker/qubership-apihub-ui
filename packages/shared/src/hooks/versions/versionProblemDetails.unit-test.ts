import { DASHBOARD_KIND, PACKAGE_KIND } from '../../entities/packages'
import {
  resolveVersionProblemDetails,
  VERSION_BUILD_AND_COMPARISON_ERRORS_TOOLTIP,
  VERSION_BUILD_ERRORS_FORM_HELPER,
  VERSION_BUILD_ERRORS_TOOLTIP,
  VERSION_COMPARISON_ERRORS_TOOLTIP,
  VERSION_DELETED_DASHBOARD_REFERENCE_TOOLTIP,
  VERSION_DELETED_PACKAGE_REFERENCE_TOOLTIP,
  VERSION_PROBLEM_KIND,
} from './versionProblemDetails'

describe('resolveVersionProblemDetails', () => {
  it('returns no problems when no flags are set', () => {
    expect(resolveVersionProblemDetails({})).toEqual({
      hasProblems: false,
      isBlocking: false,
    })
  })

  it('treats processor mismatch as blocking and above other flags', () => {
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
      isBlocking: true,
      activeProblemKind: VERSION_PROBLEM_KIND.PROCESSOR_MISMATCH,
    })
    expect(result.tooltip).toContain('1.0.0')
    expect(result.formHelperText).toBe(result.tooltip)
  })

  it('suppresses processor mismatch during migration', () => {
    expect(resolveVersionProblemDetails({
      migrationInProgress: true,
      hasErrors: true,
    })).toMatchObject({
      activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
      tooltip: VERSION_BUILD_ERRORS_TOOLTIP,
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
      { hasErrors: true, changelogHasErrors: false },
      {
        activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
        isBlocking: true,
        tooltip: VERSION_BUILD_ERRORS_TOOLTIP,
        formHelperText: VERSION_BUILD_ERRORS_FORM_HELPER,
      },
    ],
    [
      { hasErrors: false, changelogHasErrors: true },
      {
        activeProblemKind: VERSION_PROBLEM_KIND.COMPARISON_ERRORS,
        isBlocking: false,
        tooltip: VERSION_COMPARISON_ERRORS_TOOLTIP,
      },
    ],
    [
      { hasErrors: true, changelogHasErrors: true },
      {
        activeProblemKind: VERSION_PROBLEM_KIND.BUILD_ERRORS,
        isBlocking: true,
        tooltip: VERSION_BUILD_AND_COMPARISON_ERRORS_TOOLTIP,
        formHelperText: VERSION_BUILD_ERRORS_FORM_HELPER,
      },
    ],
  ])('resolves hasErrors/changelogHasErrors=%j', (params, expected) => {
    expect(resolveVersionProblemDetails(params)).toMatchObject({
      hasProblems: true,
      ...expected,
    })
  })
})
