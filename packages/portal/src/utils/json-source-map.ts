import { isObject } from '@netcracker/qubership-apihub-ui-shared/utils/objects'
import type { JsonPath } from '@netcracker/qubership-apihub-ui-shared/utils/operations'
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

/**
 * @description
 * This class is used to create a source map for a JSON object.
 * You are able to stringify an object to the specific object with 2 fields:
 * - json: the stringified JSON object
 * - pointers: the source map for the JSON object
 * In case if you provided already string, it will be parsed and the source map will be created.
 * Usage: static method stringify(source: unknown): StringifiedJso | null
 * 
 * You are able to parse a stringified JSON object to the specific object with 2 fields:
 * - data: the parsed JSON object
 * - pointers: the source map for the JSON object
 * In case if you provided already string, it will be parsed and the source map will be created.
 * Usage: static method parse(source: unknown): ParsedJso | null
 * 
 * You are able to get the pointers for the specific JSON path.
 * Pay attention, that JSON path is specified as an array of strings and numbers 
 * which means sequence of keys to target part of an object.
 * For example, if you have the following object:
 * {
 *   "foo": {
 *     "bar": [1, 2, 3]
 *   }
 * }
 * Then the JSON path for the value 2 is ['foo', 'bar', 1].
 * Usage: static method pointers(jsonPath: JsonPath, source: StringifiedJso | ParsedJso): Pointers | null
 * 
 */
export class JsonSourceMap {

  /**
   * Method receives unknown source and returns StringifiedJso or null.
   * 
   * 1. If source is a string, it will be parsed and the source map will be created.
   * 2. If source is an object, it will be stringified and the source map will be created.
   * 3. If source is not an object or a string, it will return null.
   * 
   * @param source - unknown source
   * @returns StringifiedJso or null
   */
  static stringify(source: unknown): StringifiedJso | null {
    if (typeof source === 'string') {
      const parsed = JsonSourceMap.parse(source)
      return {
        json: source,
        pointers: parsed?.pointers ?? {},
      }
    }
    if (!isObject(source)) {
      return null
    }
    try {
      return jsonMap.stringify(source, null, 2)
    } catch (error) {
      console.error('Error occured during stringification:', error)
    }
    return null
  }

  /**
   * Method receives unknown source and returns ParsedJso or null.
   * 
   * 1. If source is an object, it will be stringified and the source map will be created.
   * 2. If source is a string, it will be parsed and the source map will be created.
   * 3. If source is not an object or a string, it will return null.
   * 
   * @param source - unknown source
   * @returns ParsedJso or null
   */
  static parse(source: unknown): ParsedJso | null {
    if (isObject(source)) {
      const stringified = JsonSourceMap.stringify(source)
      return {
        data: source,
        pointers: stringified?.pointers ?? {},
      }
    }
    if (typeof source !== 'string') {
      return null
    }
    try {
      return jsonMap.parse(source)
    } catch (error) {
      console.error('Error occured during parsing:', error)
    }
    return null
  }

  /**
   * Method receives JSON path and source and returns Pointers or null.
   * 
   * JSON path is specified as an array of strings and numbers 
   * which means sequence of keys to target part of an object.
   * For example, if you have the following object:
   * {
   *   "foo": {
   *     "bar": [1, 2, 3]
   *   }  
   * }
   * Then the JSON path for the value 2 is ['foo', 'bar', 1].
   * 
   * @param jsonPath - JSON path
   * @param source - StringifiedJso or ParsedJso
   * @returns Pointers or null
   */
  static pointers(jsonPath: JsonPath, source: StringifiedJso | ParsedJso): Pointers | null {
    const path = JsonSourceMap.path(jsonPath)
    return source.pointers[path] ?? null
  }

  private static path(jsonPath: JsonPath): Path {
    return jsonPath
      .filter<string | number>(part => typeof part !== 'symbol')
      .map(part => `/${part}`)
      .join('')
  }
}
