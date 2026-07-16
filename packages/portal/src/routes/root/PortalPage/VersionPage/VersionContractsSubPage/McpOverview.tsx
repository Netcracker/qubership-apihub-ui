import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { isPlainObject } from 'lodash-es'
import { type FC, memo, useMemo } from 'react'

import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { McpOverviewDetails } from '@netcracker/qubership-apihub-ui-shared/components/Mcp/McpOverviewDetails'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { DocumentTitleWithVersion } from '@netcracker/qubership-apihub-ui-shared/components/Titles/DocumentTitleWithVersion'
import { MCP_COLLECTION_INIT } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import type { Key, PackageKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { toOptionalString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'

import { usePackageKind } from '../../usePackageKind'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useMcpEntities } from '../api/useMcpEntities'
import { useMcpEntityDetails } from '../api/useMcpEntityDetails'

export type McpOverviewProps = Readonly<{
  packageKey: Key
  versionKey: Key
  mcpEndpoint?: string
  refPackageKey?: PackageKey
  hasEndpoints: boolean
}>

export const McpOverview: FC<McpOverviewProps> = memo<McpOverviewProps>(({
  packageKey,
  versionKey,
  mcpEndpoint,
  refPackageKey,
  hasEndpoints,
}) => {
  const [kind] = usePackageKind()
  const [initEntities, isInitListLoading] = useMcpEntities({
    packageKey: packageKey,
    versionKey: versionKey,
    collection: MCP_COLLECTION_INIT,
    mcpEndpoint: mcpEndpoint,
    refPackageKey: refPackageKey,
    enabled: hasEndpoints && !!mcpEndpoint,
  })

  const [initEntity] = initEntities
  const [detailsPackageKey, detailsVersionKey] = usePackageParamsWithRef(
    kind === DASHBOARD_KIND ? initEntity?.packageRef?.key ?? refPackageKey : '',
  )

  const { data: entityDetails, isInitialLoading: isDetailsLoading } = useMcpEntityDetails({
    packageKey: detailsPackageKey,
    versionKey: detailsVersionKey,
    collection: MCP_COLLECTION_INIT,
    mcpEntityId: initEntity?.mcpEntityId,
    enabled: !!initEntity?.mcpEntityId,
  })

  const overviewData = entityDetails?.data

  const serverInfo = useMemo(
    () => extractMcpServerInfo(overviewData),
    [overviewData],
  )

  const isLoading = isInitListLoading || isDetailsLoading

  if (isLoading) {
    return <LoadingIndicator />
  }

  const displayTitle = serverInfo.name ?? mcpEndpoint ?? 'MCP Server'

  return (
    <BodyCard
      header={
        <DocumentTitleWithVersion
          title={displayTitle}
          version={serverInfo.version}
        />
      }
      body={
        <OverviewBody>
          <McpOverviewDetails data={overviewData} data-testid="McpOverview" />

          {!hasEndpoints && (
            <Placeholder
              invisible={false}
              area={CONTENT_PLACEHOLDER_AREA}
              message="No MCP endpoints"
              data-testid="NoItemsPlaceholder"
            />
          )}
        </OverviewBody>
      }
    />
  )
})

McpOverview.displayName = 'McpOverview'

type McpServerInfo = Readonly<{
  name?: string
  version?: string
}>

function extractMcpServerInfo(data: Record<string, unknown> | undefined): McpServerInfo {
  const serverInfo = data?.serverInfo
  if (!isPlainObject(serverInfo)) {
    return {}
  }
  const { name, version } = serverInfo as Record<string, unknown>
  return {
    name: toOptionalString(name),
    version: toOptionalString(version),
  }
}

const OverviewBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  height: '100%',
  overflow: 'auto',
}))
