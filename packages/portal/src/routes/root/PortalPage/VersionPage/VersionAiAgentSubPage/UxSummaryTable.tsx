import { Box, Typography } from '@mui/material'
import type { FC, ReactElement } from 'react'
import { memo, useMemo } from 'react'

const OPERATION_TYPE_SUMMARY_STYLE = {
  display: 'grid',
  mt: 1,
  mr: 15,
  rowGap: 1,
  columnGap: 5,
  gridTemplateColumns: 'repeat(2, max-content)',
}

type TitleCell = string
type ContentCell = ReactElement | null
type GridTemplateRow = [TitleCell, ContentCell]
type GridTemplateAreas = Readonly<Array<GridTemplateRow>>

type TitleCellToTitleMap = Readonly<Record<TitleCell, string>>

type UxSummaryTableProps = Readonly<{
  gridTemplateRows: GridTemplateAreas
  titleCellToTitleMap: TitleCellToTitleMap
}>

const TITLE_CELL_SUFFIX = 'Title'
const CONTENT_CELL_SUFFIX = 'Content'

function emptyContentCellName(rowIndex: number): string {
  return `empty-content-${rowIndex}`
}

function titleCellName(columnTitle: TitleCell): string {
  return `${columnTitle}${TITLE_CELL_SUFFIX}`
}

function contentCellName(columnTitle: TitleCell, contentCell: ContentCell, rowIndex: number): string {
  return contentCell ? `${columnTitle}${CONTENT_CELL_SUFFIX}` : emptyContentCellName(rowIndex)
}

export const UxSummaryTable: FC<UxSummaryTableProps> = memo<UxSummaryTableProps>(props => {
  const { gridTemplateRows, titleCellToTitleMap } = props

  const gridTemplateAreas = useMemo(() => {
    let gridTemplateAreas = ''
    for (let index = 0; index < gridTemplateRows.length; index++) {
      const row = gridTemplateRows[index]
      const [columnTitle, contentCell] = row
      gridTemplateAreas += `'${titleCellName(columnTitle)} ${contentCellName(columnTitle, contentCell, index)}'\n`
    }
    return gridTemplateAreas
  }, [gridTemplateRows])

  if (gridTemplateRows.length === 0) {
    return null
  }

  return (
    <Box
      sx={{
        ...OPERATION_TYPE_SUMMARY_STYLE,
        gridTemplateAreas: gridTemplateAreas,
      }}
    >
      {gridTemplateRows.map((row, index) => {
        const [columnTitle, columnComponent] = row
        const gridArea = `${titleCellName(columnTitle)} ${contentCellName(columnTitle, columnComponent, index)}`
        return (
          <Box key={index} gridArea={gridArea}          >
            <Typography variant="subtitle2">
              {titleCellToTitleMap[columnTitle]}
            </Typography>
            {columnComponent
              ? <Typography variant="body2">
                {columnComponent}
              </Typography>
              : <Box gridArea={emptyContentCellName(index)} />}
          </Box>
        )
      })}
    </Box>
  )
})
