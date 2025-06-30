import { JsonSourceMap } from './json-source-map'
import { YamlSourceMap } from './yaml-source-map'

export type PathItem = string | number
export type Path = PathItem[]

export type Pointer = {
  line: number
  col: number
}

export interface IDocumentSourceMap {
  pointer(path: Path): Pointer | null
}

const Formats = {
  JSON: 'json',
  YAML: 'yaml',
} as const
type Format = (typeof Formats)[keyof typeof Formats]

type InstanceKey = `[${Format}, ${string}]`

export class DocumentSourceMapFactory {
  private static _instances: Map<InstanceKey, IDocumentSourceMap> = new Map<InstanceKey, IDocumentSourceMap>()

  private static buildInstanceKey(source: string, format: Format): InstanceKey {
    return `[${format}, ${source}]`
  }

  static instance(source: string, format: Format): IDocumentSourceMap {
    const instanceKey = DocumentSourceMapFactory.buildInstanceKey(source, format)
    if (!DocumentSourceMapFactory._instances.has(instanceKey)) {
      switch (format) {
        case Formats.JSON:
          DocumentSourceMapFactory._instances.set(instanceKey, new JsonSourceMap(source))
          break
        case Formats.YAML:
          DocumentSourceMapFactory._instances.set(instanceKey, new YamlSourceMap(source))
          break
        default:
          throw new Error(`Unsupported format: ${format}`)
      }
    }
    return DocumentSourceMapFactory._instances.get(instanceKey)!
  }
}
