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

import { createReactRouterV6DataOptions } from '@grafana/faro-react'
import { matchRoutes } from 'react-router-dom'

import { initFaro } from '@netcracker/qubership-apihub-ui-shared/utils/faro'

// Must run before the router module is evaluated (see index.tsx import order),
// because Router.tsx wires the data router via withFaroRouterInstrumentation.
initFaro({
  app: { name: 'apihub-portal' },
  router: createReactRouterV6DataOptions({ matchRoutes }),
})
