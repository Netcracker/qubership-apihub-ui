import { styled } from '@mui/material/styles'
import type { CSSObject, Theme } from '@mui/material/styles'

/** Elevated card shadow used on assistant chat link/file rows. */
export const CHAT_CARD_DROP_SHADOW =
  '0px 1px 1px 0px rgba(4, 10, 21, 0.04), 0px 3px 14px 0px rgba(4, 12, 29, 0.09), 0px 0px 1px 0px rgba(7, 13, 26, 0.27)'

/** Applied to card row anchors so `.markdown-body a:hover` from github-markdown-css does not underline. */
export const CHAT_CARD_LINK_CLASS = 'assistant-chat-card-link'

export function chatCardSurface(theme: Theme): CSSObject {
  return {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
    boxSizing: 'border-box',
    border: 'none',
    borderRadius: 12,
    backgroundColor: theme.palette.background.paper,
    boxShadow: CHAT_CARD_DROP_SHADOW,
  }
}

/** Shared anchor chrome for card rows (focus ring, no underline on any state). */
export function chatCardAnchorSurface(theme: Theme): CSSObject {
  return {
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'transparent',
    },
    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: 2,
      borderRadius: theme.shape.borderRadius,
    },
    '&:visited': {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
    '&:active': {
      textDecoration: 'none',
    },
  }
}

function chatCardRowLabelTypography(theme: Theme): CSSObject {
  return {
    fontSize: theme.typography.pxToRem(13),
    lineHeight: '20px',
    letterSpacing: '-0.025em',
    color: theme.palette.text.primary,
  }
}

/** Portal link row title — semibold. */
export const ChatCardTitle = styled('span')(({ theme }) => ({
  ...chatCardRowLabelTypography(theme),
  fontWeight: 600,
  wordBreak: 'break-word',
}))

/** Generated file row label — regular weight; ellipsis when the row is narrow. */
export const ChatCardFileLabel = styled('span')(({ theme }) => ({
  ...chatCardRowLabelTypography(theme),
  fontWeight: 400,
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minWidth: 0,
  flex: 1,
  wordBreak: 'normal',
}))
