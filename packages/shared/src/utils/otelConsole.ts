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

function stringifyArg(arg: unknown): string {
  if (typeof arg === 'string') {
    return arg
  }
  if (arg instanceof Error) {
    return arg.stack ?? arg.message
  }
  try {
    return JSON.stringify(arg)
  } catch {
    return String(arg)
  }
}

// Forwards console.error / console.warn to the OTel logger as log records (the raw OTel
// browser SDK has no console capture, unlike Faro). Only warn+ is captured to avoid flooding
// the collector; the original console methods are always still called so dev output is intact.
export function initConsole(logger: Logger): void {
  const levels: Array<{ method: 'error' | 'warn', severityNumber: SeverityNumber, severityText: string }> = [
    { method: 'error', severityNumber: SeverityNumber.ERROR, severityText: 'ERROR' },
    { method: 'warn', severityNumber: SeverityNumber.WARN, severityText: 'WARN' },
  ]

  for (const { method, severityNumber, severityText } of levels) {
    const original = console[method].bind(console)
    console[method] = (...args: unknown[]): void => {
      logger.emit({
        severityNumber,
        severityText,
        body: args.map(stringifyArg).join(' '),
        attributes: { 'log.source': `console.${method}` },
      })
      original(...args)
    }
  }
}
