import fs from 'fs'
import path from 'path'
import type { Plugin } from 'vite'

const UI_ROOT = path.resolve(__dirname, '..')
const API_PROCESSOR_PACKAGE = '@netcracker/qubership-apihub-api-processor'

// The apps that request version.json, with the URL each one requests and the dist folder each one is built into.
const APPS = ['portal', 'agents']
const VERSION_JSON_URLS = APPS.map(app => `/${app}/version.json`)

type VersionData = {
  frontendVersion: string
  apiProcessorVersion: string
}

type JsonFile = {
  version?: string
  packages?: Record<string, { version?: string }>
}

function readJson(...segments: string[]): JsonFile {
  return JSON.parse(fs.readFileSync(path.resolve(UI_ROOT, ...segments), 'utf-8'))
}

function readJsonIfExists(...segments: string[]): JsonFile | undefined {
  return fs.existsSync(path.resolve(UI_ROOT, ...segments)) ? readJson(...segments) : undefined
}

export default function createVersionJsonFilePlugin(): Plugin {
  return {
    name: 'create-version-json-file',
    // The dev server has no dist folder, so it serves version.json itself. It reads the api-processor version from
    // the installed package rather than from package-lock.json, which can lag behind a linked or locally installed
    // build. It reads the files on every request, so a relinked api-processor needs no server restart.
    configureServer: function(server) {
      server.middlewares.use((request, response, next) => {
        const url = request.url?.split('?')[0]
        if (!url || !VERSION_JSON_URLS.includes(url)) {
          next()
          return
        }

        const versionData = {
          frontendVersion: readJson('lerna.json').version,
          apiProcessorVersion: readJson('node_modules', API_PROCESSOR_PACKAGE, 'package.json').version,
        }

        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(versionData))
      })
    },
    closeBundle: async function() {
      const frontendVersion = readJsonIfExists('lerna.json')?.version
      const apiProcessorVersion = readJsonIfExists('package-lock.json')
        ?.packages?.[`node_modules/${API_PROCESSOR_PACKAGE}`]?.version

      if (!frontendVersion || !apiProcessorVersion) {
        this.error('Version not found: either lerna.json or package-lock.json does not contain required info')
      }

      const versionData: VersionData = { frontendVersion, apiProcessorVersion }

      for (const app of APPS) {
        const outputDir = path.resolve(UI_ROOT, 'packages', app, 'dist')
        fs.mkdirSync(outputDir, { recursive: true })
        fs.writeFileSync(path.resolve(outputDir, 'version.json'), JSON.stringify(versionData, null, 2))
      }
    },
  }
}
