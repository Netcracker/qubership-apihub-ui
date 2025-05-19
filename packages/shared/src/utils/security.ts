import type { QueryObserverResult, RefetchOptions, RefetchQueryFilters, UseMutateFunction } from '@tanstack/react-query'
import type { IdentityProviderDto, SystemConfigurationDto } from '../types/system-configuration'
import { isInternalIdentityProvider } from '../types/system-configuration'
import { SEARCH_PARAM_NO_AUTO_LOGIN, SESSION_STORAGE_KEY_LAST_IDENTITY_PROVIDER_ID, SESSION_STORAGE_KEY_SYSTEM_CONFIGURATION } from './constants'
import { redirectTo, redirectToLogin } from './redirects'
import { optionalSearchParams } from './search-params'

// TODO 16.05.25 // Temporarily copy-pasted from ./requests.ts
// Get rid of copy-pasting these constants
const API_V3 = '/api/v3'

export const TokenRefreshResults = {
  NO_PROVIDER: 'no-provider',
  NO_ENDPOINT: 'no-endpoint',
  TOKEN_REFRESHED: 'token-refreshed',
  UNKNOWN: 'unknown',
} as const
export type TokenRefreshResult = (typeof TokenRefreshResults)[keyof typeof TokenRefreshResults]
export function isTokenRefreshed(maybeTokenRefreshResult: unknown): maybeTokenRefreshResult is typeof TokenRefreshResults.TOKEN_REFRESHED {
  return maybeTokenRefreshResult === TokenRefreshResults.TOKEN_REFRESHED
}

export class WorkerUnauthorizedError extends Error {
  readonly responseStatus: number = 401

  constructor() {
    super('HTTP 401 Unauthorized')
    this.name = 'WorkerUnauthorizedError'
  }
}

export async function handleAuthentication(responseStatus: number): Promise<TokenRefreshResult | undefined> {
  const searchParams = new URLSearchParams(location.search)
  // noAutoLogin = true in 2 cases:
  // 1. user manually logged out just now
  // 2. user logged in just now and automatically redirect to login page
  const autoLogin = !searchParams.get(SEARCH_PARAM_NO_AUTO_LOGIN)

  let tokenRefreshResult: TokenRefreshResult | undefined

  if (responseStatus === 401 && autoLogin) {
    // when we are in worker, we can't use algorithm below in direct way
    // so we have to throw a specific error, catch it in main thread and handle with the same algorithm
    if (typeof window === 'undefined') {
      throw new WorkerUnauthorizedError()
    }

    const systemConfigurationFromStorage = sessionStorage.getItem(SESSION_STORAGE_KEY_SYSTEM_CONFIGURATION)
    // must be always present,
    // because protected API is not fetched until system configuration is loaded
    const systemConfiguration: SystemConfigurationDto = JSON.parse(systemConfigurationFromStorage!) as SystemConfigurationDto

    const { authConfig } = systemConfiguration

    const { defaultProviderId } = authConfig
    const defaultProvider = authConfig.identityProviders.find(idp => idp.id === defaultProviderId)

    // default identity provider is configured
    tokenRefreshResult = await handleUnauthorizedByProvider(defaultProvider)

    const lastProviderId = localStorage.getItem(SESSION_STORAGE_KEY_LAST_IDENTITY_PROVIDER_ID)
    const lastProvider = lastProviderId
      ? authConfig.identityProviders.find(idp => idp.id === lastProviderId)
      : undefined

    // last identity provider is saved
    tokenRefreshResult = await handleUnauthorizedByProvider(lastProvider)

    if (tokenRefreshResult === TokenRefreshResults.NO_PROVIDER) {
      redirectToLogin()
    }
  }

  return tokenRefreshResult
}

async function handleUnauthorizedByProvider(identityProvider: IdentityProviderDto | undefined): Promise<TokenRefreshResult> {
  if (!identityProvider) {
    return TokenRefreshResults.NO_PROVIDER
  }

  let requestEndpoint = ''
  if (isInternalIdentityProvider(identityProvider)) {
    const searchParamsLoginPage = optionalSearchParams({ noAutoLogin: { value: true }, redirectUri: { value: location.href } })
    const searchParamsAuthLocalRefresh = optionalSearchParams({ redirectUri: { value: `${location.origin}/login?${searchParamsLoginPage}` } })
    requestEndpoint = `${API_V3}/auth/local/refresh?${searchParamsAuthLocalRefresh}`
  } else if (identityProvider.loginStartEndpoint) {
    const searchParamsAuthWithStartEndpoint = optionalSearchParams({ redirectUri: { value: location.href } })
    requestEndpoint = `${identityProvider.loginStartEndpoint}?${searchParamsAuthWithStartEndpoint}`
  } else {
    return TokenRefreshResults.NO_ENDPOINT
  }
  const response = await fetch(
    requestEndpoint,
    {
      method: 'GET',
      redirect: 'manual',
    },
  )
  if (response.ok) {
    return TokenRefreshResults.TOKEN_REFRESHED
  }
  if (response.type === 'opaqueredirect') {
    const url = response.url.replace(location.origin, '')
    redirectTo(url)
  }
  console.error('Can\'t refresh token. Response:', response)
  return TokenRefreshResults.UNKNOWN
}

function isWorkerUnauthorizedError(error: unknown): error is WorkerUnauthorizedError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'name' in error &&
    error.name === 'WorkerUnauthorizedError' &&
    'responseStatus' in error &&
    typeof error.responseStatus === 'number'
  )
}

type MutationUnauthorizedHandler<TError, TVariables, TContext>
  = (error: TError, variables: TVariables, context: TContext) => Promise<TokenRefreshResult | undefined>

export function onMutationUnauthorized<TData = unknown, TError extends Error = Error, TVariables = void, TContext = unknown>(
  mutate: UseMutateFunction<TData, TError, TVariables, TContext>,
): MutationUnauthorizedHandler<TError, TVariables, TContext> {

  return async (error, variables): Promise<TokenRefreshResult | undefined> => {
    if (isWorkerUnauthorizedError(error)) {
      const tokenRefreshResult = await handleAuthentication(error.responseStatus)
      if (tokenRefreshResult === TokenRefreshResults.TOKEN_REFRESHED) {
        mutate(variables)
      }
      return tokenRefreshResult
    }
  }
}

type QueryUnauthorizedHandler<TError> = (error: TError) => Promise<TokenRefreshResult | undefined>

export function onQueryUnauthorized<TData = unknown, TError extends Error = Error>(
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<TData, TError>>,
): QueryUnauthorizedHandler<TError> {

  return async (error): Promise<TokenRefreshResult | undefined> => {
    if (isWorkerUnauthorizedError(error)) {
      const tokenRefreshResult = await handleAuthentication(error.responseStatus)
      if (tokenRefreshResult === TokenRefreshResults.TOKEN_REFRESHED) {
        refetch()
      }
      return tokenRefreshResult
    }
  }
}
