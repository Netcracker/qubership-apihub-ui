import { Button } from '@mui/material'
import type { FC } from 'react'
import { memo, useState } from 'react'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { RulesetTable } from './RulesetTable'
import { CreateRulesetDialog } from './dialogs/CreateRulesetDialog'
import { AddIcon } from '@netcracker/qubership-apihub-ui-shared/icons/AddIcon'
import { useRulesets } from './hooks/api/useRulesets'

export const RulesetManagementTab: FC = memo(() => {
  const [rulesets, isLoading] = useRulesets()
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const handleOpenCreateDialog = (): void => {
    setIsCreateDialogOpen(true)
  }

  const handleCloseCreateDialog = (): void => {
    setIsCreateDialogOpen(false)
  }

  const handleRulesetCreated = (): void => {
    setIsCreateDialogOpen(false)
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
        >
          Add Ruleset
        </Button>
      }
      body={
        <>
          <RulesetTable rulesets={rulesets} isLoading={isLoading} />
          <CreateRulesetDialog
            open={isCreateDialogOpen}
            onClose={handleCloseCreateDialog}
            onCreated={handleRulesetCreated}
          />
        </>
      }
    />
  )
})
