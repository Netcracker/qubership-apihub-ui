# Runtime Grafana Faro Configuration Injection — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Configure Grafana Faro from runtime Docker ENVs (instead of build-time `VITE_FARO_*`), with the browser reaching the collector through a same-origin nginx reverse proxy.

**Architecture:** A startup-generated `config.js` sets `window.__APIHUB_FARO_CONFIG__`, loaded by `index.html` before the bundle. `faro.ts` merges that runtime config over the build-time `import.meta.env` fallback via a pure `resolveFaroConfig()`. Faro POSTs to the same-origin path `/faro`, which nginx proxies to the real collector — keeping the strict `connect-src 'self'` CSP intact.

**Tech Stack:** TypeScript, Vite, Grafana Faro (`@grafana/faro-react`), Jest (`ts-jest`, node env, `**/*.unit-test.ts`), nginx + `envsubst`, Docker.

## Global Constraints

- License header (Apache 2.0, "Copyright 2024-2025 NetCracker Technology Corporation") must head every new `.ts`/`.tsx` source file — copy verbatim from `packages/shared/src/utils/faro.ts`.
- Follow `docs/dev/CODING_GUIDELINES.md` for any `**/*.{ts,tsx}` change.
- Runtime ENV names: `APIHUB_FARO_COLLECTOR_ADDRESS` (host:port, no scheme), `APIHUB_FARO_API_KEY`, `APIHUB_FARO_ENVIRONMENT`, `APIHUB_FARO_APP_VERSION`.
- Browser-facing collector path is always the same-origin literal `/faro` (never the real address).
- Build-time `VITE_FARO_*` remain supported as a dev fallback only.
- Do not weaken any existing nginx `Content-Security-Policy` header.

---

### Task 1: Pure `resolveFaroConfig()` merge function with unit tests

**Files:**
- Create: `packages/shared/src/utils/faro-config.ts`
- Test: `packages/shared/src/utils/faro-config.unit-test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `type FaroRuntimeConfig = { collectorUrl?: string; apiKey?: string; environment?: string; appVersion?: string }`
  - `type FaroBuildEnv = { VITE_FARO_COLLECTOR_URL?: string; VITE_FARO_API_KEY?: string; VITE_FARO_ENVIRONMENT?: string; VITE_FARO_APP_VERSION?: string }`
  - `function resolveFaroConfig(windowConfig: FaroRuntimeConfig | undefined, buildEnv: FaroBuildEnv): FaroRuntimeConfig` — window values win; empty/missing fall back to build env; falsy/empty-string → `undefined`.

- [ ] **Step 1: Write the failing test**

Create `packages/shared/src/utils/faro-config.unit-test.ts` (include the license header):

```ts
import { resolveFaroConfig } from './faro-config'

