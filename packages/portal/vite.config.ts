import { defineConfig, type Plugin } from 'vite'
import { readFileSync } from 'fs'
import react from '@vitejs/plugin-react'
import monacoEditor from 'vite-plugin-monaco-editor'
import path, { resolve } from 'path'
import NodeModulesPolyfill from '@esbuild-plugins/node-modules-polyfill'
import NodeGlobalsPolyfill from '@esbuild-plugins/node-globals-polyfill'
import copy from 'rollup-plugin-copy'
import ignoreDotsOnDevServer from 'vite-plugin-rewrite-all'
import { VitePluginFonts } from 'vite-plugin-fonts'
import { visualizer as bundleVisualizer } from 'rollup-plugin-visualizer'
import inject from '@rollup/plugin-inject'
import monacoWorkerHashPlugin from '../../vite-monaco-worker-hash'
import createVersionJsonFilePlugin from '../../vite-create-version-json'

// libpg-query (the Emscripten glue under pgsql-parser, pulled in transitively by
// @netcracker/qubership-apihub-ddlapi) is a CJS/UMD module that fetches `libpg-query.wasm`
// at runtime via locateFile(). It must be pre-bundled by esbuild (so its CJS default import
// of libpg-query.js interops), and its no-arg PgQueryModule() call must be rewritten to pass
// a locateFile() pointing at a stable served URL. We ship the wasm in `public/` so the URL is
// just `/libpg-query.wasm` (no hashing, works from the web worker too). This is an esbuild
// onLoad plugin (not a Vite/rollup transform) so it runs inside the dep optimizer.
const libpgQueryWasmLocateEsbuild = {
  name: 'libpg-query-wasm-locate',
  setup(build: { onLoad: (opts: { filter: RegExp }, cb: (args: { path: string }) => { contents: string; loader: 'js' }) => void }) {
    build.onLoad({ filter: /libpg-query[/\\]wasm[/\\]index\.js$/ }, (args) => {
      const src = readFileSync(args.path, 'utf8')
      return {
        contents: src.replace(
          'PgQueryModule()',
          "PgQueryModule({ locateFile: () => '/libpg-query.wasm' })",
        ),
        loader: 'js',
      }
    })
  },
}

// Production (rollup) locateFile injection — the build-time counterpart of libpgQueryWasmLocateEsbuild
// (which only runs in the DEV optimizer). libpg-query's `wasm/index.js` calls a no-arg `PgQueryModule()`
// at module top level, so the Emscripten glue resolves the wasm relative to its hashed chunk URL → 404
// under nginx (the wasm is served from the site root as /libpg-query.wasm). This `transform` rewrites
// that call to pass a locateFile pointing at the root. enforce:'pre' runs before Vite's commonjs interop.
//
// CRUCIAL: libpg-query runs inside the PackageVersionBuilder WEB WORKER, and Vite 4 builds `?worker`
// bundles in a SEPARATE pass that does NOT apply the main `config.plugins`. So this plugin must be
// registered BOTH in `plugins` (main/app bundle) AND in `worker.plugins` (worker bundle) — otherwise
// the worker copy keeps the default PgQueryModule() and the wasm 404s in prod. This is why a node_modules
// patch (patch-package) is NOT needed: worker.plugins reaches the same module the worker bundles.
const injectLibpgQueryLocateFile = (): Plugin => ({
  name: 'libpg-query-wasm-locate-build',
  apply: 'build',
  enforce: 'pre',
  transform(code, id) {
    if (/libpg-query[/\\]wasm[/\\]index\.js$/.test(id) && code.includes('PgQueryModule()')) {
      return {
        code: code.replace(
          'PgQueryModule()',
          "PgQueryModule({ locateFile: () => '/libpg-query.wasm' })",
        ),
        map: null,
      }
    }
    return null
  },
})

