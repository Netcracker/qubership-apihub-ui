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

import { FaroErrorBoundary } from '@grafana/faro-react'
import type { FC, PropsWithChildren, ReactElement } from 'react'

import { isFaroEnabled } from '../utils/faro'

// Wraps the subtree in Faro's error boundary so React render errors (with component
// stacks) reach Faro. When Faro is disabled it renders children untouched, because
// FaroErrorBoundary depends on an initialized Faro instance.
export const FaroErrorBoundaryWrapper: FC<PropsWithChildren> = ({ children }) => {
  if (isFaroEnabled()) {
    return <FaroErrorBoundary>{children}</FaroErrorBoundary>
  }
  return children as ReactElement
}
FaroErrorBoundaryWrapper.displayName = 'FaroErrorBoundaryWrapper'
