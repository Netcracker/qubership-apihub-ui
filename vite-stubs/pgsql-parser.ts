/**
 * Browser-safe stub for pgsql-parser in the portal bundle.
 *
 * ddlapi re-exports buildFromDdl, which depends on pgsql-parser / libpg-query (WASM).
 * The portal consumes pre-normalised Realm data from internal documents and must not
 * ship the parser stack. This stub is wired via resolve.alias in portal vite.config.ts.
 */

const unavailable = (): never => {
  throw new Error(
    'pgsql-parser stub: browser DDL parsing is not supported in the portal.',
  )
}

export async function parse(_query: string): Promise<{ stmts?: unknown[] }> {
  return unavailable()
}

export function parseSync(_query: string): { stmts?: unknown[] } {
  return unavailable()
}

export async function loadModule(): Promise<void> {
  return unavailable()
}

export async function deparse(_ast: unknown): Promise<string> {
  return unavailable()
}

export function deparseSync(_ast: unknown): string {
  return unavailable()
}
