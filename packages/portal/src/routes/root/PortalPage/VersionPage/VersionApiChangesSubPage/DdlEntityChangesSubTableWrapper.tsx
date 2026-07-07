import type { FC } from 'react'
import { memo, useMemo } from 'react'

import { getDdlEntityChangesRequestIds } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl-changelog'
import { sortChanges } from '@netcracker/qubership-apihub-ui-shared/utils/api-changes'
import { OperationChangesSubTable } from '@netcracker/qubership-apihub-ui-shared/widgets/ChangesViewWidget'
import type { DdlSubTableComponentProps } from '@netcracker/qubership-apihub-ui-shared/widgets/ChangesViewWidget/components/DdlChangesViewTable'

import { usePackageVersionContent } from '@apihub/routes/root/usePackageVersionContent'

import { useDdlEntityChanges } from '../api/useDdlEntityChanges'

export const DdlEntityChangesSubTableWrapper: FC<DdlSubTableComponentProps> = memo<DdlSubTableComponentProps>(({
  value,
  packageKey,
  versionKey,
}) => {
  const { ddlEntityId, previousVersionDdlEntityId } = getDdlEntityChangesRequestIds(value.original.change)

  const { versionContent, isLoading: isVersionLoading } = usePackageVersionContent({ packageKey, versionKey })

  const [changes, isLoading] = useDdlEntityChanges({
    packageKey: packageKey,
    versionKey: versionKey,
    ddlEntityId: ddlEntityId,
    previousVersion: versionContent?.previousVersion,
    previousVersionPackageId: versionContent?.previousVersionPackageId ?? packageKey,
    previousVersionDdlEntityId: previousVersionDdlEntityId,
    enabled: true,
  })

  const sortedChanges = useMemo(() => sortChanges(changes), [changes])

  return (
    <OperationChangesSubTable
      changes={sortedChanges}
      isLoading={isLoading || isVersionLoading}
    />
  )
})

DdlEntityChangesSubTableWrapper.displayName = 'DdlEntityChangesSubTableWrapper'
