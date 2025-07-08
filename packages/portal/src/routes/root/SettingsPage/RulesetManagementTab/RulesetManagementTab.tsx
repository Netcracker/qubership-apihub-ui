import { Button } from '@mui/material'
import { useEventBus } from '@netcracker/qubership-apihub-ui-portal/src/routes/EventBusProvider'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { PlusIcon } from '@netcracker/qubership-apihub-ui-shared/icons/PlusIcon'
import { type FC, memo } from 'react'
import { useRulesets } from './api/useRulesets'
import { CreateRulesetDialog } from './CreateRulesetDialog'
import { RulesetTable } from './RulesetTable'

export const RulesetManagementTab: FC = memo(() => {
  const [rulesets, isLoading] = useRulesets()
  const { showCreateRulesetDialog } = useEventBus()

  const handleOpenCreateDialog = (): void => {
    showCreateRulesetDialog()
  }

  return (
    <BodyCard
      header="OpenAPI Ruleset Management"
      action={
        <Button
          variant="contained"
          disabled={isLoading}
          startIcon={<PlusIcon />}
          onClick={handleOpenCreateDialog}
          data-testid="AddRulesetButton"
          aria-label="Add new ruleset"
        >
          Add Ruleset
        </Button>
      }
      body={
        <>
          <RulesetTable rulesets={rulesets} isLoading={isLoading} />
          <CreateRulesetDialog />
        </>
      }
    />
  )
})

RulesetManagementTab.displayName = 'RulesetManagementTab'
