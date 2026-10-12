import { setupWorker } from 'msw/browser'

import { serviceHandlers } from './handlers/service-handlers'

export const worker = setupWorker(...serviceHandlers)
