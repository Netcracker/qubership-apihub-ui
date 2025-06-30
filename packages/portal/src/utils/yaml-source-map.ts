import { isObject } from '@netcracker/qubership-apihub-ui-shared/utils/objects'
import type { Document } from 'yaml'
import YAML, { LineCounter } from 'yaml'

type ParsedYaml = {
  tree: Document.Parsed
  lineCounter: LineCounter
}

type Path = (string | number)[]

type Pointer = {
  line: number
  col: number
}

export class YamlSourceMap {

  static parse(source: string): ParsedYaml {
    const lineCounter = new LineCounter()
    const yamlParse = YAML.parseDocument(source, { lineCounter })
    return {
      tree: yamlParse,
      lineCounter: lineCounter,
    }
  }

  static pointer(path: Path, parsedYaml: ParsedYaml): Pointer | null {
    const node = parsedYaml.tree.getIn(path)
    if (isObject(node) && 'range' in node && Array.isArray(node.range)) {
      const { range } = node // [start, end] позиции в тексте
      return parsedYaml.lineCounter.linePos(range[0]) // { line, col }
    }
    return null
  }
}
