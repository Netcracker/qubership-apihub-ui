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

import type { FC } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { emitRouteChangeSpan } from '../utils/otelRouting'

// Renders nothing; emits a route-change span whenever the pathname changes. For use inside
// the component-router apps (<Routes>), where useLocation is available. Data-router apps use
// instrumentDataRouterNavigation() instead. Safe to render unconditionally — emitRouteChangeSpan
// is a no-op when OTel is disabled.
export const OtelRouteTracer: FC = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    emitRouteChangeSpan(pathname)
  }, [pathname])
  return null
}
