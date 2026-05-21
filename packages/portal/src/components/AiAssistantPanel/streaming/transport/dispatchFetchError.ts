import {
  FETCH_ERROR_EVENT,
  getResponseError,
  type FetchErrorDetails,
} from '@netcracker/qubership-apihub-ui-shared/utils/requests'
import { HttpError } from '@netcracker/qubership-apihub-ui-shared/utils/responses'

/** Same `fetch-error` event as `requestJson`; always snackbar, never ErrorPage. */
export function dispatchFetchError(detail: FetchErrorDetails): void {
  dispatchEvent(
    new CustomEvent<FetchErrorDetails>(FETCH_ERROR_EVENT, {
      detail: { ...detail, forceSnackbar: true, status: detail.status ?? null },
      bubbles: true,
      composed: true,
      cancelable: false,
    }),
  )
}

/** Parse ai-chat HTTP error body and optionally notify (shared by stream POST and `aiChatJson`). */
export async function toAiChatHttpError(response: Response): Promise<HttpError> {
  const [message, code, status] = await getResponseError(response)
  if (response.status !== 404) {
    dispatchFetchError({
      title: `Error ${response.status}`,
      message: message,
      code: code,
      status: null,
    })
  }
  return new HttpError(message, code, status)
}
