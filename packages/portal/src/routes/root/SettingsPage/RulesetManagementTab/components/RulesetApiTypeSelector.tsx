import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import {
  RULESET_API_TYPE_TITLE_MAP,
  type RulesetApiType,
  RulesetApiTypes,
} from '@netcracker/qubership-apihub-ui-portal/src/entities/api-quality/rulesets'
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

type RulesetApiTypeSelectorProps = {
  apiType: RulesetApiType
  onChange?: (event: SelectChangeEvent) => void
}

export const RulesetApiTypeSelector: FC<RulesetApiTypeSelectorProps> = memo<RulesetApiTypeSelectorProps>(({
  apiType,
  onChange,
}) => {
  return (
    <FormControl sx={STYLE} variant="filled">
      <InputLabel id="demo-select-small-label">API Type</InputLabel>
      <Select
        labelId='demo-select-small-label'
        variant="filled"
        value={apiType}
        onChange={onChange}
        sx={STYLE}
        inputProps={INPUT_PROPS}
        MenuProps={MENU_PROPS}
        data-testid="RulesetTypeSelect"
        label='API Type'
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
    </FormControl>
  )
})

RulesetApiTypeSelector.displayName = 'RulesetApiTypeSelector'
