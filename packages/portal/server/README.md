# Portal mock server

Express-based mock backend that ships alongside the portal frontend so feature work can proceed without waiting on the real APIHUB backend. The server currently listens on `http://localhost:3003` (override via `NODEJS_PORT`).

## Commands

From `packages/portal`:

- `npm run dev:backend` - start the mock server with nodemon (auto-reloads on file changes).
- `npm run dev:frontend` - Vite dev server that proxies `/api` to the mock (full mock mode).
- `npm run proxy` - Vite dev server that proxies `/api` to the real backend, except `/api/v1/ai-chat` which is always routed to the mock (mixed mode; see AI Chat notes below).
- `npm run test:server` - Jest + supertest integration tests for the mock server.

## Two-process dev workflow (recommended during AI Chat development)

When you want a real backend for everything except AI chat:

1. Start the mock server. It must run on `localhost:3003`:
   ```bash
   npm run dev:backend
   ```
2. In a second shell, start Vite in `proxy` mode:
   ```bash
   npm run proxy
   ```
3. Open the portal in your browser via Vite's address. Non-AI traffic hits the real backend you configured (e.g. `APIHUB_PROXY_URL` in `.env`), while `/api/v1/ai-chat/**` is intercepted by the Vite proxy and routed to the local mock.

To verify AI chat traffic is hitting the mock rather than the real backend:

```bash
curl http://<vite-port>/api/v1/ai-chat/config
# => {"maxPinnedPerUser":3,"maxUserMessageLength":32000}
```

If the response contains an APIHUB backend error envelope, the proxy rule for `/api/v1/ai-chat` is either missing or declared after the generic `/api` rule in `vite.config.ts` - Vite matches the first registered prefix.

## AI Chat endpoints (mock)

All under `/api/v1/ai-chat/`. Mirrors `qubership-apihub-backend/docs/ai-chat-frontend-contract.md`.

- `GET /config` - client-visible config (pin limit, max message length).
- `GET /chats` - paginated chat list. Query: `search`, `limit`, `before` (ISO date, keyset).
- `POST /chats` - create an empty chat.
- `GET /chats/:id` - fetch one chat.
- `PATCH /chats/:id` - rename (`title`) or pin/unpin (`pinned: boolean`). Pin limit returns `APIHUB-AI-4003`.
- `DELETE /chats/:id`.
- `GET /chats/:id/messages` - newest-first keyset page. Query: `limit`, `before`.
- `POST /chats/:id/messages` - non-streaming send. Returns the assistant message directly.
- `POST /chats/:id/messages/stream` - Server-Sent Events stream of the assistant response.
- `GET /files/:id?token=...` - attachment download (CSV or Markdown depending on file ID suffix).

### Scripted stream scenarios

`POST /chats/:id/messages/stream` picks a scripted scenario by substring match against the user's message (lower-cased). First match wins; the `debug:*` scenarios are matched before the default so `debug:error` doesn't fall through.

| Substring in `content` | Scenario   | Purpose                                                                                                                                  |
| ---------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `debug:error`          | error      | ~3 deltas then an `error` SSE frame with code `APIHUB-AI-5001`. No `done` frame. Validates UI error banners and "retry last" affordance. |
| `debug:json`           | json       | Default happy-path Markdown but the code block is a JSON snippet instead of YAML. Validates JSON syntax highlighting.                    |
| `debug:attachment`     | attachment | Completes with a generated attachment chip (a download URL served by `GET /files/:id`). Validates attachment rendering and download.     |
| `debug:offtopic`       | offtopic   | Short polite refusal. Validates refusal rendering.                                                                                       |
| (none of the above)    | default    | Long Markdown with a YAML code block and a table.                                                                                        |

### Idempotent send

Pass `clientMessageId` on `POST /chats/:id/messages` or `POST /chats/:id/messages/stream`. A repeated request with the same ID replays the previously stored assistant response synchronously (no scripted delays). Used by the frontend to survive transient network failures without double-billing.

### Magic file IDs

`GET /files/:ID` recognizes two magic IDs for exercising error paths:

- `missing` - 404 with `APIHUB-AI-3002` (stands in for "file was cleaned up").
- `expired` - 410 with `APIHUB-AI-4101` (stands in for "signed URL timed out").

Any other ID returns a small CSV (or Markdown, if the ID ends with `.md` or contains `Markdown`) with `Content-Disposition: attachment`.

### Seed fixtures

On each router creation (i.e. on every `dev:backend` restart and every test setup), the store is reseeded with five deterministic chats:

- `fc000001-0000-4000-8000-000000000001` - pinned, 2 messages.
- `fc000001-0000-4000-8000-000000000002` - 40 messages (pagination sample).
- `fc000001-0000-4000-8000-000000000003` - recent activity, 2 messages.
- `fc000001-0000-4000-8000-000000000004` - empty (no messages, no title).
- `fc000001-0000-4000-8000-000000000005` - archived/old, 2 messages.

### Exit check (from the Phase 1 plan)

```bash
curl -N -H 'Content-Type: application/json' \
  -d '{"content":"hello","clientMessageId":"local-1"}' \
  http://localhost:3003/api/v1/ai-chat/chats/fc000001-0000-4000-8000-000000000003/messages/stream
```

Expected: an SSE sequence starting with `event: message.assistant.start`, several `event: message.assistant.delta` frames, an `event: message.assistant.completed`, and finally `event: done`.

### Dev gotcha: `curl` vs nodemon restart

The `dev:backend` script scopes nodemon with `--watch server --ext ts,json`, so only changes under `server/` restart the process. If you still need to manually exercise an SSE stream while you're actively editing server code, run it without the watcher: `npx ts-node server/index.ts`.

A restart mid-stream closes the TCP socket and `curl` reports `curl: (56) Recv failure: Connection was reset by peer`. The supertest suite (`npm run test:server`) is immune because it mounts the Express app in-process.

### Client disconnect detection: `res.on('close')` not `req.on('close')`

`stream.ts` wires its abort controller to `res.on('close')` rather than `req.on('close')`. On Node 16+ the request stream emits `close` the moment `body-parser` finishes reading the POST JSON body, which would abort every stream before a single frame went out. `res.on('close')` only fires when the response socket actually closes (client disconnect, timeout, server shutdown), which is what we want.
