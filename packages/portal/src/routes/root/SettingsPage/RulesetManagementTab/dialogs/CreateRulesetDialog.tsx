import { Button, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { Controller, useForm } from 'react-hook-form'
import { FileUploadField } from '@netcracker/qubership-apihub-ui-shared/components/FileUploadField'
import { useCreateRuleset } from '../hooks/api/useCreateRuleset'
import { YAML_FILE_EXTENSION, YML_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'
import { checkFileType } from '@netcracker/qubership-apihub-ui-shared/utils/validations'

export type CreateRulesetFormData = {
  name: string
  file: File | null
}

export interface CreateRulesetDialogRef {
  open: () => void
}

const DEFAULT_FORM_VALUES: CreateRulesetFormData = {
  name: '',
  file: null,
} as const

export const CreateRulesetDialog = memo(
  forwardRef<CreateRulesetDialogRef>((_, ref) => {
    const [open, setOpen] = useState(false)
    const [createRuleset, isCreating, isCreated] = useCreateRuleset()

    const { control, handleSubmit, formState, reset, watch } = useForm<CreateRulesetFormData>({
      defaultValues: DEFAULT_FORM_VALUES,
    })

    const { errors } = formState
    const watchedValues = watch()

    // Memoized validation rules for better performance
    const validationRules = useMemo(() => ({
      name: {
        required: 'Ruleset name is required',
      },
      file: {
        required: 'Please upload a file',
        validate: {
          checkFileType: (file: File | null) => checkFileType(file!, [YAML_FILE_EXTENSION, YML_FILE_EXTENSION]),
        },
      },
    }), [])

    // Expose open method via ref
    useImperativeHandle(ref, () => ({
      open: () => {
        setOpen(true)
        reset(DEFAULT_FORM_VALUES)
      },
    }), [reset])

    // Close dialog when ruleset is successfully created
    useEffect(() => {
      if (isCreated) {
        setOpen(false)
      }
    }, [isCreated])

    const handleClose = useCallback((): void => {
      setOpen(false)
    }, [])

    const onSubmit = useCallback((data: CreateRulesetFormData): void => {
      if (!data.file) {
        return
      }
      createRuleset({ name: data.name, file: data.file })
    }, [createRuleset])

    // Memoized submit button disabled state
    const isSubmitDisabled = useMemo(() => {
      return !watchedValues.name?.trim() || !watchedValues.file || isCreating
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
            rules={validationRules.name}
            render={({ field }) => (
              <TextField
                {...field}
                label="Ruleset Name"
                required
                disabled={isCreating}
                error={!!errors.name}
                helperText={errors.name?.message}
                data-testid="RulesetNameInput"
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
            rules={validationRules.file}
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
  }),
)

CreateRulesetDialog.displayName = 'CreateRulesetDialog'
