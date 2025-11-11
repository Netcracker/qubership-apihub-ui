import { YAML_FILE_FORMAT, JSON_FILE_FORMAT } from '@apihub/entities/file-formats'
import type { SpecItemUri } from '@netcracker/qubership-apihub-ui-shared/utils/specifications'
import { encodeKey } from '@netcracker/qubership-apihub-ui-shared/utils/specifications'
import { safeParse } from '@stoplight/json'
import YAML from 'js-yaml'
import type { OriginalDocumentFileFormat } from '../types'
import type { IssuePath } from '@apihub/entities/api-quality/issue-paths'

export function issuePathToSpecItemUri(issuePath: IssuePath): SpecItemUri {
  return `/${issuePath.map(pathItem => encodeKey(`${pathItem}`)).join('/')}`
}

export function transformRawDocumentByFormat(
  value: string,
  targetFormat: OriginalDocumentFileFormat,
): [string, OriginalDocumentFileFormat | undefined] {
  value = value.trim()

  let originalFormat: OriginalDocumentFileFormat | undefined
  let parsed: unknown
  if (
    value.startsWith('{') && value.endsWith('}') ||
    value.startsWith('[') && value.endsWith(']')
  ) {
    try {
      parsed = safeParse(value)
      originalFormat = JSON_FILE_FORMAT
    } catch (error) {
      console.error('Error parsing JSON')
      console.error(error)
      return [value, originalFormat]
    }
  } else {
    try {
      parsed = YAML.load(value)
      originalFormat = YAML_FILE_FORMAT
    } catch (error) {
      console.error('Error parsing YAML')
      console.error(error)
      return [value, originalFormat]
    }
  }

  if (originalFormat === targetFormat) {
    return [value, originalFormat]
  }

  switch (targetFormat) {
    case JSON_FILE_FORMAT:
      return [JSON.stringify(parsed, null, 2), originalFormat]
    case YAML_FILE_FORMAT:
      return [YAML.dump(parsed), originalFormat]
    default:
      return [value, originalFormat]
  }
}
