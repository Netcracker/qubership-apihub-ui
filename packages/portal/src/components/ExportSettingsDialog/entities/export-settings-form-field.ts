import { ExportedEntityTransformation, ExportedFileFormat } from "../api/useExport"

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

export const FIELD_LABEL_SPECIFICATION_TYPE = 'Specification type';
export const FIELD_LABEL_FILE_FORMAT_OAS = 'File format for OpenAPI specifications';
export const FIELD_LABEL_FILE_FORMAT = 'File format';
export const FIELD_LABEL_OAS_EXTENSIONS = 'OpenAPI extensions';

const FIELD_OPTION_SPECIFICATION_TYPE_REDUCED: ExportSettingsFormFieldOption = {
  label: 'Reduced source specifications',
  value: ExportedEntityTransformation.REDUCED_SOURCE_SPECIFICATIONS
};
const FIELD_OPTION_SPECIFICATION_TYPE_COMBINED: ExportSettingsFormFieldOption = {
  label: 'Combined specification',
  value: ExportedEntityTransformation.MERGED_SPECIFICATION
};
const FIELD_OPTION_FILE_FORMAT_OAS_JSON: ExportSettingsFormFieldOption = {
  label: 'JSON',
  value: ExportedFileFormat.JSON
};
const FIELD_OPTION_FILE_FORMAT_OAS_YAML: ExportSettingsFormFieldOption = {
  label: 'YAML',
  value: ExportedFileFormat.YAML
};
const FIELD_OPTION_FILE_FORMAT_OAS_INTERACTIVE_HTML: ExportSettingsFormFieldOption = {
  label: 'Interactive HTML',
  value: ExportedFileFormat.HTML
};
const FIELD_OPTION_OAS_EXTENSIONS_PRESERVE: ExportSettingsFormFieldOption = {
  label: 'Preserve all OAS extensions',
  value: 'preserve'
};
const FIELD_OPTION_OAS_EXTENSIONS_REMOVE: ExportSettingsFormFieldOption = {
  label: 'Remove OAS extensions',
  value: 'remove'
};

export const FIELD_OPTION_LIST_SPECIFICATION_TYPE: ReadonlyArray<ExportSettingsFormFieldOption> = [
  FIELD_OPTION_SPECIFICATION_TYPE_REDUCED,
  FIELD_OPTION_SPECIFICATION_TYPE_COMBINED,
];
export const FIELD_OPTION_LIST_FILE_FORMAT_OAS: ReadonlyArray<ExportSettingsFormFieldOption> = [
  FIELD_OPTION_FILE_FORMAT_OAS_YAML,
  FIELD_OPTION_FILE_FORMAT_OAS_JSON,
  FIELD_OPTION_FILE_FORMAT_OAS_INTERACTIVE_HTML,
];
export const FIELD_OPTION_LIST_OAS_EXTENSIONS: ReadonlyArray<ExportSettingsFormFieldOption> = [
  FIELD_OPTION_OAS_EXTENSIONS_PRESERVE,
  FIELD_OPTION_OAS_EXTENSIONS_REMOVE,
];
