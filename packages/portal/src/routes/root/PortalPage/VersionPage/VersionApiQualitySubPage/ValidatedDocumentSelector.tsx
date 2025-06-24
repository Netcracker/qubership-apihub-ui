import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { MenuButtonItems } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/MenuButton'
import { SearchBar } from '@netcracker/qubership-apihub-ui-shared/components/SearchBar'
import { SpecLogo } from '@netcracker/qubership-apihub-ui-shared/components/SpecLogo'
import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
import { useMemo, useState, type FC } from 'react'

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const ValidatedDocumentSelector: FC = () => {
  const [anchor, setAnchor] = useState<HTMLElement>()

  const [searchValue, setSearchValue] = useState('')

  const list = useMemo(() => {
    const length = randomInt(10, 15)
    const originalList = Array(length).fill(0).map((_, index) => ({
      name: `Document ${index + 1}`,
      type: 'openapi-3-0',
    }))
    if (searchValue) {
      return originalList.filter((document) => {
        const docName = document.name.toLowerCase()
        const docNameSubstring = searchValue.toLowerCase()
        return docName.includes(docNameSubstring)
      })
    }
    return originalList
  }, [searchValue])

  const [selectedDocument, setSelectedDocument] = useState(list[0])

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
        <SpecLogo value={selectedDocument.type} />
        <TextWithOverflowTooltip
          tooltipText={selectedDocument.name}
          variant="body1"
          sx={{ fontWeight: 500 }}
        >
          {selectedDocument.name}
        </TextWithOverflowTooltip>
      </Box>
      <MenuButtonItems
        anchorEl={anchor}
        open={!!anchor}
        onClick={event => event.stopPropagation()}
        onClose={() => setAnchor(undefined)}
      >
        <Box
          sx={{ p: 1, width: 300, height: 216, pb: '36px', overflow: 'hidden' }}
        >
          <SearchBar onValueChange={setSearchValue} data-testid="ValidatedDocumentSearchBar" />
          <List sx={{ overflowX: 'hidden', overflowY: 'auto' }}>
            {list.map((document) => (
              <ListItem key={document.name} sx={{ p: 0 }}>
                <ListItemButton
                  sx={{
                    flexDirection: 'unset',
                    backgroundColor: document.name === selectedDocument.name ? '#ECEDEF' : 'transparent',
                    height: '36px',
                    alignItems: 'center',
                    '&:hover': {
                      '& .MuiButtonBase-root': {
                        visibility: 'visible',
                      },
                    },
                  }}
                  selected={document.name === selectedDocument.name}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedDocument(document)
                  }}
                  data-testid="ValidatedDocumentButton"
                >
                  <ListItemIcon sx={{ minWidth: 2, mt: 0, mr: 1 }}>
                    <SpecLogo value={document.type} />
                  </ListItemIcon>
                  <ListItemText primary={document.name} primaryTypographyProps={{ sx: { mt: 0.25 } }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MenuButtonItems>
    </Button>
  )
}
