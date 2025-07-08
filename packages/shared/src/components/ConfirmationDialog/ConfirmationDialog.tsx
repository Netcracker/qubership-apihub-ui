import type { FC } from 'react'
import { memo, useEffect } from 'react'
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import type { ButtonPropsColorOverrides } from '@mui/material/Button/Button'
import type { OverridableStringUnion } from '@mui/types'
import { DialogForm } from '../DialogForm'

const STYLE_DIALOG_TITLE = {
  fontSize: '13px',
  px: 1.5,
  py: 1.3,
}

const STYLE_DIALOG_CONTENT = {
  minWidth: 240,
  width: '100%',
  px: 1.5,
  pb: 1,
}

const STYLE_DIALOG_ACTIONS = {
  px: 1.5,
  py: 1.3,
}

export type ConfirmationDialogProps = {
  open: boolean
  title?: string
  message?: string
  loading?: boolean
  confirmButtonName?: string
  confirmButtonColor?: ButtonColor
  onConfirm?: () => void
  onCancel?: () => void
}

export const ConfirmationDialog: FC<ConfirmationDialogProps> = memo<ConfirmationDialogProps>(({
  loading,
  message,
  onConfirm,
  onCancel,
  open,
  title,
  confirmButtonName = 'Delete',
  confirmButtonColor = 'error',
}) => {
  useCloseOnSuccess(loading, onCancel)

  return (
    <DialogForm
      open={open}
      onClose={onCancel}
      maxWidth="xxs"
    >
      <DialogTitle
        sx={STYLE_DIALOG_TITLE}
      >
        {title}
      </DialogTitle>

      {message && (
        <DialogContent sx={STYLE_DIALOG_CONTENT}>
          <DialogContentText
            variant="body2"
            data-testid="ConfirmationDialogContent"
          >
            {message}
          </DialogContentText>
        </DialogContent>
      )}

      <DialogActions sx={STYLE_DIALOG_ACTIONS}>
        <LoadingButton
          variant="contained"
          size="extra-small"
          color={confirmButtonColor}
          loading={loading}
          onClick={onConfirm}
          data-testid={`${confirmButtonName}Button`}
        >
          {confirmButtonName}
        </LoadingButton>
        <Button
          variant="outlined"
          size="extra-small"
          disabled={loading}
          onClick={onCancel}
          data-testid="CancelButton"
        >
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})

function useCloseOnSuccess(
  loading?: boolean,
  onClose?: () => void,
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {loading === false && onClose?.()}, [loading])
}

type ButtonColor = OverridableStringUnion<
  'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  ButtonPropsColorOverrides
>
