import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { Alert, LoadingButton } from '@mui/lab'
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import type { FC, ReactNode } from 'react'
import { memo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLoginUser } from '../api/useLoginUser'

type InternalAuthFormProps = {
  additionalControls?: ReactNode
}

export const InternalAuthForm: FC<InternalAuthFormProps> = memo(props => {
  const { additionalControls } = props

  const [loginWithLocalUser, isLoading, isError] = useLoginUser()

  const [passwordVisible, setPasswordVisible] = useState(false)

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  return <>
    {
      isError && <Alert severity="error">
        Invalid credentials, please try again
      </Alert>
    }
    <Box
      component="form"
      sx={{ width: 1 }}
      onSubmit={handleSubmit(loginWithLocalUser)}
    >
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <FormControl
            sx={{ width: 1, mb: 2, display: 'block' }}
            variant="outlined"
            data-testid="LoginTextInput"
          >
            <InputLabel sx={{ fontSize: 15 }}>Username</InputLabel>
            <OutlinedInput
              {...field}
              sx={{ '&.MuiInputBase-root': { fontSize: 15 } }}
              fullWidth
              required
              label="Username"
              name="username"
              type="text"
            />
          </FormControl>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <FormControl
            sx={{ width: 1, mb: 2, display: 'block' }}
            variant="outlined"
            data-testid="PasswordTextInput"
          >
            <InputLabel sx={{ fontSize: 15 }}>Password</InputLabel>
            <OutlinedInput
              {...field}
              sx={{ '&.MuiInputBase-root': { fontSize: 15 } }}
              fullWidth
              required
              label="Password"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
      />
      <Box display='flex' justifyContent='flex-start' gap={2}>
        <LoadingButton
          type="submit"
          variant='contained'
          loading={isLoading}
          data-testid="SignInButton"
        >
          Log in
        </LoadingButton>
        {additionalControls}
      </Box>
    </Box>
  </>
})