describe('resolveFaroConfig', () => {
  it('prefers window config over build env', () => {
    const result = resolveFaroConfig(
      { collectorUrl: '/faro', apiKey: 'win', environment: 'prod', appVersion: '1.2.3' },
      { VITE_FARO_COLLECTOR_URL: 'http://build', VITE_FARO_API_KEY: 'build' },
    )
    expect(result).toEqual({ collectorUrl: '/faro', apiKey: 'win', environment: 'prod', appVersion: '1.2.3' })
  })

  it('falls back to build env when window config is undefined', () => {
    const result = resolveFaroConfig(undefined, {
      VITE_FARO_COLLECTOR_URL: 'http://build',
      VITE_FARO_API_KEY: 'build',
      VITE_FARO_ENVIRONMENT: 'test',
      VITE_FARO_APP_VERSION: '0.0.1',
    })
    expect(result).toEqual({ collectorUrl: 'http://build', apiKey: 'build', environment: 'test', appVersion: '0.0.1' })
  })

  it('falls back per-field when a window field is empty', () => {
    const result = resolveFaroConfig(
      { collectorUrl: '', apiKey: 'win' },
      { VITE_FARO_COLLECTOR_URL: 'http://build', VITE_FARO_API_KEY: 'build' },
    )
    expect(result.collectorUrl).toBe('http://build')
    expect(result.apiKey).toBe('win')
  })

  it('returns undefined for fields absent from both sources', () => {
    const result = resolveFaroConfig({}, {})
    expect(result).toEqual({ collectorUrl: undefined, apiKey: undefined, environment: undefined, appVersion: undefined })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test --workspace=@netcracker/qubership-apihub-ui-shared -- faro-config`
Expected: FAIL — cannot find module `./faro-config`.

- [ ] **Step 3: Write minimal implementation**

Create `packages/shared/src/utils/faro-config.ts` (with the license header):

```ts
export type FaroRuntimeConfig = {
  collectorUrl?: string
  apiKey?: string
  environment?: string
  appVersion?: string
}

export type FaroBuildEnv = {
  VITE_FARO_COLLECTOR_URL?: string
  VITE_FARO_API_KEY?: string
  VITE_FARO_ENVIRONMENT?: string
  VITE_FARO_APP_VERSION?: string
}

// Merges the runtime window config (injected by config.js at container start) over the
// build-time Vite env fallback. Empty strings are treated as "unset" so a blank runtime
// value never shadows a build-time default. Returns undefined per missing field.
export function resolveFaroConfig(
  windowConfig: FaroRuntimeConfig | undefined,
  buildEnv: FaroBuildEnv,
): FaroRuntimeConfig {
  return {
    collectorUrl: windowConfig?.collectorUrl || buildEnv.VITE_FARO_COLLECTOR_URL || undefined,
    apiKey: windowConfig?.apiKey || buildEnv.VITE_FARO_API_KEY || undefined,
    environment: windowConfig?.environment || buildEnv.VITE_FARO_ENVIRONMENT || undefined,
    appVersion: windowConfig?.appVersion || buildEnv.VITE_FARO_APP_VERSION || undefined,
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test --workspace=@netcracker/qubership-apihub-ui-shared -- faro-config`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add packages/shared/src/utils/faro-config.ts packages/shared/src/utils/faro-config.unit-test.ts
git commit -m "feat: add pure resolveFaroConfig merge for runtime Faro config"
```

---

### Task 2: Wire runtime config into `faro.ts` and declare the window global

**Files:**
- Modify: `packages/shared/src/utils/faro.ts`
- Modify: `packages/shared/src/vite-env.d.ts`

**Interfaces:**
- Consumes: `resolveFaroConfig`, `FaroRuntimeConfig` from Task 1.
- Produces: `initFaro` now sourced from `window.__APIHUB_FARO_CONFIG__` with `import.meta.env` fallback; global `Window.__APIHUB_FARO_CONFIG__?: FaroRuntimeConfig`.

- [ ] **Step 1: Declare the window global**

In `packages/shared/src/vite-env.d.ts`, add an import-type and a `Window` member. Add near the top (after the triple-slash refs, before `import '@mui/material/styles'`):

```ts
import type { FaroRuntimeConfig } from '../src/utils/faro-config'
```

Then inside the existing `interface Window { ... }` block (the one declaring `scheduler`), add:

```ts
    // Injected at container start by /config.js (see nginx/entrypoint.sh).
    __APIHUB_FARO_CONFIG__?: FaroRuntimeConfig
```

Keep the existing `ImportMetaEnv` `VITE_FARO_*` declarations unchanged (dev fallback).

- [ ] **Step 2: Use the resolved config in `initFaro`**

In `packages/shared/src/utils/faro.ts`:

Add the import near the existing imports:

```ts
import { resolveFaroConfig } from './faro-config'
```

Replace the body block from `const collectorUrl = import.meta.env.VITE_FARO_COLLECTOR_URL` through the end of the `initializeFaro({...})` `app`/`transports` config so it reads:

```ts
  const config = resolveFaroConfig(
    typeof window !== 'undefined' ? window.__APIHUB_FARO_CONFIG__ : undefined,
    import.meta.env,
  )
  const collectorUrl = config.collectorUrl
  if (!collectorUrl) {
    return undefined
  }

  const baseUrl = collectorUrl.replace(/\/+$/, '')

  faroInstance = initializeFaro({
    app: {
      name: options.app.name,
      version: options.app.version ?? config.appVersion ?? DEFAULT_FARO_APP_VERSION,
      environment: config.environment ?? DEFAULT_FARO_ENVIRONMENT,
    },
    transports: [
      new OtlpHttpTransport({
        tracesURL: `${baseUrl}${OTLP_TRACES_PATH}`,
        logsURL: `${baseUrl}${OTLP_LOGS_PATH}`,
        apiKey: config.apiKey,
      }),
    ],
```

Leave the `instrumentations` array and the rest of the function unchanged. Update the file's top-of-function comment to say configuration is read from the runtime `window.__APIHUB_FARO_CONFIG__` (injected by `config.js`) with build-time `VITE_FARO_*` as a fallback.

- [ ] **Step 3: Verify the shared package type-checks and tests pass**

Run: `npm run test --workspace=@netcracker/qubership-apihub-ui-shared -- faro-config`
Expected: PASS (unchanged from Task 1; confirms no regressions in shared build/transform).

Run: `npx tsc -p packages/shared/tsconfig.json --noEmit` (or the repo's lint/typecheck command if `tsc` config differs)
Expected: no new type errors referencing `faro.ts` / `vite-env.d.ts`.

- [ ] **Step 4: Commit**

```bash
git add packages/shared/src/utils/faro.ts packages/shared/src/vite-env.d.ts
git commit -m "feat: source Faro config from runtime window.__APIHUB_FARO_CONFIG__"
```

---

### Task 3: Default `config.js` and `index.html` script tags (portal + agents)

**Files:**
- Create: `packages/portal/public/config.js`
- Create: `packages/agents/public/config.js`
- Modify: `packages/portal/index.html`
- Modify: `packages/agents/index.html`

**Interfaces:**
- Consumes: the `window.__APIHUB_FARO_CONFIG__` shape from Task 2.
- Produces: a same-origin `config.js` asset and the `<script>` tags that load it before the module bundle.

- [ ] **Step 1: Create the default no-op config for portal**

Create `packages/portal/public/config.js` (Vite copies `public/` to `dist/` root → served at `/config.js`):

```js
// Default no-op Faro config. Overwritten at container start by nginx/entrypoint.sh
// from APIHUB_FARO_* environment variables. Kept so dev/build never 404 on /config.js.
window.__APIHUB_FARO_CONFIG__ = {};
```

- [ ] **Step 2: Create the default no-op config for agents**

Create `packages/agents/public/config.js` with identical content. (Agents Vite `base` is `/agents`, so this is served at `/agents/config.js`.)

- [ ] **Step 3: Add the script tag to portal `index.html`**

In `packages/portal/index.html`, add inside `<head>`, as the last line before `</head>`:

```html
    <script src="/config.js"></script>
```

- [ ] **Step 4: Add the script tag to agents `index.html`**

In `packages/agents/index.html`, add inside `<head>`, as the last line before `</head>`:

```html
    <script src="/agents/config.js"></script>
```

- [ ] **Step 5: Verify the dev fallback still loads (smoke check)**

Run: `npm run build --workspace=@netcracker/qubership-apihub-ui-portal`
Expected: build succeeds; `packages/portal/dist/config.js` exists and `packages/portal/dist/index.html` contains `<script src="/config.js">`.

- [ ] **Step 6: Commit**

```bash
git add packages/portal/public/config.js packages/agents/public/config.js packages/portal/index.html packages/agents/index.html
git commit -m "feat: load runtime config.js before app bundle (portal + agents)"
```

---

### Task 4: Generate `config.js` from ENVs in `entrypoint.sh`

**Files:**
- Modify: `nginx/entrypoint.sh`

**Interfaces:**
- Consumes: `APIHUB_FARO_COLLECTOR_ADDRESS`, `APIHUB_FARO_API_KEY`, `APIHUB_FARO_ENVIRONMENT`, `APIHUB_FARO_APP_VERSION` env vars.
- Produces: `/usr/share/nginx/html/portal/config.js` and `/usr/share/nginx/html/agents/config.js` at startup; exported `APIHUB_FARO_COLLECTOR_ADDRESS` (defaulted) for the nginx `envsubst` step in Task 5.

- [ ] **Step 1: Add the config.js generation block**

In `nginx/entrypoint.sh`, insert the following block AFTER the `adjust_addr APIHUB_AGENTS_BACKEND_ADDRESS` line (line ~46) and BEFORE the `envsubst ... nginx.conf` line (line ~50):

```sh
# Grafana Faro runtime config. When a collector address is provided the browser is pointed at
# the same-origin "/faro" proxy (see nginx.conf.template); otherwise Faro stays disabled.
if [ -n "${APIHUB_FARO_COLLECTOR_ADDRESS:-}" ]; then
  FARO_BODY="window.__APIHUB_FARO_CONFIG__ = {
  collectorUrl: \"/faro\",
  apiKey: \"${APIHUB_FARO_API_KEY:-}\",
  environment: \"${APIHUB_FARO_ENVIRONMENT:-}\",
  appVersion: \"${APIHUB_FARO_APP_VERSION:-}\"
};"
else
  FARO_BODY="window.__APIHUB_FARO_CONFIG__ = {};"
fi
for dir in portal agents; do
  target="/usr/share/nginx/html/${dir}/config.js"
  [ -d "/usr/share/nginx/html/${dir}" ] && printf '%s\n' "$FARO_BODY" >"$target"
done

# Default to a non-resolvable sentinel so the /faro location always renders even when unset.
APIHUB_FARO_COLLECTOR_ADDRESS="${APIHUB_FARO_COLLECTOR_ADDRESS:-invalid.invalid.:80}"
export APIHUB_FARO_COLLECTOR_ADDRESS
```

- [ ] **Step 2: Add the new var to the nginx envsubst whitelist**

In the same file, change the `envsubst` invocation (line ~50) to include `${APIHUB_FARO_COLLECTOR_ADDRESS}`:

```sh
envsubst '${APIHUB_BACKEND_ADDRESS} ${APIHUB_NC_SERVICE_ADDRESS} ${API_LINTER_SERVICE_ADDRESS} ${APIHUB_AGENTS_BACKEND_ADDRESS} ${APIHUB_FARO_COLLECTOR_ADDRESS} ${DNS_RESOLVERS}' </app/nginx.conf.template >/app/nginx/nginx.conf
```

- [ ] **Step 3: Syntax-check the script**

Run: `sh -n nginx/entrypoint.sh`
Expected: no output (valid POSIX sh).

- [ ] **Step 4: Verify generation logic locally (enabled case)**

Run:
```bash
mkdir -p /tmp/faro-test/portal /tmp/faro-test/agents
APIHUB_FARO_COLLECTOR_ADDRESS=otel-collector:4318 APIHUB_FARO_API_KEY=test APIHUB_FARO_ENVIRONMENT=test APIHUB_FARO_APP_VERSION=0.0.1 \
sh -c 'if [ -n "${APIHUB_FARO_COLLECTOR_ADDRESS:-}" ]; then FARO_BODY="window.__APIHUB_FARO_CONFIG__ = {
  collectorUrl: \"/faro\",
  apiKey: \"${APIHUB_FARO_API_KEY:-}\",
  environment: \"${APIHUB_FARO_ENVIRONMENT:-}\",
  appVersion: \"${APIHUB_FARO_APP_VERSION:-}\"
};"; else FARO_BODY="window.__APIHUB_FARO_CONFIG__ = {};"; fi; for dir in portal agents; do printf "%s\n" "$FARO_BODY" >/tmp/faro-test/${dir}/config.js; done'
cat /tmp/faro-test/portal/config.js
```
Expected: prints the object with `collectorUrl: "/faro"`, `apiKey: "test"`, `environment: "test"`, `appVersion: "0.0.1"`.

- [ ] **Step 5: Commit**

```bash
git add nginx/entrypoint.sh
git commit -m "feat: generate Faro config.js from APIHUB_FARO_* env at startup"
```

---

### Task 5: nginx `/faro` proxy + `config.js` no-store

**Files:**
- Modify: `nginx/nginx.conf.template`

**Interfaces:**
- Consumes: `${APIHUB_FARO_COLLECTOR_ADDRESS}` (set/defaulted and whitelisted in Task 4), `${DNS_RESOLVERS}` resolver (already configured).
- Produces: same-origin `/faro/*` → `<collector>/*` proxy; `no-store` caching for `config.js`.

- [ ] **Step 1: Add the config.js no-store location**

In `nginx/nginx.conf.template`, inside the `server { ... }` block, add this BEFORE the first generic `location ~* ^/agents/.*\.(?:js|...)$` cache block (so it wins over the `immutable` rule). Place it right after the `location ~ ^/(portal|agents)/index\.html$ { ... }` block:

```nginx
        # Runtime Faro config must never be cached (regenerated each container start).
        location ~ ^/(?:agents/)?config\.js$ {
            root /usr/share/nginx/html;
            add_header Cache-Control "no-store" always;
            add_header X-Content-Type-Options  "nosniff"                         always;
            add_header X-XSS-Protection        "0"                               always;
            add_header Referrer-Policy         "strict-origin-when-cross-origin" always;
            add_header X-Frame-Options         "DENY"                            always;
            add_header Content-Security-Policy "frame-ancestors 'none'"          always;
            try_files $uri /portal$uri =404;
        }
```

Note: `try_files $uri /portal$uri` resolves both `/agents/config.js` (matches `$uri` under root) and the portal `/config.js` (served from `/usr/share/nginx/html/portal/config.js`).

- [ ] **Step 2: Add the /faro reverse-proxy location**

Add this location alongside the other dynamic-upstream proxy blocks (e.g. right after the `location ^~ /agents-backend { ... }` block):

```nginx
        # Same-origin proxy to the OTLP/HTTP collector for Grafana Faro (browser-side).
        # Keeps the strict connect-src 'self' CSP intact. Dynamic upstream resolution.
        location ^~ /faro {
            set $faro_upstream http://${APIHUB_FARO_COLLECTOR_ADDRESS};

            add_header Cache-Control "no-store" always;
            add_header X-Content-Type-Options  "nosniff"                         always;
            add_header X-XSS-Protection        "0"                               always;
            add_header Referrer-Policy         "strict-origin-when-cross-origin" always;
            add_header X-Frame-Options         "DENY"                            always;
            add_header Content-Security-Policy "frame-ancestors 'none'"          always;
            rewrite ^/faro/(.*)$ /$1 break;

            proxy_pass $faro_upstream;

            proxy_connect_timeout 1s;
            proxy_next_upstream off;
            proxy_intercept_errors off;
        }
```

- [ ] **Step 3: Validate the rendered config with nginx**

Run (renders the template like the entrypoint then tests config syntax):
```bash
docker run --rm -e APIHUB_BACKEND_ADDRESS=b:80 -e APIHUB_NC_SERVICE_ADDRESS=nc:80 \
  -e API_LINTER_SERVICE_ADDRESS=lint:80 -e APIHUB_AGENTS_BACKEND_ADDRESS=ag:80 \
  -e APIHUB_FARO_COLLECTOR_ADDRESS=otel-collector:4318 -e DNS_RESOLVERS=127.0.0.11 \
  -v "$PWD/nginx/nginx.conf.template:/t.template:ro" nginx:1.30.1-alpine3.23 \
  sh -c 'envsubst "\$APIHUB_BACKEND_ADDRESS \$APIHUB_NC_SERVICE_ADDRESS \$API_LINTER_SERVICE_ADDRESS \$APIHUB_AGENTS_BACKEND_ADDRESS \$APIHUB_FARO_COLLECTOR_ADDRESS \$DNS_RESOLVERS" </t.template >/tmp/n.conf && nginx -c /tmp/n.conf -t'
```
Expected: `nginx: configuration file /tmp/n.conf test is successful`. (If Docker is unavailable, run the same `envsubst` + `nginx -t` inside the built image.)

- [ ] **Step 4: Commit**

```bash
git add nginx/nginx.conf.template
git commit -m "feat: add same-origin /faro proxy and no-store config.js to nginx"
```

---

### Task 6: Main `Dockerfile` idempotent script-tag injection

**Files:**
- Modify: `Dockerfile`

**Interfaces:**
- Consumes: the extracted published packages at `/usr/share/nginx/html/{portal,agents}`.
- Produces: `index.html` files that load `config.js` even when built from a published package that predates the source change.

- [ ] **Step 1: Inject the script tags after extraction**

In `Dockerfile`, after line 24 (`RUN tar zxvf ./qubership-apihub-ui-portal.tgz ...`) and before the `find ... -exec touch` line, add:

```dockerfile
# Ensure index.html loads the runtime Faro config (idempotent: published packages built from
# this branch already include the tag, in which case these are no-ops).
RUN grep -q 'config\.js' /usr/share/nginx/html/portal/index.html || \
    sed -i 's#</head>#  <script src="/config.js"></script>\n  </head>#' /usr/share/nginx/html/portal/index.html
RUN grep -q 'config\.js' /usr/share/nginx/html/agents/index.html || \
    sed -i 's#</head>#  <script src="/agents/config.js"></script>\n  </head>#' /usr/share/nginx/html/agents/index.html
```

- [ ] **Step 2: Verify the injection logic against the source index.html (proxy for published)**

Run (simulates injection on a tag-less copy):
```bash
cp packages/agents/index.html /tmp/idx.html
# strip any existing config.js tag to simulate an old published package
sed -i '/config\.js/d' /tmp/idx.html
grep -q 'config\.js' /tmp/idx.html || sed -i 's#</head>#  <script src="/agents/config.js"></script>\n  </head>#' /tmp/idx.html
grep -c 'agents/config.js' /tmp/idx.html
# run again to prove idempotency
grep -q 'config\.js' /tmp/idx.html || sed -i 's#</head>#  <script src="/agents/config.js"></script>\n  </head>#' /tmp/idx.html
grep -c 'agents/config.js' /tmp/idx.html
```
Expected: prints `1` then `1` (injected once, second run is a no-op).

- [ ] **Step 3: Commit**

```bash
git add Dockerfile
git commit -m "feat: inject runtime config.js script into published index.html"
```

---

### Task 7: End-to-end manual verification

**Files:** none (verification only).

- [ ] **Step 1: Build the UI from the branch**

Run: `npm run build` (or the per-package builds used for `Dockerfile.local`).
Expected: `packages/{portal,agents}/dist/index.html` reference `config.js`; `dist/config.js` present.

- [ ] **Step 2: Run the container with Faro enabled**

Start the image (Dockerfile.local or main) with:
```
APIHUB_FARO_COLLECTOR_ADDRESS=otel-collector:4318
APIHUB_FARO_API_KEY=test
APIHUB_FARO_ENVIRONMENT=test
APIHUB_FARO_APP_VERSION=0.0.1
```
on the same docker network as the collector, published on `localhost:8081`.

- [ ] **Step 3: Verify in the browser**

- `curl -i http://localhost:8081/config.js` → `Cache-Control: no-store` and a body with `collectorUrl: "/faro"`.
- Chrome DevTools → Network: POSTs to `/faro/v1/traces` and `/faro/v1/logs` returning 2xx.
- Confirm traces appear in Tempo and logs in VictoriaLogs.

- [ ] **Step 4: Verify the disabled path**

Restart the container WITHOUT `APIHUB_FARO_COLLECTOR_ADDRESS`.
Expected: `/config.js` body is `window.__APIHUB_FARO_CONFIG__ = {};`; no `/faro` requests in DevTools; app behaves normally.

---

## Self-Review

- **Spec coverage:** faro.ts (T2) ✓, vite-env.d.ts (T2) ✓, default config.js (T3) ✓, index.html portal+agents (T3) ✓, entrypoint.sh generation + envsubst whitelist (T4) ✓, nginx /faro + config.js no-store (T5) ✓, Dockerfile.local no-change (noted, T7) ✓, main Dockerfile injection (T6) ✓, ENV rename (Global Constraints + T4) ✓, testing (T1 unit + T7 manual) ✓.
- **Placeholder scan:** none — every code/command step is concrete.
- **Type consistency:** `resolveFaroConfig(windowConfig, buildEnv)`, `FaroRuntimeConfig`, `__APIHUB_FARO_CONFIG__`, and the `APIHUB_FARO_*` env names are used identically across Tasks 1–6.
