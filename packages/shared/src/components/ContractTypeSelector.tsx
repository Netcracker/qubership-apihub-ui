import type { SelectChangeEvent } from '@mui/material'
import { MenuItem, Select, TextField } from '@mui/material'
import type { ChangeEvent, FC } from 'react'
import { memo } from 'react'

import { CONTRACT_TYPE_TITLE_MAP, type ContractType } from '../entities/contract-types'

export type ContractTypeSelectorProps = {
  contractType: ContractType
  allowedContractTypes: ReadonlyArray<ContractType>
  standard?: boolean
  onChange?: (contractType: ContractType) => void
}

// First Order Component //
export const ContractTypeSelector: FC<ContractTypeSelectorProps> = memo<ContractTypeSelectorProps>(({
  standard = false,
  contractType,
  allowedContractTypes,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent): void => {
    onChange?.(event.target.value as ContractType)
  }

  const options = allowedContractTypes.map(type => (
    <MenuItem
      key={type}
      value={type}
      data-testid={`MenuItem-${type}`}
    >
      {CONTRACT_TYPE_TITLE_MAP[type]}
    </MenuItem>
  ))

  return standard
    ? (
      <Select
        sx={{ ml: 2, mt: 0.5 }}
        variant="standard"
        disableUnderline
        value={contractType}
        onChange={handleChange}
        data-testid="ContractTypeSelector"
      >
        {options}
      </Select>
    )
    : (
      <TextField
        sx={{ height: '32px', m: 0 }}
        select
        variant="filled"
        value={contractType}
        hiddenLabel
        onChange={handleChange}
        data-testid="ContractTypeSelector"
      >
        {options}
      </TextField>
    )
})

ContractTypeSelector.displayName = 'ContractTypeSelector'
