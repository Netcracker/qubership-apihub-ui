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

import { trace } from '@opentelemetry/api'

import { isOtelEnabled } from './otel'

const ROUTER_TRACER_NAME = 'apihub-router'

// Emits a short span marking a client-side route change. OpenTelemetry has no React
// integration (unlike @grafana/faro-react), so navigation spans are produced manually.
// A no-op when OTel is disabled; otherwise the global no-op tracer would still be used
// harmlessly, but skipping avoids creating throwaway spans.
export function emitRouteChangeSpan(pathname: string): void {
  if (!isOtelEnabled()) {
    return
  }
  const span = trace.getTracer(ROUTER_TRACER_NAME).startSpan('route.change')
  span.setAttribute('http.route', pathname)
  span.end()
}

type SubscribableRouter = {
  subscribe: (listener: (state: { location: { pathname: string } }) => void) => () => void
}

// Instruments a React Router data router (createBrowserRouter) by subscribing to its
// navigation state. Use this for the data-router apps where useLocation cannot be called
// outside a route element. Returns the unsubscribe function.
export function instrumentDataRouterNavigation(router: SubscribableRouter): () => void {
  let lastPathname: string | undefined
  return router.subscribe((state) => {
    const pathname = state.location.pathname
    if (pathname !== lastPathname) {
      lastPathname = pathname
      emitRouteChangeSpan(pathname)
    }
  })
}
