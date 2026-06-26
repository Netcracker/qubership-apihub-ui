/**
 * Browser-safe stub for pgsql-parser in the main portal bundle.
 *
 * Packages that only need ddlapi model constants must not pull libpg-query (WASM)
 * into shared chunks. Real parsing lives in a separate async chunk — see
 * buildFromDdlInBrowser.ts and the conditional resolver in portal vite.config.ts.
 */

const unavailable = (): never => {
  throw new Error(
    'pgsql-parser stub: buildFromDdl is only available via buildFromDdlInBrowser().',
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
