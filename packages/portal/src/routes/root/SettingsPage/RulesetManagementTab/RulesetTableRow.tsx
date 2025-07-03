import { Chip, TableCell, TableRow, Typography } from '@mui/material'
import type { FC } from 'react'
import { memo, useState } from 'react'
import { RulesetActions } from './RulesetActions'
import type { RulesetDto } from '@apihub/entities/api-quality-ruleset'

// Helper function for date formatting
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString()
  // return dateString
}

export interface RulesetTableRowProps {
  ruleset: RulesetDto
}

export const RulesetTableRow: FC<RulesetTableRowProps> = memo(({ ruleset }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (): void => {
    setIsHovered(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }

  // Format the activation history for display
  // Limit to 3 most recent entries for UI cleanliness
  const formattedHistory = ruleset.activationHistory
    .slice(0, 3)
    .map((record) => {
      const start = formatDate(record.activeFrom)
      const end = record.activeTo ? formatDate(record.activeTo) : 'Current'
      return `${start} - ${end}`
    })
    .join(', ')

  return (
    <TableRow
      hover
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid={`RulesetRow-${ruleset.id}`}
    >
      <TableCell>
        <Typography>{ruleset.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2" color="textSecondary">
          {formattedHistory || 'Never activated'}
        </Typography>
      </TableCell>
      <TableCell>
        <Chip
          label={ruleset.status}
          color={ruleset.status === 'active' ? 'success' : 'default'}
          size="small"
        />
      </TableCell>
      <TableCell align="right">
        <RulesetActions
          ruleset={ruleset}
          visible={isHovered}
        />
      </TableCell>
    </TableRow>
  )
})
