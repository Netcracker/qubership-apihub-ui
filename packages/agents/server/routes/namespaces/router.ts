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

import { Router } from 'express'
import type { State } from '../../types'
import { COMPLETE_DISCOVERY_STATUS, ERROR_DISCOVERY_STATUS, RUNNING_DISCOVERY_STATUS } from '../../types'
import { NAMESPACES_DTO } from './data'
import type { SnapshotRouter } from './snapshots/router'

type NamespaceRouter = Router

export function NamespaceRouter(state: State): NamespaceRouter {
  const router: NamespaceRouter = Router()

  getNamespaces(router)
  runDiscovery(router, state)

  return router
}

function getNamespaces(router: NamespaceRouter): void {
  router.get('/', (req, res) => {
    res.status(200).json(NAMESPACES_DTO)
  })
}

function runDiscovery(router: SnapshotRouter, state: State): void {
  router.post('/:namespaceId/discover', (req, res) => {
    const errorProbability = 0.125

    setTimeout(() => {
      state.discovery.status = Math.random() < errorProbability ? ERROR_DISCOVERY_STATUS : RUNNING_DISCOVERY_STATUS
      res.status(202).send('Discovery is started')
    }, 1000)

    setTimeout(() => {
      state.discovery.status = COMPLETE_DISCOVERY_STATUS
    }, 3000)
  })
}
