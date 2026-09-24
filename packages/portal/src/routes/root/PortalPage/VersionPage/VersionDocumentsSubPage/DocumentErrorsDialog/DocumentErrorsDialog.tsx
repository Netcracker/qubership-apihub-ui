import type { ShowDocumentErrorsDetail } from '@apihub/routes/EventBusProvider'
import { SHOW_DOCUMENT_ERRORS_DIALOG } from '@apihub/routes/EventBusProvider'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { CustomTableHeadCell } from '@netcracker/qubership-apihub-ui-shared/components/CustomTableHeadCell'
import { NAVIGATION_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import type { PopupProps } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import { PopupDelegate } from '@netcracker/qubership-apihub-ui-shared/components/PopupDelegate'
import type {
  VersionNotification,
  VersionNotifications,
} from '@netcracker/qubership-apihub-ui-shared/entities/version-notifications'
import { useVersionNotifications } from '@netcracker/qubership-apihub-ui-shared/hooks/notifications/useVersionNotifications'
import { CloseIcon } from '@netcracker/qubership-apihub-ui-shared/icons/CloseIcon'
import { DownloadIconMui } from '@netcracker/qubership-apihub-ui-shared/icons/DownloadIconMui'
import { type FC, memo, useCallback, useMemo, useState } from 'react'

import { useDocuments } from '../../useDocuments'
import type { DocumentSelection } from './InvalidDocumentSelector'
import { EMPTY_DOCUMENT_OPTION, InvalidDocumentSelector } from './InvalidDocumentSelector'
import { NotificationSeverityMarker } from './NotificationSeverityMarker'
import { useExportDocumentErrors } from './useExportDocumentErrors'

export const DocumentErrorsDialog: FC = memo(() => {
  return (
    <PopupDelegate
      type={SHOW_DOCUMENT_ERRORS_DIALOG}
      render={props => <DocumentErrorsPopup {...props} />}
    />
  )
})

DocumentErrorsDialog.displayName = 'DocumentErrorsDialog'

const DIALOG_PAPER_STYLE = {
  margin: 3,
  width: 'calc(100% - 48px)',
  maxWidth: 'calc(100% - 48px)',
  height: 'calc(100% - 48px)',
  maxHeight: 'calc(100% - 48px)',
} as const

function toFirstLine(message: string): string {
  return message.split('\n', 1)[0] ?? message
}

const DocumentErrorsPopup: FC<PopupProps> = memo<PopupProps>(({ open, setOpen, detail }) => {
  const {
    packageKey,
    versionKey,
    documentId,
    documentTitle,
  } = detail as ShowDocumentErrorsDetail

  const onClose = useCallback(() => setOpen(false), [setOpen])

  const [picked, setPicked] = useState<DocumentSelection>()
  const selected = picked ?? documentId
  const isEmptySelected = selected === EMPTY_DOCUMENT_OPTION

  const notificationsScope = useMemo(
    () => (isEmptySelected ? { emptyDocumentId: true } : { documentId: selected }),
    [isEmptySelected, selected],
  )

  const { documents } = useDocuments({
    packageKey: packageKey,
    versionKey: versionKey,
    enabled: true,
  })

  const invalidDocuments = useMemo(
    () => documents.filter(({ hasErrors }) => hasErrors),
    [documents],
  )

  const { notifications, isLoading, error } = useVersionNotifications({
    packageKey: packageKey,
    versionKey: versionKey,
    ...notificationsScope,
  })

  const [exportDocumentErrors, isExporting] = useExportDocumentErrors()

  const handleExport = useCallback(() => {
    exportDocumentErrors({
      packageKey: packageKey,
      versionKey: versionKey,
      ...notificationsScope,
    })
  }, [exportDocumentErrors, notificationsScope, packageKey, versionKey])

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: DIALOG_PAPER_STYLE }}
    >
      <StyledDialogTitle>
        <TitleRow>
          <Typography variant="h5" data-testid="DocumentErrorsTitle">
            Document Errors
          </Typography>
          <CloseIconButton
            data-testid="CloseDocumentErrorsButton"
            size="small"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </CloseIconButton>
        </TitleRow>
        <SubtitleRow>
          <InvalidDocumentSelector
            options={invalidDocuments}
            selected={selected}
            fallbackTitle={documentTitle}
            onSelect={setPicked}
          />
          <ExportButton
            data-testid="ExportDocumentErrorsButton"
            size="small"
            variant="outlined"
            loading={isExporting}
            startIcon={<DownloadIconMui fontSize="small" />}
            onClick={handleExport}
          >
            Export
          </ExportButton>
        </SubtitleRow>
      </StyledDialogTitle>

      <Divider />

      <StyledDialogContent>
        <DocumentErrorsContent
          notifications={notifications}
          isLoading={isLoading}
          error={error}
        />
      </StyledDialogContent>
    </Dialog>
  )
})

