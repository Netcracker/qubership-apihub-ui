/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SpanStatusCode, trace } from '@opentelemetry/api'
import { type Logger, SeverityNumber } from '@opentelemetry/api-logs'

const ERROR_TRACER_NAME = 'apihub-errors'

// Set by initErrorCapture so recordOtelException (also called from the React error boundary)
// can emit a log without importing otel.ts and creating a circular dependency.
let logger: Logger | undefined

// Records an exception both as a span exception (trace side) and as an ERROR log record
// (log side), giving parity with Grafana Faro's automatic error capture. Extra attributes
// (e.g. React component stack) are attached to both.
export function recordOtelException(error: Error, attributes: Record<string, string> = {}): void {
  const span = trace.getTracer(ERROR_TRACER_NAME).startSpan('exception')
  span.recordException(error)
  span.setStatus({ code: SpanStatusCode.ERROR, message: error.message })
  span.setAttributes(attributes)
  span.end()

  logger?.emit({
    severityNumber: SeverityNumber.ERROR,
    severityText: 'ERROR',
    body: error.message,
    attributes: {
      'exception.type': error.name,
      'exception.message': error.message,
      'exception.stacktrace': error.stack ?? '',
      ...attributes,
    },
  })
}

// Wires global handlers for uncaught errors and unhandled promise rejections. React render
// errors do not reach these (the error boundary covers those); together they capture the
// same surface Faro captures automatically.
export function initErrorCapture(otelLogger: Logger): void {
  logger = otelLogger

  window.addEventListener('error', (event) => {
    const error = event.error instanceof Error ? event.error : new Error(event.message)
    recordOtelException(error, { 'error.source': 'window.onerror' })
  })

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason
    const error = reason instanceof Error ? reason : new Error(String(reason))
    recordOtelException(error, { 'error.source': 'unhandledrejection' })
  })
}
