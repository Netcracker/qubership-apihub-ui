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

import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import type { FC } from 'react'
import { memo, useEffect, useMemo, useState } from 'react'
import { useEvent } from 'react-use'
import { Controller, useForm } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'

import { SHOW_RENAME_FILE_DIALOG } from '../../../../../../EventBusProvider'
import { useRenameProjectFile } from './useRenameProjectFile'
import type { TreeProjectFile } from '@apihub/utils/trees'
import { DialogForm } from '@netcracker/qubership-apihub-ui-shared/components/DialogForm'

export const RenameFileDialog: FC = memo(() => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<TreeProjectFile>()

  useEvent(SHOW_RENAME_FILE_DIALOG, ({ detail: { file } }) => {
    setFile(file)
    setOpen(true)
  })

  const { handleSubmit, control, reset } = useForm<{ newFileId: string }>()

  const [renameProjectFile, isLoading] = useRenameProjectFile()

  useEffect(() => {
    !isLoading && setOpen(false)
  }, [isLoading])
  useEffect(() => {
    file && reset()
  }, [file, reset])

  const fileName = useMemo(() => {
    return file?.name?.substring(0, file?.name?.lastIndexOf('.'))
  }, [file])

  return (
    <DialogForm
      open={open}
      onClose={() => setOpen(false)}
      onSubmit={handleSubmit(({ newFileId }) =>
        renameProjectFile({
          fileId: file?.key ?? '',
          newFileId: rename(newFileId, file),
        }),
      )}
    >
      <DialogTitle>Rename File</DialogTitle>

      <DialogContent>
        <Controller
          name="newFileId"
          control={control}
          defaultValue={fileName}
          render={({ field }) => <TextField {...field} autoFocus required label="Name" />}
        />
      </DialogContent>

      <DialogActions>
        <LoadingButton variant="contained" type="submit" loading={isLoading}>
          Save
        </LoadingButton>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </DialogForm>
  )
})

function rename(newName?: string, file?: TreeProjectFile): string {
  if (file) {
    const { key, name } = file
    const nameParts = name.split('.')
    const extension = nameParts[nameParts?.length - 1] ?? ''
    const newId = `${key?.substring(0, key.lastIndexOf('/') + 1)}${newName}`
    return `${newId}.${extension}`
  }
  return ''
}
