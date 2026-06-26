/**
 * Routes pgsql-parser to the real module only for the ddlapi browser-parsing graph,
 * and to a stub everywhere else (api-unifier / api-diff shared bundle).
 *
 * The published ddlapi package statically imports pgsql-parser. Rollup deduplicates that
 * dependency unless ddlapi is loaded as a separate module instance (query suffix below).
 */

import fs from 'fs'
import path from 'path'
import type { Plugin } from 'vite'

const BROWSER_DDLAPI_QUERY = 'ddlapi-browser-parser'

const UNIFIER_OR_DIFF_MARKERS = [
  '/qubership-apihub-api-unifier/',
  '/qubership-apihub-api-diff/',
  '/preprocess.',
  'compatibility-suite-utils',
  'property-samples-common',
  'async-api-diffs-utils',
  'merged-document',
] as const

function normalisePath(filePath: string): string {
  return filePath.replace(/\\/g, '/')
}

function matchesAny(normalisedPath: string, markers: readonly string[]): boolean {
  return markers.some((marker) => normalisedPath.includes(marker))
}

function isBrowserDdlApiModule(moduleId: string): boolean {
  return normalisePath(moduleId).includes(BROWSER_DDLAPI_QUERY)
}

function shouldUseRealPgsqlParser(importer: string | undefined): boolean {
  if (importer == null) {
    return false
  }
  const normalisedImporter = normalisePath(importer)
  return (
    normalisedImporter.includes(BROWSER_DDLAPI_QUERY) ||
    normalisedImporter.includes('buildFromDdlInBrowser')
  )
}

export function conditionalPgsqlParserPlugin(uiRootDir: string): Plugin {
  const stubPath = path.resolve(uiRootDir, 'vite-stubs/pgsql-parser.ts')

  return {
    name: 'conditional-pgsql-parser',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      if (source.includes(BROWSER_DDLAPI_QUERY)) {
        const resolved = await this.resolve(
          '@netcracker/qubership-apihub-ddlapi',
          importer,
          { ...options, skipSelf: true },
        )
        if (!resolved) {
          return null
        }
        return `${resolved.id}?${BROWSER_DDLAPI_QUERY}`
      }

      if (source !== 'pgsql-parser' && !source.startsWith('pgsql-parser/')) {
        return null
      }

      if (shouldUseRealPgsqlParser(importer)) {
        return null
      }

      if (importer != null && matchesAny(normalisePath(importer), UNIFIER_OR_DIFF_MARKERS)) {
        return this.resolve(stubPath, importer, { ...options, skipSelf: true })
      }

      return this.resolve(stubPath, importer, { ...options, skipSelf: true })
    },
    load(id) {
      if (!isBrowserDdlApiModule(id)) {
        return null
      }
      const sourcePath = id.split('?')[0]
      return fs.readFileSync(sourcePath, 'utf8')
    },
  }
}
