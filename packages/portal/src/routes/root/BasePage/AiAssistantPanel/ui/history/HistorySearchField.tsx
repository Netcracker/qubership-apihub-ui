import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { SearchBar } from '@netcracker/qubership-apihub-ui-shared/components/SearchBar'
import type { FC } from 'react'
import { memo } from 'react'

export type HistorySearchFieldProps = {
  value: string
  onChange: (value: string) => void
}

export const HistorySearchField: FC<HistorySearchFieldProps> = memo(({ value, onChange }) => {
  return (
    <SearchFieldRoot>
      <StyledSearchBar
        placeholder="Search"
        value={value}
        onValueChange={onChange}
        data-testid="AiAssistantHistorySearchField"
        inputProps={{
          'aria-label': 'Search',
        }}
      />
    </SearchFieldRoot>
  )
})

const SearchFieldRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5, 3, 0.5),
  flexShrink: 0,
  width: '100%',
}))

const StyledSearchBar = styled(SearchBar)(({ theme }) => ({
  width: '100%',
  '& .MuiFilledInput-root': {
    borderRadius: 6,
    minHeight: 32,
    backgroundColor: '#f2f3f5',
    '&:hover': {
      backgroundColor: '#f2f3f5',
    },
    '&.Mui-focused': {
      backgroundColor: '#f2f3f5',
    },
    '&:before': {
      borderBottom: 'none',
    },
    '&:after': {
      borderBottom: 'none',
    },
    '&:hover:before': {
      borderBottom: 'none',
    },
    '&.Mui-focused:after': {
      borderBottom: 'none',
    },
  },
  '& .MuiFilledInput-input': {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1),
    fontSize: 13,
    lineHeight: '20px',
    letterSpacing: '-0.0325px',
    color: '#353c4e',
    '&::placeholder': {
      color: '#626d82',
      opacity: 1,
    },
  },
}))
