import { useMemo } from 'react'
import { useSystemConfiguration } from '../../hooks/authorization/useSystemConfiguration'
import type { SystemExtension } from '../../types/system-configuration'

function useSystemExtensions(): SystemExtension[] {
  const [configuration] = useSystemConfiguration()

  return useMemo(() => configuration?.extensions ?? [], [configuration])
}

export function useLinterEnabled(): boolean {
  const extensions = useSystemExtensions()

  return useMemo(() => extensions.some(extension => extension.name === 'linter'), [extensions])
}
