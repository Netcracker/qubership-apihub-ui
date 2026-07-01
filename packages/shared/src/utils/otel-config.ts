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

export type OtelRuntimeConfig = {
  collectorUrl?: string
  apiKey?: string
  environment?: string
  appVersion?: string
}

export type OtelBuildEnv = {
  VITE_OTEL_COLLECTOR_URL?: string
  VITE_OTEL_API_KEY?: string
  VITE_OTEL_ENVIRONMENT?: string
  VITE_OTEL_APP_VERSION?: string
}

// Merges the runtime window config (injected by config.js at container start) over the
// build-time Vite env fallback. Empty strings are treated as "unset" so a blank runtime
// value never shadows a build-time default. Returns undefined per missing field.
export function resolveOtelConfig(
  windowConfig: OtelRuntimeConfig | undefined,
  buildEnv: OtelBuildEnv,
): OtelRuntimeConfig {
  return {
    collectorUrl: windowConfig?.collectorUrl || buildEnv.VITE_OTEL_COLLECTOR_URL || undefined,
    apiKey: windowConfig?.apiKey || buildEnv.VITE_OTEL_API_KEY || undefined,
    environment: windowConfig?.environment || buildEnv.VITE_OTEL_ENVIRONMENT || undefined,
    appVersion: windowConfig?.appVersion || buildEnv.VITE_OTEL_APP_VERSION || undefined,
  }
}
