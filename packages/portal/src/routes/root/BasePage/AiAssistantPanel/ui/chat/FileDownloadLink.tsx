import { DownloadOutlined } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import type { ReactNode } from 'react'

import { plainChildrenText } from '../../utils/plainChildrenText'
import { CHAT_CARD_LINK_CLASS, chatCardAnchorSurface, ChatCardFileLabel, chatCardSurface } from '../common/chatCard'

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

const DownloadGlyph = styled(DownloadOutlined)(({ theme }) => ({
  flexShrink: 0,
  width: 20,
  height: 20,
  color: theme.palette.action.active,
}))

export function FileDownloadLink({ href, children }: FileDownloadLinkProps): JSX.Element {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost'
  const resolved = new URL(href, origin)
  const label = plainChildrenText(children).trim() || resolved.pathname.split('/').filter(Boolean).pop() || 'download'

  return (
    <FileLink href={resolved.href} className={CHAT_CARD_LINK_CLASS} title={label} aria-label={`Download ${label}`}>
      <ChatCardFileLabel title={label}>{label}</ChatCardFileLabel>
      <DownloadGlyph aria-hidden />
    </FileLink>
  )
}
