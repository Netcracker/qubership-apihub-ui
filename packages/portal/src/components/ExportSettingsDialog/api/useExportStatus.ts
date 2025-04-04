import { Key } from "@netcracker/qubership-apihub-ui-shared/entities/keys"
import { IsLoading } from "@netcracker/qubership-apihub-ui-shared/utils/aliases"
import { API_V1, requestJson } from "@netcracker/qubership-apihub-ui-shared/utils/requests"
import { useQuery } from "@tanstack/react-query"
import { generatePath } from "react-router"

export enum ExportStatusValue {
  RUNNING = 'running',
  ERROR = 'error',
  NONE = 'none'
}

type ExportStatusDto = Partial<{
  status: ExportStatusValue
  message: string
}>

type ExportStatus = ExportStatusDto

const QUERY_KEY_EXPORT_STATUS = 'query-key-export-status'

export function useExportStatus(exportId: Key): [ExportStatus | undefined, IsLoading] {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY_EXPORT_STATUS, exportId],
    queryFn: () => getExportStatus(exportId),
  })

  return [data, isLoading]
}

function getExportStatus(exportId: Key): Promise<ExportStatusDto> {
  const pattern = '/export/:exportId/status'
  return requestJson<ExportStatusDto>(
    generatePath(pattern, { exportId }),
    { method: 'GET' },
    { basePath: API_V1 }
  )
}
