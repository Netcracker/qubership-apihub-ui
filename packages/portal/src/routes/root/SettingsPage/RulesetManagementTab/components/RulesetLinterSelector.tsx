import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import type { RulesetLinter } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { RULESET_LINTER_TITLE_MAP, RulesetLinters } from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
import { type FC, memo } from 'react'

const STYLE = {
  minWidth: 170,
}

const MENU_PROPS = {
  PaperProps: {
    sx: {
      borderRadius: 1.5,
    },
  },
}

const INPUT_PROPS = { 'aria-label': 'API Type' }

type RulesetLinterSelectorProps = {
  linter: RulesetLinter
  onChange?: (event: SelectChangeEvent) => void
}

export const RulesetLinterSelector: FC<RulesetLinterSelectorProps> = memo<RulesetLinterSelectorProps>((props) => {
  const { linter, onChange } = props
  return (
    <FormControl sx={STYLE} variant="filled">
      <InputLabel id="demo-select-small-label">Linter</InputLabel>
      <Select
        labelId='demo-select-small-label'
        variant="filled"
        value={linter}
        onChange={onChange}
        sx={STYLE}
        inputProps={INPUT_PROPS}
        MenuProps={MENU_PROPS}
        data-testid="RulesetLinterSelect"
        label='Linter'
      >
        {Object.values(RulesetLinters).map(linter => (
          <MenuItem
            key={`linter-option-${linter}`}
            value={linter}
            data-testid={`MenuItem-${linter}`}
          >
            {RULESET_LINTER_TITLE_MAP[linter]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
})

RulesetLinterSelector.displayName = 'RulesetLinterSelector'
