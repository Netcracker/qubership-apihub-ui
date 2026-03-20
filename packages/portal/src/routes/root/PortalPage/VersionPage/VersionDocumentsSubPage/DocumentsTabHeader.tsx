/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Key } from '@apihub/entities/keys'
import type { Document } from '@apihub/entities/documents'
import type { DocumentsTabSubPageKey } from '@apihub/routes/root/PortalPage/VersionPage/OpenApiViewer/OpenApiViewer'
import { OPERATIONS_SUB_PAGE, OVERVIEW_SUB_PAGE } from '@apihub/routes/root/PortalPage/VersionPage/OpenApiViewer/OpenApiViewer'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Skeleton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SearchBar } from '@netcracker/qubership-apihub-ui-shared/components/SearchBar'
import { OverflowTooltip } from '@netcracker/qubership-apihub-ui-shared/components/OverflowTooltip'
import { Toggler } from '@netcracker/qubership-apihub-ui-shared/components/Toggler'
import { DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION } from '@netcracker/qubership-apihub-ui-shared/entities/package-permissions'
import type { FileFormat } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { isAsyncApiSpecType, isExportableSpecType, isGraphQlSpecType, isOpenApiSpecType, type SpecType } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import type { Dispatch, FC, SetStateAction } from 'react'
import { memo, useCallback, useMemo } from 'react'
import { useCurrentPackage } from '@apihub/components/CurrentPackageProvider'
import { useVersionWithRevision } from '../../../useVersionWithRevision'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { DocumentActionsButton } from './DocumentActionsButton'
import { useSelectedSubPage, useSetSelectedSubPage } from './SelectedSubPageProvider'
import { ShareabilityDropdown } from './ShareabilityDropdown'
import { ShareabilityMarker } from './ShareabilityMarker'
import { useUpdateDocumentShareability } from './useUpdateDocumentShareability'
import type { ShareabilityStatuses } from '@netcracker/qubership-apihub-api-processor'

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

  const selectedSubPage = useSelectedSubPage()

  const [docPackageKey, docPackageVersion] = usePackageParamsWithRef()
  const { fullVersion } = useVersionWithRevision(docPackageVersion, docPackageKey)

  const currentPackage = useCurrentPackage()
  const hasShareabilityPermission = useMemo(
    () => !!currentPackage?.permissions?.includes(DOCUMENT_SHAREABILITY_MANAGEMENT_PERMISSION),
    [currentPackage?.permissions],
  )

  const updateShareability = useUpdateDocumentShareability(
    docPackageKey ?? '',
    fullVersion ?? '',
    slug,
  )

  const handleShareabilityChange = useCallback(
    (value: ShareabilityStatuses) => updateShareability(value),
    [updateShareability],
  )

  const shareabilityStatus = document.shareabilityStatus

  if (isLoading) {
    return (
      <HeaderLayout>
        <HeaderTextSection>
          <TitleTextSkeleton />
          <VersionTextSkeleton />
        </HeaderTextSection>
        <HeaderActionSkeleton />
      </HeaderLayout>
    )
  }

  return (
    <HeaderLayout>
      <HeaderTextSection>
        <HeaderTitleRow data-testid="DocumentToolbarTitle">
          <DocumentTitleTooltip title={title}>
            <TitleText variant="inherit">
              {title}
            </TitleText>
          </DocumentTitleTooltip>
          <HeaderSuffix>
            <VersionText variant="body2">
              {version}
            </VersionText>
            {isExportableSpecType(type) && shareabilityStatus && (
              hasShareabilityPermission
                ? <ShareabilityDropdown
                    value={shareabilityStatus}
                    onChange={handleShareabilityChange}
                  />
                : <ShareabilityMarker value={shareabilityStatus} />
            )}
          </HeaderSuffix>
        </HeaderTitleRow>
      </HeaderTextSection>
      <HeaderActionSection>
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
        <DocumentActionsButton
          slug={slug}
          docType={type}
          format={format}
          shareabilityStatus={shareabilityStatus}
          customProps={{
            title: 'More',
            variant: 'outlined',
          }}
          startIcon={<MoreButtonIcon fontSize="small"/>}
        />
      </HeaderActionSection>
    </HeaderLayout>
  )
}

const TITLE_MIN_WIDTH = 120
const VERSION_GROUP_MIN_WIDTH = 120
const TITLE_SECTION_MIN_WIDTH = TITLE_MIN_WIDTH + VERSION_GROUP_MIN_WIDTH

const HeaderLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `minmax(${TITLE_SECTION_MIN_WIDTH}px, 1fr) auto`,
  alignItems: 'center',
  overflowX: 'auto',
  width: '100%',
  gap: theme.spacing(1),
  minWidth: 0,
}))

const HeaderTextSection = styled(Box)(({ theme }) => ({
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
}))

const HeaderTitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  minWidth: 0,
}))

const DocumentTitleTooltip = styled(OverflowTooltip)({
  display: 'block',
  minWidth: 0,
  flex: 1,
})

const TitleText = styled(Typography)({
  minWidth: TITLE_MIN_WIDTH,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

const VersionText = styled(Typography)({
  color: 'rgba(0, 0, 0, 0.6)',
  whiteSpace: 'nowrap',
  flexShrink: 0,
})

const HeaderSuffix = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexShrink: 0,
}))

const HeaderActionSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexShrink: 0,
}))

const SearchInput = styled(SearchBar)({
  width: '200px',
})

const SubPageSelector = styled(Box)({
  backgroundColor: '#F2F3F5',
  borderRadius: 6,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  overflow: 'hidden',
  width: 'max-content',
})

const TitleTextSkeleton = styled(Skeleton)({
  width: '200px',
})

const VersionTextSkeleton = styled(Skeleton)({
  width: '100px',
})

const HeaderActionSkeleton = styled(Skeleton)({
  width: '170px',
})

const MoreButtonIcon = styled(MoreVertIcon)({
  color: '#626D82',
})
