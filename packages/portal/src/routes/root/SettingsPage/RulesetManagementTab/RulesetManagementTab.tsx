import { Box, Button, MenuItem, Select } from '@mui/material'
import { useEventBus } from '@netcracker/qubership-apihub-ui-portal/src/routes/EventBusProvider'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { PlusIcon } from '@netcracker/qubership-apihub-ui-shared/icons/PlusIcon'
import { type FC, memo, useState} from 'react'
import { useRulesets } from './api/useRulesets'
import { CreateRulesetDialog } from './CreateRulesetDialog'
import { RulesetTable } from './RulesetTable'
import { RULESET_API_TYPE_TITLE_MAP, RulesetApiTypes, type RulesetApiType } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'

export const RulesetManagementTab: FC = memo(() => {
  const [rulesets, isLoading] = useRulesets()
  const { showCreateRulesetDialog } = useEventBus()
  const [apiType, setApiType] = useState<RulesetApiType>(Object.values(RulesetApiTypes)[0])

  const handleOpenCreateDialog = (): void => {
    showCreateRulesetDialog()
  }

  return (
    <BodyCard
      header={
        <>
          <Box display="flex" gap={2} alignItems="center">
            OpenAPI Ruleset Management
            <Select
              variant="filled"
              value={apiType}
              onChange={(e) => setApiType(e.target.value as RulesetApiType)}
              data-testid="RulesetTypeSelect"
              sx={{
                '& .MuiSelect-select': {
                  pt: 0.75,
                  pb: 0.75,
                },
                minWidth: '110px',
              }}
            >
              {Object.values(RulesetApiTypes).map(apiType => (
                <MenuItem
                  key={apiType}
                  value={apiType}
                  data-testid={`MenuItem-${apiType}`}
                >
                  {RULESET_API_TYPE_TITLE_MAP[apiType]}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </>
      }
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
          <RulesetTable rulesets={rulesets} isLoading={isLoading} apiType={apiType}/>
          <CreateRulesetDialog />
        </>
      }
    />
  )
})

RulesetManagementTab.displayName = 'RulesetManagementTab'
