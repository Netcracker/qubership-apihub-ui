import { styled } from '@mui/material/styles'
import type { ReactNode } from 'react'

import { DownloadIconMui } from '@netcracker/qubership-apihub-ui-shared/icons/DownloadIconMui'
import { plainChildrenText } from '../../utils/plainChildrenText'
import { CHAT_CARD_LINK_CLASS, chatCardAnchorSurface, ChatCardFileLabel, chatCardSurface } from './chatCard'

export interface FileDownloadLinkProps {
  href: string
  children?: ReactNode
}

const FileLink = styled('a')(({ theme }) => ({
  ...chatCardSurface(theme),
  ...chatCardAnchorSurface(theme),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  width: '100%',
  minHeight: 64,
  boxSizing: 'border-box',
}))

export function FileDownloadLink({ href, children }: FileDownloadLinkProps): JSX.Element {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
  const resolved = new URL(href, origin)
  const label = plainChildrenText(children).trim() || resolved.pathname.split('/').filter(Boolean).pop() || 'download'

  return (
    <FileLink href={resolved.href} className={CHAT_CARD_LINK_CLASS} title={label} aria-label={`Download ${label}`}>
      <ChatCardFileLabel title={label}>{label}</ChatCardFileLabel>
      <DownloadIconMui fontSize="small" color="action" />
    </FileLink>
  )
}
