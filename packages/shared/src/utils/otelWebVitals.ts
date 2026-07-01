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

import { type Logger, SeverityNumber } from '@opentelemetry/api-logs'
import { type Metric, onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'

// Reports Core Web Vitals (LCP, INP, CLS, FCP, TTFB) as log records — the raw OpenTelemetry
// browser SDK has no web-vitals capture, so the web-vitals library is used to match the
// metrics Grafana Faro collects out of the box. Each reading is emitted once as it finalizes.
export function initWebVitals(logger: Logger): void {
  const report = (metric: Metric): void => {
    logger.emit({
      severityNumber: SeverityNumber.INFO,
      severityText: 'INFO',
      body: `web-vital ${metric.name}`,
      attributes: {
        'web_vital.name': metric.name,
        'web_vital.value': metric.value,
        'web_vital.rating': metric.rating,
        'web_vital.id': metric.id,
      },
    })
  }

  onCLS(report)
  onFCP(report)
  onINP(report)
  onLCP(report)
  onTTFB(report)
}
