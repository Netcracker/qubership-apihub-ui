import type { Document, Documents } from '@apihub/entities/documents'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton } from '@mui/material'
import { MenuButtonItems } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/MenuButton'
import { SearchBar } from '@netcracker/qubership-apihub-ui-shared/components/SearchBar'
import { SpecLogo } from '@netcracker/qubership-apihub-ui-shared/components/SpecLogo'
import { TextWithOverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/TextWithOverflowTooltip'
import type { IsLoading } from '@netcracker/qubership-apihub-ui-shared/utils/aliases'
import { memo, useEffect, useMemo, useState, type FC } from 'react'

type AiHandledDocumentSelectorProps = {
  value: Document | undefined
  onSelect: (value: Document | undefined) => void
  options: Documents
  loading: IsLoading
}

export const AiHandledDocumentSelector: FC<AiHandledDocumentSelectorProps> = memo<AiHandledDocumentSelectorProps>((props) => {
  const { value, onSelect, options, loading } = props

  const [anchor, setAnchor] = useState<HTMLElement>()

  const [searchValue, setSearchValue] = useState('')

  const documentsList = useMemo(() => {
    if (searchValue) {
      return options.filter((document) => {
        const docName = document.slug.toLowerCase()
        const docNameSubstring = searchValue.toLowerCase()
        return docName.includes(docNameSubstring)
      })
    }
    return options
  }, [searchValue, options])

  const [selectedDocument, setSelectedDocument] = useState<Document | undefined>()

  useEffect(() => {
    const newSelectedDocument = value ?? options[0]
    setSelectedDocument(newSelectedDocument)
    onSelect(newSelectedDocument)
  }, [value, options, onSelect])

  if (!selectedDocument || loading) {
    return <Skeleton variant="rectangular" width={250} height={20} />
  }

  return (
    <Button
      sx={{
        justifyContent: 'flex-start',
        minWidth: 4,
        height: 20,
        p: 0,
        m: 0,
        color: 'black',
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
      }}
      variant="text"
      onClick={({ currentTarget }) => setAnchor(currentTarget)}
    >
      <Box display='flex' alignItems='center' gap={1} width='100%'>
        <SpecLogo value={selectedDocument.type} />
        <TextWithOverflowTooltip
          tooltipText={selectedDocument.title}
          variant="body2"
          sx={{ fontWeight: 500 }}
        >
          {selectedDocument.title}
        </TextWithOverflowTooltip>
        <KeyboardArrowDownOutlinedIcon />
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
            {documentsList.map((document) => (
              <ListItem key={document.slug} sx={{ p: 0 }}>
                <ListItemButton
                  sx={{
                    flexDirection: 'unset',
                    backgroundColor: document.slug === selectedDocument.slug ? '#ECEDEF' : 'transparent',
                    height: '36px',
                    alignItems: 'center',
                    '&:hover': {
                      '& .MuiButtonBase-root': {
                        visibility: 'visible',
                      },
                    },
                  }}
                  selected={document.slug === selectedDocument.slug}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedDocument(document)
                    setAnchor(undefined)
                    onSelect(document)
                  }}
                  data-testid="ValidatedDocumentButton"
                >
                  <ListItemIcon sx={{ minWidth: 2, mt: 0, mr: 1 }}>
                    <SpecLogo value={document.type} />
                  </ListItemIcon>
                  <ListItemText primary={document.title} primaryTypographyProps={{ sx: { mt: 0.25 } }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MenuButtonItems>
    </Button>
  )
})
