import { setupWorker } from 'msw/browser'
import { versionHandlers } from './handlers/version-handlers'

export const worker = setupWorker(...versionHandlers)
