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

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import type { FC, MutableRefObject, ReactNode } from 'react'
import { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'

import { isContractTypeSelectorShown } from '@apihub/utils/operation-types'
import { RichFiltersLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayouts/RichFiltersLayout'
import { ListBox } from '@netcracker/qubership-apihub-ui-shared/components/Panels/ListBox'
import type { TestableProps } from '@netcracker/qubership-apihub-ui-shared/components/Testable'
import { PageTitle } from '@netcracker/qubership-apihub-ui-shared/components/Titles/PageTitle'
import { DEFAULT_CONTRACT_TYPE, type ContractType } from '@netcracker/qubership-apihub-ui-shared/entities/contract-types'
import { DASHBOARD_KIND } from '@netcracker/qubership-apihub-ui-shared/entities/packages'
import { SegmentItemIcon } from '@netcracker/qubership-apihub-ui-shared/icons/SegmentItemIcon'
import type { OperationsViewMode } from '@netcracker/qubership-apihub-ui-shared/types/views'
import {
  DETAILED_OPERATIONS_VIEW_MODE,
  LIST_OPERATIONS_VIEW_MODE,
} from '@netcracker/qubership-apihub-ui-shared/types/views'
import { usePackage } from '../../usePackage'
import { useFullMainVersion } from '../FullMainVersionProvider'
import { useSetSelectedPreviewOperation } from '../SelectedPreviewOperationProvider'
import { useCheckOperationFiltersApplied } from './useCheckOperationFiltersApplied'
import { useOperationsView } from './useOperationsView'
import { usePackageVersionContractTypes } from './usePackageVersionContractTypes'
import { useSetPathParam } from './useSetPathParam'

export type VersionContractsProps = {
  title: string
  onContextSearch: (value: string) => void
  bodyRef: MutableRefObject<HTMLDivElement | null>
  table: ReactNode
  list: ReactNode
  filters: ReactNode
  exportButton: ReactNode
  operationsViewMode: OperationsViewMode
  hideFiltersPanel: boolean
  toggleHideFiltersPanel: (value: boolean) => void
  toggleOperationsViewMode: (value: string) => void
} & TestableProps

// High Order Component //
export const VersionContractsPanel: FC<VersionContractsProps> = memo<VersionContractsProps>(({
  title,
  onContextSearch,
  bodyRef,
  table,
  list,
  filters,
  exportButton,
  operationsViewMode,
  toggleOperationsViewMode,
  toggleHideFiltersPanel,
  hideFiltersPanel,
  'data-testid': dataTestId,
}) => {
  const { apiType } = useParams<{ apiType?: ContractType }>()
  const contractType = apiType ?? DEFAULT_CONTRACT_TYPE
  const [packageObject] = usePackage({ showParents: true })
  const setPathParam = useSetPathParam()
  const setPreviewOperation = useSetSelectedPreviewOperation()
  const fullMainVersion = useFullMainVersion()

  const isDashboard = packageObject?.kind === DASHBOARD_KIND
  const showFilterBadge = useCheckOperationFiltersApplied(isDashboard)

  const { allowedContractTypes } = usePackageVersionContractTypes(packageObject?.key ?? '', fullMainVersion!)

  const [operationsView, setOperationsView] = useOperationsView(operationsViewMode)
  const onOperationsViewChange = useCallback((value: OperationsViewMode | undefined) => {
    if (value) {
      setOperationsView(value)
      toggleOperationsViewMode?.(value)
    }
  }, [setOperationsView, toggleOperationsViewMode])

  const onContractTypeChange = useCallback((contractType: ContractType) => {
    setPreviewOperation?.(undefined)
    setPathParam?.(contractType)
  }, [setPathParam, setPreviewOperation])

  return (
    <RichFiltersLayout
      title={
        <PageTitle
          contractType={contractType}
          allowedContractTypes={allowedContractTypes}
          title={title}
          withContractTypeSelector={isContractTypeSelectorShown(allowedContractTypes)}
          onContractTypeChange={onContractTypeChange}
        />
      }
      searchPlaceholder="Search Operations"
      setSearchValue={onContextSearch}
      viewMode={operationsView}
      viewOptions={VIEW_OPTIONS}
      onOperationsViewChange={onOperationsViewChange}
      exportButton={exportButton}
      filtersApplied={showFilterBadge}
      hideFiltersPanel={hideFiltersPanel}
      filters={filters}
      onClickFilterButton={toggleHideFiltersPanel}
      bodyRef={bodyRef}
      body={operationsView === LIST_OPERATIONS_VIEW_MODE
        ? <ListBox>{table}</ListBox>
        : list}
      data-testid={dataTestId}
    />
  )
})

VersionContractsPanel.displayName = 'VersionContractsPanel'

const VIEW_OPTIONS = [{
  icon: <MenuOutlinedIcon fontSize="small" />,
  value: LIST_OPERATIONS_VIEW_MODE,
  tooltip: 'List view',
}, {
  icon: <SegmentItemIcon />,
  value: DETAILED_OPERATIONS_VIEW_MODE,
  tooltip: 'Detailed view',
}]
