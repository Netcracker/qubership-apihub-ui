import { Box, ClickAwayListener, Drawer } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Resizable, type ResizeCallback } from 're-resizable'
import { type FC, useCallback } from 'react'

import { APP_HEADER_HEIGHT } from '@netcracker/qubership-apihub-ui-shared/themes/components'
import { AI_ASSISTANT_HISTORY_SCREEN, useAiAssistantContext } from './state/AiAssistantContext'
import { AI_ASSISTANT_PANEL_MIN_WIDTH, getAiAssistantPanelMaxWidth } from './state/panelWidth'
import { ChatScreen } from './ui/chat/ChatScreen'
import { HistoryScreen } from './ui/history/HistoryScreen'

const RESIZE_ENABLE = {
  top: false,
  right: false,
  bottom: false,
  left: true,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
}

/**
 * Keep the visible resize area slightly wider than the panel edge so users can grab it.
 * `overflow: 'visible'` on the drawer paper is required so the handle that leaks
 * 4px outside the panel is still clickable and draggable.
 */
const RESIZE_HANDLE_STYLES = {
  left: {
    left: '-4px',
    width: '8px',
    cursor: 'ew-resize',
  },
}

const DRAWER_LAYOUT_STYLES = {
  top: APP_HEADER_HEIGHT,
  height: `calc(100% - ${APP_HEADER_HEIGHT})`,
}

export const AiAssistantPanel: FC = () => {
  const { open, closePanel, panelWidth, setPanelWidth, screen } = useAiAssistantContext()

  const handleResizeStop: ResizeCallback = useCallback((_event, _direction, elementRef) => {
    const width = elementRef.offsetWidth
    setPanelWidth(width)
  }, [setPanelWidth])

  return (
    <StyledDrawer
      anchor="right"
      open={open}
      onClose={closePanel}
    >
      <ClickAwayListener onClickAway={closePanel} mouseEvent="onMouseDown">
        <Resizable
          size={{ width: panelWidth, height: '100%' }}
          minWidth={AI_ASSISTANT_PANEL_MIN_WIDTH}
          maxWidth={getAiAssistantPanelMaxWidth()}
          enable={RESIZE_ENABLE}
          handleStyles={RESIZE_HANDLE_STYLES}
          boundsByDirection={true}
          onResizeStop={handleResizeStop}
        >
          <PanelContainer data-testid="AiAssistantPanel">
            {screen === AI_ASSISTANT_HISTORY_SCREEN ? <HistoryScreen /> : <ChatScreen />}
          </PanelContainer>
        </Resizable>
      </ClickAwayListener>
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
const StyledDrawer = styled(Drawer)({
  pointerEvents: 'none',
  '& .MuiDrawer-paper': {
    pointerEvents: 'auto',
    overflow: 'visible',
    ...DRAWER_LAYOUT_STYLES,
  },
  '& .MuiBackdrop-root': {
    pointerEvents: 'auto',
    ...DRAWER_LAYOUT_STYLES,
  },
})

const PanelContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  minHeight: 0,
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}))
