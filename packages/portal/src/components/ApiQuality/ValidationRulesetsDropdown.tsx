import type { RulesetMetadata } from '@apihub/entities/api-quality/rulesets'
import { Check } from '@mui/icons-material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { Box, Button, ButtonGroup, MenuItem, MenuList, Popper, Typography } from '@mui/material'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import type { FC } from 'react'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { ValidationRulesetLink } from './ValidatationRulesetLink'

type ValidationRulesetsDropdownProps = {
  options: RulesetMetadata[]
  onChange: (selected: Set<RulesetMetadata>) => void
  loading: IsLoading
}

const DropdownLabel: FC = () => {
  return <Typography variant="body2">Validated by:</Typography>
}

const Dropdown: FC<ValidationRulesetsDropdownProps> = (props) => {
  const { options, onChange, loading } = props

  const anchorRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<Set<RulesetMetadata>>(new Set())
  useEffect(() => {
    setSelectedValues(new Set(options))
  }, [options])

  const handleToggle = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  const handleSelect = useCallback((option: RulesetMetadata) => {
    setSelectedValues(prev => {
      const newSet = new Set(prev)
      newSet.add(option)
      return newSet
    })
    onChange(selectedValues)
  }, [onChange, selectedValues])

  return <>
    <ButtonGroup
      variant="contained"
      ref={anchorRef}
    >
      {selectedValues.size === 1 && (
        <ValidationRulesetLink
          data={Array.from(selectedValues.values())[0]}
          loading={loading}
          showLabel={false}
        />
      )}
      {selectedValues.size > 1 && (
        <Button size="small" variant='text'>
          {selectedValues.size} linters
        </Button>
      )}
      <Button
        size="small"
        variant='text'
        onClick={handleToggle}
      >
        {open ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
      </Button>
    </ButtonGroup>
    <Popper open={open} anchorEl={anchorRef.current} sx={{ width: '200px' }}>
      <MenuList>
        {options.map(option => {
          const isSelected = selectedValues.has(option)
          return (
            <MenuItem
              key={option.id}
              selected={isSelected}
              onClick={() => handleSelect(option)}
            >
              {isSelected && <Check />}
              <ValidationRulesetLink
                data={option}
                loading={loading}
                showLabel={false}
              />
            </MenuItem>
          )
        })}
      </MenuList>
    </Popper>
  </>
}

export const ValidationRulesetsDropdown: FC<ValidationRulesetsDropdownProps> = memo<ValidationRulesetsDropdownProps>((props) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <DropdownLabel />
      <Dropdown {...props} />
    </Box>
  )
})
