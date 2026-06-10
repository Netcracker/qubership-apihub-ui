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

// Production (rollup) counterpart of libpgQueryWasmLocateEsbuild. optimizeDeps — and therefore the
// esbuild onLoad transform above — only runs on the DEV server. The production `vite build` (what
// CI publishes as @netcracker/qubership-apihub-ui-portal and the Docker image serves under nginx)
// would otherwise ship libpg-query with its default no-arg `PgQueryModule()`, so the Emscripten glue
// resolves the wasm relative to its hashed chunk URL (e.g. /assets/libpg-query.wasm) → 404, since the
// wasm is served from the site root as /libpg-query.wasm (rollup-plugin-copy → dist/, nginx `location /`).
// This transform injects the same locateFile during the production build so the deployed bundle loads
// the wasm. enforce:'pre' runs before Vite's commonjs interop rewrites the `PgQueryModule()` call.
const libpgQueryWasmLocateBuild = (): Plugin => ({
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
      libpgQueryWasmLocateBuild(),
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
          {
            // ddlapi → pgsql-parser → libpg-query Emscripten WASM. Served from the site root
            // (`/libpg-query.wasm`) to match the injected locateFile (see libpgQueryWasmLocateEsbuild).
            // PROD only: copies the current node_modules wasm into dist/. Dev is handled by the
            // serveLibpgQueryWasmDev middleware (no public/ copy to go stale).
            src: '../../node_modules/libpg-query/wasm/libpg-query.wasm',
            dest: 'dist/',
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
