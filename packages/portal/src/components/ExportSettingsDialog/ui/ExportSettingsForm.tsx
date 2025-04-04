import { Box, FormControlLabel, Radio, RadioGroup, Tooltip, Typography } from "@mui/material"
import { FC, memo } from "react"
import { Control, Controller } from "react-hook-form"
import { ExportSettingsFormData } from "../entities/export-settings-form"
import { ExportSettingsFormField, ExportSettingsFormFieldKind } from "../entities/export-settings-form-field"
import { ExportConfig } from "../api/useExportConfig"
import { InfoOutlined } from "@mui/icons-material"
interface ExportSettingsFormProps {
  fields: ExportSettingsFormField[]
  exportConfig: ExportConfig
  control: Control<ExportSettingsFormData>
  setCachedFormField: (field: ExportSettingsFormFieldKind, value: string) => void
}

export const ExportSettingsForm: FC<ExportSettingsFormProps> = memo(({ fields, exportConfig, control, setCachedFormField }) => {
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
              value={value}
              onChange={(_, value) => {
                setCachedFormField(field.kind, value)
              }}
            >
              {field.options.map(option => (
                <Box key={option.value} display="flex" gap={1}>
                  <FormControlLabel
                    value={option.value}
                    label={option.label}
                    checked={!value && option.value === field.defaultValue || value === option.value}
                    control={<Radio />}
                  />
                  {option.tooltip && (
                    <Tooltip title={typeof option.tooltip === 'function' ? option.tooltip(exportConfig) : option.tooltip}>
                      <InfoOutlined />
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
