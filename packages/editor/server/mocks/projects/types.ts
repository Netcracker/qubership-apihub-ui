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

export const MOVED_CHANGE_STATUS = 'moved'
export const MODIFIED_CHANGE_STATUS = 'modified'
export const EXCLUDED_CHANGE_STATUS = 'excluded'
export const DELETED_CHANGE_STATUS = 'deleted'
export const ADDED_CHANGE_STATUS = 'added'
export const INCLUDED_CHANGE_STATUS = 'included'
export const UNMODIFIED_CHANGE_STATUS = 'unmodified'

export type ChangeStatus =
  | typeof MOVED_CHANGE_STATUS
  | typeof MODIFIED_CHANGE_STATUS
  | typeof EXCLUDED_CHANGE_STATUS
  | typeof DELETED_CHANGE_STATUS
  | typeof ADDED_CHANGE_STATUS
  | typeof INCLUDED_CHANGE_STATUS
  | typeof UNMODIFIED_CHANGE_STATUS

export const GET_METHOD_TYPE = 'get'
export const POST_METHOD_TYPE = 'post'
export const PUT_METHOD_TYPE = 'put'
export const PATCH_METHOD_TYPE = 'patch'
export const DELETE_METHOD_TYPE = 'delete'

export type MethodType =
  | typeof GET_METHOD_TYPE
  | typeof POST_METHOD_TYPE
  | typeof PUT_METHOD_TYPE
  | typeof PATCH_METHOD_TYPE
  | typeof DELETE_METHOD_TYPE