DocumentErrorsPopup.displayName = 'DocumentErrorsPopup'

type DocumentErrorsContentProps = {
  notifications: VersionNotifications
  isLoading: boolean
  error: Error | null
}

const DocumentErrorsContent: FC<DocumentErrorsContentProps> = memo<DocumentErrorsContentProps>(({
  notifications,
  isLoading,
  error,
}) => {
  const [selectedId, setSelectedId] = useState<string>()

  const selected: VersionNotification | undefined =
    notifications.find(({ id }) => id === selectedId) ?? notifications[0]

  if (isLoading) {
    return (
      <PaddedBox data-testid="DocumentErrorsSkeleton">
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
      </PaddedBox>
    )
  }

  if (error) {
    return (
      <Placeholder
        invisible={false}
        area={NAVIGATION_PLACEHOLDER_AREA}
        message="Failed to load the error details"
      />
    )
  }

  if (!selected) {
    return (
      <Placeholder
        invisible={false}
        area={NAVIGATION_PLACEHOLDER_AREA}
        message="No error details found"
      />
    )
  }

  return (
    <SplitLayout>
      <TablePane>
        <Table stickyHeader data-testid="DocumentErrorsTable">
          <TableHead>
            <TableRow>
              <TypeHeadCell>
                <CustomTableHeadCell title="Type" />
              </TypeHeadCell>
              <CategoryHeadCell>
                <CustomTableHeadCell title="Category" />
              </CategoryHeadCell>
              <TableCell>
                <CustomTableHeadCell title="Message" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notifications.map(notification => (
              <NotificationRow
                key={notification.id}
                hover
                selected={notification.id === selected.id}
                onClick={() => setSelectedId(notification.id)}
                data-testid="DocumentErrorsTableRow"
              >
                <TableCell>
                  <NotificationSeverityMarker severity={notification.severity} />
                </TableCell>
                <TableCell>
                  <Typography variant="body2">
                    {notification.category}
                  </Typography>
                </TableCell>
                <MessageCell>
                  <Typography variant="body2" noWrap>
                    {toFirstLine(notification.message)}
                  </Typography>
                </MessageCell>
              </NotificationRow>
            ))}
          </TableBody>
        </Table>
      </TablePane>

      <MessagePane data-testid="DocumentErrorsMessage">
        <MessageText>{selected.message}</MessageText>
      </MessagePane>
    </SplitLayout>
  )
})

DocumentErrorsContent.displayName = 'DocumentErrorsContent'

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  padding: theme.spacing(1.5, 2.5),
}))

const TitleRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
})

const SubtitleRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  minHeight: 32,
})

const CloseIconButton = styled(IconButton)({
  padding: 0,
  marginLeft: 'auto',
})

const ExportButton = styled(LoadingButton)({
  marginLeft: 'auto',
  flexShrink: 0,
})

const StyledDialogContent = styled(DialogContent)({
  padding: 0,
  overflow: 'hidden',
  width: '100%',
  flex: 1,
  minHeight: 0,
})

const SplitLayout = styled(Box)({
  display: 'flex',
  height: '100%',
})

const TablePane = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  overflow: 'auto',
  borderRight: `1px solid ${theme.palette.divider}`,
}))

const TypeHeadCell = styled(TableCell)({
  width: 64,
})

const CategoryHeadCell = styled(TableCell)({
  width: 200,
})

const NotificationRow = styled(TableRow)({
  cursor: 'pointer',
})

const MessageCell = styled(TableCell)({
  maxWidth: 0,
})

const MessagePane = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  overflow: 'auto',
  padding: theme.spacing(2, 2.5),
}))

const PaddedBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 2.5),
}))

const MessageText = styled(Typography)({
  fontFamily: 'monospace',
  fontSize: 13,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  lineHeight: 1.6,
})
