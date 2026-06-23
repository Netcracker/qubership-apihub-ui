import {
  ASYNCAPI_API_TYPE,
  DDL_CONTRACT_TYPE,
  GRAPHQL_API_TYPE,
  MCP_CONTRACT_TYPE,
  REST_API_TYPE,
} from '@netcracker/qubership-apihub-api-processor'

import { API_TYPE_TITLE_MAP, API_TYPES, type ApiType } from './api-types'

export const CONTRACT_TYPE_REST = REST_API_TYPE
export const CONTRACT_TYPE_GRAPHQL = GRAPHQL_API_TYPE
export const CONTRACT_TYPE_ASYNCAPI = ASYNCAPI_API_TYPE
export const CONTRACT_TYPE_MCP = MCP_CONTRACT_TYPE
export const CONTRACT_TYPE_DDL = DDL_CONTRACT_TYPE

export type NonApiContractType = typeof CONTRACT_TYPE_MCP | typeof CONTRACT_TYPE_DDL

export type ContractType = ApiType | NonApiContractType

export const DEFAULT_CONTRACT_TYPE: ContractType = CONTRACT_TYPE_REST

export const NON_API_CONTRACT_TYPES: ReadonlyArray<NonApiContractType> = [
  CONTRACT_TYPE_MCP,
  CONTRACT_TYPE_DDL,
]

export const CONTRACT_TYPES: ReadonlyArray<ContractType> = [
  ...API_TYPES,
  ...NON_API_CONTRACT_TYPES,
]

export const CONTRACT_TYPE_TITLE_MAP: Record<ContractType, string> = {
  ...API_TYPE_TITLE_MAP,
  [CONTRACT_TYPE_MCP]: 'MCP',
  [CONTRACT_TYPE_DDL]: 'DDL',
}

export function isNonApiContractType(value: string): value is NonApiContractType {
  return NON_API_CONTRACT_TYPES.some(type => type === value)
}

export function isContractType(value: string): value is ContractType {
  return CONTRACT_TYPES.some(type => type === value)
}
