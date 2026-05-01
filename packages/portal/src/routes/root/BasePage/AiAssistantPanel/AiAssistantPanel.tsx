import { Box, ClickAwayListener, Drawer } from '@mui/material'
import { styled } from '@mui/material/styles'
import { APP_HEADER_HEIGHT } from '@netcracker/qubership-apihub-ui-shared/themes/components'
import type { ResizeCallback } from 're-resizable'
import { Resizable } from 're-resizable'
import type { FC } from 'react'
import { memo, useCallback, useEffect, useState } from 'react'
import { AI_ASSISTANT_PANEL_MIN_WIDTH, getAiAssistantPanelMaxWidth } from './AiAssistantProvider'
import { useAiAssistantContext } from './state/AiAssistantContext'
import { ChatScreen } from './ui/chat/ChatScreen'

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

/** Widen invisible hit area past the left edge so resize is usable without pixel-hunting. */
const RESIZE_HANDLE_STYLES = {
  left: {
    left: '-4px',
    width: '8px',
    cursor: 'ew-resize',
  },
}

export const AiAssistantPanel: FC = memo(() => {
  const { open, closePanel, panelWidth, setPanelWidth } = useAiAssistantContext()
  const [currentPanelWidth, setCurrentPanelWidth] = useState<number>(panelWidth)

  useEffect(() => {
    setCurrentPanelWidth(panelWidth)
  }, [panelWidth, open])

  const handleResize: ResizeCallback = useCallback((_event, _direction, elementRef) => {
    setCurrentPanelWidth(elementRef.offsetWidth)
  }, [])

  const handleResizeStop: ResizeCallback = useCallback((_event, _direction, elementRef) => {
    const width = elementRef.offsetWidth
    setCurrentPanelWidth(width)
    setPanelWidth(width)
  }, [setPanelWidth])

  return (
    <StyledDrawer
      anchor="right"
      open={open}
      onClose={closePanel}
    >
      <ClickAwayListener onClickAway={closePanel}>
        <PanelClickAwayRoot>
          <Resizable
            size={{ width: currentPanelWidth, height: '100%' }}
            minWidth={AI_ASSISTANT_PANEL_MIN_WIDTH}
            maxWidth={getAiAssistantPanelMaxWidth()}
            enable={RESIZE_ENABLE}
            handleStyles={RESIZE_HANDLE_STYLES}
            boundsByDirection={true}
            onResize={handleResize}
            onResizeStop={handleResizeStop}
          >
            <PanelContainer data-testid="AiAssistantPanel">
              <PanelContent>
                <ChatScreen />
              </PanelContent>
            </PanelContainer>
          </Resizable>
        </PanelClickAwayRoot>
      </ClickAwayListener>
    </StyledDrawer>
  )
})

const StyledDrawer = styled(Drawer)({
  pointerEvents: 'none',
  '& .MuiDrawer-paper': {
    pointerEvents: 'auto',
    top: APP_HEADER_HEIGHT,
    height: `calc(100% - ${APP_HEADER_HEIGHT})`,
    overflow: 'visible',
  },
  '& .MuiBackdrop-root': {
    top: APP_HEADER_HEIGHT,
    height: `calc(100% - ${APP_HEADER_HEIGHT})`,
    pointerEvents: 'none',
  },
})

const PanelClickAwayRoot = styled(Box)({
  height: '100%',
  width: '100%',
})

const PanelContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}))

const PanelContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  minHeight: 0,
  flex: 1,
})
