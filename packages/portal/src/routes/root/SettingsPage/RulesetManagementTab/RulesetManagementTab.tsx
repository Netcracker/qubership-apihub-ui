import { Button } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { RulesetTable } from './RulesetTable'
import { CreateRulesetDialog } from './dialogs/CreateRulesetDialog'
import { AddIcon } from '@netcracker/qubership-apihub-ui-shared/icons/AddIcon'
import { useRulesets } from './hooks/api/useRulesets'
import { useEventBus } from '@apihub/routes/EventBusProvider'

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
          color="primary"
          startIcon={<AddIcon />}
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
