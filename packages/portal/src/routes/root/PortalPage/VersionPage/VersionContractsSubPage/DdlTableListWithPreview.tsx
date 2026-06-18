import type { ResizeCallback } from 're-resizable'
import type { FC } from 'react'
import { memo, useCallback, useMemo } from 'react'

import { DdlTableTitleWithMeta } from '@netcracker/qubership-apihub-ui-shared/components/Ddl/DdlTableTitleWithMeta'
import type { FetchNextMetaList } from '@netcracker/qubership-apihub-ui-shared/components/MetaClickableListWithPreview'
import { MetaClickableListWithPreview } from '@netcracker/qubership-apihub-ui-shared/components/MetaClickableListWithPreview'
import { NAVIGATION_PLACEHOLDER_AREA, Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import type { DdlTableContract } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import { DDL_TABLES_EMPTY_MESSAGE } from '@netcracker/qubership-apihub-ui-shared/entities/contracts-ddl'
import type { Key } from '@netcracker/qubership-apihub-ui-shared/entities/keys'

import { useSelectedPreviewOperation, useSetSelectedPreviewOperation } from '../../SelectedPreviewOperationProvider'
import { useDdlTableDetails } from '../api/useDdlTableDetails'
import { useContractBrowseLinkHandlers } from '../useContractBrowseLinkHandlers'
import { getDdlTableLink } from '../useNavigateToOperation'
import { DdlTablePreview } from './DdlTablePreview'

export type DdlTableListWithPreviewProps = {
  tables: ReadonlyArray<DdlTableContract>
  fetchNextPage?: FetchNextMetaList
  isNextPageFetching?: boolean
  hasNextPage?: boolean
  isListLoading: boolean
  packageKey: Key
  versionKey: Key
  initialSize: number
  handleResize: ResizeCallback
  maxPreviewWidth: number
}

export const DdlTableListWithPreview: FC<DdlTableListWithPreviewProps> = memo<DdlTableListWithPreviewProps>((props) => {
  const {
    packageKey,
    versionKey,
    tables,
    isListLoading,
    fetchNextPage,
    isNextPageFetching,
    hasNextPage,
    initialSize,
    handleResize,
    maxPreviewWidth,
  } = props

  const selectedPreviewOperation = useSelectedPreviewOperation()
  const setSelectedPreviewOperation = useSetSelectedPreviewOperation()

  const selectedTable = useMemo(
    () => tables.find(table => table.tableId === selectedPreviewOperation?.operationKey),
    [tables, selectedPreviewOperation?.operationKey],
  )

  const { data: tableDetails, isInitialLoading } = useDdlTableDetails({
    packageKey: packageKey,
    versionKey: versionKey,
    tableId: selectedTable?.tableId,
    enabled: !!selectedTable?.tableId,
  })

  const onRowClick = useCallback((tableId: Key) => {
    setSelectedPreviewOperation({ operationKey: tableId })
  }, [setSelectedPreviewOperation])

  const prepareLinkFn = useCallback((table: DdlTableContract) =>
    getDdlTableLink({
      packageKey: packageKey,
      versionKey: versionKey,
      tableId: table.tableId,
    }), [packageKey, versionKey])

  const onClickLink = useContractBrowseLinkHandlers()

  const renderTitle = useCallback(
    (table: DdlTableContract, link?: Parameters<typeof DdlTableTitleWithMeta>[0]['link']) => (
      <DdlTableTitleWithMeta
        table={table}
        link={link}
        onLinkClick={onClickLink}
      />
    ),
    [onClickLink],
  )

  const emptyListPlaceholder = useMemo(() => (
    <Placeholder
      invisible={false}
      area={NAVIGATION_PLACEHOLDER_AREA}
      message={DDL_TABLES_EMPTY_MESSAGE}
      data-testid="NoItemsPlaceholder"
    />
  ), [])

  return (
    <MetaClickableListWithPreview
      items={tables}
      getItemKey={table => table.tableId}
      renderTitle={renderTitle}
      prepareLinkFn={prepareLinkFn}
      onRowClick={onRowClick}
      fetchNextPage={fetchNextPage}
      isNextPageFetching={isNextPageFetching}
      hasNextPage={hasNextPage}
      isLoading={isListLoading}
      selectedItemKey={selectedPreviewOperation?.operationKey}
      initialSize={initialSize}
      handleResize={handleResize}
      maxWidth={maxPreviewWidth}
      emptyListPlaceholder={emptyListPlaceholder}
      previewComponent={
        <DdlTablePreview
          table={selectedTable}
          tableDetails={tableDetails}
          isLoading={isInitialLoading}
          maxWidthHeaderToolbar={initialSize}
        />
      }
    />
  )
})

DdlTableListWithPreview.displayName = 'DdlTableListWithPreview'
