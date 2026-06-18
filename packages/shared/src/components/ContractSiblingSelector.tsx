import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { FC, ReactNode } from 'react'
import { memo, useCallback, useState } from 'react'

import { MenuButtonItems } from './Buttons/MenuButton'
import { LoadingIndicator } from './LoadingIndicator'
import { NAVIGATION_PLACEHOLDER_AREA, Placeholder } from './Placeholder'
import type { TestableProps } from './Testable'

export type ContractSiblingSelectorProps = {
  sectionTitle: string
  isLoading?: boolean
  isEmpty: boolean
  emptyMessage?: string
  children: ReactNode
} & TestableProps

export const ContractSiblingSelector: FC<ContractSiblingSelectorProps> = memo<ContractSiblingSelectorProps>(({
  sectionTitle,
  isLoading,
  isEmpty,
  emptyMessage = 'No items',
  children,
  'data-testid': dataTestId,
}) => {
  const [anchor, setAnchor] = useState<HTMLElement>()
  const onClose = useCallback(() => setAnchor(undefined), [])

  return (
    <SelectorBox data-testid={dataTestId}>
      <SelectorButton
        variant="text"
        onClick={({ currentTarget }) => setAnchor(currentTarget)}
        endIcon={<KeyboardArrowDownOutlinedIcon />}
      >
        <MenuButtonItems
          anchorEl={anchor}
          open={!!anchor}
          onClick={event => event.stopPropagation()}
          onClose={onClose}
        >
          <MenuPanel>
            <SectionTitle variant="subtitle2">{sectionTitle}</SectionTitle>
            {isLoading
              ? <LoadingIndicator />
              : (
                <Placeholder
                  invisible={!isEmpty}
                  area={NAVIGATION_PLACEHOLDER_AREA}
                  message={emptyMessage}
                >
                  {children}
                </Placeholder>
              )}
          </MenuPanel>
        </MenuButtonItems>
      </SelectorButton>
    </SelectorBox>
  )
})

ContractSiblingSelector.displayName = 'ContractSiblingSelector'

const SelectorBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
})

const SelectorButton = styled(Button)({
  minWidth: 4,
  height: 20,
  padding: 0,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
})

const MenuPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: 370,
  maxHeight: 480,
  overflow: 'scroll',
}))

const SectionTitle = styled(Typography)({
  fontSize: 13,
  marginBottom: 8,
})
