import { ChangeSeverityFilters } from '@netcracker/qubership-apihub-ui-shared/components/ChangeSeverityFilters'
import type { ChangesSummary } from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import { type FC, memo } from 'react'

export type ComparisonDdlEntityChangeSeverityFiltersProps = {
  changeSummary?: ChangesSummary
  isLoading?: boolean
}

export const ComparisonDdlEntityChangeSeverityFilters: FC<ComparisonDdlEntityChangeSeverityFiltersProps> = memo<
  ComparisonDdlEntityChangeSeverityFiltersProps
>(({
  changeSummary,
  isLoading,
}) => {
  if (isLoading || !changeSummary) {
    return null
  }

  return (
    <ChangeSeverityFilters
      changes={changeSummary}
      filters={[]}
    />
  )
})

ComparisonDdlEntityChangeSeverityFilters.displayName = 'ComparisonDdlEntityChangeSeverityFilters'
