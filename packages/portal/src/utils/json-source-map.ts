import { isObject } from '@netcracker/qubership-apihub-ui-shared/utils/objects'
// @ts-expect-error No types, old lib
import * as jsonMap from 'json-source-map'

type Path = string // Example: '' (root) or '/foo/bar/0' (not root)

type Pointer = {
  line: number
  column: number
  pos: number
}

type Pointers = {
  value: Pointer
  valueEnd: Pointer
  key: Pointer
  keyEnd: Pointer
}

interface JsoWithPointers {
  pointers: Record<Path, Pointers>
}

interface StringifiedJso extends JsoWithPointers {
  json: string
}

interface ParsedJso extends JsoWithPointers {
  data: Record<PropertyKey, unknown>
}

export class JsonSourceMap {

  static stringify(data: unknown): StringifiedJso | null {
    if (!isObject(data)) {
      return null
    }
    try {
      return jsonMap.stringify(data, null, 2)
    } catch (error) {
      return null
    }
  }

  static parse(jsoString: string | null = null): ParsedJso | null {
    if (!jsoString) {
      return null
    }
    try {
      return jsonMap.parse(jsoString)
    } catch (error) {
      return null
    }
  }
}
