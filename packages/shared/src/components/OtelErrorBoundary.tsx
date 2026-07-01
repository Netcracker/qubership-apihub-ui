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

import type { ErrorInfo, ReactNode } from 'react'
import { Component } from 'react'

import { recordOtelException } from '../utils/otelErrorCapture'
import { isOtelEnabled } from '../utils/otel'

type Props = {
  children: ReactNode
  fallback?: ReactNode
}

type State = {
  hasError: boolean
}

// React render errors never reach window.onerror, so a boundary is the only capture point
// for them. On error it records an exception (span + log via recordOtelException) and renders
// an optional fallback for its subtree, leaving the rest of the app mounted.
class OtelErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    recordOtelException(error, { 'react.component_stack': info.componentStack ?? '' })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? null
    }
    return this.props.children
  }
}

// Wraps children in the OTel error boundary only when OTel is enabled; otherwise renders them
// untouched so the app behaves exactly as before in environments without a collector.
export function OtelErrorBoundaryWrapper({ children, fallback }: Props): ReactNode {
  if (!isOtelEnabled()) {
    return children
  }
  return <OtelErrorBoundary fallback={fallback}>{children}</OtelErrorBoundary>
}
