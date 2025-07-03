import type { FC } from 'react'
import { memo } from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { RulesetTableRow } from './RulesetTableRow'
import { Placeholder } from '@netcracker/qubership-apihub-ui-shared/components/Placeholder'
import type { RulesetDto } from '@apihub/entities/api-quality-ruleset'

export interface RulesetTableProps {
  rulesets: RulesetDto[]
  isLoading: boolean
}

export const RulesetTable: FC<RulesetTableProps> = memo(({ rulesets, isLoading}) => {
  // Show skeleton loader while loading
  if (isLoading) {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ruleset Name</TableCell>
              <TableCell>Activation History</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: 3 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell colSpan={4}>
                  <Box sx={{ display: 'flex', height: '40px', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', bgcolor: '#f5f5f5', height: '20px' }} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  // Show placeholder when no rulesets
  if (rulesets.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Placeholder
          invisible={false}
          area="content"
          message="No rulesets available"
        />
      </Box>
    )
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2">Ruleset Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2">Activation History</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2">Status</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="subtitle2">Actions</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rulesets.map((ruleset) => (
            <RulesetTableRow
              key={ruleset.id}
              ruleset={ruleset}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})
