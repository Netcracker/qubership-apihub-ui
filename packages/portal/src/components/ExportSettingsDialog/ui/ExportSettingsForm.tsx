import { Box, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import { FC } from "react"
import { Control, Controller } from "react-hook-form"
import { ExportSettingsFormData } from "../entities/export-settings-form"
import { ExportSettingsFormField } from "../entities/export-settings-form-field"

interface ExportSettingsFormProps {
  fields: ExportSettingsFormField[]
  control: Control<ExportSettingsFormData>
}

export const ExportSettingsForm: FC<ExportSettingsFormProps> = ({ fields, control }) => {
  return (
    <Box component="form" display="flex" flexDirection="column" gap={2}>
      {fields.map(field => <>
        <Typography key={`${field.kind}-label`} variant="h3">{field.label}</Typography>
        <Controller
          key={field.kind}
          name={field.kind}
          control={control}
          render={({ field: { value, onChange } }) => (
            <RadioGroup value={value} onChange={onChange}>
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
}
