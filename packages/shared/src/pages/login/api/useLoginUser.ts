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

import { useMutation } from '@tanstack/react-query'
import { useSearchParam } from 'react-use'
import type { AuthorizationDto } from '../../../types/authorization'
import type { IsError, IsLoading } from '../../../utils/aliases'
import { API_V2, requestJson } from '../../../utils/requests'

export function useLoginUser(): [LoginUser, IsLoading, IsError] {
  const redirectUri = useSearchParam('redirectUri')

  const { mutate, isLoading, isError } = useMutation<AuthorizationDto, Error, Credentials>({
    mutationFn: credentials => loginUser(credentials),
    onSuccess: () => {
      location.replace(redirectUri ?? location.origin)
    },
    onError: () => {
      console.error('Wrong credentials!')
    },
  })

  return [mutate, isLoading, isError]
}

async function loginUser(
  { username, password }: Credentials,
): Promise<AuthorizationDto> {
  const basic = window.btoa(`${username}:${password}`)

  return await requestJson<AuthorizationDto>('/auth/local', {
    method: 'post',
    headers: { authorization: `Basic ${basic}` },
  }, { basePath: API_V2 })
}

type LoginUser = (credentials: Credentials) => void

type Credentials = Readonly<{
  username: string
  password: string
}>
