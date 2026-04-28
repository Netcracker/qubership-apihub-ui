import type { AiChatMessage, AiChatStreamEvent } from './types'
import { MOCK_ATTACHMENT_FILE_ID } from './generatedFileUrl'

export type ScriptedFrame = {
  // Delay after the previous frame in milliseconds (0 for the first frame).
  delay: number
  event: AiChatStreamEvent
}

export type Scenario = {
  id: string
  description: string
  build: (args: ScriptedBuildArgs) => ScriptedFrame[]
}

export type ScriptedBuildArgs = {
  messageId: string
  nowIso: string
  clientMessageId: string | null
  /** Relative `GET /api/v1/generated-files/...` URL for markdown download links */
  buildFileUrl: (fileId: string) => string
}

const TOKEN_DELAY_MS = 35

function tokens(text: string): string[] {
  // Split on whitespace while preserving trailing whitespace on each token
  // so concatenation reproduces the original string verbatim.
  return text.match(/\S+\s*|\s+/g) ?? [text]
}

function deltaFrames(text: string, delay = TOKEN_DELAY_MS): ScriptedFrame[] {
  const parts = tokens(text)
  return parts.map((delta) => ({
    delay: delay,
    event: { type: 'message.assistant.delta', delta: delta },
  }))
}

const DEFAULT_MARKDOWN = `Here are the REST operations I found across the currently published packages:

| Package | Version | Method | Path | Operation |
| --- | --- | --- | --- | --- |
| Customers | 2024.4 | GET | /api/v1/customers | List customers |
| Customers | 2024.4 | POST | /api/v1/customers | Create customer |
| Orders | 2024.3 | GET | /api/v1/orders | List orders |

Example minimal OpenAPI fragment for \`POST /api/v1/customers\`:

\`\`\`yaml
paths:
  /api/v1/customers:
    post:
      summary: Create customer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [name]
              properties:
                name: { type: string }
\`\`\`

Let me know if you want to drill down into any of them.`

const JSON_MARKDOWN = `Here is the same response encoded as JSON:

\`\`\`json
{
  "operations": [
    { "method": "GET", "path": "/api/v1/customers", "package": "Customers@2024.4" },
    { "method": "POST", "path": "/api/v1/customers", "package": "Customers@2024.4" },
    { "method": "GET", "path": "/api/v1/orders", "package": "Orders@2024.3" }
  ]
}
\`\`\`

Ask for more detail on any of them.`

const LINKS_MARKDOWN = `## Internal navigation samples

Use these paths to exercise **InternalLink** behaviour (same prefixes as \`routes.ts\`):

- [Demo package](/portal/packages/QS.QSS.PRG.APIHUB/2026.1)
- [Demo operation](/portal/packages/QS.QSS.PRG.APIHUB/2026.1/operations/rest/get-packages-list)

Both resolve under \`/portal/packages/\`.`

const ATTACHMENT_MARKDOWN_PREFIX = `I generated a CSV report with every operation I could find.
The full file is available below as a download.`

const OFFTOPIC_MARKDOWN = `I'm sorry, but I specialize in helping with REST API documentation and specifications.
I can't help with questions outside of this topic. Is there anything about APIs I can help you with?`

const ERROR_MARKDOWN = 'Searching the operations index'

function buildLongMarkdownFixture(): string {
  const parts: string[] = []
  parts.push('# Long markdown stress fixture\n\n')
  parts.push('## Overview\n\n')
  parts.push('> Blockquote: this stream exists to stress markdown rendering, scrolling, and throttling.\n\n')
  parts.push('### Bullet list\n\n')
  for (let i = 0; i < 45; i++) {
    parts.push(`- Row ${i + 1} with **emphasis** and a \`code\` span.\n`)
  }
  parts.push('\n## Operations table\n\n')
  parts.push('| Id | Service | Status |\n| --- | --- | --- |\n')
  for (let i = 0; i < 35; i++) {
    parts.push(`| ${i + 1} | svc-${i % 7} | ${i % 3 === 0 ? 'ok' : 'warn'} |\n`)
  }
  parts.push('\n### YAML block\n\n```yaml\n')
  parts.push('service: long-md-stress\nendpoints:\n')
  for (let i = 0; i < 30; i++) {
    parts.push(`  - path: /api/v1/items/${i}\n    method: GET\n`)
  }
  parts.push('```\n\n### JSON block\n\n```json\n')
  parts.push(
    JSON.stringify(
      { items: Array.from({ length: 25 }, (_, i) => ({ id: i, name: `item-${i}` })) },
      null,
      2,
    ),
  )
  parts.push('\n```\n\n## Closing\n\nEnd of long markdown fixture.\n')
  let body = parts.join('')
  if (body.length < 4000) {
    body += `\n${'p'.repeat(4000 - body.length)}\n`
  }
  return body
}

