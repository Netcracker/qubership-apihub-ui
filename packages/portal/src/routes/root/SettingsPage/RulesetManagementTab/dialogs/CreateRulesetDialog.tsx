import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import type { FC } from 'react'
import { memo, useEffect, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { validateYamlFile } from '../utils/rulesetFileUtils'
import { useCreateRuleset } from '../hooks/api/useCreateRuleset'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      const [selectedFile] = event.target.files || []
      if (selectedFile) {
        setFile(selectedFile)

        // Validate immediately after selection
        const validationResult = validateYamlFile(selectedFile)
        if (!validationResult.isValid) {
          setFileError(validationResult.errorMessage || 'Invalid file')
        } else {
          setFileError(null)
        }
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
            <Button
              component="label"
              variant="outlined"
              startIcon={<CloudUploadIcon />}
              disabled={isCreating}
              fullWidth
            >
              Upload YAML File
              <VisuallyHiddenInput type="file" onChange={handleFileChange} accept=".yml,.yaml" />
            </Button>
            {file && (
              <Typography variant="body2" mt={1} color="text.secondary">
                Selected file: {file.name}
              </Typography>
            )}
            {fileError && (
              <Typography variant="body2" color="error" mt={1}>
                {fileError}
              </Typography>
            )}
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