// Emit the Emscripten wasm into the production dist as an unhashed root asset (/libpg-query.wasm,
// matching the injected locateFile above), located via require.resolve. This REPLACES a
// rollup-plugin-copy target with a hardcoded `../../node_modules/libpg-query/...` src: that path only
// resolves when libpg-query happens to hoist to the monorepo root, and rollup-plugin-copy does NOT fail
// on a missing src — so in CI it silently produced no wasm, the published portal shipped without it, and
// /libpg-query.wasm fell through nginx try_files to index.html → the worker got HTML ("expected magic
// word 00 61 73 6d, found 3c 21 44 4f" = "<!DO…"). require.resolve finds libpg-query wherever it is
// installed and throws loudly at build time if the dep is missing.
const emitLibpgQueryWasm = (): Plugin => ({
  name: 'emit-libpg-query-wasm',
  apply: 'build',
  generateBundle() {
    const wasmPath = require.resolve('libpg-query/wasm/libpg-query.wasm')
    this.emitFile({
      type: 'asset',
      fileName: 'libpg-query.wasm',
      source: readFileSync(wasmPath),
    })
  },
})

// Dev server: answer GET /libpg-query.wasm straight from the resolved libpg-query package in
// node_modules, so the served wasm ALWAYS matches the libpg-query version actually loaded by the
// worker. A hand-maintained public/libpg-query.wasm silently goes stale on every libpg-query bump
// and yields a "section extends past end of the module" CompileError (version mismatch). require
// .resolve picks the same (deduped) copy the bundler uses. Prod is covered by the rollup-plugin
// -copy target into dist/ below; this plugin is dev-only (apply: 'serve').
const serveLibpgQueryWasmDev = (): Plugin => ({
  name: 'serve-libpg-query-wasm-dev',
  apply: 'serve',
  configureServer(server) {
    const wasmPath = require.resolve('libpg-query/wasm/libpg-query.wasm')
    server.middlewares.use('/libpg-query.wasm', (_req, res) => {
      res.setHeader('Content-Type', 'application/wasm')
      res.end(readFileSync(wasmPath))
    })
  },
})

// const proxyServer = 'https://qubership-apihub-2.localtest.me/'
const proxyServer = 'http://host.docker.internal:8081'
const apiLinterProxyServer = 'http://host.docker.internal:8091'
const devServer = 'http://localhost:3003'

