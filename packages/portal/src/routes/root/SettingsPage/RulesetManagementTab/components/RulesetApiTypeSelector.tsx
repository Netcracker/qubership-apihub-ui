import type { FC } from 'react'
import { memo } from 'react'
import { MenuItem, Select, type SelectChangeEvent } from '@mui/material'
import { RULESET_API_TYPE_TITLE_MAP, type RulesetApiType, RulesetApiTypes } from '@apihub/entities/api-quality/rulesets'

type RulesetApiTypeSelectorProps = {
  apiType: RulesetApiType
  onChange?: (event: SelectChangeEvent) => void
}

export const RulesetApiTypeSelector: FC<RulesetApiTypeSelectorProps> = memo<RulesetApiTypeSelectorProps>(({
  apiType,
  onChange,
}) => {
  return (
    <Select
      variant="filled"
      value={apiType}
      onChange={onChange}
      data-testid="RulesetTypeSelect"
      sx={{
        '& .MuiSelect-select': {
          pt: 0.75,
          pb: 0.75,
        },
        minWidth: '110px',
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            borderRadius: 1.5,
          },
        },
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
  )
})

RulesetApiTypeSelector.displayName = 'RulesetApiTypeSelector'
