/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ActionType, ChangesSummary, ChangesSummaryDto } from './change-severities'
import {
  ADD_ACTION_TYPE,
  ANNOTATION_CHANGE_SEVERITY,
  BREAKING_CHANGE_SEVERITY,
  DEPRECATED_CHANGE_SEVERITY,
  NON_BREAKING_CHANGE_SEVERITY,
  REMOVE_ACTION_TYPE,
  REPLACE_ACTION_TYPE,
  SEMI_BREAKING_CHANGE_SEVERITY,
  UNCLASSIFIED_CHANGE_SEVERITY,
} from './change-severities'
import type { GraphQlOperationType } from './graphql-operation-types'
import type { Key } from './keys'
import type { MethodType } from './method-types'
import type { ApiAudience, ApiKind, GraphQlOperation, Operation, PackageRef, PackagesRefs, RestOperation } from './operations'
import { toPackageRef } from './operations'

export type VersionChangesDto = Partial<Readonly<{
  previousVersion: Key
  previousVersionPackageId: Key
  operations: ReadonlyArray<OperationChangeDataDto>
  packages: PackagesRefs
}>>

export type VersionChanges = Readonly<{
  previousVersion?: Key
  previousVersionPackageKey?: Key
  operations: ReadonlyArray<OperationChangeData>
}>

export type DifferentVersionChanges = Readonly<{
  operations: ReadonlyArray<OperationWithDifferenceChangeData>
}>

export type VersionChangesData = VersionChangesDto

export type PagedVersionChanges = ReadonlyArray<VersionChanges>
export type PagedDiffVersionChanges = ReadonlyArray<DifferentVersionChanges>

export interface OperationInfoFromDifferentVersionsDto {
  readonly operationId: Key
  readonly title: string
  readonly apiKind: ApiKind
  readonly apiAudience: ApiAudience
  readonly dataHash: string
  readonly packageRef?: string
}
export interface RestOperationInfoFromDifferentVersionsDto extends OperationInfoFromDifferentVersionsDto {
  readonly method: MethodType
  readonly path: string
}
export interface GraphQlOperationInfoFromDifferentVersionsDto extends OperationInfoFromDifferentVersionsDto {
  readonly method: string
  readonly type: GraphQlOperationType
}

interface OperationChangeDataDto {
  readonly changeSummary: ChangesSummaryDto
  readonly currentOperation?: OperationInfoFromDifferentVersionsDto
  readonly previousOperation?: OperationInfoFromDifferentVersionsDto
}
export interface RestOperationChangeDto extends OperationChangeDataDto {
  readonly currentOperation: RestOperationInfoFromDifferentVersionsDto
  readonly previousOperation: RestOperationInfoFromDifferentVersionsDto
}
export interface GraphQlOperationChangeDto extends OperationChangeDataDto {
  readonly currentOperation: GraphQlOperationInfoFromDifferentVersionsDto
  readonly previousOperation: GraphQlOperationInfoFromDifferentVersionsDto
}

export interface OperationInfoFromDifferentVersions {
  readonly operationKey: Key
  readonly title: string
  readonly apiKind: ApiKind
  readonly apiAudience: ApiAudience
  readonly dataHash: string
  readonly packageRef?: PackageRef
}
export interface RestOperationInfoFromDifferentVersions extends OperationInfoFromDifferentVersions {
  readonly method: MethodType
  readonly path: string
}
export interface GraphQlOperationInfoFromDifferentVersions extends OperationInfoFromDifferentVersions {
  readonly method: string
  readonly type: GraphQlOperationType
}

export interface OperationChangeData {
  readonly changeSummary: ChangesSummary
  readonly action: ActionType // Optional, but always calculated
  readonly currentOperation?: Operation
  readonly previousOperation?: Operation
}
export interface RestOperationChangeData extends OperationChangeData {
  readonly currentOperation: RestOperation
  readonly previousOperation: RestOperation
}
export interface GraphQlOperationChangeData extends OperationChangeData {
  readonly currentOperation: GraphQlOperation
  readonly previousOperation: GraphQlOperation
}

export interface OperationWithDifferenceChangeData {
  changeSummary: ChangesSummary
  action: ActionType
  currentOperation?: Operation
  previousOperation?: Operation
}
export interface RestOperationWithDifferenceChangeData extends OperationWithDifferenceChangeData {
  currentOperation: RestOperation
  previousOperation: RestOperation
}
export interface GraphQlOperationWithDifferenceChangeData extends OperationWithDifferenceChangeData {
  currentOperation: GraphQlOperation
  previousOperation: GraphQlOperation
}

export const toVersionChanges = (dto: VersionChangesDto): VersionChanges => {
  return {
    previousVersion: dto?.previousVersion,
    previousVersionPackageKey: dto?.previousVersionPackageId,
    operations: dto?.operations?.map(
      (operationChange) => toOperationChangeData(operationChange, dto?.packages),
    ) ?? [],
  }
}

export const toDiffVersionChanges = (dto: VersionChangesDto): DifferentVersionChanges => {
  return {
    operations: dto?.operations?.map(
      (operationChange) => toDiffOperationChangeData(operationChange),
    ) ?? [],
  }
}

export const toOperationChangeData = (dto: OperationChangeDataDto, packagesRefs?: PackagesRefs): OperationChangeData => {
  return {
    ...dto,
    currentOperation: dto.currentOperation
      ? {
        ...dto.currentOperation,
        operationKey: dto.currentOperation.operationId,
        packageRef: toPackageRef(dto.currentOperation.packageRef, packagesRefs),
      }
      : undefined,
    previousOperation: dto.previousOperation
      ? {
        ...dto.previousOperation,
        operationKey: dto.previousOperation.operationId,
        packageRef: toPackageRef(dto.previousOperation.packageRef, packagesRefs),
      }
      : undefined,
    action: calculateAction(dto.currentOperation?.dataHash, dto.previousOperation?.dataHash),
  }
}

export const toDiffOperationChangeData = (dto: OperationChangeDataDto): OperationWithDifferenceChangeData => {
  return {
    ...dto,
    currentOperation: dto.currentOperation
      ? {
        ...dto.currentOperation,
        operationKey: dto.currentOperation.operationId,
        packageRef: undefined,
      }
      : undefined,
    previousOperation: dto.previousOperation
      ? {
        ...dto.previousOperation,
        operationKey: dto.previousOperation.operationId,
        packageRef: undefined,
      }
      : undefined,
    action: calculateAction(dto.currentOperation?.dataHash, dto.previousOperation?.dataHash),
  }
}

export function calculateAction(current?: string, previous?: string): ActionType {
  return current && previous
    ? REPLACE_ACTION_TYPE
    : previous
      ? REMOVE_ACTION_TYPE
      : ADD_ACTION_TYPE
}

export const EMPTY_CHANGES = {
  operations: [],
}

export const EMPTY_CHANGE_SUMMARY: ChangesSummary = {
  [BREAKING_CHANGE_SEVERITY]: 0,
  [SEMI_BREAKING_CHANGE_SEVERITY]: 0,
  [DEPRECATED_CHANGE_SEVERITY]: 0,
  [NON_BREAKING_CHANGE_SEVERITY]: 0,
  [ANNOTATION_CHANGE_SEVERITY]: 0,
  [UNCLASSIFIED_CHANGE_SEVERITY]: 0,
}
