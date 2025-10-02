import {useMemo} from 'react'
import {useSystemConfiguration} from '../../hooks/authorization/useSystemConfiguration'
import type {SystemExtension} from '../../types/system-configuration'

function useSystemExtensions(): SystemExtension[] {
  const [configuration] = useSystemConfiguration()

  return useMemo(() => configuration?.extensions ?? [], [configuration])
}

export function useLinterEnabled(): boolean {
  const extensions = useSystemExtensions()

  // Extension which is equal to "qubership-api-linter" has name defined in following file:
  // https://github.com/Netcracker/qubership-apihub/blob/linter/helm-templates/qubership-apihub/values.yaml#L210
  return useMemo(() => extensions.some(extension => extension.name === 'api-linter'), [extensions])
}

export function useAgentEnabled(): boolean {
  const extensions = useSystemExtensions()

  return useMemo(() => extensions.some(extension => extension.name === 'agents-backend'), [extensions])
}

export function useNcServiceEnabled(): boolean {
  const extensions = useSystemExtensions()

  return useMemo(() => extensions.some(extension => extension.name === 'nc-service'), [extensions])
}

export function useGetAgentPrefix(): string {
  const extensions = useSystemExtensions()
  const agentEnabled = useAgentEnabled()

  return useMemo(() => (agentEnabled ? findExtensions(extensions, 'agents-backend')?.pathPrefix || '' : ''), [extensions, agentEnabled])
}

export function findExtensions(extensions: SystemExtension[], name: string): SystemExtension | undefined {
  return extensions.find(extension => extension.name === name)
}
