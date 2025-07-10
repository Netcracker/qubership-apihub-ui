import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import type { FC } from 'react'
import { memo, useEffect, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { FileUploadField } from '@netcracker/qubership-apihub-ui-shared/components/FileUploadField'
import { validateYamlFile } from '../utils/rulesetFileUtils'
import { useCreateRuleset } from '../hooks/api/useCreateRuleset'
import { YAML_FILE_EXTENSION, YML_FILE_EXTENSION } from '@netcracker/qubership-apihub-ui-shared/utils/files'

export interface CreateRulesetDialogProps {
  open: boolean
  onClose: () => void
  onCreated: () => void
}

export const CreateRulesetDialog: FC<CreateRulesetDialogProps> = memo(
  ({ open, onClose, onCreated }) => {
    const [createRuleset, isCreating, isCreated] = useCreateRuleset()

    const [name, setName] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [nameError, setNameError] = useState<string | null>(null)
    const [fileError, setFileError] = useState<string | null>(null)

    // Reset form on open
    useEffect(() => {
      if (open) {
        setName('')
        setFile(null)
        setNameError(null)
        setFileError(null)
      }
    }, [open])

    // Handle successful creation
    useEffect(() => {
      if (isCreated) {
        onCreated()
        onClose()
      }
    }, [isCreated, onCreated, onClose])

    const validateName = (): boolean => {
      if (!name.trim()) {
        setNameError('Ruleset name is required')
        return false
      }

      if (name.length > 100) {
        setNameError('Ruleset name must be 100 characters or less')
        return false
      }

      setNameError(null)
      return true
    }

    const validateFile = (): boolean => {
      if (!file) {
        setFileError('Please select a file')
        return false
      }

      const validationResult = validateYamlFile(file)
      if (!validationResult.isValid) {
        setFileError(validationResult.errorMessage || 'Invalid file')
        return false
      }

      setFileError(null)
      return true
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setName(event.target.value)
      if (nameError) validateName()
    }

    const handleFileChange = (selectedFile: File | undefined): void => {
      setFile(selectedFile || null)

      if (selectedFile) {
        // Validate immediately after selection
        const validationResult = validateYamlFile(selectedFile)
        if (!validationResult.isValid) {
          setFileError(validationResult.errorMessage || 'Invalid file')
        } else {
          setFileError(null)
        }
      } else {
        setFileError(null)
      }
    }

    const handleSubmit = async (): Promise<void> => {
      const isNameValid = validateName()
      const isFileValid = validateFile()

      if (!isNameValid || !isFileValid || !file) {
        return
      }

      createRuleset({ name, file })
    }

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="create-ruleset-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="create-ruleset-dialog-title">Add New Ruleset</DialogTitle>
        <DialogContent>
          <Box mt={1}>
            <TextField
              autoFocus
              margin="normal"
              id="ruleset-name"
              label="Ruleset Name"
              type="text"
              fullWidth
              required
              value={name}
              onChange={handleNameChange}
              error={!!nameError}
              helperText={nameError}
              disabled={isCreating}
              data-testid="RulesetNameInput"
            />
          </Box>

          <Box mt={2} mb={1}>
            <FileUploadField
              uploadedFile={file || undefined}
              setUploadedFile={handleFileChange}
              downloadAvailable={false}
              acceptableExtensions={[YAML_FILE_EXTENSION, YML_FILE_EXTENSION]}
              errorMessage={fileError || undefined}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} disabled={isCreating}>
            Cancel
          </Button>
          <LoadingButton
            onClick={handleSubmit}
            loading={isCreating}
            color="primary"
            variant="contained"
            disabled={!name || !file || !!nameError || !!fileError}
            data-testid="CreateRulesetButton"
          >
            Create
          </LoadingButton>
        </DialogActions>
      </Dialog>
    )
  },
)
