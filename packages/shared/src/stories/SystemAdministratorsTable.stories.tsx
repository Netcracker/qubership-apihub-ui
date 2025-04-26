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
import { Box, ThemeProvider } from '@mui/material'
import { theme } from '../themes/theme'
import { SystemAdministratorsTable } from '../components/SystemAdministratorsTable'
import { SYSTEM_ADMINISTRATORS } from './samples/system-administrators-samples'

const meta: Meta<typeof SystemAdministratorsTable> = {
  title: 'System Administrators Table',
  component: SystemAdministratorsTable,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '1200px' }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultStory: Story = {
  name: 'Default',
  args: {
    data: SYSTEM_ADMINISTRATORS,
    deleteAdministrator: (admin) => console.log(`Admin was deleted ${admin.name}`),
    isLoading: false,
  },
}
