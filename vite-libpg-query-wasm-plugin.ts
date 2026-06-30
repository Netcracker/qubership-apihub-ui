/**
 * Serves and copies libpg-query.wasm for the Emscripten bundle used by pgsql-parser / ddlapi.
 *
 * Vite places JS chunks under /assets/; libpg-query resolves wasm relative to that URL.
 * Without copying the binary into dist/assets/, browser builds fail at runtime.
 */

import fs from 'fs'
import path from 'path'
import type { Plugin } from 'vite'

const WASM_FILE_NAME = 'libpg-query.wasm'
const WASM_ASSET_PATH = `assets/${WASM_FILE_NAME}`

function resolveWasmSource(uiRootDir: string): string {
  return path.resolve(uiRootDir, 'node_modules/libpg-query/wasm/libpg-query.wasm')
}

function serveWasm(
  reqUrl: string | undefined,
  wasmSource: string,
  res: import('http').ServerResponse,
  next: () => void,
): void {
  if (
    reqUrl === `/${WASM_ASSET_PATH}` ||
    reqUrl === `/${WASM_FILE_NAME}` ||
    reqUrl?.endsWith(`/${WASM_FILE_NAME}`)
  ) {
    res.setHeader('Content-Type', 'application/wasm')
    fs.createReadStream(wasmSource).pipe(res)
    return
  }
  next()
}

export function libpgQueryWasmPlugin(uiRootDir: string): Plugin {
  const wasmSource = resolveWasmSource(uiRootDir)

  return {
    name: 'libpg-query-wasm',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        serveWasm(req.url, wasmSource, res, next)
      })
    },
    writeBundle(options) {
      if (!options.dir) {
        return
      }
      for (const relativeDest of [WASM_ASSET_PATH, WASM_FILE_NAME]) {
        const dest = path.join(options.dir, relativeDest)
        fs.mkdirSync(path.dirname(dest), { recursive: true })
        fs.copyFileSync(wasmSource, dest)
      }
    },
  }
}
