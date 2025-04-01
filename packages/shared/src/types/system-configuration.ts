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

export enum AuthMethod {
  LOCAL_AUTH_METHOD = 'local',
  SSO_AUTH_METHOD = 'sso'
}

export type AuthKind = Readonly<{
  type: AuthMethod
  displayName: string
  url?: string
  image?: string
}>

export type LocalAuthKind = Omit<AuthKind, 'type'> & { type: typeof AuthMethod.LOCAL_AUTH_METHOD }
export type SsoAuthKind = Omit<AuthKind, 'type'> & { type: typeof AuthMethod.SSO_AUTH_METHOD }

export type SystemConfiguration = Readonly<{
  ssoIntegrationEnabled: boolean
  autoRedirect: boolean
  defaultWorkspaceId: string
  authKinds: ReadonlyArray<AuthKind>
  defaultAuthKind: AuthKind
}>

export type SystemConfigurationDto = SystemConfiguration

export function isLocalAuthKind(kind: AuthKind): kind is LocalAuthKind {
  return kind.type === AuthMethod.LOCAL_AUTH_METHOD
}

export function isSsoAuthKind(authKind: AuthKind): authKind is SsoAuthKind {
  return authKind.type === AuthMethod.SSO_AUTH_METHOD
}
