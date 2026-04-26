import { API_V1, requestJson, requestVoid } from '@netcracker/qubership-apihub-ui-shared/utils/requests'

export function aiChatJson<T extends object | null>(
  input: RequestInfo | URL,
  init?: RequestInit,
  signal?: AbortSignal,
): Promise<T> {
  return requestJson<T>(input, init, { basePath: API_V1 }, signal)
}

export function aiChatVoid(input: RequestInfo | URL, init?: RequestInit): Promise<void> {
  return requestVoid(input, init, { basePath: API_V1 })
}
