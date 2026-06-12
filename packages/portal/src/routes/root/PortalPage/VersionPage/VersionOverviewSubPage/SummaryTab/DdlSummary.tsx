import { type FC, memo } from 'react'

import {
  type ChangesSummary,
  DEFAULT_CHANGE_SEVERITY_MAP,
} from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import {
  CONTRACT_TYPE_DDL,
  CONTRACT_TYPE_TITLE_MAP,
} from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import type { DdlContractsSummary } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'

import { buildBwcValidationMetrics } from './bwcValidationMetrics'
import { SUMMARY_IMPACTED_ENTITY_TABLES } from './entities'
import { SummaryPanels } from './SummaryPanel'
import { SummarySection } from './SummarySection'

type DdlSummaryProps = Readonly<{
  ddlSummary: DdlContractsSummary
  changesSummary?: ChangesSummary
  numberOfImpactedTables?: ChangesSummary
}>

export const DdlSummary: FC<DdlSummaryProps> = memo(({
  ddlSummary,
  changesSummary,
  numberOfImpactedTables,
}) => {
  const showViews = ddlSummary.views > 0

  return (
    <SummarySection title={CONTRACT_TYPE_TITLE_MAP[CONTRACT_TYPE_DDL]} data-testid="DdlContractSummary">
      <SummaryPanels
        numbers={{
          metrics: [
            {
              label: 'Total number of tables',
              value: ddlSummary.tables,
              'data-testid': 'DdlCount-Tables',
            },
            {
              label: 'Total number of views',
              value: ddlSummary.views,
              visible: showViews,
              'data-testid': 'DdlCount-Views',
            },
          ],
        }}
        validations={{
          title: 'DDL Validation',
          metrics: buildBwcValidationMetrics({
            changesSummary: changesSummary ?? DEFAULT_CHANGE_SEVERITY_MAP,
            numberOfImpacted: numberOfImpactedTables ?? DEFAULT_CHANGE_SEVERITY_MAP,
            impactedEntity: SUMMARY_IMPACTED_ENTITY_TABLES,
          }),
        }}
      />
    </SummarySection>
  )
})

DdlSummary.displayName = 'DdlSummary'
