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

import { ButtonBase, IconButton, TextField, Typography } from '@mui/material'
import { FolderIcon } from '@netcracker/qubership-apihub-ui-shared/icons/FolderIcon'
import { UploadImageIcon } from '@netcracker/qubership-apihub-ui-shared/icons/UploadImageIcon'
import type { FC } from 'react'
import { memo, useCallback, useState } from 'react'
import type { RefCallBack } from 'react-hook-form/dist/types'

export type ImageUploadingProps = Readonly<{
  title: string
  imageUrl?: string
  inputFileRef?: RefCallBack
  onChange: (value: string | undefined) => void
  isTextField?: boolean
}>

export const ImageUploading: FC<ImageUploadingProps> = memo<ImageUploadingProps>(({
  title,
  imageUrl,
  inputFileRef,
  onChange,
  isTextField,
}) => {
  const [imageName, setImageName] = useState<string>()

  const setImage = useCallback((newImage: string) => {
    if (imageUrl) {
      onChange('')
    }
    onChange(newImage)
  }, [imageUrl, onChange])

  return (
    <div>
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        value=""
        onChange={(event) => {
          const newImage = event.target?.files?.[0]
          if (newImage) {
            setImageName(newImage?.name)
            setImage(URL.createObjectURL(newImage))
          }
        }}
      />
      {isTextField
        ? (
          <ButtonBase
            htmlFor="avatar-image-upload"
            sx={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
            component="label"
            onClick={(event) => {
              if (imageUrl) {
                event.preventDefault()
                setImageName('')
                onChange(undefined)
              }
            }}
          >
            <TextField
              value={imageName}
              sx={{
                pointerEvents: 'none',
              }}
              InputLabelProps={{ shrink: !!imageUrl }}
              label={title}
              InputProps={{ endAdornment: <FolderIcon color="#353C4E" /> }}
            />
          </ButtonBase>
        )
        : (
          <label htmlFor="avatar-image-upload">
            <Typography noWrap variant="subtitle2">{title}</Typography>
            <IconButton
              color="primary"
              component="span"
              onClick={(event) => {
                if (imageUrl) {
                  event.preventDefault()
                  onChange('')
                }
              }}
            >
              {imageUrl
                ? (
                  <img
                    style={{
                      height: '44px',
                      width: '44px',
                    }}
                    alt={title ?? 'Logo'}
                    src={imageUrl}
                  />
                )
                : <UploadImageIcon />}
            </IconButton>
          </label>
        )}
    </div>
  )
})
