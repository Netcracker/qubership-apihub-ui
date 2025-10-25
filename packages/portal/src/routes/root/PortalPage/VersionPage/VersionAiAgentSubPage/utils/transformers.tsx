import { Typography } from '@mui/material'
import type { GridTemplateRow } from '../UxSummaryTable'
import type { DocumentScoring } from '../types/document-scoring'
import type { AiIssue } from '../types/issues'

// Section "OriginalScoring" or "Enhanced Scoring"

export function transformScoringToGridTemplateRows(scoring: DocumentScoring | undefined): GridTemplateRow[] {
  if (!scoring) {
    return []
  }

  const rows: GridTemplateRow[] = []

  const { overallScore, details } = scoring
  rows.push([
    'overallScore',
    <Typography
      variant='body2'
      sx={{
        fontWeight: 'bold',
        color: overallScore.includes('Great')
          ? 'success.main'
          : 'error.main',
      }}
    >{overallScore}</Typography>,
  ])

  for (const scoringParameterDetails of details) {
    rows.push([scoringParameterDetails.name, scoringParameterDetails.value])
  }

  return rows
}

// Section "Enhancements"

export function transformAiDocumentIssuesToGridTemplateRows(aiDocumentIssues: AiIssue[]): GridTemplateRow[] {
  const countByCategory: Map<string, number> = new Map()
  for (const issue of aiDocumentIssues) {
    const { category } = issue
    if (!countByCategory.has(category)) {
      countByCategory.set(category, 0)
    }
    countByCategory.set(category, countByCategory.get(category)! + 1)
  }

  return transformEnhancementsToGridTemplateRows(countByCategory)
}

function transformEnhancementsToGridTemplateRows(enhancements: Map<string, number>): GridTemplateRow[] {
  if (!enhancements.size) {
    return []
  }

  const rows: GridTemplateRow[] = []

  for (const [issueCategory, issuesCount] of enhancements) {
    rows.push([
      issueCategory,
      <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
        {issuesCount} issue(s)
      </Typography>,
    ])
  }

  return rows
}
