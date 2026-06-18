import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { FC } from 'react'
import { memo, useMemo } from 'react'

import type { Key } from '@apihub/entities/keys'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { DocumentTitleWithVersion } from '@netcracker/qubership-apihub-ui-shared/components/Titles/DocumentTitleWithVersion'
import type { McpEntity } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'
import { MCP_COLLECTION_INIT } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'

import { useMcpEntityDetails } from '../api/useMcpEntityDetails'

export type McpOverviewProps = {
  packageKey: Key
  versionKey: Key
  mcpEndpoint?: string
  selectedEntity?: McpEntity
  isInitLoading?: boolean
}

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
    () => extractServerInfo(entityDetails?.data),
    [entityDetails?.data],
  )

  const capabilities = useMemo(
    () => extractCapabilities(entityDetails?.data),
    [entityDetails?.data],
  )

  const instructions = useMemo(
    () => extractInstructions(entityDetails?.data),
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
        <OverviewBody data-testid="McpOverview">
          {capabilities.length > 0 && (
            <Section>
              <SectionTitle variant="subtitle1">Capabilities:</SectionTitle>
              <BulletList>
                {capabilities.map(label => (
                  <Typography key={label} component="li" variant="body2">
                    {label}
                  </Typography>
                ))}
              </BulletList>
            </Section>
          )}

          {instructions && (
            <Section>
              <SectionTitle variant="subtitle1">Instructions:</SectionTitle>
              <InstructionsText variant="body2">
                {instructions}
              </InstructionsText>
            </Section>
          )}

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

type McpCapabilities = Readonly<Record<string, unknown>>

const MCP_CAPABILITY_LABELS: ReadonlyArray<readonly [string, string]> = [
  ['tools', 'Tools'],
  ['resources', 'Resources'],
  ['prompts', 'Prompts'],
]

function extractServerInfo(data: Record<string, unknown> | undefined): McpServerInfo {
  const serverInfo = data?.serverInfo
  if (!serverInfo || typeof serverInfo !== 'object') {
    return {}
  }
  const info = serverInfo as Record<string, unknown>
  return {
    name: typeof info.name === 'string' ? info.name : undefined,
    version: typeof info.version === 'string' ? info.version : undefined,
  }
}

function extractCapabilities(data: Record<string, unknown> | undefined): ReadonlyArray<string> {
  const capabilities = data?.capabilities
  if (!capabilities || typeof capabilities !== 'object') {
    return []
  }
  const capabilityRecord = capabilities as McpCapabilities
  return MCP_CAPABILITY_LABELS
    .filter(([key]) => key in capabilityRecord)
    .map(([, label]) => label)
}

function extractInstructions(data: Record<string, unknown> | undefined): string | undefined {
  const instructions = data?.instructions
  if (typeof instructions !== 'string') {
    return undefined
  }
  const trimmed = instructions.trim()
  return trimmed === '' ? undefined : trimmed
}

const OverviewBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  height: '100%',
  overflow: 'auto',
}))

const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}))

const SectionTitle = styled(Typography)({
  fontWeight: 600,
})

const BulletList = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}))

const InstructionsText = styled(Typography)({
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
})
