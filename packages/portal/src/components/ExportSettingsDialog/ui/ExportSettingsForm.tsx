import { Box, FormControlLabel, Radio, RadioGroup, Tooltip, Typography } from '@mui/material'
import type { FC } from 'react'
import { memo } from 'react'
import type { Control, UseFormSetValue } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { InfoIcon } from '../../../../../shared/src/icons/InfoIcon'
import type { ExportConfig } from '../../../routes/root/PortalPage/useExportConfig'
import type { ExportSettingsFormData } from '../entities/export-settings-form'
import type { ExportSettingsFormField, ExportSettingsFormFieldKind } from '../entities/export-settings-form-field'

interface ExportSettingsFormProps {
  disabled: boolean
  fields: ExportSettingsFormField[]
  exportConfig: ExportConfig
  control: Control<ExportSettingsFormData>
  setValue: UseFormSetValue<ExportSettingsFormData>
  setCachedFormField: (field: ExportSettingsFormFieldKind, value: string) => void
}

export const ExportSettingsForm: FC<ExportSettingsFormProps> = memo(props => {
  const { disabled, fields, exportConfig, control, setValue, setCachedFormField } = props

  return (
    <Box component="form" display="flex" flexDirection="column" gap={2}>
      {fields.map(field => <>
        <Typography key={`${field.kind}-label`} variant="h3">{field.label}</Typography>
        <Controller
          key={field.kind}
          name={field.kind}
          control={control}
          render={({ field: { value } }) => (
            <RadioGroup
              key={field.kind}
              value={value}
              onChange={(_, value) => {
                setCachedFormField(field.kind, value)
                setValue(field.kind, value)
              }}
            >
              {field.options.map(option => (
                <Box key={option.value} display="flex" alignItems="center" gap={1}>
                  <FormControlLabel
                    value={option.value}
                    label={option.label}
                    checked={!value && option.value === field.defaultValue || value === option.value}
                    control={<Radio disabled={disabled} />}
                  />
                  {option.tooltip && (
                    <Tooltip
                      disableHoverListener={false}
                      title={typeof option.tooltip === 'function' ? option.tooltip(exportConfig) : option.tooltip}
                      placement="right"
                    >
                      <Box height={20}>
                        <InfoIcon />
                      </Box>
                    </Tooltip>
                  )}
                </Box>
              ))}
            </RadioGroup>
          )}
        />
      </>)}
    </Box>
  )
})
