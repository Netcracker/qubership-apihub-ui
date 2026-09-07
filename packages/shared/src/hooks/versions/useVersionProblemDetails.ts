import { useSystemInfo } from '../../features/system-info/api/useSystemInfo'
import { useVersionInfo } from '../frontend-version/useVersionInfo'
import { useApiProcessorVersion } from '../package-version-content/usePackageVersionContent'
import {
  resolveVersionProblemDetails,
  type UseVersionProblemDetailsParams,
  type VersionProblemDetails,
} from './versionProblemDetails'

export function useVersionProblemDetails(
  params: UseVersionProblemDetailsParams,
): VersionProblemDetails {
  const { apiProcessorVersion: providedApiProcessorVersion, packageKey, versionKey } = params
  const { apiProcessorVersion: appApiProcessorVersion } = useVersionInfo()
  const { migrationInProgress } = useSystemInfo()
  const fetchedApiProcessorVersion = useApiProcessorVersion({
    packageKey: providedApiProcessorVersion === undefined ? packageKey : undefined,
    versionKey: providedApiProcessorVersion === undefined ? versionKey : undefined,
  })

  return resolveVersionProblemDetails({
    ...params,
    apiProcessorVersion: providedApiProcessorVersion ?? fetchedApiProcessorVersion,
    appApiProcessorVersion: appApiProcessorVersion,
    migrationInProgress: migrationInProgress,
  })
}
