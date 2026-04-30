import InsertLinkIcon from '@mui/icons-material/InsertLink'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { FC, MouseEvent, ReactNode } from 'react'
import { memo, useCallback } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { useShowErrorNotification } from '../../../Notification'
import { useAiAssistantContext } from '../../state/AiAssistantContext'
import { resolveToUrl } from '../../utils/internalLinkMatcher'
import { plainChildrenText } from '../../utils/plainChildrenText'
import { CopyIconButton } from './CopyIconButton'
import { useCopyWithFeedback } from './useCopyWithFeedback'

export type InternalPortalLinkRowProps = {
  href: string
  children?: ReactNode
}

/** Portal package/operation link: main area is `RouterLink`; copy is isolated (does not navigate). */
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
    <Row>
      <LinkMain to={to} onClick={handleLinkClick}>
        <InsertLinkIcon color="primary" fontSize="small" sx={{ flexShrink: 0 }} />
        <Typography variant="body2" fontWeight={500} sx={{ wordBreak: 'break-word' }}>
          {label}
        </Typography>
      </LinkMain>
      <CopyRail>
        <CopyIconButton ariaLabel="Copy URL" copied={copied} onCopy={() => copy(absoluteUrl)} />
      </CopyRail>
    </Row>
  )
})

const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  width: '100%',
  margin: theme.spacing(0.75, 0),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  overflow: 'hidden',
}))

const LinkMain = styled(RouterLink)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 1.25),
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}))

const CopyRail = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 0.5),
  borderLeft: `1px solid ${theme.palette.divider}`,
}))
