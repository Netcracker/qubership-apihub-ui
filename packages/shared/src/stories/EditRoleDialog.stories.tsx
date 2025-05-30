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

import type { Meta, StoryObj } from '@storybook/react'
import { EditRolePopup } from '../components/EditRoleDialog'
import { PERMISSIONS_LIST, ROLES_LIST } from './samples/roles-samples'

const meta: Meta<typeof EditRolePopup> = {
  title: 'Edit Role Dialog',
  component: EditRolePopup,
}

export default meta
type Story = StoryObj<typeof meta>

export const CreateStory: Story = {
  name: 'Create',
  args: {
    open: true,
    detail: {
      permissions: PERMISSIONS_LIST,
      isRoleUnique: (roleName: string) =>
        !ROLES_LIST?.some(({ role }) => role.toLowerCase() === roleName.toLowerCase()),
    },
  },
}

export const EditStory: Story = {
  name: 'Edit',
  args: {
    open: true,
    detail: {
      permissions: PERMISSIONS_LIST,
      role: ROLES_LIST[3],
    },
  },
}
