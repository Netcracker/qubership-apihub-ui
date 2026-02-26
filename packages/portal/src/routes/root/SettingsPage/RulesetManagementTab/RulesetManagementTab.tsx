import { Box, Button, type SelectChangeEvent } from '@mui/material'
import type { RulesetLinter } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { type RulesetApiType, RulesetApiTypes, RulesetLinters } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { useEventBus } from '@netcracker/qubership-apihub-ui-portal/src/routes/EventBusProvider'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { PlusIcon } from '@netcracker/qubership-apihub-ui-shared/icons/PlusIcon'
import { type FC, memo, useCallback, useMemo, useState } from 'react'
import { useRulesets } from './api/useRulesets'
import { CreateRulesetDialog } from './components/CreateRulesetDialog'
import { RulesetApiTypeSelector } from './components/RulesetApiTypeSelector'
import { RulesetLinterSelector } from './components/RulesetLinterSelector'
import { RulesetTable } from './components/RulesetTable'

export const RulesetManagementTab: FC = memo(() => {
  const [rulesets, isLoading] = useRulesets()
  const { showCreateRulesetDialog } = useEventBus()
  const [selectedApiType, setSelectedApiType] = useState<RulesetApiType>(RulesetApiTypes.OAS_3_0)
  const [selectedLinter, setSelectedLinter] = useState<RulesetLinter>(RulesetLinters.SPECTRAL)

  const selectedRulesets = useMemo(() => {
    return rulesets
      .filter(ruleset => ruleset.apiType === selectedApiType)
      .filter(ruleset => ruleset.linter === selectedLinter)
  }, [rulesets, selectedApiType, selectedLinter])

  const handleChangeApiType = useCallback((event: SelectChangeEvent): void => {
    setSelectedApiType(event.target.value as RulesetApiType)
  }, [])

  const handleChangeLinter = useCallback((event: SelectChangeEvent): void => {
    setSelectedLinter(event.target.value as RulesetLinter)
  }, [])

  return (
    <BodyCard
      header={
        <Box display="flex" gap={2} alignItems="center" height='54px'>
          API Quality Ruleset Management
          <RulesetApiTypeSelector apiType={selectedApiType} onChange={handleChangeApiType} />
          <RulesetLinterSelector linter={selectedLinter} onChange={handleChangeLinter} />
        </Box>
      }
      action={
        <Button
          variant="contained"
          disabled={isLoading}
          startIcon={<PlusIcon />}
          onClick={showCreateRulesetDialog}
          aria-label="Add new ruleset"
          data-testid="AddRulesetButton"
        >
          Add Ruleset
        </Button>
      }
      body={
        <>
          <RulesetTable
            rulesets={selectedRulesets}
            isLoading={isLoading}
          />
          <CreateRulesetDialog
            apiType={selectedApiType}
            linter={selectedLinter}
            rulesets={selectedRulesets}
          />
        </>
      }
    />
  )
})

RulesetManagementTab.displayName = 'RulesetManagementTab'
