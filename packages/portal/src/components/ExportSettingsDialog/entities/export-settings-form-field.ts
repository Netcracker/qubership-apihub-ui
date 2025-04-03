export type ExportSettingsFormFieldOption = Readonly<{
  label: string
  value: string
  tooltip?: string
}>

export enum ExportSettingsFormFieldKind {
  SPECIFICATION_TYPE = "specification-type",
  FILE_FORMAT = "file-format",
  OAS_EXTENSIONS = "oas-extensions",
}

export type ExportSettingsFormField = Readonly<{
  kind: ExportSettingsFormFieldKind
  label: string
  options: ReadonlyArray<ExportSettingsFormFieldOption>
  defaultValue: string
}>
