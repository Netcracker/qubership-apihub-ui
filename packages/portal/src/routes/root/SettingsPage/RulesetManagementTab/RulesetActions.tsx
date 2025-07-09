import { Box, IconButton, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { memo, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useActivateRuleset } from './hooks/api/useActivateRuleset'
import { ConfirmationDialog } from '@netcracker/qubership-apihub-ui-shared/components/ConfirmationDialog'
import type { RulesetDto } from '@apihub/entities/api-quality-ruleset'
import { RulesetFileControls } from '@apihub/components/RulesetFileControls'
import { useDeleteRuleset } from './hooks/api/useDeleteRuleset'

export interface RulesetActionsProps {
  ruleset: RulesetDto
}

export const RulesetActions: FC<RulesetActionsProps> = memo(({ ruleset }) => {
  const [deleteRuleset, isDeleting] = useDeleteRuleset()
  const [activateRuleset, isActivating] = useActivateRuleset()

  const [isActivateDialogOpen, setIsActivateDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const handleActivate =  (): void => {
      activateRuleset(ruleset)
  }

  const handleDelete = (): void => {
    deleteRuleset(ruleset)
  }

  return (
    <>
      <Box display="flex" gap={2} visibility="hidden" className="hoverable">
        {/* Activate button - disabled if already active */}
        <Tooltip title={ruleset.status === 'active' ? 'Already active' : 'Activate ruleset'}>
          <span>
            <IconButton
              size="small"
              onClick={() => setIsActivateDialogOpen(true)}
              disabled={ruleset.status === 'active' || isActivating}
              data-testid="ActivateRulesetButton"
            >
              <PlayArrowIcon fontSize="small" color={ruleset.status === 'active' ? 'disabled' : 'primary'} />
            </IconButton>
          </span>
        </Tooltip>

        <RulesetFileControls rulesetId={ruleset.id}/>

        {/* Delete button - disabled if cannot be deleted */}
        <Tooltip title={ruleset.canBeDeleted ? 'Delete ruleset' : 'Cannot delete active ruleset'}>
          <span>
            <IconButton
              size="small"
              onClick={() => setIsDeleteDialogOpen(true)}
              disabled={!ruleset.canBeDeleted || isDeleting}
              data-testid="DeleteRulesetButton"
            >
              <DeleteIcon fontSize="small" color={ruleset.canBeDeleted ? 'error' : 'disabled'} />
            </IconButton>
          </span>
        </Tooltip>
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
        title={`Delete ${ruleset.name} ruleset? ruleset? ruleset? ruleset? ruleset? ruleset? ruleset? ruleset?`}
        loading={isDeleting}
        onConfirm={handleDelete}
        onCancel={() => setIsDeleteDialogOpen(false)}
      />
    </>
  )
})
