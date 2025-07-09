import type { SpecItemUri } from '@netcracker/qubership-apihub-ui-shared/utils/specifications'
import { encodeKey } from '@netcracker/qubership-apihub-ui-shared/utils/specifications'
import type { IssuePath } from '../types'

export function issuePathToSpecItemUri(issuePath: IssuePath): SpecItemUri {
  return `/${issuePath.map(pathItem => encodeKey(`${pathItem}`)).join('/')}`
}
