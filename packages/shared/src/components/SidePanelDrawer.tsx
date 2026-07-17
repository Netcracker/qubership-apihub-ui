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

import type { DrawerProps } from '@mui/material/Drawer'
import type { FC, PropsWithChildren } from 'react'
import { Drawer } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DRAWER_LAYOUT_STYLES } from '../themes/components'

export type SidePanelDrawerProps = PropsWithChildren<{
  /** Whether the panel is open */
  open: boolean
  /** Called when the user clicks the backdrop or presses Escape */
  onClose: () => void
  /** MUI Drawer variant; defaults to "temporary" */
  variant?: DrawerProps['variant']
  /**
   * Keep drawer content mounted when closed.
   * Useful when the panel needs to preserve internal state (e.g. search filters) across open/close cycles.
   */
  keepMounted?: boolean
  /**
   * Set to true when a resize handle extends beyond the panel edge.
   * Adds `overflow: 'visible'` to the Drawer paper so the handle stays clickable outside panel bounds.
   */
  overflowVisible?: boolean
}>

/**
 * Generic side panel built on MUI Drawer that slides in from the right.
 *
 * Provides the standard pointer-events setup required for panels that float
 * above the app (header stays interactive, backdrop closes on click).
 * Layout and content are fully controlled by the consumer via `children`.
 */
export const SidePanelDrawer: FC<SidePanelDrawerProps> = ({
  open,
  onClose,
  children,
  variant = 'temporary',
  keepMounted = false,
  overflowVisible = false,
}) => {
  return (
    <StyledDrawer
      anchor="right"
      variant={variant}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted }}
      overflowVisible={overflowVisible}
    >
      {children}
    </StyledDrawer>
  )
}

/**
 * Default Drawer modal covers the full viewport and blocks the app header.
 * We offset the drawer/backdrop below the header and manage pointer events:
 * - modal wrapper: no pointer events (header strip stays interactive),
 * - backdrop: captures clicks in the shaded area and closes via Drawer onClose,
 * - drawer paper: pointer events enabled (panel is clickable).
 */
const StyledDrawer = styled(Drawer, {
  shouldForwardProp: prop => prop !== 'overflowVisible',
})<{ overflowVisible?: boolean }>(({ overflowVisible }) => ({
  pointerEvents: 'none',
  '& .MuiDrawer-paper': {
    pointerEvents: 'auto',
    ...(overflowVisible && { overflow: 'visible' }),
    ...DRAWER_LAYOUT_STYLES,
  },
  '& .MuiBackdrop-root': {
    pointerEvents: 'auto',
    ...DRAWER_LAYOUT_STYLES,
  },
}))
