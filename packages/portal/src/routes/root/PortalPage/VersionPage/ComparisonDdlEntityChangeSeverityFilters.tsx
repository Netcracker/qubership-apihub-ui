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

import { useComparedDdlContracts } from '@apihub/api-hooks/InternalDocuments/useComparedDdlContracts'
import {
  useIsApiDiffResultLoading,
  useSetApiDiffResult,
  useSetHasComparisonInternalDocument,
  useSetIsApiDiffResultLoading,
} from '@apihub/routes/root/ApiDiffResultProvider'
import type { Diff } from '@netcracker/qubership-apihub-api-diff'
import { ChangeSeverityFilters } from '@netcracker/qubership-apihub-ui-shared/components/ChangeSeverityFilters'
import type { ChangesSummary } from '@netcracker/qubership-apihub-ui-shared/entities/change-severities'
import type { FC } from 'react'
import { memo, useEffect, useMemo, useState } from 'react'
import { useComparedDdlContractsPair } from './ComparedDdlContractsContext'
import type { InternalDocumentOptions } from './ComparisonToolbar'

export type ComparisonDdlEntityChangeSeverityFiltersProps = {
  internalDocumentOptions?: InternalDocumentOptions
  ddlEntityChangeSummary?: ChangesSummary
}

export const ComparisonDdlEntityChangeSeverityFilters: FC<ComparisonDdlEntityChangeSeverityFiltersProps> = memo<
  ComparisonDdlEntityChangeSeverityFiltersProps
>((props) => {
  const { internalDocumentOptions, ddlEntityChangeSummary } = props
  const comparisonAlreadyDone = !!internalDocumentOptions

  const {
    previousDdlContract: originDdlContract,
    currentDdlContract: changedDdlContract,
    isLoading: isDdlContractsLoading,
  } = useComparedDdlContractsPair()

  const setApiDiffResultContext = useSetApiDiffResult()
  const isApiDiffResultLoading = useIsApiDiffResultLoading()
  const setIsApiDiffResultLoadingContext = useSetIsApiDiffResultLoading()
  const setHasComparisonInternalDocumentContext = useSetHasComparisonInternalDocument()

  const [changes, setChanges] = useState<ChangesSummary | undefined>(undefined)

  const {
    data: comparisonInternalDocument,
    isLoading: apiDiffLoading,
    hasInternalDocument: hasComparisonInternalDocument,
  } = useComparedDdlContracts({
    previousDdlContract: originDdlContract,
    currentDdlContract: changedDdlContract,
    ddlChanges: internalDocumentOptions?.ddlChanges,
    currentPackageId: internalDocumentOptions?.currentPackageId,
    currentVersionId: internalDocumentOptions?.currentVersionId,
    previousPackageId: internalDocumentOptions?.previousPackageId,
    previousVersionId: internalDocumentOptions?.previousVersionId,
  })

  useEffect(() => {
    if (!comparisonAlreadyDone || !ddlEntityChangeSummary) {
      return
    }
    setChanges(ddlEntityChangeSummary)
  }, [comparisonAlreadyDone, ddlEntityChangeSummary])

  const apiDiffResult = useMemo(() => {
    if (!comparisonAlreadyDone) {
      return undefined
    }

    return { merged: comparisonInternalDocument, diffs: [] as Diff[] }
  }, [comparisonAlreadyDone, comparisonInternalDocument])

  useEffect(() => {
    setIsApiDiffResultLoadingContext(internalDocumentOptions ? apiDiffLoading : false)
  }, [apiDiffLoading, internalDocumentOptions, setIsApiDiffResultLoadingContext])

  useEffect(
    () => {
      if (isDdlContractsLoading || apiDiffLoading) {
        return
      }
      setApiDiffResultContext(apiDiffResult)
      setHasComparisonInternalDocumentContext(hasComparisonInternalDocument)
      if (!comparisonAlreadyDone && ddlEntityChangeSummary) {
        setChanges(ddlEntityChangeSummary)
      }
    },
    [
      apiDiffLoading,
      apiDiffResult,
      comparisonAlreadyDone,
      ddlEntityChangeSummary,
      hasComparisonInternalDocument,
      isDdlContractsLoading,
      setApiDiffResultContext,
      setHasComparisonInternalDocumentContext,
    ],
  )

  if (isDdlContractsLoading || isApiDiffResultLoading) {
    return null
  }

  return (
    <ChangeSeverityFilters
      changes={changes}
      filters={[]}
    />
  )
})

ComparisonDdlEntityChangeSeverityFilters.displayName = 'ComparisonDdlEntityChangeSeverityFilters'
