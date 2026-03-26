import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Skeleton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useIsFetching } from '@tanstack/react-query'
import { type Dispatch, type FC, memo, type SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'
import { useDebounce } from 'react-use'

import { useCurrentPackage } from '@apihub/components/CurrentPackageProvider'
import type { Document } from '@apihub/entities/documents'
import type { Key } from '@apihub/entities/keys'
import {
  type DocumentsTabSubPageKey,
  OPERATIONS_SUB_PAGE,
  OVERVIEW_SUB_PAGE,
} from '@apihub/routes/root/PortalPage/VersionPage/OpenApiViewer/OpenApiViewer'
import type { ShareabilityStatus } from '@netcracker/qubership-apihub-api-processor'
import { OverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/OverflowTooltip'
import { SearchBar } from '@netcracker/qubership-apihub-ui-shared/components/SearchBar'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import { DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION } from '@netcracker/qubership-apihub-ui-shared/entities/package-permissions'
import { DEFAULT_DEBOUNCE } from '@netcracker/qubership-apihub-ui-shared/utils/constants'
import type { FileFormat } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import {
  isAsyncApiSpecType,
  isGraphQlSpecType,
  isOpenApiSpecType,
  type SpecType,
} from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { useVersionWithRevision } from '../../../useVersionWithRevision'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { DOCUMENT_QUERY_KEY } from '../useDocument'
import { DOCUMENTS_QUERY_KEY } from '../useDocuments'
import { DocumentActionsButton } from './DocumentActionsButton'
import { useSelectedSubPage, useSetSelectedSubPage } from './SelectedSubPageProvider'
import { ShareabilityDropdown } from './ShareabilityDropdown'
import { ShareabilityMarker } from './ShareabilityMarker'
import { useUpdateDocumentShareability } from './useUpdateDocumentShareability'

export type DocumentsTabHeaderProps = {
  title: string
  version?: string
  slug: Key
  type: SpecType
  format: FileFormat
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  isLoading?: boolean
  document: Document
}

export const DocumentsTabHeader: FC<DocumentsTabHeaderProps> = (props) => {
  const {
    title,
    version,
    slug,
    type,
    format,
    searchValue,
    setSearchValue,
    isLoading = true,
    document,
  } = props

  const currentPackage = useCurrentPackage()

  const selectedSubPage = useSelectedSubPage()

  const { shareabilityStatus } = document

  const hasShareabilityPermission = useMemo(
    () => !!currentPackage?.permissions?.includes(DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION),
    [currentPackage?.permissions],
  )

  const [docPackageKey, docPackageVersion] = usePackageParamsWithRef()
  const { fullVersion } = useVersionWithRevision(docPackageVersion, docPackageKey)

  const isDocumentsListRefetching = useIsFetching({
    queryKey: [DOCUMENTS_QUERY_KEY, docPackageKey, fullVersion],
    exact: false,
  }) > 0

  const isDocumentRefetching = useIsFetching({
    queryKey: [DOCUMENT_QUERY_KEY, docPackageKey, fullVersion, slug],
    exact: true,
  }) > 0

  const { updateShareability, isPending: isShareabilityUpdating } = useUpdateDocumentShareability(
    docPackageKey!,
    fullVersion,
    slug,
  )

  const isShareabilityStatusUpdating = isShareabilityUpdating
    || isDocumentsListRefetching
    || isDocumentRefetching

  const [isShareabilityStatusLoading, setShareabilityStatusLoading] = useState(false)

  useDebounce(
    () => {
      setShareabilityStatusLoading(isShareabilityStatusUpdating)
    },
    DEFAULT_DEBOUNCE,
    [isShareabilityStatusUpdating],
  )

  useEffect(() => {
    if (!isShareabilityStatusUpdating) {
      setShareabilityStatusLoading(false)
    }
  }, [isShareabilityStatusUpdating])

  const handleShareabilityChange = useCallback(
    (value: ShareabilityStatus) => updateShareability(value),
    [updateShareability],
  )

  if (isLoading) {
    return (
      <TabHeader>
        <TextSection>
          <TitleTextSkeleton />
          <VersionTextSkeleton />
        </TextSection>
        <ActionsSection>
          <ActionsSkeleton />
        </ActionsSection>
      </TabHeader>
    )
  }

  return (
    <TabHeader data-testid="DocumentToolbar">
      <TextSection data-testid="DocumentToolbarTitle">
        <TitleTooltip title={title}>
          <TitleText variant="inherit">
            {title}
          </TitleText>
        </TitleTooltip>
        <TitleSuffix>
          <VersionText variant="body2">
            {version}
          </VersionText>
          {shareabilityStatus && (
            hasShareabilityPermission && docPackageKey && fullVersion
              ? (
                <ShareabilityDropdown
                  value={shareabilityStatus}
                  onChange={handleShareabilityChange}
                  isLoading={isShareabilityStatusLoading}
                />
              )
              : <ShareabilityMarker value={shareabilityStatus} />
          )}
        </TitleSuffix>
      </TextSection>
      <ActionsSection>
        {(isOpenApiSpecType(type) || isGraphQlSpecType(type) || isAsyncApiSpecType(type)) && (
          <>
            {selectedSubPage === OPERATIONS_SUB_PAGE && (
              <SearchInput
                value={searchValue}
                onValueChange={setSearchValue}
                data-testid="SearchOperations"
              />
            )}
            <DocumentsSubPageSelector />
          </>
        )}
        <ActionsButton
          slug={slug}
          docType={type}
          format={format}
          shareabilityStatus={shareabilityStatus}
          customProps={{
            title: 'More',
            variant: 'outlined',
          }}
          startIcon={<MoreButtonIcon fontSize="small" />}
        />
      </ActionsSection>
    </TabHeader>
  )
}

const DocumentsSubPageSelector = memo(() => {
  const selectedSubPage = useSelectedSubPage()
  const setSelectedSubPage = useSetSelectedSubPage()

  return (
    <SubPageSelector>
      <Toggler<DocumentsTabSubPageKey>
        mode={selectedSubPage}
        modes={[OVERVIEW_SUB_PAGE, OPERATIONS_SUB_PAGE]}
        onChange={(newSelectedSubPage) => {
          setSelectedSubPage(newSelectedSubPage)
        }}
      />
    </SubPageSelector>
  )
})

const LEFT_SECTION_MIN_WIDTH = 240

const TabHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

const TextSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flex: '0 1 auto',
  minWidth: LEFT_SECTION_MIN_WIDTH,
  overflow: 'hidden',
}))

const TitleSuffix = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexShrink: 0,
}))

const TitleTooltip = styled(OverflowTooltip)({
  display: 'block',
  minWidth: 0,
  flex: '0 1 auto',
})

const TitleText = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

const VersionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
  flexShrink: 0,
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
}))

const ActionsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexShrink: 0,
  marginLeft: 'auto',
}))

const SearchInput = styled(SearchBar)({
  width: '200px',
})

const SubPageSelector = styled(Box)({
  borderRadius: 6,
})

const TitleTextSkeleton = styled(Skeleton)({
  width: 200,
})

const VersionTextSkeleton = styled(Skeleton)({
  width: 36,
})

const ActionsSkeleton = styled(Skeleton)({
  width: 130,
  height: 54,
})

const ActionsButton = styled(DocumentActionsButton)({
  margin: 0,
})

const MoreButtonIcon = styled(MoreVertIcon)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))
