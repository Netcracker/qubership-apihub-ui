import { Button, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import type { FC } from 'react'
import { memo, useEffect } from 'react'
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

export interface CreateRulesetDialogProps {
  open: boolean
  onClose: () => void
}

export const CreateRulesetDialog: FC<CreateRulesetDialogProps> = memo(
  ({ open, onClose }) => {
    const [createRuleset, isCreating, isCreated, resetMutation] = useCreateRuleset()

    const { control, handleSubmit, formState, reset, setValue } = useForm<CreateRulesetFormData>({
      defaultValues: {
        name: '',
        file: null,
      },
    })

    const { errors } = formState

    const name = useWatch({ control: control, name: 'name' })
    const file = useWatch({ control: control, name: 'file' })

    // Reset form on open
    useEffect(() => {
      if (open) {
        reset({
          name: '',
          file: null,
        })
        resetMutation()
      }
    }, [open, reset, resetMutation])

    // Handle successful creation
    useEffect(() => {
      if (isCreated) {
        onClose()
      }
    }, [isCreated, onClose])

    const onSubmit = (data: CreateRulesetFormData): void => {
      createRuleset({ name: data.name, file: data.file! })
    }

    return (
      <DialogForm
        open={open}
        onClose={onClose}
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
            onClick={onClose}
            disabled={isCreating}
            data-testid="CancelButton"
          >
            Cancel
          </Button>
        </DialogActions>
      </DialogForm>
    )
  },
)
