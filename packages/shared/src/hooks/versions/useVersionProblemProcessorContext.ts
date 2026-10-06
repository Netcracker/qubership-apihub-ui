import { useSystemInfo } from '../../features/system-info/api/useSystemInfo'
import { useVersionInfo } from '../frontend-version/useVersionInfo'
import type { VersionProblemProcessorContext } from './versionProblemDetails'

export function useVersionProblemProcessorContext(): VersionProblemProcessorContext {
  const { apiProcessorVersion } = useVersionInfo()
  const { migrationInProgress } = useSystemInfo()

  return {
    appApiProcessorVersion: apiProcessorVersion,
    migrationInProgress: migrationInProgress,
  }
}