export default defineConfig(({ mode }) => {
  const isProxyMode = mode === 'proxy'

  return {
    plugins: [
      react({ fastRefresh: false }),
      serveLibpgQueryWasmDev(),
      emitLibpgQueryWasm(),
      injectLibpgQueryLocateFile(),
      bundleVisualizer(),
      ignoreDotsOnDevServer(),
      monacoEditor({
        languageWorkers: ['editorWorkerService', 'json'],
        customWorkers: [{
          label: 'yaml',
          entry: 'monaco-yaml/yaml.worker',
        }, {
          label: 'graphql',
          entry: 'monaco-graphql/dist/graphql.worker',
        }],
      }),
      monacoWorkerHashPlugin({ monacoDir: 'dist/monacoeditorwork', htmlPath: 'dist/index.html' }),
      copy({
        targets: [
          {
            src: '../../node_modules/@netcracker/qubership-apihub-apispec-view/dist/index.js',
            dest: 'dist/apispec-view/',
          },
          {
            src: '../../node_modules/@netcracker/qubership-apihub-apispec-view/dist/index.css',
            dest: 'dist/apispec-view/',
          },
          {
            src: '../../node_modules/@netcracker/qubership-apihub-apispec-view/dist/index.js.LICENSE.txt',
            dest: 'dist/apispec-view/',
          },
        ],
        flatten: true,
        hook: 'writeBundle',
      }),
      VitePluginFonts({
        custom: {
          families: [{
            name: 'Inter',
            local: 'Inter',
            src: './public/fonts/*.woff2',
          }],
          display: 'auto',
          preload: true,
          prefetch: false,
          injectTo: 'head-prepend',
        },
      }),
      createVersionJsonFilePlugin(),
    ],
    optimizeDeps: {
      // npm link creates a symlink that points outside node_modules and by default such packages are not optimized.
      // Using "include" here forces listed packages to be optimized.
      // For example, without this setting, esbuildOptions are not being applied to the npm-linked
      // @netcracker/qubership-apihub-api-processor during "npm run proxy", which leads to reference errors
      // like "process is not defined" and "Buffer is not defined".
      include: [
        '@netcracker/qubership-apihub-api-processor',
        // Pre-bundle the ddlapi → pgsql-parser → libpg-query chain so esbuild interops the
        // CJS/UMD Emscripten glue (libpg-query.js has no ESM default export) and the
        // libpgQueryWasmLocate plugin can inject locateFile during optimization.
        '@netcracker/qubership-apihub-ddlapi',
        'pgsql-parser',
        'libpg-query',
      ],
      esbuildOptions: {
        plugins: [
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          libpgQueryWasmLocateEsbuild as any,
          NodeModulesPolyfill(),
          NodeGlobalsPolyfill({
            buffer: true,
            process: true,
          }),
        ],
      },
    },
    resolve: {
      // api-processor's bundled ESM build now EXTERNALISES the ddlapi → pgsql-parser → libpg-query
      // chain (see api-processor vite.config), so the worker imports a single copy resolved here
      // instead of a second copy inlined into apihub-builder.es.js. dedupe keeps the npm-linked
      // ddlapi and this package collapsed onto that one optimized + locateFile-patched copy, so the
      // wasm loads from /libpg-query.wasm. This is what removed the old need to hand-patch
      // libpg-query/wasm/index.js in node_modules (which `npm install` kept wiping).
      dedupe: ['@netcracker/qubership-apihub-ddlapi', 'pgsql-parser', 'libpg-query'],
      alias: {
        '@apihub/components': path.resolve(__dirname, './src/components/'),
        '@apihub/entities': path.resolve(__dirname, './src/entities/'),
        '@apihub/api-hooks': path.resolve(__dirname, './src/api-hooks/'),
        '@apihub/routes': path.resolve(__dirname, './src/routes/'),
        '@apihub/utils': path.resolve(__dirname, './src/utils/'),
        '@netcracker/qubership-apihub-ui-shared': path.resolve(__dirname, './../shared/src'),
        'buffer': require.resolve('buffer/'),
        '@asyncapi/parser': '@asyncapi/parser/browser', // Use browser-compatible version of AsyncAPI parser
      },
    },
    worker: {
      format: 'es',
      // Vite 4 builds worker bundles in a separate pass that does NOT inherit the main `plugins`.
      // libpg-query is bundled into the PackageVersionBuilder worker, so the locateFile injection
      // must be applied here too (see injectLibpgQueryLocateFile) — otherwise the worker copy keeps
      // the default PgQueryModule() and the wasm 404s in prod. This is what lets us avoid a
      // node_modules patch (patch-package).
      plugins: [injectLibpgQueryLocateFile()],
    },
    build: {
      emptyOutDir: true,
      rollupOptions: {
        input: {
          app: resolve(__dirname, 'index.html'),
        },
        plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
      },
    },
    server: {
      open: '/login',
      proxy: {
        '/playground': {
          target: isProxyMode ? `${proxyServer}/playground` : devServer,
          rewrite: isProxyMode ? path => path.replace(/^\/playground/, '') : undefined,
          changeOrigin: true,
          secure: false,
        },
        // Endpoint prefix related to extension which is equal to "qubership-api-linter" has name defined in following file:
        // https://github.com/Netcracker/qubership-apihub/blob/linter/helm-templates/qubership-apihub/values.yaml#L210
        '/api-linter': {
          target: apiLinterProxyServer,
          rewrite: path => path.replace(/^\/api-linter/, ''),
          changeOrigin: true,
          secure: false,
        },
        '/api': {
          target: isProxyMode ? `${proxyServer}/api` : devServer,
          rewrite: isProxyMode ? path => path.replace(/^\/api/, '') : undefined,
          changeOrigin: true,
          secure: false,
        },
        '/ws/v1': {
          target: isProxyMode ? `${proxyServer}/ws` : devServer,
          rewrite: isProxyMode ? path => path.replace(/^\/ws/, '') : undefined,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
  }
})
