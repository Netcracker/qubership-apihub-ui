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

import type { FC } from 'react'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { DocumentPreviewContentBody } from './DocumentPreviewContentBody'
import { usePublishedDocumentRaw } from '../usePublishedDocumentRaw'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'

export const DocumentPreviewCard: FC = memo(() => {
  const { documentId } = useParams()
  const [docPackageKey, docPackageVersion] = usePackageParamsWithRef()

  const [apiDescriptionDocument, isLoading] = usePublishedDocumentRaw({
    packageKey: docPackageKey,
    versionKey: docPackageVersion,
    slug: documentId!,
    enabled: !!docPackageKey,
  })

  return (
    <Box height="100%" overflow="scroll">
      <DocumentPreviewContentBody
        apiDescriptionDocument={apiDescriptionDocument}
        isLoading={isLoading}
      />
    </Box>
  )
})
