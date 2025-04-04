import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import { FC, memo } from "react"
import { Control, Controller } from "react-hook-form"
import { ExportSettingsFormData } from "../entities/export-settings-form"
import { ExportSettingsFormField, ExportSettingsFormFieldKind } from "../entities/export-settings-form-field"

interface ExportSettingsFormProps {
  fields: ExportSettingsFormField[]
  control: Control<ExportSettingsFormData>
  setCachedFormField: (field: ExportSettingsFormFieldKind, value: string) => void
}

export const ExportSettingsForm: FC<ExportSettingsFormProps> = memo( ({ fields, control, setCachedFormField }) => {
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
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  checked={!value && option.value === field.defaultValue || value === option.value}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          )}
        />
      </>)}
    </Box>
  )
})
