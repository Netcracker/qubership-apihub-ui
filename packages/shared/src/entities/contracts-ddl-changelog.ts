import type { DiffTypeDto } from '@netcracker/qubership-apihub-api-processor'
import { replacePropertyInChangesSummary } from '@netcracker/qubership-apihub-api-processor'

import { truncateDescription } from '../utils/strings'
import type { ActionType, ChangesSummary } from './change-severities'
import type { DdlContractEntity, DdlContractEntityDto } from './contracts-ddl'
import type { Key } from './keys'
import type { PackageRef, PackagesRefs } from './operations'
import { toPackageRef } from './operations'
import { calculateAction } from './version-changelog'

export type DdlEntityChangeDto = DdlContractEntityDto

export type DdlEntityChange = Readonly<{
  ddlEntityId: string
  kind: DdlContractEntityDto['kind']
  name: string
  schemaName: string
  description?: string
  documentId: string
  versionInternalDocumentId: string
  packageRef?: PackageRef
}>

export type DdlEntityChangeEntryDto = Readonly<{
  ddlEntityData?: DdlEntityChangeDto
  previousDdlEntityData?: DdlEntityChangeDto
  changeSummary: ChangesSummary<DiffTypeDto>
  comparisonInternalDocumentId: string
}>

export type DdlEntityChangeEntry = Readonly<{
  ddlEntityData?: DdlEntityChange
  previousDdlEntityData?: DdlEntityChange
  changeSummary: ChangesSummary
  comparisonInternalDocumentId: Key
  action: ActionType
}>

export type DdlChangesPageDto = Readonly<{
  entities: ReadonlyArray<DdlEntityChangeEntryDto>
  previousVersion?: Key
  previousVersionPackageId?: Key
  packages?: PackagesRefs
}>

export type DdlChangesPage = Readonly<{
  entities: ReadonlyArray<DdlEntityChangeEntry>
  previousVersion?: Key
  previousVersionPackageKey?: Key
}>

export const EMPTY_DDL_CHANGES: DdlChangesPage = {
  entities: [],
}

export function toDdlEntityChange(
  dto: DdlEntityChangeDto,
  packagesRefs?: PackagesRefs,
): DdlEntityChange {
  return {
    ddlEntityId: dto.ddlEntityId,
    kind: dto.kind,
    name: dto.name,
    schemaName: dto.schemaName,
    description: truncateDescription(dto.description),
    documentId: dto.documentId,
    versionInternalDocumentId: dto.versionInternalDocumentId,
    packageRef: toPackageRef(dto.packageRef, packagesRefs),
  }
}

export function toDdlEntityChangeEntry(
  dto: DdlEntityChangeEntryDto,
  packagesRefs?: PackagesRefs,
): DdlEntityChangeEntry {
  return {
    ddlEntityData: dto.ddlEntityData
      ? toDdlEntityChange(dto.ddlEntityData, packagesRefs)
      : undefined,
    previousDdlEntityData: dto.previousDdlEntityData
      ? toDdlEntityChange(dto.previousDdlEntityData, packagesRefs)
      : undefined,
    changeSummary: replacePropertyInChangesSummary(dto.changeSummary),
    comparisonInternalDocumentId: dto.comparisonInternalDocumentId,
    action: getDdlChangeAction({
      ddlEntityData: dto.ddlEntityData,
      previousDdlEntityData: dto.previousDdlEntityData,
    } as DdlEntityChangeEntryDto),
  }
}

export function toDdlChangesPage(dto: DdlChangesPageDto): DdlChangesPage {
  return {
    previousVersion: dto.previousVersion,
    previousVersionPackageKey: dto.previousVersionPackageId,
    entities: dto.entities?.map(entry => toDdlEntityChangeEntry(entry, dto.packages)) ?? [],
  }
}

export function getDdlChangeAction(
  entry: Readonly<Pick<DdlEntityChangeEntryDto, 'ddlEntityData' | 'previousDdlEntityData'>>,
): ActionType {
  return calculateAction(
    entry.ddlEntityData?.ddlEntityId,
    entry.previousDdlEntityData?.ddlEntityId,
  )
}

export function getDdlChangeEntityId(entry: DdlEntityChangeEntry): Key {
  return entry.ddlEntityData?.ddlEntityId ?? entry.previousDdlEntityData!.ddlEntityId
}

export function findDdlChangeEntry(
  entries: ReadonlyArray<DdlEntityChangeEntry>,
  ddlEntityId: Key | undefined,
): DdlEntityChangeEntry | undefined {
  if (!ddlEntityId) {
    return undefined
  }
  return entries.find(entry =>
    entry.ddlEntityData?.ddlEntityId === ddlEntityId ||
    entry.previousDdlEntityData?.ddlEntityId === ddlEntityId,
  )
}

export type DdlCompareEntityIds = Readonly<{
  currentDdlEntityId: Key | undefined
  previousDdlEntityId: Key | undefined
}>

export function resolveDdlCompareEntityIds(entry: DdlEntityChangeEntry): DdlCompareEntityIds {
  return {
    currentDdlEntityId: entry.ddlEntityData?.ddlEntityId,
    previousDdlEntityId: entry.previousDdlEntityData?.ddlEntityId,
  }
}

export function getDdlEntityChangesRequestIds(entry: DdlEntityChangeEntry): Readonly<{
  ddlEntityId: Key
  previousVersionDdlEntityId: Key | undefined
}> {
  const currentDdlEntityId = entry.ddlEntityData?.ddlEntityId
  const previousDdlEntityId = entry.previousDdlEntityData?.ddlEntityId
  return {
    ddlEntityId: currentDdlEntityId ?? previousDdlEntityId!,
    previousVersionDdlEntityId: currentDdlEntityId ? previousDdlEntityId : undefined,
  }
}

export function toDdlContractEntityFromChange(change: DdlEntityChange): DdlContractEntity {
  return {
    ddlEntityId: change.ddlEntityId,
    kind: change.kind,
    name: change.name,
    schemaName: change.schemaName,
    description: change.description,
    documentId: change.documentId,
    versionInternalDocumentId: change.versionInternalDocumentId,
    packageRef: change.packageRef,
  }
}
