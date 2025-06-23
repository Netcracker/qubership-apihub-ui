import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Box, Button } from '@mui/material'
import { MenuButtonItems } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/MenuButton'
import { SpecLogo } from '@netcracker/qubership-apihub-ui-shared/components/SpecLogo'
import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
import { useState, type FC } from 'react'

export const ValidatedDocumentSelector: FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement>()

  return (
    <Button
      sx={{
        minWidth: 4,
        height: 20,
        p: 0,
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
        color: 'black',
      }}
      variant="text"
      onClick={({ currentTarget }) => setAnchor(currentTarget)}
      endIcon={<KeyboardArrowDownOutlinedIcon />}
    >
      <Box display='flex' alignItems='flex-start' gap={1}>
        <SpecLogo value={'openapi-3-0'} />
        <TextWithOverflowTooltip
          tooltipText="Document"
          variant="body1"
          sx={{ fontWeight: 500 }}
        >
          Document Name
        </TextWithOverflowTooltip>
      </Box>
      <MenuButtonItems
        anchorEl={anchor}
        open={!!anchor}
        onClick={event => event.stopPropagation()}
        onClose={() => setAnchor(undefined)}
      >
        <Box
          sx={{ p: 2, pt: 0, width: 300, height: 200 }}
        >
          Text
        </Box>
      </MenuButtonItems>
    </Button>
  )
}
