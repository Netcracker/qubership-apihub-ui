import { PackageKey } from "@netcracker/qubership-apihub-ui-shared/entities/keys";
import { PackageKind } from "@netcracker/qubership-apihub-ui-shared/entities/packages";
import { IsLoading } from "@netcracker/qubership-apihub-ui-shared/utils/aliases";
import { API_V1, requestJson } from "@netcracker/qubership-apihub-ui-shared/utils/requests";
import { useQuery } from "@tanstack/react-query";
import { generatePath } from "react-router";

type OasExtensionDto = Partial<{
  oasExtension: string
  packageId: PackageKey
  packageName: string
  packageKind: PackageKind
}>

type ExportConfigDto = {
  allowedOasExtensions?: OasExtensionDto[]
}

type OasExtension = Omit<OasExtensionDto, 'packageId'> & Partial<{
  packageKey: PackageKey
}>

export type ExportConfig = {
  allowedOasExtensions?: OasExtension[]
}

const QUERY_KEY_EXPORT_CONFIG = 'query-key-export-config'

export function useExportConfig(packageKey: PackageKey): [ExportConfig | undefined, IsLoading] {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY_EXPORT_CONFIG, packageKey],
    queryFn: () => getExportConfig(packageKey),
    select: toExportConfig,
  })

  return [data, isLoading]
}

function getExportConfig(packageId: PackageKey): Promise<ExportConfigDto> {
  const pattern = '/packages/:packageId/exportConfig'
  return requestJson<ExportConfigDto>(
    generatePath(pattern, { packageId }),
    { method: 'GET' },
    { basePath: API_V1 }
  )
}

function toExportConfig(dto: ExportConfigDto): ExportConfig {
  return {
    allowedOasExtensions: dto.allowedOasExtensions?.map(dto => ({
      ...dto,
      packageKey: dto.packageId
    }))
  }
}
