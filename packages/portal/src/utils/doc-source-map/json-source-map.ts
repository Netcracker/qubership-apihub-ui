// @ts-expect-error No types, old lib
import * as jsonMap from 'json-source-map'
import type { IDocumentSourceMap, Pointer } from './doc-source-map'

type PathItem = string | number
type Path = PathItem[]
type ConcatenatedPath = string // Example: '' (root) or '/foo/bar/0' (not root)

type JsoPointer = {
  line: number
  column: number
  pos: number
}

type JsoPointers = {
  value: JsoPointer
  valueEnd: JsoPointer
  key: JsoPointer
  keyEnd: JsoPointer
}

type ParsedJso = {
  data: Record<PropertyKey, unknown>
  pointers: Record<ConcatenatedPath, JsoPointers>
}

export class JsonSourceMap implements IDocumentSourceMap {
  private _parsed: ParsedJso | null = null

  constructor(private readonly _source: string) { }

  pointer(path: Path): Pointer | null {
    const parsed = this.parse()
    const concatenatedPath = this.path(path)
    const rawPointer = parsed?.pointers[concatenatedPath]?.key ?? null
    return rawPointer ? {
      line: rawPointer.line,
      col: rawPointer.column,
    } : null
  }

  private parse(): ParsedJso | null {
    try {
      if (!this._parsed) {
        this._parsed = jsonMap.parse(this._source)
      }
    } catch (error) {
      console.error('Error occured during parsing:', error)
    }
    return this._parsed
  }

  private path(path: Path): ConcatenatedPath {
    return path
      .map(part => `/${part}`)
      .join('')
  }
}
