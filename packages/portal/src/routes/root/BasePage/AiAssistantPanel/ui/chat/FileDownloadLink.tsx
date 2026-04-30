import AttachFileIcon from '@mui/icons-material/AttachFile'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import type { FC, ReactNode } from 'react'
import { memo, useCallback, useState } from 'react'

import { useShowErrorNotification } from '../../../Notification'
import { resolveToUrl } from '../../utils/internalLinkMatcher'
import { plainChildrenText } from '../../utils/plainChildrenText'

export type FileDownloadLinkProps = {
  href: string
  children?: ReactNode
}

/** Single full-width control: click runs browser download (fetch + blob), not navigation. */
export const FileDownloadLink: FC<FileDownloadLinkProps> = memo(({ href, children }) => {
  const showError = useShowErrorNotification()
  const [busy, setBusy] = useState(false)

  const absoluteHref = resolveToUrl(href, window.location.origin).href
  const label = plainChildrenText(children).trim() || fallbackFileName(absoluteHref)

  const onDownload = useCallback(async () => {
    setBusy(true)
    try {
      const response = await fetch(absoluteHref, { credentials: 'include' })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const blob = await response.blob()
      const name = parseFilename(response.headers.get('Content-Disposition'), label)
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = name
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      showError({
        title: 'Download failed',
        message: error instanceof Error ? error.message : 'Could not download the file.',
      })
    } finally {
      setBusy(false)
    }
  }, [absoluteHref, label, showError])

  return (
    <FileButton
      fullWidth
      variant="outlined"
      disabled={busy}
      onClick={() => void onDownload()}
      startIcon={<AttachFileIcon />}
    >
      {label}
    </FileButton>
  )
})

function fallbackFileName(href: string): string {
  try {
    const path = new URL(href).pathname.split('/').pop() ?? 'file'
    return decodeURIComponent(path)
  } catch {
    return 'file'
  }
}

function parseFilename(header: string | null, fallback: string): string {
  if (!header) return sanitizeFilename(fallback)
  const star = /filename\*=UTF-8''([^;\n]+)/i.exec(header)
  if (star?.[1]) {
    try {
      return decodeURIComponent(star[1].trim())
    } catch {
      // fall through
    }
  }
  const q = /filename="([^"]+)"/i.exec(header)
  if (q?.[1]) return q[1].trim()
  const plain = /filename=([^;\n]+)/i.exec(header)
  if (plain?.[1]) return plain[1].trim().replace(/^["']|["']$/g, '')
  return sanitizeFilename(fallback)
}

function sanitizeFilename(name: string): string {
  return name.replace(/[/\\?%*:|"<>]/g, '-')
}

const FileButton = styled(Button)(({ theme }) => ({
  width: '100%',
  justifyContent: 'flex-start',
  textTransform: 'none',
  padding: theme.spacing(2, 2),
  minHeight: theme.spacing(9),
  margin: theme.spacing(0.75, 0),
}))
