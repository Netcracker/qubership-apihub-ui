import { Box, Typography } from '@mui/material'
import type { FC, ReactElement } from 'react'
import { Fragment, memo, useMemo } from 'react'

type TitleCell = string
type ContentCell = string | number | ReactElement | null
type GridTemplateRow = [TitleCell, ContentCell]
type GridTemplateAreas = Readonly<Array<GridTemplateRow>>

type TitleCellToTitleMap = Readonly<Record<TitleCell, string>>

type UxSummaryTableProps = Readonly<{
  gridTemplateHeaderRow?: GridTemplateRow
  gridTemplateRows: GridTemplateAreas
  titleCellToTitleMap: TitleCellToTitleMap
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

export const UxSummaryTable: FC<UxSummaryTableProps> = memo<UxSummaryTableProps>(props => {
  const { gridTemplateHeaderRow, gridTemplateRows, titleCellToTitleMap } = props

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
