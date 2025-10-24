import { Box, Skeleton, Typography } from '@mui/material'
import type { FC, ReactElement } from 'react'
import { Fragment, memo, useMemo } from 'react'

export type TitleCell = string
export type ContentCell = string | number | ReactElement | null
export type GridTemplateRow = [TitleCell, ContentCell]
export type GridTemplateAreas = Readonly<Array<GridTemplateRow>>

type TitleCellToTitleMap = Readonly<Record<TitleCell, string>>

type UxSummaryTableProps = Readonly<{
  gridTemplateHeaderRow?: GridTemplateRow
  gridTemplateRows: GridTemplateAreas
  titleCellToTitleMap: TitleCellToTitleMap
  loading?: boolean
}>

const TITLE_CELL_SUFFIX = 'Title'
const CONTENT_CELL_SUFFIX = 'Content'

function emptyContentCellName(rowIndex: number | null = null): string {
  return rowIndex !== null ? `empty-content-${rowIndex}` : 'empty-content'
}

function titleCellName(columnTitle: TitleCell): string {
  return `${columnTitle}${TITLE_CELL_SUFFIX}`
}

function contentCellName(columnTitle: TitleCell, contentCell: ContentCell, rowIndex: number | null = null): string {
  return contentCell ? `${columnTitle}${CONTENT_CELL_SUFFIX}` : emptyContentCellName(rowIndex)
}

type UxSummaryTableSkeletonProps = Readonly<{
  headerTitle?: string
  numberOfRows?: number
}>

const UxSummaryTableSkeleton: FC<UxSummaryTableSkeletonProps> = memo(props => {
  const { headerTitle, numberOfRows = 3 } = props
  return (
    <Box
      display='grid'
      rowGap={1}
      columnGap={5}
      gridTemplateAreas={`
        ${headerTitle ? '\'title0 content0\'' : ''}
        'title1 content1'
        'title2 content2'
        'title3 content3'
      `}
      gridTemplateColumns='repeat(2, max-content)'
    >
      {headerTitle && (
        <>
          <Typography gridArea='title0' sx={{ fontSize: 15, fontWeight: 'bold' }}>
            {headerTitle}
          </Typography>
          <Box gridArea={emptyContentCellName(0)} />
        </>
      )}
      {Array(numberOfRows).fill(null).map((_, index) => (
        <Fragment key={index}>
          <Skeleton sx={{ gridArea: `title${index + 1}` }} width={100} height={20} />
          <Skeleton sx={{ gridArea: `content${index + 1}` }} width={200} height={20} />
        </Fragment>
      ))}
    </Box>
  )
})

export const UxSummaryTable: FC<UxSummaryTableProps> = memo<UxSummaryTableProps>(props => {
  const { gridTemplateHeaderRow, gridTemplateRows, titleCellToTitleMap, loading } = props

  const gridTemplateJointRows = useMemo(() => (
    gridTemplateHeaderRow
      ? [gridTemplateHeaderRow, ...gridTemplateRows]
      : gridTemplateRows
  ), [gridTemplateHeaderRow, gridTemplateRows])

  const gridTemplateAreas = useMemo(() => {
    let gridTemplateAreas = ''
    for (let index = 0; index < gridTemplateJointRows.length; index++) {
      const row = gridTemplateJointRows[index]
      const [columnTitle, contentCell] = row
      gridTemplateAreas += `'${titleCellName(columnTitle)} ${contentCellName(columnTitle, contentCell, index)}'\n`
    }
    return gridTemplateAreas
  }, [gridTemplateJointRows])

  if (loading) {
    const headerTitle = gridTemplateHeaderRow?.[0] ? titleCellToTitleMap[gridTemplateHeaderRow[0]] : undefined
    return <UxSummaryTableSkeleton headerTitle={headerTitle} />
  }

  if (gridTemplateRows.length === 0) {
    return null
  }

  return (
    <Box
      display='grid'
      rowGap={1}
      columnGap={5}
      gridTemplateAreas={gridTemplateAreas}
      gridTemplateColumns='repeat(2, max-content)'
    >
      {gridTemplateJointRows.map((row, index) => {
        const [columnTitle, columnComponent] = row
        const titleGridArea = titleCellName(columnTitle)
        const contentGridArea = contentCellName(columnTitle, columnComponent, index)
        const isHeader = index === 0 && gridTemplateHeaderRow && row === gridTemplateHeaderRow
        return (
          <Fragment key={index}>
            <Typography
              gridArea={titleGridArea}
              variant={isHeader ? undefined : 'subtitle2'}
              sx={isHeader ? { fontSize: 15, fontWeight: 'bold' } : undefined}
            >
              {titleCellToTitleMap[columnTitle]}
            </Typography>
            <Box gridArea={columnComponent ? contentGridArea : emptyContentCellName(index)}>
              {isReactElement(columnComponent)
                ? columnComponent
                : <Typography variant="body2">{columnComponent}</Typography>}
            </Box>
          </Fragment>
        )
      })}
    </Box>
  )
})

function isReactElement(component: ContentCell): component is ReactElement {
  return typeof component === 'object' && component !== null && 'type' in component
}
