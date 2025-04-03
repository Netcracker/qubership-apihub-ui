import { ExportSettingsFormField, ExportSettingsFormFieldKind, ExportSettingsFormFieldOption } from "./export-settings-form-field";
import { ExportSettingsPlace } from "./export-settings-place";

export interface ExportSettingsForm {
  fields: ExportSettingsFormField[]
}

const FIELD_LABEL_SPECIFICATION_TYPE = 'Specification type'
const FIELD_LABEL_FILE_FORMAT_OAS = 'File format for OpenAPI specifications'
const FIELD_LABEL_FILE_FORMAT = 'File format'
const FIELD_LABEL_OAS_EXTENSIONS = 'OpenAPI extensions'

const FIELD_OPTION_SPECIFICATION_TYPE_REDUCED: ExportSettingsFormFieldOption = { label: 'Reduced source specifications', value: 'reduced' }
const FIELD_OPTION_SPECIFICATION_TYPE_COMBINED: ExportSettingsFormFieldOption = { label: 'Combined specification', value: 'combined' }
const FIELD_OPTION_FILE_FORMAT_OAS_JSON: ExportSettingsFormFieldOption = { label: 'JSON', value: 'json' }
const FIELD_OPTION_FILE_FORMAT_OAS_YAML: ExportSettingsFormFieldOption = { label: 'YAML', value: 'yaml' }
const FIELD_OPTION_FILE_FORMAT_OAS_INTERACTIVE_HTML: ExportSettingsFormFieldOption = { label: 'Interactive HTML', value: 'interactive-html' }
const FIELD_OPTION_OAS_EXTENSIONS_PRESERVE: ExportSettingsFormFieldOption = { label: 'Preserve all OAS extensions', value: 'preserve' }
const FIELD_OPTION_OAS_EXTENSIONS_REMOVE: ExportSettingsFormFieldOption = { label: 'Remove OAS extensions', value: 'remove' }

const FIELD_OPTION_LIST_SPECIFICATION_TYPE: ReadonlyArray<ExportSettingsFormFieldOption> = [
  FIELD_OPTION_SPECIFICATION_TYPE_REDUCED,
  FIELD_OPTION_SPECIFICATION_TYPE_COMBINED,
]

const FIELD_OPTION_LIST_FILE_FORMAT_OAS: ReadonlyArray<ExportSettingsFormFieldOption> = [
  FIELD_OPTION_FILE_FORMAT_OAS_YAML,
  FIELD_OPTION_FILE_FORMAT_OAS_JSON,
  FIELD_OPTION_FILE_FORMAT_OAS_INTERACTIVE_HTML,
]

const FIELD_OPTION_LIST_OAS_EXTENSIONS: ReadonlyArray<ExportSettingsFormFieldOption> = [
  FIELD_OPTION_OAS_EXTENSIONS_PRESERVE,
  FIELD_OPTION_OAS_EXTENSIONS_REMOVE,
]

export const EXPORT_SETTINGS_FORM_FIELDS_BY_PLACE: Record<ExportSettingsPlace, ExportSettingsFormField[]> = {
  [ExportSettingsPlace.PACKAGE_VERSION]: [
    {
      kind: ExportSettingsFormFieldKind.FILE_FORMAT,
      // Different label because there may be not only OpenAPI specifications in the package version
      label: FIELD_LABEL_FILE_FORMAT_OAS,
      options: FIELD_OPTION_LIST_FILE_FORMAT_OAS,
      defaultValue: FIELD_OPTION_LIST_FILE_FORMAT_OAS[0].value,
    },
    {
      kind: ExportSettingsFormFieldKind.OAS_EXTENSIONS,
      label: FIELD_LABEL_OAS_EXTENSIONS,
      options: FIELD_OPTION_LIST_OAS_EXTENSIONS,
      defaultValue: FIELD_OPTION_LIST_OAS_EXTENSIONS[0].value,
    },
  ],
  [ExportSettingsPlace.DOCUMENT_FROM_PACKAGE_VERSION]: [
    {
      kind: ExportSettingsFormFieldKind.FILE_FORMAT,
      label: FIELD_LABEL_FILE_FORMAT,
      options: FIELD_OPTION_LIST_FILE_FORMAT_OAS,
      defaultValue: FIELD_OPTION_LIST_FILE_FORMAT_OAS[0].value,
    },
    {
      kind: ExportSettingsFormFieldKind.OAS_EXTENSIONS,
      label: FIELD_LABEL_OAS_EXTENSIONS,
      options: FIELD_OPTION_LIST_OAS_EXTENSIONS,
      defaultValue: FIELD_OPTION_LIST_OAS_EXTENSIONS[0].value,
    },
  ],
  [ExportSettingsPlace.OPERATIONS_GROUP]: [
    {
      kind: ExportSettingsFormFieldKind.SPECIFICATION_TYPE,
      label: FIELD_LABEL_SPECIFICATION_TYPE,
      options: FIELD_OPTION_LIST_SPECIFICATION_TYPE,
      defaultValue: FIELD_OPTION_LIST_SPECIFICATION_TYPE[0].value,
    },
    {
      kind: ExportSettingsFormFieldKind.FILE_FORMAT,
      label: FIELD_LABEL_FILE_FORMAT,
      options: FIELD_OPTION_LIST_FILE_FORMAT_OAS,
      defaultValue: FIELD_OPTION_LIST_FILE_FORMAT_OAS[0].value,
    },
    {
      kind: ExportSettingsFormFieldKind.OAS_EXTENSIONS,
      label: FIELD_LABEL_OAS_EXTENSIONS,
      options: FIELD_OPTION_LIST_OAS_EXTENSIONS,
      defaultValue: FIELD_OPTION_LIST_OAS_EXTENSIONS[0].value,
    },
  ],
}

export type ExportSettingsFormData = Record<
  ExportSettingsFormFieldKind,
  ExportSettingsFormFieldOption['value']
>
