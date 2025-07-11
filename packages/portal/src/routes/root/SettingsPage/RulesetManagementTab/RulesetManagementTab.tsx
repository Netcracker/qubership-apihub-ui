import { Button } from '@mui/material'
import type { FC } from 'react'
import { memo, useRef } from 'react'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { RulesetTable } from './RulesetTable'
import { CreateRulesetDialog, type CreateRulesetDialogRef } from './dialogs/CreateRulesetDialog'
import { AddIcon } from '@netcracker/qubership-apihub-ui-shared/icons/AddIcon'
import { useRulesets } from './hooks/api/useRulesets'

export const RulesetManagementTab: FC = memo(() => {
  const [rulesets, isLoading] = useRulesets()
  const createDialogRef = useRef<CreateRulesetDialogRef>(null)

  const handleOpenCreateDialog = (): void => {
    createDialogRef.current?.open()
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
          <CreateRulesetDialog ref={createDialogRef} />
        </>
      }
    />
  )
})
