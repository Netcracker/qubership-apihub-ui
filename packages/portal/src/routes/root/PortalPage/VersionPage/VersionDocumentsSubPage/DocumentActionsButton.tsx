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
import type { ExportSettingsPopupDetail, NotificationDetail } from '@apihub/routes/EventBusProvider'
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
import type { DocumentPreviewDetail } from '../../../../NavigationProvider'
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

type ActionParams = {
  packageId: string
  versionId: string
  slug: Key
  ref?: string
  protocol: string | undefined
  host: string | undefined
  navigateToDocumentPreview: (detail?: DocumentPreviewDetail) => void
  downloadPublishedDocument: () => void
  showExportSettingsDialog: (detail: ExportSettingsPopupDetail) => void
  getSharedKey: () => Promise<{ data?: Key }>
  copyToClipboard: (text: string) => void
  showNotification: (detail: NotificationDetail) => void
  createTemplate: (key?: Key) => string
}

type MenuItemConfig = {
  id: string
  label: string
  condition: (isOpenApiSpec: boolean, isSharingAvailable: boolean) => boolean
  action: (params: ActionParams) => void
}

const DOCUMENT_MENU_CONFIG: MenuItemConfig[] = [
  {
    id: 'preview',
    label: 'Preview',
    condition: (isOpenApiSpec) => isOpenApiSpec,
    action: ({ navigateToDocumentPreview, packageId, versionId, slug, ref }) => {
      navigateToDocumentPreview({
        packageKey: packageId,
        versionKey: versionId,
        documentKey: slug,
        search: {
          [REF_SEARCH_PARAM]: { value: ref },
        },
      })
    },
  },
  {
    id: 'export',
    label: 'Export',
    condition: (isOpenApiSpec) => isOpenApiSpec,
    action: ({ showExportSettingsDialog, packageId, versionId, slug }) => {
      showExportSettingsDialog({
        exportedEntity: ExportedEntityKind.REST_DOCUMENT,
        packageId: packageId,
        version: versionId,
        documentId: slug,
      })
    },
  },
  {
    id: 'download',
    label: 'Download',
    condition: (isOpenApiSpec) => !isOpenApiSpec,
    action: ({ downloadPublishedDocument }) => {
      downloadPublishedDocument()
    },
  },
  {
    id: 'copy-public-link',
    label: 'Copy public link to source',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    condition: (_, isSharingAvailable) => isSharingAvailable,
    action: ({ getSharedKey, protocol, host, copyToClipboard, showNotification }) => {
      getSharedKey().then(({ data }) => {
        if (data) {
          copyToClipboard(`${protocol}//${host}/api/v2/sharedFiles/${data}`)
          showNotification({ message: 'Link copied' })
        }
      })
    },
  },
  {
    id: 'copy-page-template',
    label: 'Copy page template',
    condition: (isOpenApiSpec, isSharingAvailable) => isOpenApiSpec && isSharingAvailable,
    action: ({ getSharedKey, createTemplate, copyToClipboard, showNotification }) => {
      getSharedKey().then(({ data }) => {
        if (data) {
          copyToClipboard(createTemplate(data))
          showNotification({ message: 'Template copied' })
        }
      })
    },
  },
]

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

  const actionParams: ActionParams = {
    packageId: packageId!,
    versionId: versionId!,
    slug: slug,
    ref: ref,
    protocol: protocol,
    host: host,
    navigateToDocumentPreview: navigateToDocumentPreview,
    downloadPublishedDocument: downloadPublishedDocument,
    showExportSettingsDialog: showExportSettingsDialog,
    getSharedKey: getSharedKey,
    copyToClipboard: copyToClipboard,
    showNotification: showNotification,
    createTemplate: createTemplate,
  }

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
      {DOCUMENT_MENU_CONFIG.map((menuItem) => (
        menuItem.condition(isOpenApiSpecification, isSharingAvailable) &&
        <MenuItem
          key={menuItem.id}
          onClick={() => menuItem.action(actionParams)}
          data-testid={menuItem.id === 'download' ? 'DownloadMenuItem' : undefined}
        >
          {menuItem.label}
        </MenuItem>
      ))}
    </MenuButton>
  )
})