const LONG_MD_CONTENT = buildLongMarkdownFixture()

const defaultScenario: Scenario = {
  id: 'default',
  description: 'Long markdown answer with a YAML code block and a table.',
  build: ({ messageId, nowIso, clientMessageId }) => {
    const frames: ScriptedFrame[] = []
    frames.push({
      delay: 40,
      event: { type: 'message.assistant.start', messageId: messageId },
    })
    frames.push(...deltaFrames(DEFAULT_MARKDOWN))
    frames.push({
      delay: 25,
      event: {
        type: 'message.assistant.completed',
        message: {
          messageId: messageId,
          clientMessageId: clientMessageId,
          role: 'assistant',
          content: DEFAULT_MARKDOWN,
          createdAt: nowIso,
        },
      },
    })
    frames.push({ delay: 10, event: { type: 'done' } })
    return frames
  },
}

const jsonScenario: Scenario = {
  id: 'debug:json',
  description: 'Same as default but with a JSON code block.',
  build: ({ messageId, nowIso, clientMessageId }) => {
    const frames: ScriptedFrame[] = []
    frames.push({
      delay: 40,
      event: { type: 'message.assistant.start', messageId: messageId },
    })
    frames.push(...deltaFrames(JSON_MARKDOWN))
    frames.push({
      delay: 25,
      event: {
        type: 'message.assistant.completed',
        message: {
          messageId: messageId,
          clientMessageId: clientMessageId,
          role: 'assistant',
          content: JSON_MARKDOWN,
          createdAt: nowIso,
        },
      },
    })
    frames.push({ delay: 10, event: { type: 'done' } })
    return frames
  },
}

const linksScenario: Scenario = {
  id: 'debug:links',
  description: 'Markdown with internal package and operation links.',
  build: ({ messageId, nowIso, clientMessageId }) => {
    const frames: ScriptedFrame[] = []
    frames.push({
      delay: 40,
      event: { type: 'message.assistant.start', messageId: messageId },
    })
    frames.push(...deltaFrames(LINKS_MARKDOWN))
    frames.push({
      delay: 25,
      event: {
        type: 'message.assistant.completed',
        message: {
          messageId: messageId,
          clientMessageId: clientMessageId,
          role: 'assistant',
          content: LINKS_MARKDOWN,
          createdAt: nowIso,
        },
      },
    })
    frames.push({ delay: 10, event: { type: 'done' } })
    return frames
  },
}

const longmdScenario: Scenario = {
  id: 'debug:longmd',
  description: 'Very long markdown (>= 4000 chars) with yaml+json fences and table.',
  build: ({ messageId, nowIso, clientMessageId }) => {
    const frames: ScriptedFrame[] = []
    frames.push({
      delay: 40,
      event: { type: 'message.assistant.start', messageId: messageId },
    })
    frames.push(...deltaFrames(LONG_MD_CONTENT, 12))
    frames.push({
      delay: 25,
      event: {
        type: 'message.assistant.completed',
        message: {
          messageId: messageId,
          clientMessageId: clientMessageId,
          role: 'assistant',
          content: LONG_MD_CONTENT,
          createdAt: nowIso,
        },
      },
    })
    frames.push({ delay: 10, event: { type: 'done' } })
    return frames
  },
}

