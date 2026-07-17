import { type FC, memo } from 'react'

import { ButtonWithHint } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/ButtonWithHint'
import { RobotIcon } from '@netcracker/qubership-apihub-ui-shared/icons/RobotIcon'

import { AI_ASSISTANT_PANEL, useSidePanel } from '@netcracker/qubership-apihub-ui-portal/src/routes/root/BasePage/SidePanelManager'

export const AiAssistantButton: FC = memo(() => {
  const { togglePanel } = useSidePanel(AI_ASSISTANT_PANEL)

  return (
    <ButtonWithHint
      hint="AI Assistant"
      startIcon={<RobotIcon />}
      aria-label="AI Assistant"
      size="large"
      color="inherit"
      data-testid="AiAssistantButton"
      onClick={togglePanel}
    />
  )
})

AiAssistantButton.displayName = 'AiAssistantButton'
