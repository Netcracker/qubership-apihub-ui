import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { Box, ClickAwayListener, Divider, Drawer, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { RobotIcon } from '@netcracker/qubership-apihub-ui-shared/icons/RobotIcon'
import { APP_HEADER_HEIGHT } from '@netcracker/qubership-apihub-ui-shared/themes/components'
import type { ResizeCallback } from 're-resizable'
import { Resizable } from 're-resizable'
import type { FC } from 'react'
import { memo, useCallback, useEffect, useState } from 'react'
import { AI_ASSISTANT_PANEL_MIN_WIDTH, getAiAssistantPanelMaxWidth } from './AiAssistantProvider'
import { useAiAssistantContext } from './state/AiAssistantContext'

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
              <PanelHeader>
                <PanelHeaderToolbar>
                  <PanelTitleContainer>
                    <PanelAvatar>
                      <RobotIcon fontSize="small" color="inherit" />
                    </PanelAvatar>
                    <Typography variant="h3">AI Assistant</Typography>
                  </PanelTitleContainer>
                  <IconButton
                    size="large"
                    aria-label="Close AI Assistant"
                    data-testid="AiAssistantPanelCloseButton"
                    onClick={closePanel}
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </PanelHeaderToolbar>
                <Divider orientation="horizontal" variant="fullWidth" flexItem />
              </PanelHeader>
              <PanelContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Placeholder
                </Typography>
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
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}))

const PanelHeader = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
})

const PanelHeaderToolbar = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px',
})

const PanelTitleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  minWidth: 0,
})

const PanelAvatar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  borderRadius: '12px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}))

const PanelContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
})