const attachmentScenario: Scenario = {
  id: 'debug:attachment',
  description: 'Assistant markdown links to generated-files download URL.',
  build: ({ messageId, nowIso, clientMessageId, buildFileUrl }) => {
    const url = buildFileUrl(MOCK_ATTACHMENT_FILE_ID)
    const markdownWithLink = `${ATTACHMENT_MARKDOWN_PREFIX}\n\n[export-sample.csv](${url})`
    const frames: ScriptedFrame[] = []
    frames.push({
      delay: 40,
      event: { type: 'message.assistant.start', messageId: messageId },
    })
    frames.push(...deltaFrames(markdownWithLink))
    frames.push({
      delay: 25,
      event: {
        type: 'message.assistant.completed',
        message: {
          messageId: messageId,
          clientMessageId: clientMessageId,
          role: 'assistant',
          content: markdownWithLink,
          createdAt: nowIso,
        },
      },
    })
    frames.push({ delay: 10, event: { type: 'done' } })
    return frames
  },
}

const errorScenario: Scenario = {
  id: 'debug:error',
  description: 'A few deltas then an SSE error frame (APIHUB-AI-5001).',
  build: ({ messageId }) => {
    const frames: ScriptedFrame[] = []
    frames.push({
      delay: 40,
      event: { type: 'message.assistant.start', messageId: messageId },
    })
    frames.push(...deltaFrames(ERROR_MARKDOWN))
    frames.push({
      delay: 60,
      event: {
        type: 'error',
        code: 'APIHUB-AI-5001',
        message: 'Upstream LLM provider is temporarily unavailable.',
      },
    })
    return frames
  },
}

const offtopicScenario: Scenario = {
  id: 'debug:offtopic',
  description: 'Short polite refusal for off-topic questions.',
  build: ({ messageId, nowIso, clientMessageId }) => {
    const frames: ScriptedFrame[] = []
    frames.push({
      delay: 30,
      event: { type: 'message.assistant.start', messageId: messageId },
    })
    frames.push(...deltaFrames(OFFTOPIC_MARKDOWN))
    frames.push({
      delay: 20,
      event: {
        type: 'message.assistant.completed',
        message: {
          messageId: messageId,
          clientMessageId: clientMessageId,
          role: 'assistant',
          content: OFFTOPIC_MARKDOWN,
          createdAt: nowIso,
        },
      },
    })
    frames.push({ delay: 10, event: { type: 'done' } })
    return frames
  },
}

// Ordered list: the first match (by substring presence) wins.
// debug:* scenarios must be tried BEFORE the default so 'debug:error' doesn't
// fall through to the happy path.
export const SCENARIOS: Scenario[] = [
  errorScenario,
  linksScenario,
  longmdScenario,
  jsonScenario,
  attachmentScenario,
  offtopicScenario,
  defaultScenario,
]

export function pickScenario(userContent: string): Scenario {
  const normalized = userContent.toLowerCase()
  for (const scenario of SCENARIOS) {
    if (scenario.id === 'default') continue
    if (normalized.includes(scenario.id)) return scenario
  }
  return defaultScenario
}

export function assistantMessageFromScenario(scenario: Scenario, args: ScriptedBuildArgs): AiChatMessage {
  // Reconstruct the terminal message from the scenario's completed frame
  // so that non-streaming callers (POST /messages without /stream) produce the
  // same final state as the SSE path. If a scenario never emits a completed
  // frame (debug:error), return a best-effort shape with whatever markdown
  // was produced before the error.
  const frames = scenario.build(args)
  const completed = frames.find(
    (f): f is ScriptedFrame & { event: Extract<AiChatStreamEvent, { type: 'message.assistant.completed' }> } =>
      f.event.type === 'message.assistant.completed',
  )
  if (completed) return completed.event.message
  const collected = frames
    .filter((f): f is ScriptedFrame & { event: Extract<AiChatStreamEvent, { type: 'message.assistant.delta' }> } =>
      f.event.type === 'message.assistant.delta',
    )
    .map((f) => f.event.delta)
    .join('')
  return {
    messageId: args.messageId,
    clientMessageId: args.clientMessageId,
    role: 'assistant',
    content: collected,
    createdAt: args.nowIso,
  }
}
