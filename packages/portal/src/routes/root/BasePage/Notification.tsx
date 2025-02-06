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

import type { FC, ReactElement } from 'react'
import * as React from 'react'
import { memo, useState } from 'react'
import { useEvent } from 'react-use'
import type { ButtonType, LinkType, NotificationDetail } from '../../EventBusProvider'
import {
  SHOW_ERROR_NOTIFICATION,
  SHOW_INFO_NOTIFICATION,
  SHOW_SUCCESS_NOTIFICATION,
  SHOW_WARNING_NOTIFICATION,
  useEventBus,
} from '../../EventBusProvider'
import { Box, Button, IconButton, Link, Slide, Snackbar, SnackbarContent, Typography } from '@mui/material'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'
import InfoIcon from '@mui/icons-material/Info'
import { YellowWarningIcon } from '@netcracker/qubership-apihub-ui-shared/icons/WarningIcon'

export const Notification: FC = memo(() => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [link, setLink] = useState<LinkType>()
  const [title, setTitle] = useState('')
  const [type, setType] = useState<NotificationType>(SUCCESS_NOTIFICATION_TYPE)
  const [button, setButton] = useState<ButtonType>()

  useEvent(SHOW_SUCCESS_NOTIFICATION, ({ detail: { title = 'Success', message, link, button } }) => {
    setType(SUCCESS_NOTIFICATION_TYPE)
    setTitle(title)
    setMessage(message)
    setLink(link)
    setOpen(true)
    setButton(button)
  })

  useEvent(SHOW_ERROR_NOTIFICATION, ({
    detail: {
      title = 'Error',
      message = 'Something went wrong',
      link,
      button,
    },
  }) => {
    setType(ERROR_NOTIFICATION_TYPE)
    setTitle(title)
    setMessage(message)
    setLink(link)
    setOpen(true)
    setButton(button)
  })

  useEvent(SHOW_INFO_NOTIFICATION, ({ detail: { message, link, button } }) => {
    setType(INFO_NOTIFICATION_TYPE)
    setTitle('')
    setMessage(message)
    setLink(link)
    setOpen(true)
    setButton(button)
  })

  useEvent(SHOW_WARNING_NOTIFICATION, ({ detail: { message, link, button } }) => {
    setType(WARNING_NOTIFICATION_TYPE)
    setTitle('')
    setMessage(message)
    setLink(link)
    setOpen(true)
    setButton(button)
  })

  if (!open) {
    return null
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={(props) => <Slide {...props} direction="up"/>}
      onClose={() => setOpen(false)}
      data-testid="Snackbar"
    >
      <SnackbarContent
        message={
          <Box sx={{ display: 'flex' }}>
            {NOTIFICATION_TYPE_ICON_MAP[type]}
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1, pr: 3, overflow: 'hidden' }}>
              <Typography variant="subtitle1">{title}</Typography>
              <Typography
                variant="body2"
                sx={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
              >
                {message}
              </Typography>
              {link && <Link variant="subtitle2" href={link.href}>{link.name}</Link>}
              {button &&
                <Button
                  sx={{ p: 0, mr: 'auto', minWidth: 0, display: 'inline-block' }}
                  onClick={() => {
                    button.onClick()
                    setOpen(false)
                  }}
                >
                  {button.title}
                </Button>
              }
            </Box>

            <IconButton
              sx={{ position: 'absolute', right: 8, top: 8, color: '#353C4E' }}
              onClick={() => setOpen(false)}
            >
              <CloseOutlinedIcon fontSize="small"/>
            </IconButton>
          </Box>
        }
      />
    </Snackbar>
  )
})

const SUCCESS_NOTIFICATION_TYPE = 'success'
const ERROR_NOTIFICATION_TYPE = 'error'
const INFO_NOTIFICATION_TYPE = 'info'
const WARNING_NOTIFICATION_TYPE = 'warning'

export type NotificationType =
  | typeof SUCCESS_NOTIFICATION_TYPE
  | typeof ERROR_NOTIFICATION_TYPE
  | typeof INFO_NOTIFICATION_TYPE
  | typeof WARNING_NOTIFICATION_TYPE

export function useShowSuccessNotification(): (detail: NotificationDetail) => void {
  const { showSuccessNotification } = useEventBus()
  return (detail: NotificationDetail) => showSuccessNotification(detail)
}

export function useShowErrorNotification(): (detail: NotificationDetail) => void {
  const { showErrorNotification } = useEventBus()
  return (detail: NotificationDetail) => showErrorNotification(detail)
}

export function useShowInfoNotification(): (detail: NotificationDetail) => void {
  const { showInfoNotification } = useEventBus()
  return (detail: NotificationDetail) => showInfoNotification(detail)
}

export function useShowWarningNotification(): (detail: NotificationDetail) => void {
  const { showWarningNotification } = useEventBus()
  return (detail: NotificationDetail) => showWarningNotification(detail)
}

const NOTIFICATION_TYPE_ICON_MAP: Record<NotificationType, ReactElement> = {
  [SUCCESS_NOTIFICATION_TYPE]: <CheckCircleOutlinedIcon color="secondary" data-testid="SuccessIcon"/>,
  [ERROR_NOTIFICATION_TYPE]: <ErrorOutlinedIcon color="error" data-testid="ErrorIcon"/>,
  [INFO_NOTIFICATION_TYPE]: <InfoIcon color="primary" data-testid="InfoIcon"/>,
  [WARNING_NOTIFICATION_TYPE]: <YellowWarningIcon/>,
}
