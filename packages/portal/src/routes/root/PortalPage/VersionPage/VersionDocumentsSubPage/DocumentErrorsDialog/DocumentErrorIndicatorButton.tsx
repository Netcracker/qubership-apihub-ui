import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ErrorIndicator } from '@netcracker/qubership-apihub-ui-shared/components/ErrorIndicators/ErrorIndicator'
import type { Key, PackageKey, VersionKey } from '@netcracker/qubership-apihub-ui-shared/entities/keys'
import { PUBLICATION_ERROR_MESSAGES } from '@netcracker/qubership-apihub-ui-shared/utils/publicationErrorMessages'
import { type FC, memo, type MouseEvent, useCallback } from 'react'

import { useEventBus } from '@apihub/routes/EventBusProvider'

export type DocumentErrorIndicatorButtonProps = Readonly<{
  packageKey?: PackageKey
  versionKey?: VersionKey
  documentId: Key
  documentTitle: string
}>

export const DocumentErrorIndicatorButton: FC<DocumentErrorIndicatorButtonProps> = memo<DocumentErrorIndicatorButtonProps>(({
  packageKey,
  versionKey,
  documentId,
  documentTitle,
}) => {
  const { showDocumentErrorsDialog } = useEventBus()

  const stopPropagation = useCallback((event: MouseEvent) => {
    event.stopPropagation()
  }, [])

  const handleClick = useCallback((event: MouseEvent) => {
    stopPropagation(event)
    if (!packageKey || !versionKey) {
      return
    }
    showDocumentErrorsDialog({
      packageKey: packageKey,
      versionKey: versionKey,
      documentId: documentId,
      documentTitle: documentTitle,
    })
  }, [
    documentId,
    documentTitle,
    packageKey,
    showDocumentErrorsDialog,
    stopPropagation,
    versionKey,
  ])

  return (
    <IndicatorButton
      size="small"
      aria-label="Show document errors"
      onClick={handleClick}
      onMouseDown={stopPropagation}
      data-testid="DocumentErrorIndicatorButton"
    >
      <ErrorIndicator
        hasProblems
        tabIndex={-1}
        tooltip={PUBLICATION_ERROR_MESSAGES.document.itemError}
      />
    </IndicatorButton>
  )
})

DocumentErrorIndicatorButton.displayName = 'DocumentErrorIndicatorButton'

const IndicatorButton = styled(IconButton)({
  padding: 0,
  marginLeft: 8,
  width: 24,
  height: 24,
  flexShrink: 0,
})
