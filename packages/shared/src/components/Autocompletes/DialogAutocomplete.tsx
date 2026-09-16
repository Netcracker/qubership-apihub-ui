import Autocomplete from '@mui/material/Autocomplete'
import { styled } from '@mui/material/styles'

export const DialogAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-endAdornment': {
    position: 'static',
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiInputBase-root': {
    paddingRight: theme.spacing(1),
    gap: theme.spacing(0.5),
  },
  '&.MuiAutocomplete-hasPopupIcon .MuiInputBase-root, &.MuiAutocomplete-hasClearIcon .MuiInputBase-root, &.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiInputBase-root':
    {
      paddingRight: theme.spacing(1),
    },
})) as typeof Autocomplete
