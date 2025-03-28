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

import { safeParse } from '@stoplight/json'
import type { Dispatch, SetStateAction } from 'react'
import { useCookie } from 'react-use'
import type { User } from '../../types/user'
import { toUser } from '../../types/user'
import { USER_INFO_COOKIE_KEY } from '../../utils/constants'

export const DEFAULT_AUTHORIZATION_DEBOUNCE = 1500

export type AuthorizationOptions = { cookie?: string | null; setLogin?: Dispatch<SetStateAction<boolean>> }

export function useUserInfo(): [User | undefined, RemoveCookieUserInfo] {
  const [cookieUserInfo, , removeCookieUserInfo] = useCookie(USER_INFO_COOKIE_KEY)
  const user: User = toUser(safeParse(window.atob(cookieUserInfo ?? '')))
  return [user, removeCookieUserInfo]
}

type RemoveCookieUserInfo = () => void

export type LoginUser = (credentials: Credentials) => void

export type Credentials = Readonly<{
  username: string
  password: string
}>
