import React, { type FC, memo, useCallback, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Button, Chip, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import {
  useUpdateAllowedOasExtensions,
} from '@netcracker/qubership-apihub-ui-shared/hooks/package-export-config/usePackageExportConfig'
import { PopupDelegate, type PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import {
  SHOW_EDIT_PRESERVED_OAS_EXTENSIONS_DIALOG,
  type ShowEditPreservedOasExtensionsDetail,
} from '@apihub/routes/EventBusProvider'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'
import {
  OAS_EXTENSION_KIND_INHERITED,
  OAS_EXTENSION_PREFIX,
  type OasExtension,
} from '@netcracker/qubership-apihub-ui-shared/entities/package-export-config'
import {
  LabellessAutocomplete,
} from '@netcracker/qubership-apihub-ui-shared/components/Autocompletes/LabellessAutocomplete'
import {
  type EditOasExtensionsForm,
  useOasExtensionsManager,
} from './EditPreservedOasExtensionsDialog/useOasExtensionsManager'
import { OasExtensionTooltip } from './EditPreservedOasExtensionsDialog/OasExtensionTooltip'

export const EditPreservedOasExtensionsDialog: FC = memo(() => {
  return (
    <PopupDelegate
      type={SHOW_EDIT_PRESERVED_OAS_EXTENSIONS_DIALOG}
      render={(props): React.ReactElement => <EditPreservedOasExtensionsDialogPopup {...props} />}
    />
  )
})

EditPreservedOasExtensionsDialog.displayName = 'EditPreservedOasExtensionsDialog'

const EditPreservedOasExtensionsDialogPopup: FC<PopupProps> = memo(({ open, setOpen, detail }) => {
  const typedDetail = detail as ShowEditPreservedOasExtensionsDetail
  const { packageKey, oasExtensions } = typedDetail

  const {
    updateOasExtensions,
    isOasExtensionsUpdating,
    isOasExtensionsUpdatingSuccess,
  } = useUpdateAllowedOasExtensions()

  const [duplicateError, setDuplicateError] = useState<string | undefined>(undefined)
  const [isFocused, setIsFocused] = useState(false)
  const [inputText, setInputText] = useState('')

  useEffect((): void => {
    if (isOasExtensionsUpdatingSuccess) {
      setOpen(false)
    }
  }, [isOasExtensionsUpdatingSuccess, setOpen])

  const {
    control,
    handleSubmit,
    setValue,
    processExtensionsUpdate,
  } = useOasExtensionsManager(oasExtensions)

  const handleSaveExtensions = useCallback((formData: EditOasExtensionsForm): void => {
    if (!formData.oasExtensions || !packageKey) {
      return
    }

    const directExtensions = formData.oasExtensions.filter(ext => ext.kind !== OAS_EXTENSION_KIND_INHERITED)
    updateOasExtensions(packageKey, directExtensions)
  }, [packageKey, updateOasExtensions])

  const handleCloseDialog = useCallback((): void => setOpen(false), [setOpen])

  const handleKeyDown = useCallback((
    event: React.KeyboardEvent<HTMLInputElement>,
    currentValue: OasExtension[],
  ): void => {
    if (event.key !== 'Enter') {
      return
    }

    const inputElement = event.target as HTMLInputElement
    const inputValue = inputElement.value
    if (!inputValue) {
      return
    }

    const fullName = `${OAS_EXTENSION_PREFIX}${inputValue}`
    const isDuplicate = currentValue?.some(ext => ext.name === fullName)

    if (!isDuplicate) {
      setDuplicateError(undefined)
      return
    }

    event.preventDefault()
    event.stopPropagation()
    setDuplicateError(`Extension "${fullName}" already exists`)
  }, [])

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInputText(event.target.value)
    setDuplicateError(undefined)
  }, [])

  const displayPlaceholder = oasExtensions.length > 0 || (isFocused && OAS_EXTENSION_PREFIX) ? '' : 'OAS extensions'

  const helperText = duplicateError || (isFocused && inputText ? 'Press Enter to Add Value' : undefined)

  return (
    <DialogForm
      open={open}
      onClose={handleCloseDialog}
      onSubmit={handleSubmit(handleSaveExtensions)}
    >
      <DialogTitle>
        Edit List of OAS Extensions Preserved on Export
      </DialogTitle>

      <DialogContent>
        <Controller
          name="oasExtensions"
          control={control}
          render={({ field }): React.ReactElement => (
            <LabellessAutocomplete<OasExtension>
              open={false}
              value={field.value || []}
              placeholder={displayPlaceholder}
              options={[]}
              multiple
              freeSolo
              prefixText={isFocused || inputText ? OAS_EXTENSION_PREFIX : undefined}
              helperText={helperText}
              reserveHelperTextSpace={true}
              inputProps={{
                onFocus: () => setIsFocused(true),
                onBlur: () => setIsFocused(false),
                onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(event, field.value || []),
                onChange: handleInputChange,
                error: !!duplicateError,
              }}
              renderTags={(tagValue, getTagProps): React.ReactElement[] =>
                tagValue.map((extension, index): React.ReactElement => {
                  const { onDelete, ...tagProps } = getTagProps({ index })
                  const isInherited = extension.kind === OAS_EXTENSION_KIND_INHERITED
                  return (
                    <Chip
                      {...tagProps}
                      key={extension.key}
                      size="small"
                      label={<OasExtensionTooltip extension={extension}/>}
                      onDelete={isInherited ? undefined : onDelete}
                      variant={isInherited ? 'readonly' : undefined}
                      data-testid="OasExtensionChip"
                    />
                  )
                })
              }
              onChange={(_, newValue): void => {
                const processedExtensions = processExtensionsUpdate(
                  Array.isArray(newValue) ? newValue : [],
                  field.value,
                )
                if (processedExtensions) {
                  setValue('oasExtensions', processedExtensions)
                }
              }}
              data-testid="OasExtensionsAutocomplete"
            />
          )}
        />
      </DialogContent>

      <DialogActions>
        <LoadingButton variant="contained" type="submit" loading={isOasExtensionsUpdating} data-testid="SaveButton">
          Save
        </LoadingButton>
        <Button variant="outlined" onClick={handleCloseDialog} data-testid="CancelButton">
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})
