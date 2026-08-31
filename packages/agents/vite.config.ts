/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import monacoEditor from 'vite-plugin-monaco-editor'
import path, { resolve } from 'path'
import NodeModulesPolyfill from '@esbuild-plugins/node-modules-polyfill'
import NodeGlobalsPolyfill from '@esbuild-plugins/node-globals-polyfill'
import Unfonts from 'unplugin-fonts/vite'
import { visualizer as bundleVisualizer } from 'rollup-plugin-visualizer'
import createVersionJsonFilePlugin from '../../vite-create-version-json'

const proxyServer = 'http://host.docker.internal:8081'
const devServer = 'http://localhost:3003'

export default defineConfig(({ mode }) => {
  const isProxyMode = mode === 'proxy'
  // Bundle-size analysis is opt-in via `npm run build:analyze` (which passes `--mode analyze`).
  // It is kept out of the default build because generating the report holds the full module graph
  // in memory and renders an HTML treemap, which inflates build memory and time — the portal CI
  // build has hit the Node heap limit during this phase.
  // Note: a custom mode does NOT make this a non-production build. Vite derives `isProduction`
  // from NODE_ENV, and `vite build` defaults NODE_ENV to 'production' regardless of `--mode`.
  const analyzeBundle = mode === 'analyze'

  return {
    base: !isProxyMode ? '/agents' : '',
    plugins: [
      tsconfigPaths(),
      react({ fastRefresh: false }),
      ...(analyzeBundle ? [bundleVisualizer()] : []),
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
      Unfonts({
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
      ],
      // Keep ddlapi out of esbuild pre-bundling so its self-contained '/parser'
      // (WASM-inlined) stays in the build worker's lazily-loaded chunk rather than
      // being eagerly pre-bundled. Reached only via api-processor/processor.
      exclude: [
        '@netcracker/qubership-apihub-ddlapi',
      ],
      esbuildOptions: {
        plugins: [
          NodeModulesPolyfill(),
          NodeGlobalsPolyfill({
            buffer: true,
            process: true,
          }),
        ],
      },
    },
    resolve: {
      // Path aliases come from tsconfig.json via tsconfigPaths(); only substitutions
      // that no tsconfig declares are listed here. Array form rather than object form
      // because the icons entry below matches on a pattern, which the object form
      // cannot express.
      alias: [
        // Use browser-compatible version of AsyncAPI parser
        { find: '@asyncapi/parser', replacement: '@asyncapi/parser/browser' },
        {
          /* @mui/icons-material has no "exports" map, so a deep import such as
             '@mui/icons-material/InfoOutlined' resolves to the CommonJS file at the
             package root rather than to esm/. Rolldown then applies Node-style CJS
             interop to it - __toESM(mod, isNodeMode) - which forces `default` to the
             whole exports object instead of honouring the module's own __esModule
             marker. The imported icon therefore arrives as { default: icon }, and
             `styled(InfoOutlinedIcon)` in ui-shared renders that object:

               Minified React error #130 (element type is invalid, got: object)

             Pointing the deep icon imports at esm/ removes the CJS interop from the
             path entirely rather than depending on how a bundler resolves it.
             Anchored so an already-resolved 'esm/...' path is not rewritten again. */
          find: /^@mui\/icons-material\/(?!esm\/)(.+)$/,
          replacement: '@mui/icons-material/esm/$1',
        },
      ],
    },
    worker: {
      format: 'es',
      // Worker bundles are a separate rollup pass with their own plugin list.
      // resolve.alias is config-level and applies to them automatically; a resolver
      // plugin is not, so it must be registered here too or aliased imports fail to
      // resolve inside workers only - and nowhere else. Array form, not the function form:
      // vite 4 expects an array here; the callback signature arrived in vite 5.1.
      plugins: [tsconfigPaths()],
    },
    build: {
      emptyOutDir: true,
      // Gzip-compressing every chunk just to print its size costs build time on a bundle this large,
      // so it is skipped by default. It is genuinely useful when analyzing the bundle, so it is
      // enabled together with the visualizer under `npm run build:analyze`.
      reportCompressedSize: analyzeBundle,
      rollupOptions: {
        input: {
          app: resolve(__dirname, 'index.html'),
        },
      },
    },
    server: {
      open: '/login',
      proxy: {
        '/api': { // /apihub-nc/api also proxied as it meets a substring inclusion condition
          target: isProxyMode ? `${proxyServer}` : devServer,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
