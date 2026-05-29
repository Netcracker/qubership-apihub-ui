# Portal mock server

Express mock backend for local portal development. Listens on `http://localhost:3003` (override with `NODEJS_PORT`).

Besides AI chat and ephemeral file downloads, the same process serves other portal mock routes (`/api/v2/*`, package APIs, etc.) when the frontend proxies all traffic to it.

## Commands

From `packages/portal`:

| Script                 | Role                                                                                                                              |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev:backend`  | Mock server (nodemon, watches `server/`).                                                                                         |
| `npm run dev:frontend` | Vite dev server; proxies **`/api`** (and related prefixes) to the mock.                                                           |
| `npm run proxy`        | Vite with `--mode=proxy`: most `/api` traffic goes to the real backend; AI chat and ephemeral files stay on the mock (see below). |
| `npm run test:server`  | Jest + supertest against `createApp()`.                                                                                           |

`dev:backend` must be running on port **3003** whenever you use `dev:frontend` or `proxy`.

## Vite proxy (`vite.config.ts`)

The frontend never talks to port 3003 directly. Vite `server.proxy` forwards API calls to `devServer` (`http://localhost:3003`).

- **`npm run dev:frontend`** (default Vite mode): the catch-all `/api` rule already targets the mock. No extra setup.
- **`npm run proxy`**: the real backend URL is `proxyServer` in `vite.config.ts` (default `https://qubership-apihub.localtest.me`). AI chat and ephemeral downloads must **always** hit the mock until the real backend implements them. Add two proxy entries **before** the generic `/api` rule (Vite matches in declaration order):

```ts
const devServer = 'http://localhost:3003'

// In server.proxy — before '/api':
'/api/v1/ai-chat': {
  target: devServer,
  changeOrigin: true,
  secure: false,
},
'/api/v1/ephemeral-files': {
  target: devServer,
  changeOrigin: true,
  secure: false,
},
```

If AI requests return an APIHUB HTML/error page in `proxy` mode, these entries are missing or listed after `/api`.

### Verify via Vite

```bash
curl "http://localhost:5173/api/v1/ai-chat/chats?limit=1"
curl "http://localhost:5173/api/v1/ephemeral-files/11111111-1111-4111-8111-111111111111?token=mock-dev-token"
```

Replace `5173` with your Vite port. Expect JSON chat list and a Markdown body, not an upstream error page.

### Mixed-mode workflow

1. `npm run dev:backend`
2. `npm run proxy`
3. Open the app on the Vite URL. Non-AI `/api` uses `proxyServer`; `/api/v1/ai-chat` and `/api/v1/ephemeral-files` use the mock.

## AI Chat (`/api/v1/ai-chat`)

Pin limit **3** and max user message length **32000** are enforced in the mock only.

| Method   | Path                         | Notes                                                                                                                           |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `GET`    | `/chats`                     | Query: `search`, `limit` (default **100**, max **200**), `before` (ISO `lastMessageAt`, keyset). Pinned chats are always first. |
| `POST`   | `/chats`                     | Create chat (`title` optional).                                                                                                 |
| `GET`    | `/chats/:id`                 |                                                                                                                                 |
| `PATCH`  | `/chats/:id`                 | `title`, `pinned`. Pin limit: `APIHUB-AI-4003`.                                                                                 |
| `DELETE` | `/chats/:id`                 |                                                                                                                                 |
| `GET`    | `/chats/:id/messages`        | Newest first. Query: `limit` (default **100**, max **200**), `before` (exclusive `createdAt`).                                  |
| `POST`   | `/chats/:id/messages`        | Non-streaming; returns `{ userMessage, assistantMessage }`.                                                                     |
| `POST`   | `/chats/:id/messages/stream` | SSE assistant stream.                                                                                                           |

### Stream scenarios

`POST .../messages/stream` picks a script by **substring** on lower-cased `content` (first match wins; `debug:*` before default).

| Substring                | Behavior                                                                      |
| ------------------------ | ----------------------------------------------------------------------------- |
| `debug:http-500`         | HTTP `500` + `APIHUB-AI-5000` before SSE starts.                              |
| `debug:error`            | Deltas, then SSE `error` (`APIHUB-AI-5001`); no `done`; assistant not stored. |
| `debug:truncated-stream` | `start` + deltas only (no `completed` / `done`).                              |
| `debug:links`            | Portal package/operation Markdown links.                                      |
| `debug:longmd`           | Markdown >= 4000 chars (table, YAML, JSON fences).                            |
| `debug:json`             | Default gallery with a JSON code block.                                       |
| `debug:files`            | Markdown with `/api/v1/ephemeral-files/...` download links.                   |
| `debug:thinking`         | Long pauses + tool frames + file link.                                        |
| `debug:offtopic`         | Short refusal.                                                                |
| (else)                   | Default Markdown gallery (headings, lists, table, YAML, HTTP block).          |

### Idempotent send

Optional UUID `clientMessageId` on `POST .../messages` or `POST .../messages/stream`. Same ID in the same chat replays the stored assistant reply without delays (stream replay is immediate).

### Seed chats

`AiChatRouter()` reseeds on each `createApp()` (mock restart, each test `beforeEach`). Four fixed chats:

| `chatId` suffix | Title                                   | Notes                                                          |
| --------------- | --------------------------------------- | -------------------------------------------------------------- |
| `...0000b0`     | Pagination QA (Request/Response 1-120)  | 240 messages; default `limit=100` needs a second page.         |
| `...000001`     | Customer operations exploration         | 2 messages.                                                    |
| `...000002`     | Overview                                | **Pinned.** Pre-rendered gallery (default + links + file URL). |
| `...000003`     | Recent activity: orders endpoint review | 2 messages.                                                    |

### SSE smoke test (direct mock)

```bash
curl -N -H 'Content-Type: application/json' \
  -d '{"content":"hello"}' \
  http://localhost:3003/api/v1/ai-chat/chats/fc000001-0000-4000-8000-000000000003/messages/stream
```

Expect: `message.assistant.start`, `message.assistant.delta` (many), `message.assistant.completed`, `done`.

## Ephemeral files (`/api/v1/ephemeral-files`)

| Method | Path                 | Notes          |
| ------ | -------------------- | -------------- |
| `GET`  | `/:fileId?token=...` | Download mock. |

Token: full `MOCK_FILE_DOWNLOAD_TOKEN` from `mocks/ai-chat/constants.ts`, or any `mock-*` string (e.g. `mock-dev-token` in curl examples).

| `fileId`                               | Response                                            |
| -------------------------------------- | --------------------------------------------------- |
| `11111111-1111-4111-8111-111111111111` | Markdown report (`debug:files` / Overview fixture). |
| `00000000-0000-4000-8000-000000000404` | `404` `APIHUB-EF-3001`                              |
| `00000000-0000-4000-8000-000000000410` | `410` `APIHUB-EF-4101`                              |
| other valid token                      | CSV attachment                                      |
| missing / invalid token                | `401` `APIHUB-EF-3003` / `APIHUB-EF-3002`           |

Successful downloads set `Content-Disposition: attachment`.
