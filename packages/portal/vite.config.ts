import { defineConfig } from 'vite'
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

const proxyServer = 'http://host.docker.internal:8081'
const devServer = 'http://localhost:3003'
const userView = 'eyJ0b2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJbk5sWTNKbGRDMXBaQ0lzSW5SNWNDSTZJa3BYVkNKOS5leUpGZUhSbGJuTnBiMjV6SWpwN0ltZHBkRWx1ZEdWbmNtRjBhVzl1SWpwYkltWmhiSE5sSWwxOUxDSkhjbTkxY0hNaU9sdGRMQ0pKUkNJNkltdGhlbk14ZFNJc0lrNWhiV1VpT2lKQlVFbElWVUlnVVZWQ1JWSlRTRWxRSWl3aVlYVmtJanBiSWlKZExDSmxlSEFpT2pFM05EUXdORGs1TlRFc0ltbGhkQ0k2TVRjME5EQXdOamMxTVN3aWJtSm1Jam94TnpRME1EQTJOelV4TENKemRXSWlPaUpyWVhwek1YVWlmUS5MUnBqTnREa2hJLW1Kd0M5WmdGczZZTTh5cExmNXRaTWE4dzVqeXdXUlh4UXRnblJTaUZIY3ZrWVFKTDNMVUp3eWVQOFB4Z2l3UDRJdFNvTkdYQlVLTTFKTGo0dXVwYTN0ZVZLLVF0ZmpEQVNady1rNUJQcWJCQVdnU3k5T0tZcXpBZXZkZURPNklFeWJrRE1CeWtwNUpwYXF0NWl3UkhVbnczWlVTLUJqbVNocGt6ckV4cHd3M1pqTEJDOTVTajBadHFyS2RNVWRUWVo4QjZDdkQ4bDhnUFhSYVFBQmF5ZVVteGZlcHZUR19pdkItcFJSUDlZZVQ5ZXVXbzI1MHFvVkVOSVFTaVQzM00xQTRNdVh4Vkk2T2VQYldSSkZCY1RYTU9CSkFVZlNmeXZzOUxxN3dmbXJtUXZFQmY2X0xGaVdBN2xoTjk4WGtGRmU0ZXNBcnczYXciLCJyZW5ld1Rva2VuIjoiZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTmxZM0psZEMxcFpDSXNJblI1Y0NJNklrcFhWQ0o5LmV5SkZlSFJsYm5OcGIyNXpJanA3SW1kcGRFbHVkR1ZuY21GMGFXOXVJanBiSW1aaGJITmxJbDE5TENKSGNtOTFjSE1pT2x0ZExDSkpSQ0k2SW10aGVuTXhkU0lzSWs1aGJXVWlPaUpCVUVsSVZVSWdVVlZDUlZKVFNFbFFJaXdpWVhWa0lqcGJJaUpkTENKbGVIQWlPakUzTkRZMU9UZzNOVEVzSW1saGRDSTZNVGMwTkRBd05qYzFNU3dpYm1KbUlqb3hOelEwTURBMk56VXhMQ0p6ZFdJaU9pSnJZWHB6TVhVaWZRLkRtMFhrUkxDcloxZnlnbkVLM05JbENNS0lFQWZXb1RmMkIyMGNobHlVemFwcDNFb01xUDd5OTIwQ0g4OUQ4RHRCeUUwWU8zNmdRTHVrUERLLUZUcWIyTnlOdHhpM1MxTzljd1JsZFJTOFJreWlfVFJ5NlNmbnQ5aGQxZ2VfOGVlbWJ6NUV6Mm1vVGNtSnprWHVtWVhHZmNKcTNGWmkxZ09sTWtQbzdTWlc2ZnJ0NE5fckNqLVhxbFEzVmdWQ1J6Mk1uWDExaHI4NXFVbDNNX2FXa2ZsdHd4QTRXLXBhQjU0a1hoLS02U3V0WXIyS0IxYWZHekJZRG1FaG1zSGRnU0p4aWhaX1pBQk44X0dEbjh0SW9RTFFIZGNQSzR1YXFYYk9rMGl0Z1AxUWxRS1FiR2k1VXRMMVNnMDZHcFcwNnNXRkJFUG4xRGdXOGJ2MW5lYVF4NVU0dyIsInVzZXIiOnsiaWQiOiJrYXpzMXUiLCJlbWFpbCI6InVzZXJAdXNlciIsIm5hbWUiOiJBUElIVUIgUVVCRVJTSElQIiwiYXZhdGFyVXJsIjoiIn19'

export default defineConfig(({ mode }) => {
  const isProxyMode = mode === 'proxy'

  return {
    plugins: [
      react({ fastRefresh: false }),
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
          }
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
      alias: {
        '@apihub/components': path.resolve(__dirname, './src/components/'),
        '@apihub/entities': path.resolve(__dirname, './src/entities/'),
        '@apihub/hooks': path.resolve(__dirname, './src/hooks/'),
        '@apihub/routes': path.resolve(__dirname, './src/routes/'),
        '@apihub/utils': path.resolve(__dirname, './src/utils/'),
        '@netcracker/qubership-apihub-ui-shared': path.resolve(__dirname, './../shared/src'),
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
      open: `/login?userView=${userView}`,
      proxy: {
        '/playground': {
          target: isProxyMode ? `${proxyServer}/playground` : devServer,
          rewrite: isProxyMode ? path => path.replace(/^\/playground/, '') : undefined,
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
