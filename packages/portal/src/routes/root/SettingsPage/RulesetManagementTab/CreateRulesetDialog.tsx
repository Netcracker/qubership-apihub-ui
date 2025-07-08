import { LoadingButton } from '@mui/lab'
import { Button, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import { SHOW_CREATE_RULESET_DIALOG } from '@netcracker/qubership-apihub-ui-portal/src/routes/EventBusProvider'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'
import { FileUploadField } from '@netcracker/qubership-apihub-ui-shared/components/FileUploadField'
import { PopupDelegate, type PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { YAML_FILE_EXTENSION, YML_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { checkFileType } from '@netcracker/qubership-apihub-ui-shared/utils/validations'
import React, { type FC, memo, useCallback, useEffect, useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useCreateRuleset } from './api/useCreateRuleset'

const DEFAULT_FORM_VALUES: CreateRulesetFormData = {
  name: '',
  file: null,
} as const

type CreateRulesetFormData = {
  name: string
  file: File | null
}

export const CreateRulesetDialog: FC = memo(() => {
  return (
    <PopupDelegate
      type={SHOW_CREATE_RULESET_DIALOG}
      render={props => <CreateRulesetPopup {...props} />}
    />
  )
})

const CreateRulesetPopup: FC<PopupProps> = memo<PopupProps>(({ open, setOpen }) => {
  const [createRuleset, isCreating, isCreated] = useCreateRuleset()

  const { control, handleSubmit, formState, reset, watch } = useForm<CreateRulesetFormData>({
    defaultValues: DEFAULT_FORM_VALUES,
  })

  const { errors } = formState
  const watchedValues = watch()

  const fileValidationRules = useMemo(() => ({
    validate: {
      checkFileType: (file: File | null) => {
        if (!file) return true // No validation needed when file is null
        return checkFileType(file, [YAML_FILE_EXTENSION, YML_FILE_EXTENSION])
      },
    },
  }), [])

  useEffect(() => {
    if (isCreated) {
      setOpen(false)
    }
  }, [isCreated, setOpen])

  useEffect(() => {
    if (open) {
      reset(DEFAULT_FORM_VALUES)
    }
  }, [open, reset])

  const handleClose = useCallback((): void => {
    setOpen(false)
  }, [setOpen])

  const onSubmit = useCallback((data: CreateRulesetFormData): void => {
    if (!data.name || !data.file) {
      return
    }
    createRuleset({ name: data.name, file: data.file })
  }, [createRuleset])

  const isSubmitDisabled = useMemo(() => {
    return !watchedValues.name || !watchedValues.file || isCreating
  }, [watchedValues.name, watchedValues.file, isCreating])

  return (
    <DialogForm
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <DialogTitle>Add New Ruleset</DialogTitle>
      <DialogContent>
        <Typography variant="button">
          Main info
        </Typography>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              required
              disabled={isCreating}
              error={!!errors.name}
              helperText={errors.name?.message}
              data-testid="NameTextField"
              sx={{ mt: 0 }}
            />
          )}
        />
        <Typography variant="button">
          Ruleset
        </Typography>
        <Controller
          name="file"
          control={control}
          rules={fileValidationRules}
          render={({ field: { value, onChange } }) => (
            <FileUploadField
              uploadedFile={value || undefined}
              setUploadedFile={(selectedFile) => onChange(selectedFile || null)}
              downloadAvailable={false}
              acceptableExtensions={[YAML_FILE_EXTENSION, YML_FILE_EXTENSION]}
              errorMessage={errors.file?.message}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <LoadingButton
          variant="contained"
          type="submit"
          loading={isCreating}
          disabled={isSubmitDisabled}
          data-testid="CreateButton"
        >
          Create
        </LoadingButton>
        <Button
          variant="outlined"
          onClick={handleClose}
          disabled={isCreating}
          data-testid="CancelButton"
        >
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})

CreateRulesetDialog.displayName = 'CreateRulesetDialog'
