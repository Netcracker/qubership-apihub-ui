import { Key } from "@apihub/entities/keys"
import { PackageKey, VersionKey } from "@netcracker/qubership-apihub-ui-shared/entities/keys"
import { IsLoading } from "@netcracker/qubership-apihub-ui-shared/utils/aliases"
import { API_V1, requestJson } from "@netcracker/qubership-apihub-ui-shared/utils/requests"
import { useQuery } from "@tanstack/react-query"

export enum ExportedEntityKind {
  VERSION = 'version',
  REST_DOCUMENT = 'restDocument',
  REST_OPERATIONS_GROUP = 'restOperationsGroup'
}

export enum ExportedFileFormat {
  HTML = 'html',
  YAML = 'yaml',
  JSON = 'json'
}

export enum ExportedEntityTransformation {
  REDUCED_SOURCE_SPECIFICATIONS = 'reducedSourceSpecifications',
  MERGED_SPECIFICATION = 'mergedSpecification'
}

interface IRequestDataExport {
  exportedEntity: ExportedEntityKind
  packageId: PackageKey
  version: VersionKey
  format: ExportedFileFormat
  removeOasExtensions?: boolean
}

class CommonRequestDataExport implements IRequestDataExport {
  constructor(
    public readonly exportedEntity: ExportedEntityKind,
    public readonly packageId: PackageKey,
    public readonly version: VersionKey,
    public readonly format: ExportedFileFormat,
    public readonly removeOasExtensions: boolean = false,
  ) { }
}

class RequestDataExportVersion extends CommonRequestDataExport {
  constructor(
    packageId: PackageKey,
    version: VersionKey,
    removeOasExtensions?: boolean,
  ) {
    super(ExportedEntityKind.VERSION, packageId, version, ExportedFileFormat.HTML, removeOasExtensions)
  }
}

class RequestDataExportRestDocument extends CommonRequestDataExport {
  constructor(
    public readonly documentId: Key,
    packageId: PackageKey,
    version: VersionKey,
    format: ExportedFileFormat,
    removeOasExtensions?: boolean
  ) {
    super(ExportedEntityKind.REST_DOCUMENT, packageId, version, format, removeOasExtensions)
  }
}

class RequestDataExportRestOperationsGroup extends CommonRequestDataExport {
  constructor(
    public readonly groupName: string,
    public readonly operationsSpecTransformation: ExportedEntityTransformation,
    packageId: PackageKey,
    version: VersionKey,
    format: ExportedFileFormat,
    removeOasExtensions?: boolean
  ) {
    super(ExportedEntityKind.REST_OPERATIONS_GROUP, packageId, version, format, removeOasExtensions)
  }
}

type RequestDataExport =
  | RequestDataExportVersion
  | RequestDataExportRestDocument
  | RequestDataExportRestOperationsGroup

type ExportDto = Partial<{
  exportId: Key
}>

type Export = ExportDto

export function useExport(requestData: RequestDataExport): [ExportDto | undefined, IsLoading, Error | null] {
  const { data, isLoading, error } = useQuery<Export, Error | null, ExportDto>({
    queryKey: ['export', requestData],
    queryFn: () => startExport(requestData),
  })

  return [data, isLoading, error]
}

function startExport(requestData: RequestDataExport): Promise<ExportDto> {
  return requestJson<ExportDto>(
    '/export',
    {
      method: 'POST',
      body: JSON.stringify(requestData)
    },
    { basePath: API_V1 }
  )
}
