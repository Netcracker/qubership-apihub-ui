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

import type { Document } from '@apihub/entities/documents'
import { BodyCard } from '@netcracker/qubership-apihub-ui-shared/components/BodyCard'
import { CONTENT_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import type { FC } from 'react'
import { memo, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePackageKind } from '../../usePackageKind'
import { usePackageParamsWithRef } from '../../usePackageParamsWithRef'
import { useDocument } from '../useDocument'
// TODO 23.10.25 // Should be shared!
import { SelectedDocumentContext } from '../VersionDocumentsSubPage/SelectedDocumentProvider'

export const AiAgentCard: FC = memo(() => {
  const { documentId } = useParams()
  const [packageKind] = usePackageKind()
  const isDashboard = packageKind === DASHBOARD_KIND
  const [docPackageKey, docPackageVersion] = usePackageParamsWithRef()

  const [searchValue, setSearchValue] = useState<string>('')

  const [document, isLoading] = useDocument(docPackageKey, docPackageVersion, documentId)

  const filteredDocument = useMemo(() => {
    return {
      ...document,
      operations: document.operations.filter(operation => {
        const lowerCaseTitle = operation.title.toLowerCase()
        const lowerCaseValue = searchValue.toLowerCase()
        return lowerCaseTitle.includes(lowerCaseValue) || lowerCaseValue.includes(lowerCaseTitle)
      }),
    } as Document
  }, [document, searchValue])
  const { key, format, title, type, version, slug } = document

  if (isDashboard) {
    return (
      <Placeholder
        invisible={false}
        area={CONTENT_PLACEHOLDER_AREA}
        message="AI assistant is available only for packages now"
      />
    )
  }

  if (!documentId) {
    return (
      <Placeholder
        invisible={!!documentId}
        area={CONTENT_PLACEHOLDER_AREA}
        message="No document selected"
      />
    )
  }

  return (
    <SelectedDocumentContext.Provider value={filteredDocument}>
      <BodyCard
        header={<>Gen AI Recommendations</>}
        body={<>Tab Component</>}
      />
    </SelectedDocumentContext.Provider>
  )
})
