import type {
  PackageReference,
  VersionReferences,
} from '@netcracker/qubership-apihub-ui-shared/entities/version-references'

import { getDeletedDescendantRefs, hasReferenceProblems } from './referenceProblems'

const D1 = 'd1@1.0@1'
const D2 = 'd2@1.0@1'
const D3 = 'd3@1.0@1'
const P1 = 'p1@1.0@1'
const P2 = 'p2@1.0@1'

const DELETED_AT = '2026-08-15T10:30:00Z'

describe('getDeletedDescendantRefs', () => {
  test('marks every ancestor of a deleted reference and none of a reference with errors', () => {
    // D2 is included under both D1 and D3.
    const tree: VersionReferences = {
      references: [
        { packageRef: D1 },
        { packageRef: D3 },
        { packageRef: D2, parentPackageRef: D1 },
        { packageRef: D2, parentPackageRef: D3 },
        { packageRef: P1, parentPackageRef: D2 },
        { packageRef: P2, parentPackageRef: D3 },
      ],
      packages: {
        [D1]: { kind: 'dashboard' },
        [D2]: { kind: 'dashboard' },
        [D3]: { kind: 'dashboard' },
        [P1]: { kind: 'package', deletedAt: DELETED_AT },
        [P2]: { kind: 'package', hasErrors: true },
      },
    }

    expect(getDeletedDescendantRefs(tree)).toEqual(new Set([D1, D2, D3]))
  })
})

describe('hasReferenceProblems', () => {
  test.each<[string, VersionReferences, boolean]>([
    ['a clean list', nestedPackage({}), false],
    ['a deleted nested reference', nestedPackage({ deletedAt: DELETED_AT }), true],
    ['errors of a nested reference only', nestedPackage({ hasErrors: true }), false],
    ['build errors of a top-level reference', topLevelPackage({ hasErrors: true }), true],
    ['changelog errors of a top-level reference', topLevelPackage({ changelogHasErrors: true }), true],
  ])('returns whether %s is a problem', (_, versionReferences, expected) => {
    expect(hasReferenceProblems(versionReferences)).toBe(expected)
  })
})

function nestedPackage(flags: PackageReference): VersionReferences {
  return {
    references: [{ packageRef: D1 }, { packageRef: P1, parentPackageRef: D1 }],
    packages: { [D1]: { kind: 'dashboard' }, [P1]: { kind: 'package', ...flags } },
  }
}

function topLevelPackage(flags: PackageReference): VersionReferences {
  return {
    references: [{ packageRef: P1 }],
    packages: { [P1]: { kind: 'package', ...flags } },
  }
}
