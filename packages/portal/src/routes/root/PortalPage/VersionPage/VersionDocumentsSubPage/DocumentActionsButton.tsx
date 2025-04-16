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

import { ExportedEntityKind } from '@apihub/components/ExportSettingsDialog/api/useExport'
import { useEventBus } from '@apihub/routes/EventBusProvider'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import type { SxProps } from '@mui/material'
import { MenuItem } from '@mui/material'
import type { Theme } from '@mui/material/styles'
import type { MenuButtonProps } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/MenuButton'
import { MenuButton } from '@netcracker/qubership-apihub-ui-shared/components/Buttons/MenuButton'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import type { FileFormat } from '@netcracker/qubership-apihub-ui-shared/utils/files'
import {
  MD_FILE_FORMAT,
} from '@netcracker/qubership-apihub-ui-shared/utils/files'
import { REF_SEARCH_PARAM } from '@netcracker/qubership-apihub-ui-shared/utils/search-params'
import type { SpecType } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import { isOpenApiSpecType, UNKNOWN_SPEC_TYPE } from '@netcracker/qubership-apihub-ui-shared/utils/specs'
import type { FC, ReactNode } from 'react'
import { memo, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCopyToClipboard, useLocation } from 'react-use'
import { useNavigation } from '../../../../NavigationProvider'
import { useShowSuccessNotification } from '../../../BasePage/Notification'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useDownloadPublishedDocument } from '../useDownloadPublishedDocument'
import { useGetSharedKey } from './useGetSharedKey'

export type DocumentActionsButtonProps = {
  slug: Key
  docType: SpecType
  format: FileFormat
  icon?: ReactNode
  openedIcon?: ReactNode
  sx?: SxProps<Theme> | undefined
  customProps?: MenuButtonProps
}

const DEFAULT_ACTION_BUTTON_STYLE = {
  ml: 1,
  visibility: 'visible',
  pr: '20px',
  pl: '20px',
}

export const DocumentActionsButton: FC<DocumentActionsButtonProps> = memo<DocumentActionsButtonProps>((props) => {
  const { slug, docType, format, sx, customProps, openedIcon, icon } = props

  const { packageId, versionId } = useParams()
  const ref = useSearchParam(REF_SEARCH_PARAM)

  const { host, protocol } = useLocation()

  const getSharedKey = useGetSharedKey(slug, ref)

  const [, copyToClipboard] = useCopyToClipboard()
  const [docPackageKey, docPackageVersionKey] = usePackageParamsWithRef()
  const [downloadPublishedDocument] = useDownloadPublishedDocument({
    packageKey: docPackageKey,
    versionKey: docPackageVersionKey,
    slug: slug,
  })
  const showNotification = useShowSuccessNotification()
  const [actionMenuOpen, setActionMenuOpen] = useState(false)

  const { navigateToDocumentPreview } = useNavigation()

  const { showExportSettingsDialog } = useEventBus()

  const createTemplate = useCallback((key?: Key): string => `
    <script src="${protocol}//${host}/portal/apispec-view/index.js"></script>
    <apispec-view
      apiDescriptionUrl="${protocol}//${host}/api/v2/sharedFiles/${key}"
      router="hash"
      layout="stacked"
      hideExport>
    </apispec-view>
  `, [host, protocol])

  const isSharingAvailable = docType !== UNKNOWN_SPEC_TYPE || format === MD_FILE_FORMAT
  const isOpenApiSpecification = isOpenApiSpecType(docType)

  return (
    <MenuButton
      sx={sx ?? DEFAULT_ACTION_BUTTON_STYLE}
      icon={(
        actionMenuOpen
          ? (openedIcon ?? icon ?? <KeyboardArrowUpOutlinedIcon fontSize="small" />)
          : (icon ?? <KeyboardArrowDownOutlinedIcon fontSize="small" />)
      )}
      onClick={event => {
        event.stopPropagation()
        setActionMenuOpen(prev => !prev)
      }}
      onItemClick={event => event.stopPropagation()}
      {...customProps}
      data-testid="DocumentActionsButton"
    >
      {isOpenApiSpecification && (
        <MenuItem
          onClick={() => navigateToDocumentPreview({
            packageKey: packageId!,
            versionKey: versionId!,
            documentKey: slug,
            search: {
              [REF_SEARCH_PARAM]: { value: ref ?? '' },
            },
          })}
        >
          Preview
        </MenuItem>
      )}
      {isOpenApiSpecification ? (
        <MenuItem
          onClick={() => {
            showExportSettingsDialog({
              exportedEntity: ExportedEntityKind.REST_DOCUMENT,
              packageId: packageId!,
              version: versionId!,
              documentId: slug,
            })
          }}
        >
          Export
        </MenuItem>
      ) : (
        <MenuItem
          onClick={() => downloadPublishedDocument()}
          data-testid="DownloadMenuItem"
        >
          Download
        </MenuItem>
      )}
      {isSharingAvailable && (
        <MenuItem
          onClick={() => {
            getSharedKey().then(({ data }) => {
              if (data) {
                copyToClipboard(`${protocol}//${host}/api/v2/sharedFiles/${data}`)
                showNotification({ message: 'Link copied' })
              }
            })
          }}
        >
          Copy public link to source
        </MenuItem>
      )}
      {isOpenApiSpecification && isSharingAvailable && (
        <MenuItem
          onClick={() => {
            getSharedKey().then(({ data }) => {
              if (data) {
                copyToClipboard(createTemplate(data))
                showNotification({ message: 'Template copied' })
              }
            })
          }}
        >
          Copy page template
        </MenuItem>
      )}
    </MenuButton>
  )
})
