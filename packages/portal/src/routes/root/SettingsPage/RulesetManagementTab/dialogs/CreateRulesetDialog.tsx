import { Button, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import { forwardRef, memo, useEffect, useImperativeHandle, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { Controller, useForm, useWatch } from 'react-hook-form'
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

export const CreateRulesetDialog = memo(
  forwardRef<CreateRulesetDialogRef>((_, ref) => {
    const [open, setOpen] = useState(false)
    const [createRuleset, isCreating, isCreated] = useCreateRuleset()

    const { control, handleSubmit, formState, reset } = useForm<CreateRulesetFormData>({
      defaultValues: {
        name: '',
        file: null,
      },
    })

    const { errors } = formState

    const name = useWatch({ control: control, name: 'name' })
    const file = useWatch({ control: control, name: 'file' })

    // Expose open method via ref
    useImperativeHandle(ref, () => ({
      open: () => {
        setOpen(true)
        reset({
          name: '',
          file: null,
        })
      },
    }), [reset])

    // Close dialog when ruleset is successfully created
    useEffect(() => {
      if (isCreated) {
        setOpen(false)
      }
    }, [isCreated])

    const handleClose = (): void => {
      setOpen(false)
    }

    const onSubmit = (data: CreateRulesetFormData): void => {
      createRuleset({ name: data.name, file: data.file! })
    }

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
            rules={{
              required: 'Ruleset name is required',
            }}
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
            rules={{
              required: 'Please upload a file',
              validate: {
                checkFileType: (file) => checkFileType(file!, [YAML_FILE_EXTENSION, YML_FILE_EXTENSION]),
              },
            }}
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
            disabled={!name || !file || isCreating}
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
