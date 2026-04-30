import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { FC, MouseEvent, ReactNode } from 'react'
import { memo, useCallback } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { useShowErrorNotification } from '../../../Notification'
import { useAiAssistantContext } from '../../state/AiAssistantContext'
import { resolveToUrl } from '../../utils/internalLinkMatcher'
import { plainChildrenText } from '../../utils/plainChildrenText'
import { CopyIconButton } from './CopyIconButton'
import { CHAT_CARD_LINK_CLASS, ChatCardTitle, chatCardAnchorSurface, chatCardSurface } from './chatCard'
import { useCopyWithFeedback } from './useCopyWithFeedback'

export type InternalPortalLinkRowProps = {
  href: string
  children?: ReactNode
}

export const InternalPortalLinkRow: FC<InternalPortalLinkRowProps> = memo(({ href, children }) => {
  const { closePanel, resetActiveChat } = useAiAssistantContext()
  const showError = useShowErrorNotification()
  const { copy, copied } = useCopyWithFeedback({
    onError: (error) =>
      showError({
        title: 'Copy failed',
        message: error instanceof Error ? error.message : 'Clipboard access was denied.',
      }),
  })

  const resolved = resolveToUrl(href, window.location.origin)
  const to = `${resolved.pathname}${resolved.search}${resolved.hash}`
  const absoluteUrl = resolved.href
  const label = plainChildrenText(children).trim() || `${resolved.pathname}${resolved.search}`

  const handleLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return
      closePanel()
      resetActiveChat()
    },
    [closePanel, resetActiveChat],
  )

  return (
    <Card>
      <LabelLink to={to} className={CHAT_CARD_LINK_CLASS} onClick={handleLinkClick}>
        <ChatCardTitle>{label}</ChatCardTitle>
      </LabelLink>
      <TrailingActions>
        <CopyIconButton ariaLabel="Copy URL" copied={copied} onCopy={() => copy(absoluteUrl)} />
        <AffordanceLink to={to} className={CHAT_CARD_LINK_CLASS} onClick={handleLinkClick} tabIndex={-1}>
          <OpenInNewOutlinedIcon sx={{ fontSize: 20, color: 'action.active' }} />
        </AffordanceLink>
      </TrailingActions>
    </Card>
  )
})

const Card = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  width: '100%',
  ...chatCardSurface(theme),
}))

const TrailingActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  flexShrink: 0,
}))

const LabelLink = styled(RouterLink)(({ theme }) => ({
  ...chatCardAnchorSurface(theme),
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  minWidth: 0,
  minHeight: 24,
  justifyContent: 'flex-start',
  paddingRight: theme.spacing(0.5),
}))

const AffordanceLink = styled(RouterLink)(({ theme }) => ({
  ...chatCardAnchorSurface(theme),
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  padding: 0,
}))
