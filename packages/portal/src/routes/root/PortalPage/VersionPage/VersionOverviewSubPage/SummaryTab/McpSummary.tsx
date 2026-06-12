import { type FC, memo } from 'react'

import {
  CONTRACT_TYPE_MCP,
  CONTRACT_TYPE_TITLE_MAP,
} from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import type { McpContractsSummary } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-mcp'

import { SummaryPanels } from './SummaryPanel'
import { SummarySection } from './SummarySection'

type McpSummaryProps = Readonly<{
  mcpSummary: McpContractsSummary
}>

export const McpSummary: FC<McpSummaryProps> = memo(({ mcpSummary }) => {
  const showEndpoints = mcpSummary.endpoints > 1

  return (
    <SummarySection title={CONTRACT_TYPE_TITLE_MAP[CONTRACT_TYPE_MCP]} data-testid="McpContractSummary">
      <SummaryPanels
        numbers={{
          metrics: [
          {
            label: 'MCP Endpoints',
            value: mcpSummary.endpoints,
            visible: showEndpoints,
            'data-testid': 'McpCount-MCP Endpoints',
          },
          {
            label: 'Total number of tools',
            value: mcpSummary.tools,
            'data-testid': 'McpCount-Tools',
          },
          {
            label: 'Total number of resources',
            value: mcpSummary.resources,
            'data-testid': 'McpCount-Resources',
          },
          {
            label: 'Total number of prompts',
            value: mcpSummary.prompts,
            'data-testid': 'McpCount-Prompts',
          },
        ],
        }}
      />
    </SummarySection>
  )
})

McpSummary.displayName = 'McpSummary'
