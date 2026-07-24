import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { isPlainObject } from 'lodash-es'
import { type FC, memo, useRef } from 'react'

import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { McpOverviewDetails } from '@netcracker/qubership-apihub-ui-shared/components/Mcp/McpOverviewDetails'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { DocumentTitleWithVersion } from '@netcracker/qubership-apihub-ui-shared/components/Titles/DocumentTitleWithVersion'
import {
  MCP_COLLECTION_INIT,
  MCP_EMPTY_SCOPE_MESSAGE,
  type McpEntity,
} from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import type { Key, PackageKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { toOptionalString } from '@netcracker/qubership-apihub-ui-shared/utils/strings'

import { usePackageKind } from '../../usePackageKind'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useMcpEntities } from '../api/useMcpEntities'
import { useMcpEntityDetails } from '../api/useMcpEntityDetails'

type McpOverviewProps = Readonly<{
  packageKey: Key
  versionKey: Key
  mcpEndpoint?: string
  refPackageKey?: PackageKey
  isEmptyMcpScope: boolean
}>

type CachedOverview = Readonly<{
  data: Record<string, unknown>
  endpoint?: string
}>

export const McpOverview: FC<McpOverviewProps> = memo<McpOverviewProps>(({
  packageKey,
  versionKey,
  mcpEndpoint,
  refPackageKey,
  isEmptyMcpScope,
}) => {
  const [kind] = usePackageKind()
  const canLoadOverview = !isEmptyMcpScope && !!mcpEndpoint

  const [initEntities] = useMcpEntities({
    packageKey: packageKey,
    versionKey: versionKey,
    collection: MCP_COLLECTION_INIT,
    mcpEndpoint: mcpEndpoint,
    refPackageKey: refPackageKey,
    enabled: canLoadOverview,
  })

  // keepPreviousData may still expose the previous package/endpoint init row - never details-fetch it.
  const [initEntity] = initEntities
  const scopedInitEntity = isInitEntityForScope(initEntity, mcpEndpoint, refPackageKey)
    ? initEntity
    : undefined

  const [detailsPackageKey, detailsVersionKey] = usePackageParamsWithRef(
    kind === DASHBOARD_KIND ? scopedInitEntity?.packageRef?.key ?? refPackageKey : '',
  )

  const { data: entityDetails } = useMcpEntityDetails({
    packageKey: detailsPackageKey,
    versionKey: detailsVersionKey,
    collection: MCP_COLLECTION_INIT,
    mcpEntityId: scopedInitEntity?.mcpEntityId,
    enabled: canLoadOverview && !!scopedInitEntity?.mcpEntityId,
  })

  // keepPreviousData on details can still return the previous entity payload.
  const overviewData = entityDetails?.mcpEntityId === scopedInitEntity?.mcpEntityId
    ? entityDetails?.data
    : undefined

  const displayedRef = useRef<CachedOverview | undefined>()

  if (isEmptyMcpScope) {
    displayedRef.current = undefined
    return (
      <Placeholder
        invisible={false}
        area={CONTENT_PLACEHOLDER_AREA}
        message={MCP_EMPTY_SCOPE_MESSAGE}
        data-testid="NoItemsPlaceholder"
      />
    )
  }

  if (overviewData !== undefined) {
    displayedRef.current = {
      data: overviewData,
      endpoint: mcpEndpoint,
    }
  }

  const displayData = overviewData ?? displayedRef.current?.data
  if (displayData === undefined) {
    return <LoadingIndicator />
  }

  const serverInfo = extractMcpServerInfo(displayData)
  const displayTitle = serverInfo.name ??
    (overviewData !== undefined ? mcpEndpoint : displayedRef.current?.endpoint) ??
    'MCP Server'

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
          <McpOverviewDetails data={displayData} data-testid="McpOverview" />
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

function isInitEntityForScope(
  entity: McpEntity | undefined,
  mcpEndpoint: string | undefined,
  refPackageKey: PackageKey | undefined,
): boolean {
  if (!entity || !mcpEndpoint || entity.mcpEndpoint !== mcpEndpoint) {
    return false
  }
  if (refPackageKey && entity.packageRef?.key && entity.packageRef.key !== refPackageKey) {
    return false
  }
  return true
}

function extractMcpServerInfo(data: Record<string, unknown>): McpServerInfo {
  const {serverInfo} = data
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
