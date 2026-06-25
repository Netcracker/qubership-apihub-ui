import type { ApiType } from '@netcracker/qubership-apihub-ui-shared/entities/api-types'
import {
  CONTRACT_TYPE_DDL,
  CONTRACT_TYPE_MCP,
  type ContractType,
} from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'

export type PublishedApiTypes = ReadonlyArray<ApiType | ContractType>

export function getContractsTabApiTypes(types: PublishedApiTypes): Array<ApiType | ContractType> {
  return [...types]
}

export function getApiChangesTabApiTypes(types: PublishedApiTypes): Array<ApiType | ContractType> {
  return excludeMcp(types)
}

export function getDeprecatedTabApiTypes(types: PublishedApiTypes): Array<ApiType | ContractType> {
  return excludeMcpAndDdl(types)
}

export function getApiQualityTabApiTypes(types: PublishedApiTypes): Array<ApiType | ContractType> {
  return excludeMcpAndDdl(types)
}

function excludeMcp(types: PublishedApiTypes): Array<ApiType | ContractType> {
  return types.filter(type => type !== CONTRACT_TYPE_MCP)
}

function excludeMcpAndDdl(types: PublishedApiTypes): Array<ApiType | ContractType> {
  return types.filter(type => type !== CONTRACT_TYPE_MCP && type !== CONTRACT_TYPE_DDL)
}
