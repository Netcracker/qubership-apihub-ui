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

import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { ExpandableItem } from '../components/ExpandableItem'
import { RED_SECTION_COLOR } from './commons/placeholder-colors'

const meta: Meta<typeof ExpandableItem> = {
  title: 'Expandable Item',
  component: ExpandableItem,
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultStory: Story = {
  name: 'Default',
  args: {
    children: <Box sx={{ backgroundColor: RED_SECTION_COLOR }}>An Expandable Item Component</Box>,
    showToggler: true,
    expanded: false,
  },
}
