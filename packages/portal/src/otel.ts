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

import { initOtel } from '@netcracker/qubership-apihub-ui-shared/utils/otel'

// Must run before any app/router module is evaluated (see index.tsx import order),
// so the tracer provider and fetch/xhr instrumentations are installed first.
initOtel({ app: { name: 'apihub-portal' } })
