import { Box, IconButton, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { memo, useState } from 'react'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded'
import { useActivateRuleset } from './hooks/api/useActivateRuleset'
import { ConfirmationDialog } from '@netcracker/qubership-apihub-ui-shared/components/ConfirmationDialog'
import type { RulesetDto } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { RulesetStatuses } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { ValidationRulesetFileControls } from '@apihub/components/ApiQuality/ValidationRulesetFileControls'
import { useDeleteRuleset } from './hooks/api/useDeleteRuleset'
import { DeleteIcon } from '@netcracker/qubership-apihub-ui-shared/icons/DeleteIcon'
import { SECONDARY_TEXT_COLOR } from '@netcracker/qubership-apihub-ui-shared/themes/colors'
import { DISABLED_BUTTON_COLOR } from '@netcracker/qubership-apihub-ui-shared/entities/operation-groups'

export interface RulesetActionsProps {
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
        <Tooltip title={ruleset.status === RulesetStatuses.ACTIVE ? 'The ruleset is already active' : 'Activate'}>
          <span>
            <IconButton
              size="small"
              onClick={() => setIsActivateDialogOpen(true)}
              disabled={ruleset.status === RulesetStatuses.ACTIVE}
              data-testid="ActivateButton"
            >
              <PlayCircleOutlineRoundedIcon
                fontSize="small"
                color={ruleset.status === RulesetStatuses.ACTIVE ? 'disabled' : 'muted'}
              />
            </IconButton>
          </span>
        </Tooltip>

        <ValidationRulesetFileControls rulesetId={ruleset.id} />

        <Tooltip
          title={ruleset.status === RulesetStatuses.ACTIVE
            ? 'Cannot delete active ruleset'
            : ruleset.canBeDeleted
            ? 'Delete'
            : 'The ruleset cannot be deleted due to existing versions that have been validated against this ruleset'}
        >
          <span>
            <IconButton
              size="small"
              onClick={() => setIsDeleteDialogOpen(true)}
              disabled={ruleset.status === RulesetStatuses.ACTIVE || !ruleset.canBeDeleted}
              data-testid="DeleteButton"
              sx={{ height: '20px' }}
            >
              <DeleteIcon
                color={ruleset.status === RulesetStatuses.ACTIVE || !ruleset.canBeDeleted
                  ? DISABLED_BUTTON_COLOR
                  : SECONDARY_TEXT_COLOR}
              />
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
        title={`Delete ${ruleset.name} ruleset?`}
        loading={isDeleting}
        onConfirm={handleDelete}
        onCancel={() => setIsDeleteDialogOpen(false)}
      />
    </>
  )
})
