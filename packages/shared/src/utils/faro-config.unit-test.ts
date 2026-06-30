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

import { resolveFaroConfig } from './faro-config'

describe('resolveFaroConfig', () => {
  it('prefers window config over build env', () => {
    const result = resolveFaroConfig(
      { collectorUrl: '/faro', apiKey: 'win', environment: 'prod', appVersion: '1.2.3' },
      { VITE_FARO_COLLECTOR_URL: 'http://build', VITE_FARO_API_KEY: 'build' },
    )
    expect(result).toEqual({ collectorUrl: '/faro', apiKey: 'win', environment: 'prod', appVersion: '1.2.3' })
  })

  it('falls back to build env when window config is undefined', () => {
    const result = resolveFaroConfig(undefined, {
      VITE_FARO_COLLECTOR_URL: 'http://build',
      VITE_FARO_API_KEY: 'build',
      VITE_FARO_ENVIRONMENT: 'test',
      VITE_FARO_APP_VERSION: '0.0.1',
    })
    expect(result).toEqual({ collectorUrl: 'http://build', apiKey: 'build', environment: 'test', appVersion: '0.0.1' })
  })

  it('falls back per-field when a window field is empty', () => {
    const result = resolveFaroConfig(
      { collectorUrl: '', apiKey: 'win' },
      { VITE_FARO_COLLECTOR_URL: 'http://build', VITE_FARO_API_KEY: 'build' },
    )
    expect(result.collectorUrl).toBe('http://build')
    expect(result.apiKey).toBe('win')
  })

  it('returns undefined for fields absent from both sources', () => {
    const result = resolveFaroConfig({}, {})
    expect(result).toEqual({ collectorUrl: undefined, apiKey: undefined, environment: undefined, appVersion: undefined })
  })
})
