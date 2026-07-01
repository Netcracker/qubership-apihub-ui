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

import { CompositePropagator, W3CBaggagePropagator, W3CTraceContextPropagator } from '@opentelemetry/core'
import { ZoneContextManager } from '@opentelemetry/context-zone'
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load'
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch'
import { UserInteractionInstrumentation } from '@opentelemetry/instrumentation-user-interaction'
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request'
import { resourceFromAttributes } from '@opentelemetry/resources'
import { BatchLogRecordProcessor, LoggerProvider } from '@opentelemetry/sdk-logs'
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web'
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions'

import { resolveOtelConfig } from './otel-config'
import { initConsole } from './otelConsole'
import { initErrorCapture } from './otelErrorCapture'
import { initWebVitals } from './otelWebVitals'

const DEFAULT_OTEL_ENVIRONMENT = 'production'
const DEFAULT_OTEL_APP_VERSION = '0.0.0'
const OTLP_TRACES_PATH = '/v1/traces'
const OTLP_LOGS_PATH = '/v1/logs'

// Same-origin backends reachable through the nginx reverse proxy. Trace-context
// headers are propagated to these so a browser span links to the backend trace.
// (Same-origin requests are propagated automatically; these patterns also cover
// any that resolve as cross-origin, and are harmless otherwise.)
const PROPAGATE_TRACE_HEADER_URLS = [/\/api\//, /\/agents-backend\//, /\/apihub-nc\//, /\/api-linter\//]

export type InitOtelOptions = {
  app: { name: string }
}

let tracerProvider: WebTracerProvider | undefined
let loggerProvider: LoggerProvider | undefined

// Initializes the OpenTelemetry browser SDK with the OTLP/HTTP trace exporter.
// Configuration is read from the runtime window.__APIHUB_OTEL_CONFIG__ (injected by
// config.js at container start) with build-time VITE_OTEL_* as a dev fallback. When no
// collector URL is provided the SDK stays disabled and the call is a no-op, so the apps
// run unchanged in environments without an observability backend.
export function initOtel(options: InitOtelOptions): void {
  if (tracerProvider) {
    return
  }

  const config = resolveOtelConfig(
    typeof window !== 'undefined' ? window.__APIHUB_OTEL_CONFIG__ : undefined,
    import.meta.env,
  )
  if (!config.collectorUrl) {
    return
  }

  const baseUrl = config.collectorUrl.replace(/\/+$/, '')
  const headers = config.apiKey ? { Authorization: `Bearer ${config.apiKey}` } : undefined

  const resource = resourceFromAttributes({
    [ATTR_SERVICE_NAME]: options.app.name,
    [ATTR_SERVICE_VERSION]: config.appVersion ?? DEFAULT_OTEL_APP_VERSION,
    'deployment.environment': config.environment ?? DEFAULT_OTEL_ENVIRONMENT,
    // Correlates every span/log from one browser session (Faro provides this out of the box).
    'session.id': crypto.randomUUID(),
  })

  tracerProvider = new WebTracerProvider({
    resource,
    spanProcessors: [
      new BatchSpanProcessor(new OTLPTraceExporter({ url: `${baseUrl}${OTLP_TRACES_PATH}`, headers })),
    ],
  })

  tracerProvider.register({
    // ZoneContextManager keeps the active span across async boundaries (fetch/XHR/promises).
    contextManager: new ZoneContextManager(),
    propagator: new CompositePropagator({
      propagators: [new W3CTraceContextPropagator(), new W3CBaggagePropagator()],
    }),
  })

  registerInstrumentations({
    instrumentations: [
      new DocumentLoadInstrumentation(),
      new FetchInstrumentation({
        propagateTraceHeaderCorsUrls: PROPAGATE_TRACE_HEADER_URLS,
        clearTimingResources: true,
      }),
      new XMLHttpRequestInstrumentation({
        propagateTraceHeaderCorsUrls: PROPAGATE_TRACE_HEADER_URLS,
        clearTimingResources: true,
      }),
      new UserInteractionInstrumentation({ eventNames: ['click', 'submit'] }),
    ],
  })

  // Logs pipeline (experimental sdk-logs) → same-origin "/otel/v1/logs". Carries the parity
  // signals the raw trace SDK does not: captured exceptions, console output, and web vitals.
  loggerProvider = new LoggerProvider({
    resource,
    processors: [
      new BatchLogRecordProcessor(new OTLPLogExporter({ url: `${baseUrl}${OTLP_LOGS_PATH}`, headers })),
    ],
  })
  const logger = loggerProvider.getLogger(options.app.name)
  initErrorCapture(logger)
  initWebVitals(logger)
  initConsole(logger)

  // Best-effort flush of buffered spans/logs when the tab is backgrounded/closed.
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      void tracerProvider?.forceFlush()
      void loggerProvider?.forceFlush()
    }
  })
}

export function isOtelEnabled(): boolean {
  return tracerProvider !== undefined
}
