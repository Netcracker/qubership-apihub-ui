import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import monacoEditor from 'vite-plugin-monaco-editor-esm'
import path, { resolve } from 'path'
import copy from 'rollup-plugin-copy'
import ignoreDotsOnDevServer from 'vite-plugin-rewrite-all'
import Unfonts from 'unplugin-fonts/vite'
import { visualizer as bundleVisualizer } from 'rollup-plugin-visualizer'
import inject from '@rollup/plugin-inject'
import monacoWorkerHashPlugin from '../../vite-monaco-worker-hash'
import createVersionJsonFilePlugin from '../../vite-create-version-json'
import { createRequire } from 'module'

// The config is loaded as an ES module (.mts); recreate the CommonJS `require` used for `require.resolve` below.
const require = createRequire(import.meta.url)

// const proxyServer = 'https://qubership-apihub-2.localtest.me/'
const proxyServer = 'http://host.docker.internal:8081'
const apiLinterProxyServer = 'http://host.docker.internal:8091'
const devServer = 'http://localhost:3003'

export default defineConfig(({ mode }) => {
  const isProxyMode = mode === 'proxy'
  // Bundle-size report is opt-in: set ANALYZE=1. Generating it holds the full module
  // graph in memory and renders an HTML treemap, which inflates build memory and time.
  const analyzeBundle = process.env.ANALYZE === 'true' || process.env.ANALYZE === '1'

  return {
    plugins: [
      react({ fastRefresh: false }),
      analyzeBundle && bundleVisualizer(),
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
      // NOTE: Vite 8 optimises dependencies with Rolldown rather than esbuild, so the previous
      // `esbuildOptions` with @esbuild-plugins node polyfills no longer applies and has been removed.
      // The npm-linked api-processor in `npm run proxy` may again need Buffer/process polyfills;
      // that dev-mode setup must be re-added the Rolldown way in a follow-up.
    },
    resolve: {
      alias: {
        '@apihub/components': path.resolve(import.meta.dirname, './src/components/'),
        '@apihub/entities': path.resolve(import.meta.dirname, './src/entities/'),
        '@apihub/api-hooks': path.resolve(import.meta.dirname, './src/api-hooks/'),
        '@apihub/routes': path.resolve(import.meta.dirname, './src/routes/'),
        '@apihub/utils': path.resolve(import.meta.dirname, './src/utils/'),
        '@netcracker/qubership-apihub-ui-shared': path.resolve(import.meta.dirname, './../shared/src'),
        'buffer': require.resolve('buffer/'),
        '@asyncapi/parser': '@asyncapi/parser/browser', // Use browser-compatible version of AsyncAPI parser
      },
    },
    worker: {
      format: 'es',
    },
    build: {
      emptyOutDir: true,
      // Skip gzip-compressing every chunk just to print its size: costly in memory and time on a large bundle.
      reportCompressedSize: false,
      rollupOptions: {
        input: {
          app: resolve(import.meta.dirname, 'index.html'),
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
