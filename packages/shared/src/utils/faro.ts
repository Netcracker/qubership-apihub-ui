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

import { getWebInstrumentations, initializeFaro, ReactIntegration, type Faro, type ReactIntegrationConfig } from '@grafana/faro-react'
import { OtlpHttpTransport } from '@grafana/faro-transport-otlp-http'
import { TracingInstrumentation } from '@grafana/faro-web-tracing'

const DEFAULT_FARO_ENVIRONMENT = 'production'
const DEFAULT_FARO_APP_VERSION = '0.0.0'
const OTLP_TRACES_PATH = '/v1/traces'
const OTLP_LOGS_PATH = '/v1/logs'

export type FaroAppMeta = {
  name: string
  version?: string
}

export type InitFaroOptions = {
  app: FaroAppMeta
  router?: ReactIntegrationConfig['router']
}

let faroInstance: Faro | undefined

// Initializes Grafana Faro with the OTLP/HTTP transport. Configuration is read from
// build-time Vite env (VITE_FARO_*). When no collector URL is provided Faro stays
// disabled and the call is a no-op, so the apps run unchanged in environments
// without an observability backend.
export function initFaro(options: InitFaroOptions): Faro | undefined {
  if (faroInstance) {
    return faroInstance
  }

  const collectorUrl = import.meta.env.VITE_FARO_COLLECTOR_URL
  if (!collectorUrl) {
    return undefined
  }

  const baseUrl = collectorUrl.replace(/\/+$/, '')

  faroInstance = initializeFaro({
    app: {
      name: options.app.name,
      version: options.app.version ?? import.meta.env.VITE_FARO_APP_VERSION ?? DEFAULT_FARO_APP_VERSION,
      environment: import.meta.env.VITE_FARO_ENVIRONMENT ?? DEFAULT_FARO_ENVIRONMENT,
    },
    transports: [
      new OtlpHttpTransport({
        tracesURL: `${baseUrl}${OTLP_TRACES_PATH}`,
        logsURL: `${baseUrl}${OTLP_LOGS_PATH}`,
        apiKey: import.meta.env.VITE_FARO_API_KEY,
      }),
    ],
    instrumentations: [
      // errors + web vitals + console + sessions
      ...getWebInstrumentations(),
      // OpenTelemetry tracing: auto-instruments fetch/xhr + W3C trace-context propagation
      new TracingInstrumentation(),
      // React Router instrumentation (router options provided per-app)
      new ReactIntegration({ router: options.router }),
    ],
  })

  return faroInstance
}

export function isFaroEnabled(): boolean {
  return faroInstance !== undefined
}
