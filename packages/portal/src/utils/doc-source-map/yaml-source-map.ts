import { isObject } from '@netcracker/qubership-apihub-ui-shared/utils/objects'
import type { Document } from 'yaml'
import YAML, { LineCounter } from 'yaml'
import type { IDocumentSourceMap, Path, Pointer } from './doc-source-map'

export type ParsedYaml = {
  tree: Document.Parsed
  lineCounter: LineCounter
}

export class YamlSourceMap implements IDocumentSourceMap {
  private _parsed: ParsedYaml | null = null

  constructor(private readonly _source: string) { }

  pointer(path: Path): Pointer | null {
    const parsed = this.parse()
    const node = parsed?.tree.getIn(path)
    if (isObject(node) && 'range' in node && Array.isArray(node.range)) {
      const { range } = node // [start, end] позиции в тексте
      return parsed?.lineCounter.linePos(range[0]) ?? null // { line, col }
    }
    return null
  }

  private parse(): ParsedYaml | null {
    try {
      if (!this._parsed) {
        const lineCounter = new LineCounter()
        const parsedDocument = YAML.parseDocument(this._source, { lineCounter })
        this._parsed = {
          tree: parsedDocument,
          lineCounter: lineCounter,
        }
      }
    } catch (error) {
      console.error('Error occured during parsing:', error)
    }
    return this._parsed
  }
}
