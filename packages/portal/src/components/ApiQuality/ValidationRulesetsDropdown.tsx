import type { RulesetMetadata } from '@apihub/entities/api-quality/rulesets'
import { Check } from '@mui/icons-material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { Box, Button, List, ListItemButton, Typography } from '@mui/material'
import { MenuButtonItems } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/MenuButton'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import type { FC } from 'react'
import { memo, useCallback, useEffect, useState } from 'react'
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

  const [anchor, setAnchor] = useState<HTMLElement>()

  const [selectedValues, setSelectedValues] = useState<Set<RulesetMetadata>>(new Set())
  useEffect(() => {
    const initialValues = new Set(options)
    setSelectedValues(initialValues)
    onChange(initialValues)
  }, [onChange, options])

  const handleSelect = useCallback((option: RulesetMetadata) => {
    setSelectedValues(prev => {
      const newSet = new Set(prev)
      if (newSet.has(option)) {
        newSet.delete(option)
      } else {
        newSet.add(option)
      }
      onChange(newSet)
      return newSet
    })
  }, [onChange])


  return <>
    <Button
      sx={{
        justifyContent: 'flex-start',
        minWidth: 4,
        height: 20,
        p: 0,
        m: 0,
        color: 'black',
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
      }}
      variant="text"
      onClick={({ currentTarget }) => setAnchor(currentTarget)}
      data-testid="ValidatedByLinterSelectorButton"
    >
      <Box display="flex" alignItems="center" gap={1}>
        {selectedValues.size === 0 && (
          <Typography variant="body2" fontWeight={500}>No linters selected</Typography>
        )}
        {selectedValues.size === 1 && (
          <ValidationRulesetLink data={Array.from(selectedValues.values())[0]} loading={loading} />
        )}
        {selectedValues.size > 1 && (
          <Typography variant="body2" fontWeight={500}>{selectedValues.size} linters</Typography>
        )}
        {anchor
          ? <KeyboardArrowUpOutlinedIcon htmlColor='#353C4E' />
          : <KeyboardArrowDownOutlinedIcon htmlColor='#353C4E' />}
      </Box>
      <MenuButtonItems
        anchorEl={anchor}
        open={!!anchor}
        onClick={event => event.stopPropagation()}
        onClose={() => setAnchor(undefined)}
      >
        <List>
          {options.map(option => {
            const isSelected = selectedValues.has(option)
            return (
              <ListItemButton
                key={option.id}
                onClick={() => handleSelect(option)}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 1,
                  height: '36px',
                }}
              >
                <Check htmlColor={isSelected ? '#353C4E' : 'transparent'} fontSize='small' />
                <ValidationRulesetLink
                  data={option}
                  loading={loading}
                />
              </ListItemButton>
            )
          })}
        </List>
      </MenuButtonItems>
    </Button>
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
