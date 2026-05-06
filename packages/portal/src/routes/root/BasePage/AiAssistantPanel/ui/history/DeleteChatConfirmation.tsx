import { ConfirmationDialog } from '@netcracker/qubership-apihub-ui-shared/components/ConfirmationDialog/ConfirmationDialog'
import type { FC } from 'react'
import { memo } from 'react'

export type DeleteChatConfirmationProps = {
  open: boolean
  loading: boolean
  chatTitle?: string
  onConfirm: () => void
  onCancel: () => void
}

export const DeleteChatConfirmation: FC<DeleteChatConfirmationProps> = memo(({
  open,
  loading,
  chatTitle,
  onConfirm,
  onCancel,
}) => {
  const title = chatTitle?.trim() ? chatTitle.trim() : 'this chat'

  return (
    <ConfirmationDialog
      open={open}
      title="Delete the chat?"
      message={`Chat "${title}" will be permanently deleted.`}
      loading={loading}
      confirmButtonName="Delete"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  )
})
