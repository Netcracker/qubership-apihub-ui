import type { BuildFromDdlOptions, Realm } from '@netcracker/qubership-apihub-ddlapi'

/**
 * Parses DDL in the browser using the real pgsql-parser / libpg-query stack.
 *
 * Loaded via dynamic import so libpg-query stays in a ddlapi-only async chunk and
 * does not initialise WASM until DDL content is actually viewed.
 */
export async function buildFromDdlInBrowser(
  ddl: string,
  options?: BuildFromDdlOptions,
): Promise<Realm> {
  const { buildFromDdl } = await import(
    '@netcracker/qubership-apihub-ddlapi?ddlapi-browser-parser' as '@netcracker/qubership-apihub-ddlapi'
  )
  return buildFromDdl(ddl, options)
}
