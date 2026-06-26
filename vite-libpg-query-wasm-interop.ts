/**
 * Fixes ESM default import of libpg-query's Emscripten bundle in Vite dev server.
 *
 * libpg-query/wasm/index.js does `import PgQueryModule from './libpg-query.js'`, but the
 * Emscripten file is UMD/CJS and has no ESM default when served via @fs.
 */

import fs from 'fs'
import path from 'path'
import type { Plugin } from 'vite'

const VIRTUAL_WASM_INDEX = '\0libpg-query/wasm/index.js'
const VIRTUAL_EMSCRIPTEN_FACTORY = '\0libpg-query/emscripten-factory'
const EMSCRIPTEN_FACTORY_SPECIFIER = 'virtual:libpg-query-emscripten-factory'

function resolveLibpgQueryPaths(uiRootDir: string) {
  const packageRoot = path.resolve(uiRootDir, 'node_modules/libpg-query')
  return {
    wasmIndexPath: path.join(packageRoot, 'wasm/index.js'),
    wasmJsPath: path.join(packageRoot, 'wasm/libpg-query.js'),
  }
}

function createEmscriptenFactoryModule(wasmJsPath: string): string {
  const emscriptenSource = fs.readFileSync(wasmJsPath, 'utf8')
  return `${emscriptenSource}\nexport default PgQueryModule;\n`
}

function patchWasmIndexSource(wasmIndexSource: string): string {
  return wasmIndexSource.replace(
    "import PgQueryModule from './libpg-query.js';",
    `import PgQueryModule from ${JSON.stringify(EMSCRIPTEN_FACTORY_SPECIFIER)};`,
  )
}

export function libpgQueryWasmInteropPlugin(uiRootDir: string): Plugin {
  const { wasmIndexPath, wasmJsPath } = resolveLibpgQueryPaths(uiRootDir)

  return {
    name: 'libpg-query-wasm-interop',
    enforce: 'pre',
    resolveId(source) {
      if (source === 'libpg-query' || source === 'libpg-query/wasm/index.js') {
        return VIRTUAL_WASM_INDEX
      }
      if (source === EMSCRIPTEN_FACTORY_SPECIFIER) {
        return VIRTUAL_EMSCRIPTEN_FACTORY
      }
      return null
    },
    load(id) {
      if (id === VIRTUAL_WASM_INDEX) {
        const wasmIndexSource = fs.readFileSync(wasmIndexPath, 'utf8')
        return patchWasmIndexSource(wasmIndexSource)
      }

      if (id === VIRTUAL_EMSCRIPTEN_FACTORY) {
        return createEmscriptenFactoryModule(wasmJsPath)
      }

      return null
    },
  }
}
