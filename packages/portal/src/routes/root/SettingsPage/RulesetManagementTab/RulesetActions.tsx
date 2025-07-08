import { Box } from '@mui/material'
import {
  ValidationRulesetFileControls,
} from '@netcracker/qubership-apihub-ui-portal/src/components/ApiQuality/ValidationRulesetFileControls'
import {
  type RulesetDto,
  RulesetStatuses,
} from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { ButtonWithHint } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ButtonWithHint'
import {
  ConfirmationDialog,
} from '@netcracker/qubership-apihub-ui-shared/components/ConfirmationDialog/ConfirmationDialog'
import { DeleteIconMui } from '@netcracker/qubership-apihub-ui-shared/icons/DeleteIconMui'
import { PlayIcon } from '@netcracker/qubership-apihub-ui-shared/icons/PlayIcon'
import { type FC, memo, useState } from 'react'
import { useActivateRuleset } from './api/useActivateRuleset'
import { useDeleteRuleset } from './api/useDeleteRuleset'

type RulesetActionsProps = {
  ruleset: RulesetDto
}

export const RulesetActions: FC<RulesetActionsProps> = memo(({ ruleset }) => {
  const [deleteRuleset, isDeleting] = useDeleteRuleset()
  const [activateRuleset, isActivating] = useActivateRuleset()

  const [isActivateDialogOpen, setIsActivateDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const handleActivate = (): void => {
    activateRuleset(ruleset)
  }

  const handleDelete = (): void => {
    deleteRuleset(ruleset)
  }

  return (
    <>
      <Box display="flex" gap={2} visibility="hidden" className="hoverable" alignItems="center">
        <ButtonWithHint
          size="small"
          area-label="Activate Ruleset"
          hint={ruleset.status === RulesetStatuses.ACTIVE ? 'The ruleset is already active' : 'Activate'}
          disabled={ruleset.status === RulesetStatuses.ACTIVE}
          startIcon={<PlayIcon fontSize="small" />}
          onClick={() => setIsActivateDialogOpen(true)}
          data-testid="ActivateButton"
        />

        <ValidationRulesetFileControls rulesetId={ruleset.id} />

        <ButtonWithHint
          size="small"
          area-label="Delete Ruleset"
          hint={ruleset.status === RulesetStatuses.ACTIVE
            ? 'Cannot delete active ruleset'
            : ruleset.canBeDeleted
            ? 'Delete'
            : 'The ruleset cannot be deleted due to existing versions that have been validated against this ruleset'}
          disabled={ruleset.status === RulesetStatuses.ACTIVE || !ruleset.canBeDeleted}
          startIcon={<DeleteIconMui fontSize="small" />}
          onClick={() => setIsDeleteDialogOpen(true)}
          data-testid="DeleteButton"
        />
      </Box>

      <ConfirmationDialog
        open={isActivateDialogOpen}
        title="Changing the Active Ruleset"
        message="Activating this ruleset will automatically deactivate the currently active one. Do you want to proceed?"
        loading={isActivating}
        onConfirm={handleActivate}
        onCancel={() => setIsActivateDialogOpen(false)}
        confirmButtonName="Proceed"
        confirmButtonColor="primary"
      />

      <ConfirmationDialog
        open={isDeleteDialogOpen}
        title={`Delete '${ruleset.name}' ruleset?`}
        loading={isDeleting}
        onConfirm={handleDelete}
        onCancel={() => setIsDeleteDialogOpen(false)}
      />
    </>
  )
})

RulesetActions.displayName = 'RulesetActions'
