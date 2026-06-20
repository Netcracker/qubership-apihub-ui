import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { isPlainObject } from 'lodash-es'
import { type FC, memo, useMemo } from 'react'

import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { McpOverviewDetails } from '@netcracker/qubership-apihub-ui-shared/components/Mcp/McpOverviewDetails'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { DocumentTitleWithVersion } from '@netcracker/qubership-apihub-ui-shared/components/Titles/DocumentTitleWithVersion'
import type { McpEntity } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import { MCP_COLLECTION_INIT } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import { toOptionalString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'

import type { Key } from '@apihub/entities/keys'
import { useMcpEntityDetails } from '../api/useMcpEntityDetails'

export type McpOverviewProps = Readonly<{
  packageKey: Key
  versionKey: Key
  mcpEndpoint?: string
  selectedEntity?: McpEntity
  isInitLoading?: boolean
}>

export const McpOverview: FC<McpOverviewProps> = memo<McpOverviewProps>(({
  packageKey,
  versionKey,
  mcpEndpoint,
  selectedEntity,
  isInitLoading = false,
}) => {
  const { data: entityDetails, isInitialLoading: isDetailsLoading } = useMcpEntityDetails({
    packageKey: packageKey,
    versionKey: versionKey,
    collection: MCP_COLLECTION_INIT,
    entityId: selectedEntity?.entityId,
    enabled: !!selectedEntity?.entityId,
  })

  const serverInfo = useMemo(
    () => extractMcpServerInfo(entityDetails?.data),
    [entityDetails?.data],
  )

  const isLoading = isInitLoading || isDetailsLoading

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
          <McpOverviewDetails data={entityDetails?.data} data-testid="McpOverview" />

          {!selectedEntity && (
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
