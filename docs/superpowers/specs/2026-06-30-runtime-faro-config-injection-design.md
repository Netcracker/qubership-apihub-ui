# Runtime Grafana Faro configuration injection

Date: 2026-06-30
Branch: feature/integrate-grafana-faro

## Problem

Grafana Faro is configured from `import.meta.env.VITE_FARO_*`, which Vite **inlines at
build time**. The shipped bundle contains `const e = {}.VITE_FARO_COLLECTOR_URL; if (!e) return;`
— i.e. `undefined` — so `initFaro` always hits its early `return` and Faro never initializes.
Setting `VITE_FARO_*` ENVs on the running container therefore has no effect.

Two further blockers would prevent telemetry even if the vars were baked:

1. **CSP**: the nginx SPA locations send `Content-Security-Policy: ... connect-src 'self'`,
   so the browser blocks any request to a non-same-origin collector.
2. **Reachability**: the browser runs on the host and cannot resolve a docker-network /
   k8s service name such as `otel-collector`.

## Goal

Configure Faro from **runtime** container ENVs, with the browser reaching the collector
through a same-origin nginx reverse proxy (so the strict CSP stays unchanged).

## Approach

Runtime config flow:

```
Docker ENV  →  entrypoint.sh writes config.js  →  index.html loads config.js before the bundle
            →  faro.ts reads window.__APIHUB_FARO_CONFIG__  →  Faro POSTs to same-origin /faro
            →  nginx location /faro proxies to the real collector
```

The browser always talks to the same-origin path `/faro`; the real collector address is an
nginx-side concern only.

## Components

### 1. `packages/shared/src/utils/faro.ts`
- Add `resolveFaroConfig()` returning `{ collectorUrl, apiKey, environment, appVersion }`,
  reading `window.__APIHUB_FARO_CONFIG__` first and falling back to `import.meta.env.VITE_FARO_*`
  (keeps `vite dev` working).
- `initFaro` consumes the resolved config instead of reading `import.meta.env` directly.
- Behaviour unchanged when `collectorUrl` is empty: `initFaro` returns `undefined` (no-op).

### 2. `packages/shared/src/vite-env.d.ts`
- Declare `window.__APIHUB_FARO_CONFIG__?: { collectorUrl?: string; apiKey?: string;
  environment?: string; appVersion?: string }`.
- Keep the existing `ImportMetaEnv` `VITE_FARO_*` declarations (dev fallback).

### 3. Default `config.js` (dev/build no-op)
- `packages/portal/public/config.js` and `packages/agents/public/config.js`:
  `window.__APIHUB_FARO_CONFIG__ = {}` so the `<script>` tag never 404s in dev and a file
  exists in `dist` before the entrypoint regenerates it.

### 4. `index.html` (portal + agents)
- Add a classic (non-module) script in `<head>`, before the module bundle:
  - portal: `<script src="/config.js"></script>`
  - agents: `<script src="/agents/config.js"></script>`
- Allowed by the existing `script-src 'self' 'unsafe-inline'` CSP.

### 5. `nginx/entrypoint.sh`
- At startup, if `APIHUB_FARO_COLLECTOR_ADDRESS` is set, write `config.js` (heredoc, no extra
  template file) to both `/usr/share/nginx/html/portal/config.js` and
  `/usr/share/nginx/html/agents/config.js` with:
  ```js
  window.__APIHUB_FARO_CONFIG__ = {
    collectorUrl: "/faro",
    apiKey: "<APIHUB_FARO_API_KEY>",
    environment: "<APIHUB_FARO_ENVIRONMENT>",
    appVersion: "<APIHUB_FARO_APP_VERSION>"
  };
  ```
  If unset, write `window.__APIHUB_FARO_CONFIG__ = {};` (Faro stays disabled).
- Default `APIHUB_FARO_COLLECTOR_ADDRESS` to a harmless sentinel (e.g. `invalid.invalid.:80`)
  before adding it to the `envsubst` whitelist, so the `/faro` location always renders.
- Values are JSON-string-safe (simple scalars; quote in the heredoc).

### 6. `nginx/nginx.conf.template`
- New `location /faro/` proxying to the collector using the dynamic-upstream pattern
  (`set $faro_upstream http://${APIHUB_FARO_COLLECTOR_ADDRESS};` + `resolver`), rewriting
  `^/faro/(.*)$ → /$1` so `/faro/v1/traces` → `<collector>/v1/traces`. Repeat the standard
  security headers (CSP add_header inheritance caveat).
- New `location ~ ^/(?:agents/)?config\.js$` with `Cache-Control: no-store`, placed **before**
  the generic `*.js` `immutable` cache locations, so config.js is never served stale.

### 7. `Dockerfile.local` (build-from-branch path)
- No change required: copies locally-built `dist/` (with the source `index.html` + default
  `config.js`), plus the updated `entrypoint.sh` and `nginx.conf.template`.

### 8. `Dockerfile` (published-package path)
- After each `tar zxvf … && mv … dist/*` step, add an **idempotent** injection that inserts the
  config script into the extracted `index.html` only when absent:
  - portal: `grep -q 'config\.js' index.html || sed -i 's#</head>#  <script src="/config.js"></script>\n  </head>#' index.html`
  - agents: same, with `/agents/config.js`.
- Idempotency means it injects into today's published packages (which lack the tag) and is a
  no-op once the packages are republished from this branch.

## Runtime ENV names

Replace the build-time `VITE_FARO_*` names with runtime ones to end the build-vs-runtime
confusion:

| ENV | Purpose |
|---|---|
| `APIHUB_FARO_COLLECTOR_ADDRESS` | nginx upstream `host:port` (e.g. `otel-collector:4318`). Enables Faro when set. No scheme — nginx adds `http://`. |
| `APIHUB_FARO_API_KEY` | OTLP api key (sent from the browser, as Faro does today). |
| `APIHUB_FARO_ENVIRONMENT` | Faro `environment`. |
| `APIHUB_FARO_APP_VERSION` | Faro `version`. |

The build-time `VITE_FARO_*` names remain supported as a dev fallback in `faro.ts`.

## Decisions / trade-offs

- **apiKey stays in the browser config** (matches Faro's default transport behaviour); not
  injected server-side by nginx. Simpler; the key is low-sensitivity for OTLP ingest.
- **Same-origin proxy** chosen over loosening CSP + CORS: keeps the hardened CSP intact and
  hides the collector topology from the browser.

## Testing

- Unit: `resolveFaroConfig()` precedence (window over import.meta.env; empty → undefined).
- Manual: container with `APIHUB_FARO_COLLECTOR_ADDRESS=otel-collector:4318` → verify
  `/config.js` served `no-store` with the collector enabled, browser POSTs to `/faro/v1/traces`,
  and traces/logs land in Tempo / VictoriaLogs. With the ENV unset → no Faro requests.

## Out of scope

- Server-side api-key injection.
- Changing how `version.json` / other build metadata is produced.
