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
import { Table, TableRow } from '@mui/material'
import { TableCellSkeleton } from '../components/TableCellSkeleton'

const meta: Meta<typeof TableCellSkeleton> = {
  title: 'Table Cell Skeleton',
  component: TableCellSkeleton,
  decorators: [
    (Story) => (
      <Table sx={{ width: '900px' }}>
        <TableRow>
          <Story/>
        </TableRow>
      </Table>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultStory: Story = {
  name: 'Default',
}

export const MaxWidthStory: Story = {
  name: 'With maxWidth',
  args: {
    maxWidth: 200,
  },
}
